#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API优选咨询 · AI 数据维护管线 (MiniMax M3)

流程（每次运行）：
  1. 读取 03_prototype/data.js 中的 providers（40 家中转站）
  2. 探测每家官网：HTTP 状态 / 延迟 / 页面标题 / meta 描述 → 追加到 02_data/samples/uptime.jsonl（服务器样本）
  3. 调用 MiniMax M3：基于登记数据 + 实测页面信息，复核数据一致性、整理网站特点与优点 → 严格 JSON
  4. 输出 03_prototype/ai_insights.js（前端 window.API_RADAR_AI 读取）

API Key 读取顺序：环境变量 MINIMAX_API_KEY > 仓库根目录 .env.ai > backend/scripts/.env
Key 绝不写入 git（.gitignore 已排除 .env*）。

用法：
  python backend/scripts/ai_maintain.py              # 全流程
  python backend/scripts/ai_maintain.py --probe-only # 只探测不调用 AI（省钱自检）
  python backend/scripts/ai_maintain.py --limit 5    # 只处理前 5 家（调试）
"""
import argparse
import json
import os
import re
import sys
import time
import datetime
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
DATA_JS = REPO / "03_prototype" / "data.js"
OUT_JS = REPO / "03_prototype" / "ai_insights.js"
SAMPLES = REPO / "02_data" / "samples" / "uptime.jsonl"
LOG = REPO / "02_data" / "samples" / "last_run.json"

API_URL = "https://api.minimaxi.com/v1/chat/completions"
MODEL = "MiniMax-M3"
PROBE_TIMEOUT = 10
SAMPLE_CAP = 6000          # uptime.jsonl 最大行数（超出截断保留最新）
MAX_INSIGHT_AGE_DAYS = 3   # AI 画像在该天数内不重复调用（省 token）

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0 Safari/537.36")


def load_key():
    if os.environ.get("MINIMAX_API_KEY"):
        return os.environ["MINIMAX_API_KEY"].strip()
    for p in (REPO / ".env.ai", REPO / "backend" / "scripts" / ".env"):
        if p.exists():
            for line in p.read_text(encoding="utf-8").splitlines():
                if line.strip().startswith("MINIMAX_API_KEY"):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    return None


def load_data():
    text = DATA_JS.read_text(encoding="utf-8")
    m = re.match(r"\s*var\s+\w+\s*=\s*", text)
    payload = text[m.end():] if m else text
    payload = re.sub(r";\s*$", "", payload.strip())
    return json.loads(payload)


def facts_of(provider, offerings):
    """确定性事实：最低价 + 模型覆盖（不让 AI 编数字）"""
    mine = [o for o in offerings if o.get("provider_id") == provider["id"]]
    fact = {"model_count": len(mine), "model_names": []}
    if mine:
        fact["model_names"] = [o.get("model_id", "") for o in mine[:5]]
        cheap = min(mine, key=lambda o: (o.get("input_usd_m", 9e9) + o.get("output_usd_m", 9e9)))
        fact["price_model"] = cheap.get("model_id", "")
        fact["price_in"] = cheap.get("input_usd_m")
        fact["price_out"] = cheap.get("output_usd_m")
    return fact


def probe(url):
    """返回 {status, latency_ms, title, meta, error}"""
    import requests
    t0 = time.time()
    try:
        r = requests.get(url, timeout=(4, 7), headers={"User-Agent": UA},
                         allow_redirects=True, verify=True)
        latency = int((time.time() - t0) * 1000)
        html = r.text[:60000]
        title = ""
        mt = re.search(r"<title[^>]*>(.*?)</title>", html, re.S | re.I)
        if mt:
            title = re.sub(r"\s+", " ", mt.group(1)).strip()[:120]
        meta = ""
        mm = re.search(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']',
                       html, re.S | re.I)
        if not mm:
            mm = re.search(r'<meta[^>]+content=["\'](.*?)["\'][^>]+name=["\']description["\']',
                           html, re.S | re.I)
        if mm:
            meta = re.sub(r"\s+", " ", mm.group(1)).strip()[:200]
        return {"status": r.status_code, "latency_ms": latency,
                "final_url": r.url[:200], "title": title, "meta": meta, "error": ""}
    except Exception as e:
        latency = int((time.time() - t0) * 1000)
        return {"status": 0, "latency_ms": latency, "final_url": "", "title": "",
                "meta": "", "error": type(e).__name__ + ": " + str(e)[:120]}


def strip_think(text):
    return re.sub(r"<think>.*?</think>", "", text, flags=re.S).strip()


def extract_json(text):
    text = strip_think(text)
    m = re.search(r"\{.*\}", text, re.S)
    if not m:
        raise ValueError("no JSON in response")
    raw = m.group(0)
    try:
        return json.loads(raw)
    except json.JSONDecodeError:
        # 常见修复：去掉尾逗号、智能引号、注释式说明
        fixed = re.sub(r",\s*([}\]])", r"\1", raw)
        fixed = fixed.replace("“", '"').replace("”", '"').replace("’", "'")
        return json.loads(fixed)


def ai_insight(provider, probe_result, key):
    """调用 MiniMax M3，返回结构化画像 dict 或 None"""
    p = provider
    live = ""
    if probe_result.get("title"):
        live = f"\n实测官网页面：HTTP {probe_result['status']}，标题《{probe_result['title']}》，描述：{probe_result.get('meta') or '（无）'}"
    prompt = f"""你是 API 中转站评测编辑。下面是「{p.get('name_zh') or p.get('name')}」在我们站点的登记数据：
- 类型：{p.get('type')} / 区域：{p.get('region')}
- 登记说明：{p.get('notes') or '无'}
- 标签：{'、'.join(p.get('tags') or []) or '无'}
- 支持协议：{'、'.join(p.get('api_protocol') or []) or '未知'}
- 支付币种：{'、'.join(p.get('payment_currency') or []) or '未知'}
- SLA：{p.get('sla_uptime') or '未知'}% / 评分：{p.get('rating') or '无'}（{p.get('review_count') or 0} 条口碑）
{live}

任务（只输出 JSON，不要输出任何其他内容）：
1. features：该网站的 3 个核心特点，每条不超过 20 字，基于登记数据与实测页面信息，客观、具体，不夸大
2. highlights：一句话总结它最突出的优点（不超过 40 字），适合放在卡片上
3. suitable_for：2-3 个适合使用的场景/人群（每项不超过 12 字）
4. data_check：复核登记数据与实测信息——consistent（true/false，页面信息与登记信息是否有明显矛盾）、issues（如有矛盾列出具体问题，每项不超过 30 字；无则空数组）

输出格式：{{"features": [...], "highlights": "...", "suitable_for": [...], "data_check": {{"consistent": true, "issues": []}}}}"""

    import requests
    last_err = None
    for attempt in (1, 2):
        suffix = "" if attempt == 1 else "\n\n上次输出无法解析。再次强调：只输出一个 JSON 对象，不要 markdown 代码块，不要任何解释。"
        try:
            r = requests.post(API_URL,
                              headers={"Content-Type": "application/json",
                                       "Authorization": "Bearer " + key},
                              json={"model": MODEL,
                                    "messages": [{"role": "user", "content": prompt + suffix}],
                                    "max_tokens": 900,
                                    "temperature": 0.2},
                              timeout=90)
            r.raise_for_status()
            content = r.json()["choices"][0]["message"]["content"]
            return extract_json(content)
        except Exception as e:
            last_err = e
    raise last_err


def append_sample(rows):
    SAMPLES.parent.mkdir(parents=True, exist_ok=True)
    with SAMPLES.open("a", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
    # 截断到最新 N 行
    lines = SAMPLES.read_text(encoding="utf-8").splitlines()
    if len(lines) > SAMPLE_CAP:
        SAMPLES.write_text("\n".join(lines[-SAMPLE_CAP:]) + "\n", encoding="utf-8")


def write_insights(generated_at, insights):
    body = json.dumps({"generated_at": generated_at, "providers": insights},
                      ensure_ascii=False, indent=1)
    header = ("// 自动生成：backend/scripts/ai_maintain.py（MiniMax M3）\n"
              "// 每日两次更新，请勿手改。\n")
    OUT_JS.write_text(header + "var API_RADAR_AI = " + body + ";\n", encoding="utf-8")
    write_probe_stats(generated_at)
    # 每次生成换 URL 版本号，绕过浏览器/Cloudflare 缓存拿到最新数据
    try:
        stamp = "ai" + datetime.datetime.now().strftime("%Y%m%d%H")
        for html in (REPO / "03_prototype" / "provider.html",
                     REPO / "03_prototype" / "providers.html",
                     REPO / "03_prototype" / "index.html",
                     REPO / "03_prototype" / "pick.html"):
            txt = html.read_text(encoding="utf-8")
            txt2 = re.sub(r"(ai_insights|probe_stats)\.js\?v=[^\"']+",
                          lambda m: m.group(1) + ".js?v=" + stamp, txt)
            if txt2 != txt:
                html.write_text(txt2, encoding="utf-8")
    except Exception as e:
        print("  ⚠ 版本号更新失败（不影响数据）：", e)


# 探测可达口径：2xx/3xx=正常，401/403=存活(反爬拦截)，5xx/0=异常
ALIVE_STATUSES = tuple(list(range(200, 400)) + [401, 403])


def write_probe_stats(generated_at):
    """从 uptime.jsonl 计算每家真实探测统计 → probe_stats.js（前端唯一可信实测数据源）"""
    stats = {}
    if SAMPLES.exists():
        for line in SAMPLES.read_text(encoding="utf-8").splitlines():
            try:
                row = json.loads(line)
            except json.JSONDecodeError:
                continue
            pid = row.get("id")
            if not pid:
                continue
            s = stats.setdefault(pid, {"probes": 0, "alive": 0, "latency_sum": 0,
                                       "last_status": 0, "last_latency_ms": 0,
                                       "last_check_at": ""})
            s["probes"] += 1
            if row.get("status") in ALIVE_STATUSES:
                s["alive"] += 1
            s["latency_sum"] += row.get("latency_ms", 0)
            if row.get("ts", "") >= s["last_check_at"]:
                s["last_check_at"] = row.get("ts", "")
                s["last_status"] = row.get("status", 0)
                s["last_latency_ms"] = row.get("latency_ms", 0)
    for pid, s in stats.items():
        s["survival"] = round(s["alive"] / s["probes"] * 100, 1) if s["probes"] else None
        s["latency_avg_ms"] = round(s["latency_sum"] / s["probes"]) if s["probes"] else 0
        del s["latency_sum"]
    body = json.dumps({"generated_at": generated_at, "stats": stats},
                      ensure_ascii=False, indent=1)
    header = ("// 自动生成：backend/scripts/ai_maintain.py\n"
              "// 来源：02_data/samples/uptime.jsonl 真实 HTTP 探测，请勿手改。\n"
              "// survival 口径：2xx/3xx/401/403 计为存活。\n")
    (REPO / "03_prototype" / "probe_stats.js").write_text(
        header + "var PROBE_STATS = " + body + ";\n", encoding="utf-8")
    print(f"  📊 probe_stats.js：{len(stats)} 家有真实探测数据")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--probe-only", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--offset", type=int, default=0, help="跳过前 N 家（分批跑用）")
    args = ap.parse_args()

    data = load_data()
    providers = data["providers"]
    offerings = data.get("offerings", [])
    if args.offset:
        providers = providers[args.offset:]
    if args.limit:
        providers = providers[:args.limit]
    print(f"[1/3] 载入 {len(providers)} 家中转站（offset={args.offset}）")

    # ---- 2. 探测 ------------------------------------------------------------
    now = datetime.datetime.now().isoformat(timespec="seconds")
    samples, probes = [], {}
    for i, p in enumerate(providers, 1):
        url = (p.get("website") or "").strip()
        pid = p["id"]
        if not url:
            probes[pid] = {"status": -1, "latency_ms": 0, "error": "no website"}
        else:
            probes[pid] = probe(url)
        pr = probes[pid]
        samples.append({"ts": now, "id": pid, "status": pr.get("status", 0),
                        "latency_ms": pr.get("latency_ms", 0),
                        "title": pr.get("title", "")[:80]})
        flag = "✓" if 200 <= pr.get("status", 0) < 400 else ("∅" if pr.get("status") == -1 else "✗")
        print(f"  [{i:02d}/{len(providers)}] {flag} {p.get('name_zh') or p.get('name')}: "
              f"{pr.get('status', 0)} {pr.get('latency_ms', 0)}ms")
    append_sample(samples)
    print(f"[2/3] 探测样本已写入 {SAMPLES.relative_to(REPO)}")
    write_probe_stats(now)

    if args.probe_only:
        return

    # ---- 3. AI 整理 ----------------------------------------------------------
    key = load_key()
    if not key:
        sys.exit("❌ 未找到 MINIMAX_API_KEY（环境变量 / .env.ai / backend/scripts/.env）")

    old = {}
    if OUT_JS.exists():
        m = re.search(r"var API_RADAR_AI = (\{.*\});?\s*$",
                      OUT_JS.read_text(encoding="utf-8"), re.S)
        if m:
            try:
                old = json.loads(m.group(1)).get("providers", {})
            except Exception:
                old = {}

    insights, ok_cnt, fail_cnt, skip_cnt = dict(old), 0, 0, 0
    for i, p in enumerate(providers, 1):
        pid = p["id"]
        facts = facts_of(p, offerings)
        prev = old.get(pid) or {}
        prev_ts = prev.get("generated_at", "")
        if prev_ts:
            try:
                age = (datetime.datetime.now()
                       - datetime.datetime.fromisoformat(prev_ts)).days
            except ValueError:
                age = 99
            if age < MAX_INSIGHT_AGE_DAYS and prev.get("ai"):
                insights[pid] = {**prev, "facts": facts, "probe": probes[pid],
                                 "generated_at": now}
                skip_cnt += 1
                continue
        try:
            ai = ai_insight(p, probes[pid], key)
            insights[pid] = {"ai": ai, "facts": facts, "probe": probes[pid],
                             "generated_at": now}
            ok_cnt += 1
            print(f"  [{i:02d}/{len(providers)}] 🤖 {p.get('name_zh') or p.get('name')} ✓")
            write_insights(now, insights)  # 逐家落盘，超时/中断不丢进度
        except Exception as e:
            fail_cnt += 1
            insights[pid] = {**prev, "facts": facts, "probe": probes[pid],
                             "generated_at": now, "ai_error": str(e)[:120]}
            print(f"  [{i:02d}/{len(providers)}] ⚠ {p.get('name_zh') or p.get('name')} AI失败: {e}")
        time.sleep(0.5)

    write_insights(now, insights)
    LOG.write_text(json.dumps({"ran_at": now, "total": len(providers),
                               "ai_ok": ok_cnt, "ai_skip": skip_cnt,
                               "ai_fail": fail_cnt}, ensure_ascii=False, indent=1),
                   encoding="utf-8")
    print(f"[3/3] 完成：AI 成功 {ok_cnt}，复用 {skip_cnt}，失败 {fail_cnt} → {OUT_JS.relative_to(REPO)}")
    if fail_cnt:
        sys.exit(2)


if __name__ == "__main__":
    main()
