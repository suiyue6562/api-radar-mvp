#!/usr/bin/env python3
"""全站页面重做后验证脚本

执行：
  python tests/verify_okkmax_after.py

验证项：
1. 所有 HTML 文件存在
2. HTML 标签平衡（div/script/a 配对）
3. JS 语法 OK（app.js / data.js / featured.js / probes.js / ads.js / ab.js）
4. 关键 UI 元素存在（KPI / 时间线 / 口碑精选 / 主表）
5. 关键 API 字段引用（featured_models / best_for / weekly_tokens）
"""

import os
import subprocess
import json
import sys
from pathlib import Path

WORKDIR = Path(__file__).parent.parent / "03_prototype"

PAGES = [
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
]

JS_FILES = [
    "app.js",
    "data.js",
    "featured.js",
    "probes.js",
    "ads.js",
    "ab.js",
]

OKKMAX_ELEMENTS = {
    "KPI 数据墙": ["biz-kpi", "kpi-wall", "biz-kpi-num"],
    "测试时间线": ["biz-timeline", "tl-logo", "tl-badge"],
    "主表": ["biz-table", "biz-tbody"],
    "口碑精选": ["biz-picks", "biz-pick", "biz-pick-quote"],
    "限时优惠": ["biz-perks", "biz-perk"],
}

DATA_FIELDS = [
    "weekly_tokens", "best_for", "capability_icons", "overall_score",
    "popularity", "status", "rating", "promo", "models_count",
    "sla_uptime", "api_protocol", "compliance", "fingerprint_signature"
]


def check_files():
    print("\n=== 1. 文件存在检查 ===")
    missing = []
    for f in PAGES + JS_FILES:
        path = WORKDIR / f
        if path.exists():
            sz = path.stat().st_size
            print(f"  ✓ {f} ({sz} bytes)")
        else:
            print(f"  ✗ {f} 缺失")
            missing.append(f)
    if missing:
        print(f"\n❌ 缺失文件: {missing}")
        return False
    return True


def check_html_balance():
    print("\n=== 2. HTML 标签平衡 ===")
    bad = []
    for f in PAGES:
        path = WORKDIR / f
        if not path.exists():
            continue
        c = path.read_text(encoding="utf-8")
        opens = c.count('<div')
        closes = c.count('</div>')
        scripts_o = c.count('<script')
        scripts_c = c.count('</script>')
        a_o = c.count('<a ')
        a_c = c.count('</a>')
        ok = opens == closes and scripts_o == scripts_c and a_o == a_c
        mark = "✓" if ok else "✗"
        print(f"  {mark} {f}: div={opens}/{closes}, script={scripts_o}/{scripts_c}, a={a_o}/{a_c}")
        if not ok:
            bad.append(f)
    return len(bad) == 0


def check_js_syntax():
    print("\n=== 3. JS 语法检查 ===")
    bad = []
    for f in JS_FILES:
        path = WORKDIR / f
        if not path.exists():
            continue
        r = subprocess.run(["node", "-c", f], capture_output=True, text=True, cwd=str(WORKDIR))
        if r.returncode == 0:
            print(f"  ✓ {f}")
        else:
            print(f"  ✗ {f}: {r.stderr[:200]}")
            bad.append(f)
    return len(bad) == 0


def check_okkmax_elements():
    print("\n=== 4. okkmax 元素检查 (仅 business.html) ===")
    path = WORKDIR / "business.html"
    if not path.exists():
        return False
    c = path.read_text(encoding="utf-8")
    all_ok = True
    for name, keys in OKKMAX_ELEMENTS.items():
        present = [k for k in keys if k in c]
        if present:
            print(f"  ✓ {name}: {present}")
        else:
            print(f"  ✗ {name}: 缺失")
            all_ok = False
    return all_ok


def check_data_fields():
    print("\n=== 5. data.js 字段检查 ===")
    path = WORKDIR / "data.js"
    if not path.exists():
        return False
    c = path.read_text(encoding="utf-8")
    bad = []
    for f in DATA_FIELDS:
        count = c.count(f)
        if count > 0:
            print(f"  ✓ {f}: {count} 处")
        else:
            print(f"  ✗ {f}: 缺失")
            bad.append(f)
    return len(bad) == 0


def check_featured_data():
    print("\n=== 6. featured.js 数据检查 ===")
    path = WORKDIR / "featured.js"
    if not path.exists():
        return False
    c = path.read_text(encoding="utf-8")
    checks = ["featured_models", "best_for", "weekly_tokens", "trend_pct"]
    bad = [k for k in checks if k not in c]
    for k in checks:
        if k not in c:
            print(f"  ✗ {k}: 缺失")
        else:
            print(f"  ✓ {k}")
    return len(bad) == 0


def check_admin_functionality():
    print("\n=== 7. admin.html 全功能检查 ===")
    path = WORKDIR / "admin.html"
    if not path.exists():
        return False
    c = path.read_text(encoding="utf-8")
    checks = {
        "登录页": ["login", "登录", "Bearer", "chen-admin-2026"],
        "导航": ["sidebar", "nav"],
        "CRUD": ["create", "update", "delete", "list"],
        "广告管理": ["ad", "广告"],
        "A/B 实验": ["ab", "experiment", "实验"],
        "流量统计": ["traffic", "stats", "流量"],
        "数据导出": ["export", "导出", "csv"],
        "仪表盘": ["dashboard", "仪表盘", "kpi"],
    }
    all_ok = True
    for name, keys in checks.items():
        present = [k for k in keys if k.lower() in c.lower()]
        if present:
            print(f"  ✓ {name}: {present}")
        else:
            print(f"  ✗ {name}: 缺失")
            all_ok = False
    return all_ok


def main():
    print("=" * 60)
    print("  API优选咨询 · okkmax 风格全站重做验证")
    print("=" * 60)

    results = {
        "files": check_files(),
        "html": check_html_balance(),
        "js": check_js_syntax(),
        "okkmax": check_okkmax_elements(),
        "data": check_data_fields(),
        "featured": check_featured_data(),
        "admin": check_admin_functionality(),
    }

    print("\n" + "=" * 60)
    print("  汇总")
    print("=" * 60)
    total = len(results)
    passed = sum(1 for v in results.values() if v)
    for name, ok in results.items():
        print(f"  {'✓' if ok else '✗'} {name}")

    print(f"\n  {passed}/{total} 通过")

    if passed == total:
        print("\n  🎉 全部通过！明天 SSH 跑 git pull + 重启服务即可上线")
        return 0
    else:
        print(f"\n  ⚠️ {total - passed} 项不通过，需修复")
        return 1


if __name__ == "__main__":
    sys.exit(main())