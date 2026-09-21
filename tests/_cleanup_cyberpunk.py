#!/usr/bin/env python3
"""清理 13 个 HTML 的 inline style 中残留的赛博朋克元素

策略：
1. 把 rgba(0,217,255, X) → rgba(0,0,0, X)  (青→黑半透明)
2. 把 rgba(176,107,255, X) → rgba(0,0,0, X) (紫→黑)
3. 把 rgba(255,107,157, X) → rgba(0,0,0, X) (粉→黑)
4. 删除 'animation:' [named.glow] / 'pulse-glow' 类
5. 删除 backdrop-filter
6. 删除 linear-gradient / radial-gradient（替换为黑色）
"""
import re
from pathlib import Path

WORKDIR = Path("C:/Users/Administrator/Desktop/API-Radar-MVP/03_prototype")

PAGES = [
    "index.html", "models.html", "model.html", "providers.html", "provider.html",
    "compare.html", "events.html", "playground.html", "business.html",
    "watch.html", "method.html", "test.html", "admin.html",
]

# 颜色替换规则
COLOR_REPLACEMENTS = [
    # 青 (#00d9ff) → 黑
    (r'rgba\(0, ?217, ?255, ?([\d.]+)\)', r'rgba(0, 0, 0, \1)'),
    (r'#00d9ff', '#000000'),
    (r'#00D9FF', '#000000'),
    (r'rgba\(0, ?217, ?255\)', 'rgba(0, 0, 0, 0.5)'),
    # 紫 (#b066ff) → 黑
    (r'rgba\(176, ?107, ?255, ?([\d.]+)\)', r'rgba(0, 0, 0, \1)'),
    (r'#b066ff', '#000000'),
    (r'#B066FF', '#000000'),
    # 粉 (#ff6b9d) → 黑
    (r'rgba\(255, ?107, ?157, ?([\d.]+)\)', r'rgba(0, 0, 0, \1)'),
    (r'#ff6b9d', '#000000'),
    (r'#FF6B9D', '#000000'),
    # 渐变
    (r'linear-gradient\([^)]*\)', '#000000'),
    (r'radial-gradient\([^)]*\)', '#000000'),
    # glow 类
    (r'\bglow\b', ''),
    (r'pulse-glow', ''),
    # backdrop-filter
    (r'backdrop-filter:\s*blur\([^)]+\);?', ''),
    # box-shadow 含霓虹色的
    (r'box-shadow:\s*[^;]*rgba\([01]\d?\d?, ?\d+, ?\d+,[^)]*\)[^;]*;?', 'box-shadow: 0 1px 3px rgba(0,0,0,0.1);'),
]


def clean_page(path: Path):
    c = path.read_text(encoding="utf-8")
    original = c

    for pat, rep in COLOR_REPLACEMENTS:
        c = re.sub(pat, rep, c, flags=re.IGNORECASE)

    # 清理"animation: pulse-glow Xs infinite" 等
    c = re.sub(r'animation:\s*[^;]*;', '', c)

    if c != original:
        path.write_text(c, encoding="utf-8")
        return True
    return False


def main():
    import os
    cleaned = 0
    for f in PAGES:
        path = WORKDIR / f
        if not path.exists():
            print(f"  - {f} 不存在")
            continue
        if clean_page(path):
            sz = path.stat().st_size
            print(f"  ✓ {f} 已清理 ({sz} bytes)")
            cleaned += 1
        else:
            print(f"  - {f} 无需改")

    print(f"\n清理 {cleaned} 个文件")


if __name__ == "__main__":
    main()