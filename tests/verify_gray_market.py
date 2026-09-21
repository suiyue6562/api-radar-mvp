#!/usr/bin/env python3
"""不合规中转站专区验证

验证项：
1. JSON 数据：488 个 provider
2. JS 数据：488 个 provider（与 JSON 一致）
3. HTML 平衡 + 关键模块存在
4. 关键功能：访问限制 + 风险提示 + 表格渲染 + 数据源说明
"""
import json
import re
import subprocess
import sys
from pathlib import Path

WORKDIR = Path(__file__).parent.parent

JSON_FILE = WORKDIR / "02_data" / "non_compliant_providers.json"
JS_FILE = WORKDIR / "03_prototype" / "non_compliant_data.js"
HTML_FILE = WORKDIR / "03_prototype" / "gray_market.html"
DOC_FILE = WORKDIR / "01_docs" / "gray_market_collection_standards.md"


def check_json():
    print("\n=== 1. JSON 数据 ===")
    if not JSON_FILE.exists():
        print("  ✗ JSON 不存在")
        return False
    d = json.loads(JSON_FILE.read_text(encoding="utf-8"))
    providers = d.get("providers", [])
    print(f"  ✓ providers: {len(providers)}")
    print(f"  ✓ meta: {list(d.get('meta', {}).keys())}")
    s = d.get("meta", {}).get("stats", {})
    print(f"  ✓ 国内: {s.get('by_region', {}).get('cn', '?')}")
    print(f"  ✓ 海外: {s.get('by_region', {}).get('global', '?')}")
    print(f"  ✓ 聚合: {s.get('by_type', {}).get('aggregator', '?')}")
    return len(providers) == 488


def check_js():
    print("\n=== 2. JS 数据 ===")
    if not JS_FILE.exists():
        print("  ✗ JS 不存在")
        return False
    r = subprocess.run(
        ["node", "-e", f"""
const fs = require('fs');
const c = fs.readFileSync('non_compliant_data.js', 'utf8');
const match = c.match(/NON_COMPLIANT_DATA\\s*=\\s*({{[\\s\\S]*?}});?\\s*$/);
if (match) {{
  const D = new Function('return ' + match[1])();
  console.log('count=' + (D.providers?.length || 0));
  console.log('first=' + D.providers?.[0]?.id);
}}
"""],
        capture_output=True, text=True, cwd=str(WORKDIR / "03_prototype")
    )
    print(f"  STDOUT: {r.stdout.strip()[:200]}")
    return "count=488" in r.stdout


def check_html():
    print("\n=== 3. HTML 检查 ===")
    if not HTML_FILE.exists():
        print("  ✗ HTML 不存在")
        return False
    h = HTML_FILE.read_text(encoding="utf-8")
    opens = h.count('<div')
    closes = h.count('</div>')
    scripts_o = h.count('<script')
    scripts_c = h.count('</script>')
    print(f"  ✓ 大小: {len(h)} bytes")
    print(f"  {'✓' if opens == closes else '✗'} div: {opens}/{closes}")
    print(f"  {'✓' if scripts_o == scripts_c else '✗'} script: {scripts_o}/{scripts_c}")

    # 关键模块
    checks = {
        "访问限制 (locale 检测)": ["Intl.DateTimeFormat"],
        "风险提示 (Consent)": ["showConsent", "risk"],
        "5 列 KPI 数据墙": ["kpi", "488"],
        "收录标准 section": ["必填", "可选"],
        "表格渲染函数": ["renderVisible", "rowHtml"],
        "数据源说明": ["RelayPick", "Veridrop", "AIAPIRank"],
        "免责声明": ["免责声明"],
        "极简白底": ["#fff"],
    }
    all_ok = True
    for name, keys in checks.items():
        present = [k for k in keys if k in h]
        if present:
            print(f"  ✓ {name}: {present}")
        else:
            print(f"  ✗ {name}: 缺失")
            all_ok = False
    return all_ok and opens == closes and scripts_o == scripts_c


def check_doc():
    print("\n=== 4. 文档检查 ===")
    if not DOC_FILE.exists():
        print("  ✗ 文档不存在")
        return False
    d = DOC_FILE.read_text(encoding="utf-8")
    sections = ["必填", "可选", "状态", "免责", "数据源"]
    present = [s for s in sections if s in d]
    print(f"  ✓ 大小: {len(d)} bytes")
    print(f"  ✓ 关键章节: {present}")
    return len(present) >= 4


def main():
    print("=" * 60)
    print("  API优选咨询 · 不合规中转站专区验证")
    print("=" * 60)

    results = {
        "json": check_json(),
        "js": check_js(),
        "html": check_html(),
        "doc": check_doc(),
    }

    print("\n" + "=" * 60)
    print("  汇总")
    print("=" * 60)
    for k, v in results.items():
        print(f"  {'✓' if v else '✗'} {k}")
    passed = sum(results.values())

    if passed == len(results):
        print("\n  🎉 全部通过！")
        return 0
    else:
        print(f"\n  ⚠️ {len(results) - passed} 项不通过")
        return 1


if __name__ == "__main__":
    sys.exit(main())