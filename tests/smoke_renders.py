#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API Radar MVP — 跨页面数据填充 Smoke Test
=============================================

目标
----
纯诊断（不修复）。对 `03_prototype/` 下每个 HTML 页面跑两阶段检查：

  阶段 1 · HTTP 拉取     — Python + requests 拉页面，看是否 200、是否被重定向。
  阶段 2 · 元素填充校验   — 对照 EXPECTED 字典判断 page-specific 元素是否"出现/被注入"：
                            (a) 静态 HTML 里直接存在的 <div id="...">        → GET 200 + 命中
                            (b) JS 模板字符串里会写入的 `$(...).innerHTML`   → app.js/featured.js/ab.js/ads.js/probes.js 里出现模板
                            (c) 数据驱动的容器（kpi-wall/model-grid/featured-grid/...） ← 静态占位为 <div id="x"></div> 类型，200 + 命中即视为就绪

报告输出
--------
  tests/render_report.md
    - 一张总状态表（page / GET状态 / 重定向链 / 静态200 / 元素填充 / 验证 OK / 缺失元素）
    - 缺失明细段：哪个页面、哪些目标元素没被任何机制（HUB/JS 模板）写出

不依赖
------
  - requests（已在 tests/requirements 链路中检测）
  - 一个内嵌的 Python http.server（只在脚本内临时启用，跑完即关）

运行
----
  cd API-Radar-MVP
  python tests/smoke_renders.py
"""

from __future__ import annotations

import json
import os
import re
import socket
import sys
import threading
import time
from dataclasses import dataclass, field
from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from typing import Any

try:
    import requests  # type: ignore
except ImportError:  # pragma: no cover
    print("需要 requests。安装： pip install requests", file=sys.stderr)
    raise

# ---------------------------------------------------------------------------
# 路径 & 服务
# ---------------------------------------------------------------------------
ROOT = Path(__file__).resolve().parent.parent          # API-Radar-MVP/
PROTO = ROOT / "03_prototype"
DATA_FILE = ROOT / "02_data" / "non_compliant_providers.json"
REPORT_PATH = Path(__file__).resolve().parent / "render_report.md"


def _pick_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        return s.getsockname()[1]


class _SilentHandler(SimpleHTTPRequestHandler):
    def log_message(self, *a, **kw):  # noqa: ANN002, ANN003
        return  # 关掉 GET log


def start_server() -> tuple[HTTPServer, int]:
    port = _pick_free_port()
    handler = lambda *a, **kw: _SilentHandler(*a, directory=str(PROTO), **kw)
    srv = HTTPServer(("127.0.0.1", port), handler)
    t = threading.Thread(target=srv.serve_forever, daemon=True)
    t.start()
    time.sleep(0.2)  # 等监听
    return srv, port


# ---------------------------------------------------------------------------
# 静态分析：扫 HTML & JS 文件
# ---------------------------------------------------------------------------
HTML_FILES = [
    "index.html",
    "models.html",
    "model.html",
    "providers.html",
    "provider.html",
    "compare.html",
    "events.html",
    "playground.html",
    "business.html",
    "watch.html",
    "method.html",
    "test.html",
    "admin.html",
    "gray_market.html",
]

JS_FILES = [
    "data.js",
    "app.js",
    "featured.js",
    "ab.js",
    "ads.js",
    "probes.js",
    "non_compliant_data.js",
]


def _read(rel: str) -> str:
    p = PROTO / rel
    if not p.exists():
        return ""
    return p.read_text(encoding="utf-8", errors="ignore")


# (page, [expected_element_or_token, ...])
# 每条 = 元素 ID 字符串或 JS 模板里出现的标识符。
# "mechanism" 决定如何在 JS 文件里找"动态注入"证据。
EXPECTED: list[tuple[str, list[str]]] = [
    (
        "index.html",
        [
            # 静态/动态混合
            "featured-grid",         # <div id> + innerHTML
            "bestfor-grid",
            "kpi-availability",
            "kpi-checks",
            "kpi-vendors",
            "kpi-fields",
            "kpi-online",
            "kpi-weekly",
            "iq-grid",
            "iq-tail",
            "picks-grid",
            "perks-grid",
            "rank-table-body",
            "rank-table-count",
            "timeline-list",
            "hero-updated-at",       # <div id="hero-updated-at"> 静态存在
            "hero-tagline-text",
            "topbar",
            # 来自需求但实际不存在 → 应报 missing
            "hero-kpi-num",          # 缺
            "model-grid",            # 缺 (index.html 没这个)
        ],
    ),
    (
        "models.html",
        [
            "model-grid",
            "kpi-total-models",
            "kpi-total-skus",
            "kpi-new-models",
            "kpi-total-vendors",
            "model-count-tag",
            "topbar",
            "bestfor-chips",
            "cap-chips",
        ],
    ),
    (
        "model.html",
        [
            # 详情页 — smoke test 只看 URL+数据可读；无 ?id= 时是占位态
            "bc",
            "mc",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "model-name",
            "model-info",
            "price-table",
        ],
    ),
    (
        "providers.html",
        [
            "provider-grid",
            "provider-count-tag",
            "kpi-wall",
            "page-meta",
            "pay-chips",
            "policy-chips",
            "region-chips",
            "type-chips",
            "provider-search",
            "sort-select",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "kpi-providers",
        ],
    ),
    (
        "provider.html",
        [
            "provider-content",
            "breadcrumb",
            "footer",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "provider-name",
            "provider-info",
            "model-list",
        ],
    ),
    (
        "compare.html",
        [
            "cmp-a",
            "cmp-b",
            "cmp-c",
            "cmp-tbody",
            "cmp-thead",
            "cmp-channels",
            "cost-cache",
            "cost-chan",
            "cost-input",
            "cost-output",
            "cost-result",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "compare-results",
        ],
    ),
    (
        "events.html",
        [
            "evt-kpi-wall",
            "evt-timeline",
            "evt-count",
            "evt-filter-severity",
            "evt-filter-type",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "event-list",
        ],
    ),
    (
        "playground.html",
        [
            "pg-url",
            "pg-key",
            "pg-model",
            "pg-probes",
            "pg-output",
            "score-grad",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "probe-results",
            "probe-status",
        ],
    ),
    (
        "business.html",
        [
            "biz-kpi-total",
            "biz-kpi-tested",
            "biz-kpi-online",
            "biz-kpi-degraded",
            "biz-table",
            "biz-tbody",
            "biz-picks",
            "biz-perks",
            "biz-timeline",
            "biz-sort",
            "topbar",
        ],
    ),
    (
        "watch.html",
        [
            "watch-list",
            "watch-input",
            "watch-empty",
            "watch-count",
            "trend-list",
            "price-list",
            "sync-cost",
            "sync-devices",
            "sync-models",
            "sync-tests",
            "sync-views",
            "topbar",
        ],
    ),
    (
        "method.html",
        [
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            # method.html 是纯静态文档 (hardcoded HTML <main>), 设计如此
            "method-content",
        ],
    ),
    (
        "test.html",
        [
            "tk-url",
            "tk-key",
            "tk-result",
            "score-grad",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "test-results",
        ],
    ),
    (
        "admin.html",
        [
            "login-view",            # ≠ 用户列出的 "login-form"
            "login-token",
            "main-view",
            "kpi-grid",
            "ad-table",              # ≠ 用户列出的 "data-table"
            "log-table",
            "log-list",
            "latest-log",
            "latest-events",
            "nav",
            "page-container",
            "edit-modal",
            "toast",
            # 来自需求但实际不存在 → 报 missing
            "login-form",
            "data-table",
        ],
    ),
    (
        "gray_market.html",
        [
            "gm-gate",
            "gm-tok",
            "gm-tok-go",
            "gm-consent",
            "gm-consent-cb",
            "gm-consent-go",
            "gm-banner-total",
            "gm-kpi",
            "gm-region-chips",
            "gm-status-chips",
            "gm-type-chips",
            "gm-table-body",
            "gm-q",
            "gm-shown",
            "gm-total",
            "gm-detail",
            "gm-d-name",
            "gm-d-link",
            "topbar",
            # 来自需求但实际不存在 → 报 missing
            "providers",
            "table-headers",
            "kpi-grid",              # 不存在于此页（是 admin 的）
        ],
    ),
]


# ---------------------------------------------------------------------------
# 静态查找器
# ---------------------------------------------------------------------------
_ID_RE = re.compile(r"""id\s*=\s*['"]([a-z0-9_-]+)['"]""", re.I)


def find_ids_in_html(html: str) -> set[str]:
    return set(_ID_RE.findall(html))


def find_id_in_html(html: str, elem: str) -> bool:
    """静态 ID 是否在 HTML 里。"""
    return bool(re.search(rf"""id\s*=\s*['"]{re.escape(elem)}['"]""", html, re.I))


def find_id_in_js() -> dict[str, list[tuple[str, int]]]:
    """
    扫所有 .js 文件，找 `$( 'xxx' )` `document.getElementById('xxx')` `getElementById("xxx")`
    与 `id="xxx"` 这类引用，输出每个 ID 出现在的 (file, line) 列表。
    """
    out: dict[str, list[tuple[str, int]]] = {}
    pat = re.compile(
        r"""(?:\$|document\.getElementById|getElementById|querySelector|querySelectorAll)\s*\(\s*['"]([a-z0-9_-]+)['"]""",
        re.I,
    )
    for fn in JS_FILES:
        src = _read(fn)
        if not src:
            continue
        for m in pat.finditer(src):
            line = src.count("\n", 0, m.start()) + 1
            out.setdefault(m.group(1), []).append((fn, line))
    return out


def find_template_writes() -> dict[str, list[tuple[str, int]]]:
    """
    扫 .js 里 `grid.innerHTML = ...` / `$('xxx').innerHTML =` 形式中的目标 id。
    用于"动态注入但仍然有强 ID 引用"的检查。
    """
    out: dict[str, list[tuple[str, int]]] = {}
    pat = re.compile(
        r"""\$\(\s*['"]([a-z0-9_-]+)['"]\s*\)\.innerHTML\s*="""
        r"""|\.innerHTML\s*=\s*[^;]*?\$\(\s*['"]([a-z0-9_-]+)['"]""",
        re.S,
    )
    for fn in JS_FILES:
        src = _read(fn)
        if not src:
            continue
        for m in pat.finditer(src):
            ident = m.group(1) or m.group(2)
            line = src.count("\n", 0, m.start()) + 1
            out.setdefault(ident, []).append((fn, line))
    return out


# ---------------------------------------------------------------------------
# 数据校验
# ---------------------------------------------------------------------------
def verify_data_file() -> dict[str, Any]:
    out: dict[str, Any] = {"exists": False, "error": None, "meta": {}, "provider_count": 0}
    if not DATA_FILE.exists():
        out["error"] = f"missing: {DATA_FILE}"
        return out
    out["exists"] = True
    try:
        data = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    except Exception as e:
        out["error"] = f"json parse error: {e!r}"
        return out
    out["meta"] = data.get("meta", {}) or {}
    providers = data.get("providers", []) or []
    out["provider_count"] = len(providers)
    return out


def verify_non_compliant_js() -> dict[str, Any]:
    """non_compliant_data.js 是否生成自同一份 488 的 JSON。"""
    js = _read("non_compliant_data.js")
    out = {
        "exists": bool(js),
        "window_var": False,
        "provider_count_in_js": 0,    # "providers" 数组的顶层对象数
    }
    if not js:
        return out
    out["window_var"] = "NON_COMPLIANT_DATA" in js
    # 找到 "providers": [ ... ]，用 {} balance 数
    m = re.search(r'"providers"\s*:\s*\[', js)
    if not m:
        return out
    i = m.end()
    depth = 1
    n = 0
    while i < len(js) and depth > 0:
        c = js[i]
        if c == "{":
            if depth == 1:
                n += 1
            depth += 1
        elif c == "}":
            depth -= 1
        elif c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
        i += 1
    out["provider_count_in_js"] = n
    return out


def verify_data_js() -> dict[str, Any]:
    js = _read("data.js")
    out = {
        "exists": bool(js),
        "has_API_RADAR_DATA": bool(re.search(r"var\s+API_RADAR_DATA\s*=", js)),
        "keys": [],
        "counts": {},                  # 各数组顶层对象数 (true count)
        "id_counts": {},               # 含 "id" 字段的对象数
    }
    if not js:
        return out
    # 顶层 keys
    out["keys"] = re.findall(r"^\s{1,3}\"(\w+)\"\s*:\s*[\[\{]", js, flags=re.M)
    # 用真正 {} balance 数顶层对象
    for key in out["keys"]:
        pat = re.compile(rf'"{key}"\s*:\s*\[', re.M)
        m = pat.search(js)
        if not m:
            continue
        i = m.end()
        depth = 1
        n_top = 0
        n_id = 0
        sub_start = i
        while i < len(js) and depth > 0:
            c = js[i]
            if c == "{":
                if depth == 1:
                    n_top += 1
                    # look ahead 200 chars to see if "id": is here
                    head = js[i:i+200]
                    if re.search(r'^\s*"id"\s*:', head, flags=re.M):
                        n_id += 1
                depth += 1
            elif c == "}":
                depth -= 1
            elif c == "[":
                depth += 1
            elif c == "]":
                depth -= 1
            i += 1
        out["counts"][key] = n_top
        out["id_counts"][key] = n_id
    return out


# ---------------------------------------------------------------------------
# HTTP 拉取
# ---------------------------------------------------------------------------
@dataclass
class PageReport:
    page: str
    fetch_status: int = 0
    final_url: str = ""
    redirects: list[str] = field(default_factory=list)
    static_200: bool = False
    expected: list[str] = field(default_factory=list)
    found_static: list[str] = field(default_factory=list)
    found_js_template: list[str] = field(default_factory=list)
    missing: list[str] = field(default_factory=list)
    js_evidence: dict[str, list[str]] = field(default_factory=dict)
    note: str = ""

    @property
    def all_ok(self) -> bool:
        return (
            self.fetch_status == 200
            and self.static_200
            and not self.missing
        )


def fetch_page(base: str, page: str, *, timeout: float = 5.0) -> tuple[requests.Response, list[str]]:
    """返回 (last response, redirect chain)。文件不存在 / 404 也照样返回。"""
    redirects: list[str] = []
    sess = requests.Session()
    try:
        r = sess.get(
            f"{base}/{page}",
            timeout=timeout,
            allow_redirects=True,
            headers={"Cache-Control": "no-cache"},
        )
    except requests.RequestException as e:
        return _FakeResp(exc=str(e)), redirects

    if r.history:
        for h in r.history:
            redirects.append(f"{h.status_code} {h.headers.get('Location') or h.url}")
        redirects.append(f"{r.status_code} {r.url}")
    return r, redirects


class _FakeResp:
    def __init__(self, exc: str = ""):
        self.status_code = 0
        self.text = ""
        self.url = ""
        self._exc = exc

    @property
    def history(self):
        return []


def diagnose_page(page: str, expected: list[str], *, base: str,
                  js_index: dict[str, list[tuple[str, int]]],
                  js_templates: dict[str, list[tuple[str, int]]]
                  ) -> PageReport:
    r, redirects = fetch_page(base, page)
    rep = PageReport(
        page=page,
        fetch_status=r.status_code,
        final_url=getattr(r, "url", ""),
        redirects=redirects,
        expected=expected,
        static_200=(r.status_code == 200 and len(r.text or "") > 200),
    )

    if not rep.static_200:
        rep.note = rep.note or f"fetch failed: {r.status_code}"
        return rep

    html = r.text
    static_ids = find_ids_in_html(html)
    for elem in expected:
        if elem in static_ids:
            rep.found_static.append(elem)
            continue
        # JS 文件中 getElementById / $('x') / querySelector 的引用也算"有机制会写"
        if elem in js_index:
            ev = [f"{f}:{ln}" for f, ln in js_index[elem][:3]]
            rep.found_js_template.append(elem)
            rep.js_evidence[elem] = ev
            continue
        # 看 JS template write（grid.innerHTML = 中含 'x'）
        if elem in js_templates:
            ev = [f"{f}:{ln}" for f, ln in js_templates[elem][:3]]
            rep.found_js_template.append(elem)
            rep.js_evidence[elem] = ev
            continue
        # 都没找到 → missing
        rep.missing.append(elem)

    # 备注：部分页是有访问门 / 单点详情
    if page in ("model.html", "provider.html"):
        if "?id=" not in (rep.final_url or "") and not rep.missing:
            rep.note = "详情页，无 ?id= 时为占位态"
    if page == "gray_market.html" and rep.static_200:
        rep.note = "页面有 gm-gate 访问口令"
    return rep


# ---------------------------------------------------------------------------
# 报告生成
# ---------------------------------------------------------------------------
def render_markdown(reports: list[PageReport],
                    data_json: dict[str, Any],
                    data_js_info: dict[str, Any],
                    nc_js_info: dict[str, Any],
                    node_check: dict[str, Any] | None = None
                    ) -> str:
    lines: list[str] = []
    lines.append("# 跨页面数据填充 smoke test 报告\n")
    ts = time.strftime("%Y-%m-%d %H:%M:%S")
    lines.append(f"_生成时间: {ts}_\n")

    # ---- 数据源总览
    lines.append("## 1. 数据源健康度\n")
    if data_json.get("exists"):
        pc = data_json.get("provider_count", 0)
        meta = data_json.get("meta", {}) or {}
        stats = (meta.get("stats") or {}) if isinstance(meta, dict) else {}
        lines.append(f"- `02_data/non_compliant_providers.json`: ✅ exists, providers = **{pc}**")
        if isinstance(stats, dict):
            by_region = stats.get("by_region", {})
            lines.append(f"  - by_region: {by_region}")
            by_type = stats.get("by_type", {})
            lines.append(f"  - by_type: {by_type}")
    else:
        lines.append(f"- `02_data/non_compliant_providers.json`: ❌ {data_json.get('error')}")

    lines.append("")
    if nc_js_info.get("exists"):
        lines.append(
            f"- `03_prototype/non_compliant_data.js`: "
            f"{'✅ window.NON_COMPLIANT_DATA 已声明' if nc_js_info.get('window_var') else '⚠️ 未声明 window.NON_COMPLIANT_DATA'}, "
            f"providers(top-level id 数)≈ **{nc_js_info.get('provider_count_in_js', 0)}**"
        )
    else:
        lines.append("- `03_prototype/non_compliant_data.js`: ❌ missing")

    if data_js_info.get("exists"):
        keys = data_js_info.get("keys") or []
        counts = data_js_info.get("counts") or {}
        idc = data_js_info.get("id_counts") or {}
        lines.append(
            f"- `03_prototype/data.js`: ✅ 顶层 keys = `{keys}`, "
            f"各数组顶层对象数 `{counts}`, 含 id 字段数 `{idc}`"
        )
    else:
        lines.append("- `03_prototype/data.js`: ❌ missing")

    if node_check:
        if node_check.get("syntax_ok"):
            keys = node_check.get("top_keys") or []
            lines.append(
                f"- **Node `vm.runInContext` 语法检查 data.js**: ✅ 通过, top-level keys = `{keys}`"
            )
        else:
            lines.append(
                f"- **Node 语法检查 data.js**: ❌ {node_check.get('error') or 'syntax error'}"
            )

    # ---- 状态总表
    lines.append("\n## 2. 页面状态总表\n")
    lines.append(
        "| page | fetch | 重定向 | 静态200 | 已静态填充 (n) | JS 模板注入 (n) | 缺失 | 验证 | 备注 |"
    )
    lines.append("|---|---|---|---|---|---|---|---|---|")
    for rep in reports:
        ok_marker = "✅" if rep.all_ok else ("⚠️" if rep.fetch_status == 200 else "❌")
        # 重定向展开
        redir = "<br>".join(rep.redirects) if rep.redirects else "—"
        lines.append(
            f"| `{rep.page}` "
            f"| {rep.fetch_status} "
            f"| {redir} "
            f"| {'✅' if rep.static_200 else '❌'} "
            f"| {len(rep.found_static)} ({', '.join(rep.found_static[:3])}{'…' if len(rep.found_static)>3 else ''}) "
            f"| {len(rep.found_js_template)} ({', '.join(rep.found_js_template[:3])}{'…' if len(rep.found_js_template)>3 else ''}) "
            f"| {len(rep.missing)} "
            f"| {ok_marker} "
            f"| {rep.note or ''} |".replace("'}'","")
        )

    # ---- 缺失明细
    lines.append("\n## 3. 缺失/差异明细\n")
    any_missing = False
    for rep in reports:
        if not rep.missing:
            continue
        any_missing = True
        lines.append(f"\n### {rep.page}\n")
        lines.append(f"- fetch 状态: `{rep.fetch_status}`")
        lines.append(f"- final URL: `{rep.final_url}`")
        lines.append(f"- 缺失目标 ID: {', '.join(f'`{m}`' for m in rep.missing)}")
        # 给出最近似实际容器（如果在 HTML 里出现）
        suggestions = {
            "hero-kpi-num":    "index.html 用 `kpi-availability/kpi-checks/kpi-vendors`（kpi-wall） 系列，" + "未发现 'hero-kpi-num' 字面量",
            "login-form":      "实际是 `<div id=\"login-view\">`",
            "data-table":      "实际是 `<div id=\"ad-table\">` / `<div id=\"log-table\">`（按 tab 切换）",
            "table-headers":   "实际是 gray_market.html `.gm-table-header` class（无 ID）",
            "providers":       "gray_market.html 用 `<div class=\"gm-table-body\" id=\"gm-table-body\">`",
            "kpi-providers":   "providers.html 用 `kpi-wall` (id) + 由 app.js 注入各 KPI 卡",
            "model-name":      "model.html 无静态占位；app.js 走 `mc`/`bc` 容器，详情数据由 `?id=` 加载",
            "model-info":      "同 model-name（受 ?id= 控制，无参数时为占位态）",
            "price-table":     "同 model-name",
            "provider-name":   "provider.html 无静态占位；走 `provider-content` + `?id=`",
            "provider-info":   "同 provider-name",
            "model-list":      "同 provider-name",
            "compare-results": "compare.html 用 `cmp-tbody`（表格）+ `cmp-channels`",
            "event-list":      "events.html 用 `evt-timeline`",
            "probe-results":   "playground.html 用 `pg-probes`",
            "probe-status":    "playground.html 用 `pg-output`",
            "method-content":  "method.html 是 hardcoded 静态文档（<main class=\"main\">），无该 ID — 设计如此",
            "test-results":    "test.html 用 `tk-result`",
        }
        for m in rep.missing:
            if m in suggestions:
                lines.append(f"  - `{m}`: {suggestions[m]}")

    if not any_missing:
        lines.append("\n_无缺失。_")

    # ---- JS 端 dynamic injection 证据
    lines.append("\n## 4. JS 动态注入 — 证据汇总\n")
    any_ev = False
    for rep in reports:
        if not rep.js_evidence:
            continue
        any_ev = True
        lines.append(f"\n**{rep.page}**")
        lines.append("")
        for elem, ev in rep.js_evidence.items():
            lines.append(f"- `{elem}`: " + ", ".join(ev))
    if not any_ev:
        lines.append("\n_无 JS-injected 命中_")

    lines.append("\n## 5. 结论\n")
    bad_pages = [rep for rep in reports if not rep.all_ok]
    if not bad_pages:
        lines.append("- 所有页面 fetch 200 且目标元素全部可定位（静态 / JS 注入）。\n")
    else:
        lines.append(f"- 共 **{len(bad_pages)}** 个页面有阻塞项（fetch / 缺失目标）。详见上表与 §3。\n")
    lines.append("- 本报告只诊断、未修复。\n")
    return "\n".join(lines) + "\n"


# ---------------------------------------------------------------------------
# 主流程
# ---------------------------------------------------------------------------
def verify_data_js_with_node(data_js_path: Path) -> dict[str, Any]:
    """用 node 加载 data.js (no module wrapper) 用 vm.Script 模拟 'eval data.js',
    检查 API_RADAR_DATA 是否被声明、顶层 keys 是否可枚举。
    这是个轻量"语法级"smoke — 真正渲染需要 DOM，本文不做到这一步。
    """
    import shutil, subprocess, json as _json
    out = {"node_available": False, "syntax_ok": False, "top_keys": [], "error": None}
    node = shutil.which("node")
    if not node:
        # Windows 下也可能 node 在已知路径
        candidates = [
            r"C:/Program Files/nodejs/node.exe",
            r"C:/Program Files (x86)/nodejs/node.exe",
            os.path.expanduser("~/AppData/Local/hermes/node/node"),
        ]
        for c in candidates:
            if Path(c).exists():
                node = c
                break
    if not node:
        out["error"] = "node not found"
        return out
    out["node_available"] = True
    # 写一段 vm-style 脚本
    scratch = Path(os.environ.get("LOCALAPPDATA", str(Path.home()))) / "_api_radar_node_check.js"
    scratch.parent.mkdir(parents=True, exist_ok=True)
    scratch.write_text(
        f"""const fs = require('fs');
const vm = require('vm');
const code = fs.readFileSync({_json.dumps(str(data_js_path))}, 'utf8');
try {{
  const ctx = {{ window: {{}}, document: {{}} }};
  vm.createContext(ctx);
  vm.runInContext(code, ctx, {{ timeout: 5000 }});
  const apiKey = 'API_RADAR_DATA';
  const exists = Object.keys(ctx).includes('API_RADAR_DATA') || (ctx.window && ctx.window[apiKey]);
  let topKeys = [];
  if (ctx.API_RADAR_DATA && typeof ctx.API_RADAR_DATA === 'object') {{
    topKeys = Object.keys(ctx.API_RADAR_DATA);
  }}
  console.log('OK ' + topKeys.join(','));
}} catch (e) {{
  console.log('ERR ' + (e && e.message ? e.message : e));
}}
""",
        encoding="utf-8",
    )
    try:
        proc = subprocess.run(
            [node, str(scratch)], capture_output=True, text=True, timeout=15
        )
    except Exception as e:
        out["error"] = f"node exec failed: {e!r}"
        return out
    line = (proc.stdout or "").strip().splitlines()[-1] if (proc.stdout or "").strip() else ""
    if line.startswith("OK "):
        out["syntax_ok"] = True
        out["top_keys"] = line[3:].split(",") if line[3:] else []
    else:
        out["error"] = line or proc.stderr or f"exit={proc.returncode}"
    try:
        scratch.unlink()
    except OSError:
        pass
    return out


def main() -> int:
    # 启 server
    srv, port = start_server()
    base = f"http://127.0.0.1:{port}"
    print(f"[smoke] 已起本地 server: {base} (root = {PROTO})", flush=True)

    js_index = find_id_in_js()
    js_templates = find_template_writes()

    reports: list[PageReport] = []
    for page, expected in EXPECTED:
        rep = diagnose_page(
            page, expected,
            base=base,
            js_index=js_index,
            js_templates=js_templates,
        )
        reports.append(rep)
        status = "✅" if rep.all_ok else "⚠️" if rep.fetch_status == 200 else "❌"
        print(f"  {status} {page:18s} fetch={rep.fetch_status} "
              f"static={len(rep.found_static)} js={len(rep.found_js_template)} "
              f"missing={len(rep.missing)}", flush=True)

    # 数据源
    data_json = verify_data_file()
    data_js_info = verify_data_js()
    nc_js_info = verify_non_compliant_js()
    node_check = verify_data_js_with_node(PROTO / "data.js")
    if node_check.get("node_available"):
        print(
            f"[smoke] node 语法检查 data.js: syntax_ok={node_check.get('syntax_ok')} "
            f"top_keys={node_check.get('top_keys')} err={node_check.get('error')}",
            flush=True,
        )
    else:
        print(f"[smoke] node 不可用: {node_check.get('error')}", flush=True)

    md = render_markdown(reports, data_json, data_js_info, nc_js_info, node_check)
    REPORT_PATH.write_text(md, encoding="utf-8")
    print(f"[smoke] 报告已写: {REPORT_PATH}", flush=True)

    srv.shutdown()
    # 退出码 — missing 不视为失败 (脚本只诊断)
    if all(rep.fetch_status == 200 for rep in reports):
        return 0
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
