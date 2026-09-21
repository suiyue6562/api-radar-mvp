# API-Radar-MVP / 03_prototype · 全站设计一致性审计报告

**审计范围**: `C:\Users\Administrator\Desktop\API-Radar-MVP\03_prototype\`（15 个 HTML）
**审计维度**: 顶导 / 页脚 / KPI / 表格 / Hero / 按钮 / 错别字 / 装饰
**审计依据**: `style.css` 设计 token、`app.js` 渲染逻辑、各页 inline style、UTF-8 编码

---

## 0 · 一图速览（每页到底装了什么）

| 页面 | #topbar 锚点 | renderTopbar 调用 | #footer 锚点 | renderFooter 调用 | page-hero-tagline | 自定义 Hero class | 自定义 KPI class |
|---|---|---|---|---|---|---|---|
| admin.html | ✗ | ✗ (admin 后台) | ✗ | ✗ | ✗ | — | — |
| index.html | ✓ | via PAGE_INITIALIZERS.home | ✓ (`.footer`) | ✗ | ✗ (用 `.hero-v3`) | `.hero-v3` | `.kpi-wall` (共享) |
| index_wireframe_v1.html | ✗ (旧版) | ✗ | ✓ | ✗ | ✗ | — | — |
| business.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.biz-hero` | `.biz-kpi-wall` |
| compare.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.compare-hero` | — (无 KPI) |
| events.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.evt-hero` | `.evt-kpi-wall` |
| gray_market.html | ✓ | via PAGE_INITIALIZERS | ✓ | ✗ | ✓ (橙) | `.page-hero` | — |
| method.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.mtd-hero` | — |
| model.html | ✓ | ✓ inline | ✓ 自定义 `.mdl-f` | ✗ | ✓ (作为 vendor 名条) | `.mdl-h` | — |
| models.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.models-hero` | `.models-kpi-wall` |
| playground.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.pg-hero` | — |
| provider.html | ✓ | ✓ inline | ✗ | ✗ | ✓ (作为 vendor 名条) | `.pvd-hero` | `.pvd-kpi` |
| providers.html | ✓ | via PAGE_INITIALIZERS | ✓ | ✗ | ✓ | `.page-hero` (共享) | `.kpi-wall` (共享) |
| test.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.tk-hero` | — |
| watch.html | ✓ | ✓ inline | ✗ | ✗ | ✓ | `.wtc-hero` | — |

---

## 1 · 设计系统（已建立的部分）

`style.css` 第 1–50 行 token 已统一：
- `--bg-base / --bg-deep / --bg-card` 白色三层
- `--fg / --fg-strong / --muted` 灰阶文字
- `--accent #1f2937` 主黑；`--accent-2 #2563eb` 蓝；`--accent-3 #dc2626` 红；`--success #16a34a` 绿；`--warning #d97706` 橙
- `--font-sans / --font-mono` 字体栈
- `--radius-sm 4 / --radius 6 / --radius-lg 8 / --radius-xl 12` 圆角

`.btn` / `.btn-primary` / `.btn-ghost` 在 `style.css:191-224` 有定义。
`.page-hero` / `.page-hero-tagline` / `.page-hero-tagline-dot` 在 `style.css:356-378` 有定义。
`.site-footer` / `.footer-row` / `.footer-links` 在 `style.css:545-555` 有定义。
`.topbar` / `.topbar-inner` / `.brand` / `.nav` / `.nav a.active` 在 `style.css:97-162` 有定义。

`app.js` 已统一提供：
- `renderTopbar(active)` (line 47) — 全站统一 logo + 10 项导航
- `renderFooter()` (line 62) — 已写好但**没有页面调用**

---

## 2 · 严重问题（必修）

### 🔴 S1. `renderFooter()` 全站未生效——12/14 页缺页脚

**事实**: `app.js:62-78` 定义了 `renderFooter()`，它会查找 `document.getElementById('footer')`。但**没有任何 HTML 包含 `<div id="footer">` 锚点或调用 `renderFooter()`**。

**实际页脚存在情况**（仅 4/15）：
- `index.html` — 完整 4 列 footer（手工写的 `.footer`/`.footer-grid`，不调用函数）
- `providers.html` — 1 行精简版（用共享 `.site-footer`）
- `gray_market.html` — 1 行精简版（用共享 `.site-footer`）
- `model.html` — 仅一段 `<div class="mdl-f">` 三行文本

**缺页脚**：business.html / compare.html / events.html / method.html / models.html / playground.html / test.html / watch.html / provider.html

**修复代码示例**（在每个缺页脚页面 `</main>` 之前加）：
```html
<footer id="footer"></footer>
```
并在文件底部 `app.js` 引入之后加：
```html
<script>if(typeof renderFooter==='function') renderFooter();</script>
```
也可以直接复制 `app.js:62-78` 的 HTML 到每个页面的 `</main>` 前（首推前者，未来单点维护）。

---

### 🔴 S2. `.biz-kpi-wall` / `.evt-kpi-wall` / `.models-kpi-wall` — KPI 数字墙风格不一致

**事实**：
- `index.html` 使用共享 `.kpi-wall` (5 列) — 风格对
- `providers.html` 使用共享 `.kpi-wall` — 风格对
- `business.html:18` 自定义 `.biz-kpi-wall` (4 列，max-width 720px)
- `events.html:16` 自定义 `.evt-kpi-wall` (6 列，max-width 920px)
- `models.html:16` 自定义 `.models-kpi-wall` (4 列，max-width 880px)
- `provider.html` 自定义 `.pvd-kpi` (4 列 inline grid)

四个不同的 inline 定义都做几乎一样的事，但 max-width / 列数 / gap 各不相同。

**修复代码示例**（推荐二选一）：
- 方案 A（最小侵入）：把 4 处 inline CSS 全部删掉，HTML class 统一改为 `kpi-wall`，在 `style.css` 用 `--kpi-cols: 4|5|6` 区分：
```css
/* 替换 style.css:387 的 .kpi-wall */
.kpi-wall { display: grid; grid-template-columns: repeat(var(--kpi-cols, 5), 1fr); gap: 12px; margin-bottom: 24px; }
.kpi-wall.cols-4 { --kpi-cols: 4; }
.kpi-wall.cols-6 { --kpi-cols: 6; }
```
HTML 改成 `<div class="kpi-wall cols-4">` 之类。
- 方案 B（更彻底）：把 4 段 inline `<style>` 全部删，KPI 用 `.kpi-wall` + 子类 `.kpi-wall--biz` / `.kpi-wall--evt` / `.kpi-wall--models`，统一放进 `style.css`。

---

### 🔴 S3. 8 个页面 `.xxx-hero` 重复定义相同 Hero 样式

**事实**：每个页面都用一套几乎相同的 inline CSS：

| 页面 | inline 类 | padding | h1 font-size | h1 font-weight |
|---|---|---|---|---|
| business.html:13 | `.biz-hero h1` | `32px 0 12px` | 36px | 800 |
| compare.html:13 | `.compare-hero h1` | `32px 0 8px` | 36px | 800 |
| events.html:13 | `.evt-hero h1` | `32px 0 8px` | 36px | 800 |
| method.html:13 | `.mtd-hero h1` | `32px 0 8px` | 36px | 800 |
| models.html:13 | `.models-hero h1` | `32px 0 8px` | 36px | 800 |
| playground.html:13 | `.pg-hero h1` | `32px 0 8px` | 36px | 800 |
| test.html:13 | `.tk-hero h1` | `32px 0 8px` | 36px | 800 |
| watch.html:13 | `.wtc-hero h1` | `32px 0 8px` | 36px | 800 |

仅 `padding` 有微小差异（`12px` vs `8px`）。

**修复代码示例**（保留 h1 font-size 不一致，因为 index/详情页确实需要不同字号；但 padding 可统一）：
```html
<!-- 每个页面把 <div class="biz-hero fade-in"> 改成 <div class="page-hero fade-in"> -->
<!-- 然后删除页内 <style> 块里的 .biz-hero { ... } 整段 -->
```
如要保留 page-specific padding，可在共享 `.page-hero` 基础上加 modifier：
```css
.page-hero--compact { padding: 32px 0 8px; }
```

---

## 3 · 中等问题（应修）

### 🟠 M1. `.gradient-text` 在每页 inline 重新定义，与 style.css 矛盾

**事实**：
- `style.css:316-320` 已改为：
  ```css
  .gradient-text { color: var(--fg-strong); background: none; -webkit-background-clip: initial; }
  ```
- 但 `business.html:14 / models.html:14 / index.html:53` 等多处又定义：
  ```css
  .biz-hero .gradient-text { background: #000000; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  ```
- 由于 background 是 `#000000`（纯黑）+ text-clip，最终视觉仍是黑字；但**实现不一致**，未来如换主色会出问题。

**修复代码示例**：
直接删除 6 处 `<style>` 里的 `.xxx-hero .gradient-text { ... }` 整段（共 8 个 HTML：business / compare / events / method / models / playground / provider / test / watch）。

---

### 🟠 M2. 绿色脉动圆点实际不脉动

**事实**：需求要求 "绿色脉动圆点 + 区型"。
- `.page-hero-tagline-dot` (`style.css:371`) 只定义了 `background: var(--success);` — 没有 `animation`
- `@keyframes pulse-soft` 已存在（`style.css:342`），但**没有被 dot 引用**

**修复代码示例**（追加到 `style.css`）：
```css
.page-hero-tagline-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--success);
  animation: pulse-soft 2s ease-in-out infinite;
  box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.4);
}
```
或更明显的 "ping" 效果：
```css
.page-hero-tagline-dot {
  position: relative;
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--success);
}
.page-hero-tagline-dot::after {
  content: '';
  position: absolute; inset: -2px;
  border-radius: 50%;
  background: var(--success);
  opacity: 0.4;
  animation: pulse-soft 2s ease-in-out infinite;
}
```

---

### 🟠 M3. "商家" vs "渠道" 术语混乱

**事实**：
- 文件名：`business.html` (商家), `providers.html` / `provider.html` (渠道)
- 顶部导航 (`app.js:36-44`)：第二项叫 "模型库"，第三项叫 "渠道库"
- `index.html` 内部混用：`<h2>🏆 Site rankings · 商家榜</h2>` vs `<h3>选渠道准备充值</h3>`
- `providers.html` 标题：`<h1>📡 渠道库</h1>` — 但 `provider.html` 面包屑 `'<a href="providers.html">商家</a>'` (provider.html:209)
- `index.html` KPI 标签 "总商家 / 在线 / 可用性"

**建议**：统一为 **"渠道"**（更技术中性），改以下几处：
- `provider.html:209` 面包屑 "商家" → "渠道"
- `index.html:731` "Site rankings · 商家榜" → "Site rankings · 渠道榜"
- `index.html` KPI "总商家" → "总渠道"
- `index.html:846` "选渠道准备充值" 已是渠道，保持
- `business.html` 标题 "AI API 中转站 · 实测目录" 已是中转站术语，可保留；但页面里若指 "provider" 实体应统一为 "渠道"

---

### 🟠 M4. 缺按钮变体（`.btn-secondary` / `.btn-danger`）

**事实**：`style.css` 只定义了 `.btn` / `.btn-primary` / `.btn-ghost`。所有危险 / 次要操作都用 inline style：
- `provider.html:363` `<a class="btn-primary">` (注意：无 `.btn` 前缀，但能渲染是因为有 inline style 覆盖 — **这违反了规则**)
- 各页 `<button class="btn btn-primary">` (correct)
- 没有 `.btn-secondary` / `.btn-danger` / `.btn-link` — 全靠 inline style

**修复代码示例**（追加到 `style.css:191`）：
```css
.btn-secondary {
  background: var(--bg-deep);
  color: var(--fg-strong);
  border-color: var(--border);
}
.btn-secondary:hover { border-color: var(--fg-strong); }
.btn-danger {
  background: var(--bg-card);
  color: var(--accent-3);
  border-color: var(--accent-3);
}
.btn-danger:hover { background: var(--accent-3); color: #fff; }
.btn[disabled], .btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

---

### 🟡 m5. `provider.html:363` `<a class="btn-primary">` 缺 `.btn` 基类

**事实**：
```html
<a href="..." class="btn-primary">🌐 访问官网</a>
<a href="providers.html" class="btn-ghost">← 返回列表</a>
```
缺少 `.btn` 会导致没 padding / 没 flex layout / 没 transition。浏览器**实际渲染会塌成纯文字**（除非靠全局 * 选择器，但这页没有）。

**修复代码示例**：
```html
<a href="..." class="btn btn-primary">🌐 访问官网</a>
<a href="providers.html" class="btn btn-ghost">← 返回列表</a>
```
（注：同一文件 line 28-30 有 `.pvd-hero-cta .btn-primary { ... }` 等选择器也是以 `.btn` 为基础假设的）

---

## 4 · 轻微问题（可选）

### ⚪ L1. 表格边框/斑马纹/hover — 实际是一致的，但风格可优化

**事实**：
- 所有 `tbody tr` 都 `border-bottom: 1px solid var(--border);` + `tr:last-child td { border-bottom: 0; }`
- 所有 `tr:hover { background: rgba(0, 0, 0, 0.04); }`（统一）
- **没有任何 zebra 斑马纹** — 这是设计选择，不是 bug
- 但类名散布：`biz-table` / `compare-table` / `rank-table` / `gm-table` / `pvd-model-table` / `mdl-ct` / `mtd-rubric` — 6+ 套重复样式

**建议**：抽到 `.table` / `.table-zebra` 共享类，按需加 modifier（如 `--compact`）。

---

### ⚪ L2. 中英文表达 — 大体流畅，无明显错别字

抽查标题（中文部分），均流畅：
- "实时 · 40 家服务商 · 13 项硬核检测 · 每周更新" ✓
- "横向对比 · 月成本秒算 · 13 项硬核检测" ✓
- "实时事件流 · 6 类行情 · 每周更新" ✓
- "公开透明 · 可重复验证 · 拒绝黑箱" ✓

英文标题 (`gradient-text` 内) 风格统一使用 `English · 中文` 格式。

未发现 UTF-8 BOM / 乱码（`file` 命令确认全部 UTF-8 / CRLF）。

---

### ⚪ L3. 图标/装饰 — 极简风格保持良好

- 无 emoji 滥用（除 hero 标题前缀 1-2 个）
- 无 glow / 渐变 hero / cyber 装饰（设计意图就是极简）
- 无 logo 缺失问题（brand logo 全部用 `.brand-logo` 黑底白字 "R"）

---

### ⚪ L4. `model.html` 底部 "Made with ❤️ in 内蒙古呼和浩特" — 略个人化

**事实**：`model.html:20` 写了 `<p>© 2026 API优选咨询 · Made with ❤️ in 内蒙古呼和浩特</p>`。其他页面（index/providers/gray_market）底部均无此句。

**建议**：删除或下放到 `.mdl-f` 隐藏（避免与正式 footer 重复）；MVP 阶段不放情感签名更专业。

---

## 5 · 修复优先级清单（按严重度）

| 序 | 问题 | 影响范围 | 修复成本 | 严重度 |
|---|---|---|---|---|
| 1 | S1: 12 页缺 footer / `renderFooter()` 未调用 | 全站 12 页 | 极低（5 行/页） | 🔴 严重 |
| 2 | S2: KPI-wall 类名 4 套并存 | 4 页 | 中（移 inline style） | 🔴 严重 |
| 3 | S3: 8 套 `.xxx-hero` 重复定义 | 8 页 | 中 | 🔴 严重 |
| 4 | M2: 脉动圆点不动 | 全站 hero | 极低（加 animation） | 🟠 应修 |
| 5 | M3: 商家/渠道术语混用 | 6+ 处 | 低（search-replace） | 🟠 应修 |
| 6 | M4: 缺 `.btn-secondary / .btn-danger` | 多页 | 低（加 CSS） | 🟠 应修 |
| 7 | M1: `.gradient-text` 重复 inline 定义 | 8 页 | 低（删 inline） | 🟠 应修 |
| 8 | m5: provider.html btn-primary 缺 `.btn` 基类 | 1 处 | 极低 | 🟡 小 |
| 9 | L1: 表格 6 套类名 | 6 页 | 中（重构） | ⚪ 可选 |
| 10 | L4: model.html 个人化签名 | 1 处 | 极低 | ⚪ 可选 |

---

## 6 · 修复后预期效果

完成 S1/S2/S3 + M1/M2 后：
- 12 个页面 footer 一致（同一套 4 列 grid）
- 4 页 KPI 数字墙视觉对齐（同一套样式 token）
- 8 页 Hero 共享 `.page-hero` 类，CSS 减少 ~120 行重复
- 脉动绿点真正"活"起来
- 全文 "渠道/商家" 术语一致

预计 CSS 减少 ~150 行，HTML 减少 ~30 处 inline style，JS 调用 `renderFooter()` 实现单点维护。

---

**审计完成 · 未直接修改任何文件 · 所有修复代码示例已提供**
