#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API观察者 · 收录雷达国内节点探测（中国大陆网络 vantage）

为什么需要它：
  线上 radar_probe.js 由境外服务器探测生成，对国内中转站的 TTFB 系统性偏高
  （实测同一站点：国内 0.9-1.7s vs 境外数据 2.6-5.8s），作为用户决策数据是错的。
  用户都是国内网络环境，探测必须代表国内访问体验。

口径：
  - homepage TTFB：3 次取中位数（跟随跳转，收到响应头即停，不含正文下载）
  - api 探测：GET {origin}/v1/models —— 200/401/403 记为「OpenAI 兼容端点存在」，
    这是用户「改 base_url 即用」的硬指标（调研 TOP7），404/0 记为未发现
  - 8 线程并发，对单站礼貌间隔由中位值统计天然平滑

输出：
  03_prototype/radar_probe.js   （RADAR_PROBE，前端直接读取）
  02_data/samples/radar_uptime.jsonl   （原始样本追加）
  探测完成后自动 git commit + push（api-radar-mvp 仓库）

用法：
  python backend/scripts/radar_probe_cn.py            # 全量 454 家
  python backend/scripts/radar_probe_cn.py --limit 40 #  smoke test
"""
import argparse
import json
import re
import statistics
import subprocess
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone, timedelta
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
RADAR_JS = REPO / "03_prototype" / "radar_sites.js"
RADAR_OUT = REPO / "03_prototype" / "radar_probe.js"
SAMPLES = REPO / "02_data" / "samples" / "radar_uptime.jsonl"

UA = ("Mozilla/5.0 (Windows NT 10.0; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")
WORKERS = 8
TRIES = 3

import requests


def load_radar_sites():
    text = RADAR_JS.read_text(encoding="utf-8")
    m = re.search(r"RADAR_SITES\s*=\s*(\[.*\])\s*;?\s*$", text, re.S)
    if not m:
        m = re.search(r"RADAR_SITES\s*=\s*(\[[\s\S]*\])", text)
    return json.loads(m.group(1))


def ttfb_once(url, timeout=(4, 8)):
    """单次 TTFB（跟随跳转，响应头到达即停）"""
    t0 = time.time()
    try:
        r = requests.get(url, timeout=timeout, headers={"User-Agent": UA},
                         allow_redirects=True, stream=True, verify=False)
        ms = int((time.time() - t0) * 1000)
        r.close()
        return r.status_code, ms
    except Exception:
        return 0, int((time.time() - t0) * 1000)


def probe_site(site):
    url = (site.get("url") or "").strip().rstrip("/")
    if not url:
        return None
    key = re.sub(r"^https?://", "", url).lower().rstrip("/")
    lat = []
    status = 0
    for _ in range(TRIES):
        st, ms = ttfb_once(url)
        lat.append(ms)
        if st:
            status = st
        time.sleep(0.2)
    home_latency = int(statistics.median(lat))

    # API 端点探测：OpenAI 兼容 /v1/models
    api_url = url + "/v1/models"
    api_status, api_latency = ttfb_once(api_url, timeout=(4, 8))

    return key, {
        "status": status,
        "latency_ms": home_latency,
        "api_status": api_status,
        "api_latency_ms": api_latency,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    sites = load_radar_sites()
    if args.limit:
        sites = sites[: args.limit]
    now = datetime.now(timezone(timedelta(hours=8))).isoformat(timespec="seconds")
    print(f"[cn-probe] {now} 开始探测 {len(sites)} 家（{WORKERS} 线程 × {TRIES} 次取中位）")

    checked = {}
    done = 0
    with ThreadPoolExecutor(max_workers=WORKERS) as ex:
        for res in ex.map(probe_site, sites):
            done += 1
            if res:
                key, val = res
                val["checked_at"] = now
                checked[key] = val
            if done % 50 == 0:
                print(f"[cn-probe] {done}/{len(sites)}")

    alive = sum(1 for v in checked.values()
                if v["status"] and (200 <= v["status"] < 400 or v["status"] in (401, 403)))
    api_ok = sum(1 for v in checked.values() if v["api_status"] in (200, 401, 403))
    lats = sorted(v["latency_ms"] for v in checked.values())
    med = lats[len(lats) // 2] if lats else 0
    print(f"[cn-probe] 完成：官网存活 {alive}/{len(checked)} · "
          f"API端点存在 {api_ok} · TTFB 中位 {med}ms")

    out = ("// 自动生成：backend/scripts/radar_probe_cn.py（中国大陆节点 · TTFB为3次中位数）\n"
           "// 境外节点探测已停用（02_data/samples/probe_cn.lock），数值代表国内访问体验\n"
           "var RADAR_PROBE = " + json.dumps({
               "generated_at": now,
               "vantage": "cn-mainland",
               "total_direct": len(sites),
               "checked_today": len(checked),
               "cursor_end": len(checked),
               "checked": checked,
           }, ensure_ascii=False, indent=1) + ";\n")
    if args.limit:
        # 试跑：不覆盖线上数据、不提交
        test_out = REPO / "03_prototype" / "radar_probe.test.js"
        test_out.write_text(out, encoding="utf-8")
        print(f"[cn-probe] 试跑完成，结果写入 {test_out.name}（未提交）")
        return
    RADAR_OUT.write_text(out, encoding="utf-8")

    SAMPLES.parent.mkdir(parents=True, exist_ok=True)
    with SAMPLES.open("a", encoding="utf-8") as f:
        for k, v in checked.items():
            f.write(json.dumps({"ts": now, "url": k, "status": v["status"],
                                "latency_ms": v["latency_ms"]}, ensure_ascii=False) + "\n")

    # 截断样本文件（保留最近 8000 行）
    if SAMPLES.exists():
        lines = SAMPLES.read_text(encoding="utf-8").splitlines()
        if len(lines) > 8000:
            SAMPLES.write_text("\n".join(lines[-8000:]) + "\n", encoding="utf-8")

    # 提交并推送
    def git(*gargs):
        return subprocess.run(["git", *gargs], cwd=REPO, capture_output=True,
                              text=True, encoding="utf-8")
    git("add", "03_prototype/radar_probe.js", "02_data/samples/radar_uptime.jsonl",
        "02_data/samples/probe_cn.lock")
    diff = git("diff", "--cached", "--stat")
    if not diff.stdout.strip():
        print("[cn-probe] 无变化，跳过提交")
        return
    git("-c", "user.name=cn-probe", "-c", "user.email=cn-probe@local",
        "commit", "-m", f"data: 国内节点雷达探测 {now[:16]} — 存活{alive}/{len(checked)} API端点{api_ok} TTFB中位{med}ms")
    p = git("push", "origin", "HEAD:main")
    print("[cn-probe] push:", p.stdout.strip() or p.stderr.strip()[:200])


if __name__ == "__main__":
    requests.packages.urllib3.disable_warnings()
    sys.exit(main())
