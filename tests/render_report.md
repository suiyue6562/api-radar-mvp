# 跨页面数据填充 smoke test 报告

_生成时间: 2026-09-21 14:43:27_

## 1. 数据源健康度

- `02_data/non_compliant_providers.json`: ✅ exists, providers = **488**
  - by_region: {'cn': 460, 'global': 28}
  - by_type: {'aggregator': 468, 'gateway': 20}

- `03_prototype/non_compliant_data.js`: ✅ window.NON_COMPLIANT_DATA 已声明, providers(top-level id 数)≈ **488**
- `03_prototype/data.js`: ✅ 顶层 keys = `['vendors', 'models', 'providers', 'offerings', 'events', 'fx_rate']`, 各数组顶层对象数 `{'vendors': 15, 'models': 38, 'providers': 32, 'offerings': 193, 'events': 13}`, 含 id 字段数 `{'vendors': 15, 'models': 38, 'providers': 32, 'offerings': 0, 'events': 13}`
- **Node `vm.runInContext` 语法检查 data.js**: ✅ 通过, top-level keys = `['vendors', 'models', 'providers', 'offerings', 'events', 'fx_rate']`

## 2. 页面状态总表

| page | fetch | 重定向 | 静态200 | 已静态填充 (n) | JS 模板注入 (n) | 缺失 | 验证 | 备注 |
|---|---|---|---|---|---|---|---|---|
| `index.html` | 200 | — | ✅ | 18 (featured-grid, bestfor-grid, kpi-availability…) | 0 () | 2 | ⚠️ |  |
| `models.html` | 200 | — | ✅ | 9 (model-grid, kpi-total-models, kpi-total-skus…) | 0 () | 0 | ✅ |  |
| `model.html` | 200 | — | ✅ | 3 (bc, mc, topbar) | 0 () | 3 | ⚠️ |  |
| `providers.html` | 200 | — | ✅ | 11 (provider-grid, provider-count-tag, kpi-wall…) | 0 () | 1 | ⚠️ |  |
| `provider.html` | 200 | — | ✅ | 4 (provider-content, breadcrumb, footer…) | 0 () | 3 | ⚠️ |  |
| `compare.html` | 200 | — | ✅ | 12 (cmp-a, cmp-b, cmp-c…) | 0 () | 1 | ⚠️ |  |
| `events.html` | 200 | — | ✅ | 6 (evt-kpi-wall, evt-timeline, evt-count…) | 0 () | 1 | ⚠️ |  |
| `playground.html` | 200 | — | ✅ | 7 (pg-url, pg-key, pg-model…) | 0 () | 2 | ⚠️ |  |
| `business.html` | 200 | — | ✅ | 11 (biz-kpi-total, biz-kpi-tested, biz-kpi-online…) | 0 () | 0 | ✅ |  |
| `watch.html` | 200 | — | ✅ | 12 (watch-list, watch-input, watch-empty…) | 0 () | 0 | ✅ |  |
| `method.html` | 200 | — | ✅ | 1 (topbar) | 0 () | 1 | ⚠️ |  |
| `test.html` | 200 | — | ✅ | 5 (tk-url, tk-key, tk-result…) | 0 () | 1 | ⚠️ |  |
| `admin.html` | 200 | — | ✅ | 13 (login-view, login-token, main-view…) | 0 () | 2 | ⚠️ |  |
| `gray_market.html` | 200 | — | ✅ | 19 (gm-gate, gm-tok, gm-tok-go…) | 0 () | 3 | ⚠️ | 页面有 gm-gate 访问口令 |

## 3. 缺失/差异明细


### index.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/index.html`
- 缺失目标 ID: `hero-kpi-num`, `model-grid`
  - `hero-kpi-num`: index.html 用 `kpi-availability/kpi-checks/kpi-vendors`（kpi-wall） 系列，未发现 'hero-kpi-num' 字面量

### model.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/model.html`
- 缺失目标 ID: `model-name`, `model-info`, `price-table`
  - `model-name`: model.html 无静态占位；app.js 走 `mc`/`bc` 容器，详情数据由 `?id=` 加载
  - `model-info`: 同 model-name（受 ?id= 控制，无参数时为占位态）
  - `price-table`: 同 model-name

### providers.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/providers.html`
- 缺失目标 ID: `kpi-providers`
  - `kpi-providers`: providers.html 用 `kpi-wall` (id) + 由 app.js 注入各 KPI 卡

### provider.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/provider.html`
- 缺失目标 ID: `provider-name`, `provider-info`, `model-list`
  - `provider-name`: provider.html 无静态占位；走 `provider-content` + `?id=`
  - `provider-info`: 同 provider-name
  - `model-list`: 同 provider-name

### compare.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/compare.html`
- 缺失目标 ID: `compare-results`
  - `compare-results`: compare.html 用 `cmp-tbody`（表格）+ `cmp-channels`

### events.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/events.html`
- 缺失目标 ID: `event-list`
  - `event-list`: events.html 用 `evt-timeline`

### playground.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/playground.html`
- 缺失目标 ID: `probe-results`, `probe-status`
  - `probe-results`: playground.html 用 `pg-probes`
  - `probe-status`: playground.html 用 `pg-output`

### method.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/method.html`
- 缺失目标 ID: `method-content`
  - `method-content`: method.html 是 hardcoded 静态文档（<main class="main">），无该 ID — 设计如此

### test.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/test.html`
- 缺失目标 ID: `test-results`
  - `test-results`: test.html 用 `tk-result`

### admin.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/admin.html`
- 缺失目标 ID: `login-form`, `data-table`
  - `login-form`: 实际是 `<div id="login-view">`
  - `data-table`: 实际是 `<div id="ad-table">` / `<div id="log-table">`（按 tab 切换）

### gray_market.html

- fetch 状态: `200`
- final URL: `http://127.0.0.1:65071/gray_market.html`
- 缺失目标 ID: `providers`, `table-headers`, `kpi-grid`
  - `providers`: gray_market.html 用 `<div class="gm-table-body" id="gm-table-body">`
  - `table-headers`: 实际是 gray_market.html `.gm-table-header` class（无 ID）

## 4. JS 动态注入 — 证据汇总


_无 JS-injected 命中_

## 5. 结论

- 共 **11** 个页面有阻塞项（fetch / 缺失目标）。详见上表与 §3。

- 本报告只诊断、未修复。

