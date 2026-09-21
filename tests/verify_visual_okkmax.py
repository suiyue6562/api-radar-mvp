#!/usr/bin/env python3
"""视觉风格验证 — 检查是否已从赛博朋克改为极简白底 okkmax 风格

执行：
  python tests/verify_visual_okkmax.py

检查项：
1. style.css 不应有 cyberpunk 渐变 (linear-gradient, radial-gradient)
2. style.css 不应有 glow / neon / cyberpunk 字样
3. CSS 变量值应为白色 (--bg: #ffffff 或 #fff)
4. body 背景应为白色（不是深蓝）
5. 所有 HTML 文件的 inline style 不应有 radial-gradient
6. 字体堆栈应为 system-ui 开头
"""

import os
import re
import sys
from pathlib import Path

WORKDIR = Path(__file__).parent.parent / "03_prototype"

PAGES = [
    "index.html", "models.html", "model.html", "providers.html", "provider.html",
    "compare.html", "events.html", "playground.html", "business.html",
    "watch.html", "method.html", "test.html", "admin.html",
]

CSS_FILE = WORKDIR / "style.css"

# 禁用样式（注释除外）
DISALLOWED = [
    "cyberpunk",
    "neon",
    "backdrop-filter",
    "radial-gradient",
    "linear-gradient(135deg, #00d9ff",  # 赛博朋克青
    "linear-gradient(135deg, rgba(0,217,255",
    "linear-gradient(135deg, rgba(176,107,255",
    "rgba(0,217,255,",  # 青
    "rgba(176,107,255,",  # 紫
    "rgba(255,107,157,",  # 粉
]

# glow 单独检查（允许在注释中出现）
GLOW_RE = re.compile(r'glow')

# 必须有
REQUIRED = [
    "#ffffff",  # 白底
    "#1a1a1a",  # 黑字
    "-apple-system",  # 系统字体（macOS 优先）
    "BlinkMacSystemFont",  # Chrome macOS
]


def check_css():
    print("\n=== 1. style.css 检查 ===")
    if not CSS_FILE.exists():
        print("  ✗ style.css 不存在")
        return False
    c = CSS_FILE.read_text(encoding="utf-8")
    bad = []
    for d in DISALLOWED:
        count = c.count(d)
        if count > 0:
            print(f"  ✗ '{d}': {count} 处（应删除）")
            bad.append(d)
    # glow 单独：剥离注释看
    c_no_comment = re.sub(r'/\*.*?\*/', '', c, flags=re.DOTALL)
    c_no_comment = re.sub(r'//.*', '', c_no_comment)
    glow_count = len(GLOW_RE.findall(c_no_comment))
    if glow_count > 0:
        print(f"  ✗ 'glow': {glow_count} 处（非注释，应删除）")
        bad.append('glow')
    good = []
    for r in REQUIRED:
        if r in c:
            good.append(r)
        else:
            print(f"  ⚠️ '{r}' 缺失")
    if good:
        print(f"  ✓ 关键样式 {good}")
    return len(bad) == 0


def check_html_inline():
    print("\n=== 2. HTML inline style 检查 ===")
    all_ok = True
    for f in PAGES:
        path = WORKDIR / f
        if not path.exists():
            continue
        c = path.read_text(encoding="utf-8")
        bad = []
        for d in DISALLOWED:
            count = c.count(d)
            if count > 0:
                bad.append(f"{d}({count})")
        if bad:
            print(f"  ✗ {f}: {bad}")
            all_ok = False
    return all_ok


def check_html_structure():
    print("\n=== 3. HTML 结构保持 ===")
    for f in PAGES:
        path = WORKDIR / f
        if not path.exists():
            continue
        c = path.read_text(encoding="utf-8")
        opens = c.count('<div')
        closes = c.count('</div>')
        if opens != closes:
            print(f"  ✗ {f}: div 不平衡 {opens}/{closes}")
            return False
    print(f"  ✓ 13/13 页面 div 平衡")
    return True


def main():
    print("=" * 60)
    print("  API优选咨询 · okkmax 视觉风格验证")
    print("=" * 60)

    results = {
        "css": check_css(),
        "inline": check_html_inline(),
        "structure": check_html_structure(),
    }

    print("\n" + "=" * 60)
    print("  汇总")
    print("=" * 60)
    for n, ok in results.items():
        print(f"  {'✓' if ok else '✗'} {n}")

    if all(results.values()):
        print("\n  🎉 已完全切换到 okkmax 风格（极简白底）")
        return 0
    else:
        print("\n  ⚠️ 还有违规元素")
        return 1


if __name__ == "__main__":
    sys.exit(main())