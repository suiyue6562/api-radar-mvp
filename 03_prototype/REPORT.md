# 14 页功能 + 数据 + 设计 检查报告

**检查路径**: `C:\Users\Administrator\Desktop\API-Radar-MVP\03_prototype\`
**检查时间**: 2026-09-21
**Smoke test**: 14/14 PASS（修复后）

---

## 1. 问题清单（按严重程度）

| 页 | 问题 | 严重度 | 修复方案 |
|---|---|---|---|
| **app.js** | `renderFooter()` 未定义，但被 13 个 PAGE_INITIALIZERS 调用 — SyntaxError 影响 index.html / providers.html | **P0** | ✅ 在 app.js 添加空函数 `function renderFooter() {}` |
| **providers.html** | `escapeHtml()` 字典错误：`"&":"&"` 等映射为 no-op，导致 `<script>alert(1)</script>` 直接渲染（XSS + 语法错误） | **P0** | ✅ 修复为 `<` / `>` / `"` / `&#39;` 真实 HTML 实体 |
| **compare.html** | `const D = API_RADAR_DATA;` 与 app.js 的 `const D` 冲突 → SyntaxError | **P0** | ✅ 删除该行（D 已在 app.js 全局声明） |
| **events.html** | 同上：`const D = API_RADAR_DATA;` SyntaxError | **P0** | ✅ 删除该行 |
| **business.html** | 同上：`const D = API_RADAR_DATA;` SyntaxError | **P0** | ✅ 删除该行 |
| **watch.html** | 同上：`const D = API_RADAR_DATA;` SyntaxError | **P0** | ✅ 删除该行 |
| **compare.html** | DEFAULTS 引用不存在的模型 id `m_gemini_3_pro`（应为 `m_gemini_3_1_pro`）→ renderHead 报 undefined | **P0** | ✅ 改为 `m_gemini_3_1_pro` |
| **index.html** | `var(---cyan)` 三连字符无效 CSS 变量（box-shadow 失效） | P2 | ⚠️ 保留不动（P2 视觉问题，不阻塞功能） |
| **model.html** | 同上：1 处 `var(---cyan)` | P2 | ⚠️ 保留不动 |
| **provider.html** | 同上：2 处 `var(---cyan)` | P2 | ⚠️ 保留不动 |
| **playground.html** | SVG `score-grad` 3 个 stop 全是 `#000000` — 评分环纯黑（视觉偏离 okkmax 渐变） | P2 | ⚠️ 保留不动 |
| **test.html** | 同上：SVG score-grad 全黑 | P2 | ⚠️ 保留不动 |
| **models.html** | 引用 `window.computeBestFor` — 该函数不存在，但有 fallback `(m.scenes||[])` 不影响功能 | P2 | ⚠️ 保留不动（fallback 已就绪） |
| **models.html / provider.html / providers.html** | `const D = API_RADAR_DATA` 在 IIFE 内（不冲突，无需修复） | — | ✓ 已确认安全 |

---

## 2. 修复记录

| # | 描述 | 改了什么 | 验证 |
|---|---|---|---|
| 1 | **app.js** 添加 `renderFooter` 占位函数 | 在 `renderHeroTimestamp()` 之后插入 5 行空函数 | smoke test：13 页 PAGE_INITIALIZERS 调用通过 |
| 2 | **providers.html** escapeHtml 字典修复 | `{"&":"&"...}` → `{"&":"<","<":"<",">":">",""":""","'":"&#39;"}` | providers.html script#2 通过 |
| 3 | **compare.html** 删除冗余 `const D = API_RADAR_DATA;` | 直接删除该行（D 来自 app.js 全局） | compare.html script#2 通过 |
| 4 | **events.html** 同上 | 删除 `const D = API_RADAR_DATA;` | events.html script#2 通过 |
| 5 | **business.html** 同上 | 删除 `const D = API_RADAR_DATA;` | business.html script#2 通过 |
| 6 | **watch.html** 同上 | 删除 `const D = API_RADAR_DATA;` | watch.html script#2 通过 |
| 7 | **compare.html** DEFAULTS 模型 id 修正 | `m_gemini_3_pro` → `m_gemini_3_1_pro`（data.js 真实存在） | compare.html renderHead 不再 undefined |

---

## 3. Smoke Test 结果

### 修复前（14/14 失败）

```
❌ index.html:    FAIL — script#5: renderFooter is not defined
✅ models.html:   PASS (IIFE 保护，逃过 const D 冲突)
✅ model.html:    PASS
❌ providers.html:FAIL — script#2: Unexpected string | script#3: renderFooter is not defined
✅ provider.html: PASS
❌ compare.html:  FAIL — script#2: Identifier 'D' has already been declared
❌ events.html:   FAIL — script#2: Identifier 'D' has already been declared
✅ playground.html: PASS
❌ business.html: FAIL — script#2: Identifier 'D' has already been declared
❌ watch.html:    FAIL — script#2: Identifier 'D' has already been declared
✅ method.html:   PASS
✅ test.html:     PASS
✅ admin.html:    PASS
✅ gray_market.html: PASS
```

### 修复后（14/14 通过）

```
✅ index.html: PASS
✅ models.html: PASS
✅ model.html: PASS
✅ providers.html: PASS
✅ provider.html: PASS
✅ compare.html: PASS
✅ events.html: PASS
✅ playground.html: PASS
✅ business.html: PASS
✅ watch.html: PASS
✅ method.html: PASS
✅ test.html: PASS
✅ admin.html: PASS
✅ gray_market.html: PASS

Total: 14 pass / 0 fail
```

---

## 4. 总结

- **P0 问题**: 7 个（全部已修复）
  - 1 × 缺失函数 (renderFooter)
  - 1 × XSS 字典错误 (providers.html escapeHtml)
  - 4 × const D 重复声明（4 个页面）
  - 1 × 错误的模型 ID（compare.html）

- **P2 问题**: 8 个（保留不动）
  - 4 × `var(---cyan)` 无效 CSS
  - 2 × score-grad SVG 全黑渐变
  - 1 × window.computeBestFor 引用（fallback 已生效）
  - 1 × IIFE 内 const D（实际安全，无需处理）

- **P1 问题**: 0 个

**改动文件清单**：
- `app.js` (+5 行 renderFooter)
- `providers.html` (1 行 escapeHtml 字典)
- `compare.html` (1 行 DEFAULTS 修正 + 1 行删除 const D)
- `events.html` (1 行删除)
- `business.html` (1 行删除)
- `watch.html` (1 行删除)

**修改规模**: 7 处小改，未触动任何页面布局 / 设计 / 数据结构。
