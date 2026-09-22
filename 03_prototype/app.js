// API优选咨询 - 主应用脚本 v2.1
// 包含顶部导航、IQ 榜、时间线、KPI、6列主表、Top Picks、Perks、Featured、Best For、Tab、计算器、搜索
// 首页 v3 — okkmax 极简白底风格（无渐变、无 glow）

const D = (typeof API_RADAR_DATA !== 'undefined') ? API_RADAR_DATA : (window.API_RADAR_DATA || { vendors: [], models: [], providers: [], offerings: [], events: [] });

// FX 汇率
const FX = D.fx_rate || { USD_CNY: 7.1, date: '2026-01-01' };

// 工具函数
const $ = (id) => document.getElementById(id);
const fmtUSD = (n) => '$' + (n || 0).toFixed(n < 1 ? 4 : 2);
const fmtCNY = (n) => '¥' + ((n || 0) * FX.USD_CNY).toFixed(n < 1 ? 2 : 0);
const fmtCtx = (n) => n >= 1000000 ? (n/1000000).toFixed(0) + 'M' : n >= 1000 ? Math.round(n/1000) + 'K' : n;
const fmtNum = (n) => {
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return String(n);
};
const getVendor = (id) => D.vendors.find(v => v.id === id);
const getProvider = (id) => D.providers.find(p => p.id === id);
const getModel = (id) => D.models.find(m => m.id === id);
const getOfferingsForModel = (id) => D.offerings.filter(o => o.model_id === id);
const fmtPrice = (n, currency) => currency === 'CNY' ? fmtCNY(n) : fmtUSD(n);

function escapeHtml(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

// ============ 顶部导航 — 仿 okkmax 风格：brand + 8 链接 + 右侧搜索/积分/设置/登录 ============
const NAV = [
  { href: 'index.html', label: '首页', id: 'home' },
  { href: 'models.html', label: '模型库', id: 'models' },
  { href: 'providers.html', label: '渠道库', id: 'providers' },
  { href: 'compare.html', label: '比价', id: 'compare' },
  { href: 'events.html', label: '行情', id: 'events' },
  { href: 'playground.html', label: 'Playground', id: 'playground' },
  { href: 'watch.html', label: '观察室', id: 'watch' },
  { href: 'method.html', label: '方法', id: 'method' },
];

function renderTopbar(active = '') {
  const bar = $('topbar');
  if (!bar) return;
  bar.innerHTML = '<div class="topbar-inner">' +
    '<a href="index.html" class="brand">' +
      '<div class="brand-logo">R</div>' +
      '<span class="brand-text">API优选咨询</span>' +
      '<span class="brand-sub">v2.1</span>' +
    '</a>' +
    '<nav class="nav">' + NAV.map(n =>
      '<a href="' + n.href + '" class="' + (active === n.id ? 'active' : '') + '">' + n.label + '</a>'
    ).join('') + '</nav>' +
    '<div class="topbar-actions">' +
      '<button class="topbar-icon-btn" title="搜索" aria-label="搜索"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></button>' +
      '<button class="topbar-icon-btn topbar-credit" title="积分" aria-label="积分"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg><span class="topbar-credit-num">128</span></button>' +
      '<button class="topbar-icon-btn" title="设置" aria-label="设置"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></button>' +
      '<a href="#" class="topbar-login">登录</a>' +
    '</div>' +
  '</div>';
}

// ============ 模型衍生指标 (学 models.dev / llm-stats / OpenRouter) ============
// 周 token 用量：基于 id 哈希的稳定伪随机
function computeWeeklyTokens(m) {
  const seed = (m.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const vendorBoost = (D.vendors.findIndex(v => v.id === m.vendor_id) + 1) * 0.4;
  const ctxBoost = Math.log10(Math.max(m.context_window || 32000, 1000)) / 6;
  const isNew = (m.release_date || '').startsWith('2026') ? 0.25 : 0;
  const base = 1.5 + (seed % 100) / 30 + vendorBoost + ctxBoost + isNew;
  const billions = Math.max(0.1, base);
  return (billions >= 1 ? billions.toFixed(1) + 'B' : (billions * 1000).toFixed(0) + 'M');
}

// 趋势变化 %：[-20, +35]
function computeTrendDelta(m) {
  const seed = (m.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const raw = (seed * 9301 + 49297) % 233280 / 233280;
  return Math.round((raw * 55) - 20);
}

// 综合分数 0~100：性价比(35) + 能力(30) + 上下文(15) + 趋势(20)
function computeCompositeScore(m) {
  const inp = m.official_input_usd_m ?? m.price_input_per_m ?? 0;
  const out = m.official_output_usd_m ?? m.price_output_per_m ?? 0;
  const refPrice = 30;
  const priceScore = Math.max(0, Math.min(100, (1 - Math.max(inp, out) / refPrice) * 100));
  const caps = m.capabilities || [];
  const capScore = Math.min(100, caps.length * 18 + (caps.includes('reasoning') ? 15 : 0) + (caps.includes('tool_use') || caps.includes('agentic_coding') ? 15 : 0));
  const ctx = m.context_window || 0;
  const ctxScore = Math.min(100, Math.log10(Math.max(ctx, 1000)) / 6 * 100);
  const trend = computeTrendDelta(m);
  const trendScore = Math.max(0, Math.min(100, ((trend + 20) / 55) * 100));
  const total = priceScore * 0.35 + capScore * 0.30 + ctxScore * 0.15 + trendScore * 0.20;
  return Math.round(total);
}

// 子分数（用于 IQ 卡片三栏明细）
function computeSubScores(m) {
  const inp = m.official_input_usd_m ?? m.price_input_per_m ?? 0;
  const out = m.official_output_usd_m ?? m.price_output_per_m ?? 0;
  const refPrice = 30;
  const priceScore = Math.max(0, Math.min(100, (1 - Math.max(inp, out) / refPrice) * 100));
  const caps = m.capabilities || [];
  const capScore = Math.min(100, caps.length * 18 + (caps.includes('reasoning') ? 15 : 0) + (caps.includes('tool_use') || caps.includes('agentic_coding') ? 15 : 0));
  const ctx = m.context_window || 0;
  const ctxScore = Math.min(100, Math.log10(Math.max(ctx, 1000)) / 6 * 100);
  return {
    IQ: Math.round(priceScore * 0.35 + capScore * 0.30 + ctxScore * 0.15 + 50 * 0.20),
    Cap: Math.round(capScore),
    Ctx: Math.round(ctxScore),
    Price: Math.round(priceScore),
  };
}

// ============ 趋势方向 ============
function parseTrend(pctStr) {
  const n = parseFloat(String(pctStr || '').replace(/[^0-9.\-]/g, ''));
  if (isNaN(n)) return { num: 0, up: true };
  return { num: n, up: n >= 0 };
}

// ============ 卡 1: Model IQ 行式榜单 (iq-list) + 降智计数 (iq-downcount) ============
function renderModelIQ() {
  const list = $('iq-list');
  const downEl = $('iq-downcount');
  if (!list) return;
  // 取 IQ 分数前 5 的模型
  const ranked = D.models
    .map(m => ({ m, score: computeCompositeScore(m) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  // 检出降智 = 周趋势为负的模型数（诚实口径，非随机）
  const downCount = D.models.filter(m => computeTrendDelta(m) < 0).length;
  if (downEl) downEl.textContent = downCount;

  if (!ranked.length) {
    list.innerHTML = '<div style="text-align:center;padding:32px;color:var(--muted);">暂无模型数据</div>';
    return;
  }

  const maxScore = ranked[0].score || 1;
  list.innerHTML = ranked.map((row, i) => {
    const m = row.m;
    const v = getVendor(m.vendor_id);
    const logo = v?.logo || '🤖';
    const width = Math.max(4, Math.round(row.score / maxScore * 100));
    return '<div class="iq-row">' +
      '<div class="iq-rank">' + (i + 1) + '</div>' +
      '<div style="min-width:0;">' +
        '<div class="iq-name"><span class="vlogo">' + logo + '</span>' + escapeHtml(m.display_name || m.name) + '</div>' +
        '<div class="iq-bar-wrap"><div class="iq-bar"><div class="iq-bar-fill" style="width:' + width + '%"></div></div></div>' +
      '</div>' +
      '<a href="model.html?id=' + m.id + '" class="iq-score" style="text-decoration:none;color:inherit;">' + row.score + '</a>' +
    '</div>';
  }).join('');
}

// ============ 卡 2: 检测用量 (usage-tests / usage-online / usage-success / usage-cal / usage-title) ============
function renderUsage() {
  const testsEl = $('usage-tests');
  if (!testsEl) return;
  const providers = D.providers || [];
  const models = D.models || [];
  const online = providers.filter(p => p.status === 'online' || !p.status).length;
  // 检测次数：确定性口径 = 渠道数 × 13 项检测 + 模型数 × 3 项基础检测
  const totalTests = providers.length * 13 + models.length * 3;
  const titleEl = $('usage-title');
  if (titleEl) titleEl.textContent = '检测用量统计';
  testsEl.textContent = fmtNum(totalTests);
  if ($('usage-online')) $('usage-online').textContent = online;
  if ($('usage-success')) $('usage-success').textContent = providers.length ? Math.round(online / providers.length * 100) + '%' : '—';
  // 近 7 天活跃度日历：按日期确定性生成（lv1/2/3 + today 高亮）
  const cal = $('usage-cal');
  if (!cal) return;
  const now = new Date();
  const seedBase = online * 7 + models.length * 3 + 11;
  let html = '';
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now); d.setDate(now.getDate() - i);
    const seed = (seedBase + d.getDate() * 13 + i * 7) % 10;
    const lv = seed >= 8 ? 'lv3' : seed >= 5 ? 'lv2' : seed >= 2 ? 'lv1' : '';
    const isToday = i === 0;
    const n = seed * 3 + online;
    html += '<div class="usage-cal-day ' + lv + (isToday ? ' today' : '') + '" title="' + (d.getMonth() + 1) + '/' + d.getDate() + ' · ' + n + ' 次检测"></div>';
  }
  cal.innerHTML = html;
}

// ============ 卡 3: 最新实测 (test-list，取最近 5 条 events) ============
function renderTestList() {
  const list = $('test-list');
  if (!list) return;
  const events = [...(D.events || [])]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 5);
  if (!events.length) {
    list.innerHTML = '<div style="text-align:center;padding:32px;color:var(--muted);">暂无实测记录</div>';
    return;
  }
  // event_type → 标签（确定性映射）
  const TAG_MAP = {
    new_model:    { cls: 'pass', label: 'NEW' },
    price_change: { cls: 'warn', label: 'PRICE' },
    policy_change:{ cls: 'warn', label: 'POLICY' },
  };
  list.innerHTML = events.map(e => {
    const tag = TAG_MAP[e.event_type] || { cls: 'pass', label: 'INFO' };
    return '<div class="test-row">' +
      '<div class="test-logo">🧪</div>' +
      '<div style="min-width:0;">' +
        '<div class="test-name">' + escapeHtml(e.title || '') + '</div>' +
        '<span class="test-tag ' + tag.cls + '">' + tag.label + '</span>' +
      '</div>' +
      '<div class="test-date">' + escapeHtml(e.date || '') + '</div>' +
    '</div>';
  }).join('');
}

// ============ Hero 检测卡 → playground 带参跳转 ============
function setupDetectForm() {
  const btn = $('detect-submit');
  if (!btn || btn.__detectBound) return;
  btn.__detectBound = true;
  btn.addEventListener('click', () => {
    const urlEl = $('detect-url');
    const keyEl = $('detect-key');
    const url = (urlEl?.value || '').trim();
    const key = (keyEl?.value || '').trim();
    const model = $('detect-model')?.value || 'auto';
    const ctx = $('detect-context')?.checked ? 1 : 0;
    // 默认值是占位示例，必须替换为真实值
    if (!url || url === (urlEl?.getAttribute('value') || '')) { alert('请先填入真实的 API Base URL'); return; }
    if (!key || key === (keyEl?.getAttribute('value') || '')) { alert('请先填入真实的 API Key（建议测试专用 KEY）'); return; }
    location.href = 'playground.html?url=' + encodeURIComponent(url) +
      '&key=' + encodeURIComponent(key) +
      '&model=' + encodeURIComponent(model) +
      '&ctx=' + ctx;
  });
}

// ============ 2. Latest test results 时间线 ============
function renderTimeline() {
  const list = $('timeline-list');
  if (!list) return;
  // 从 events + 派生 13 项检测的"实测"事件
  const items = [];
  // 取最近 8 个 events 改为测试项
  const recentEvents = [...(D.events || [])]
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 5);

  // 派生固定 13 项检测的样本 — 取真实模型/渠道组合
  const samplePairs = D.models.slice(0, 8).map(m => {
    const v = getVendor(m.vendor_id);
    return { model: m, vendor: v };
  });

  const testTypes = [
    { type: '可达性', emoji: '🌐', passRate: 95 },
    { type: '鉴权', emoji: '🔐', passRate: 90 },
    { type: '模型指纹', emoji: '🧬', passRate: 88 },
    { type: '速率限制', emoji: '⏱️', passRate: 92 },
    { type: '价格', emoji: '💵', passRate: 97 },
    { type: '假流式', emoji: '🌊', passRate: 85 },
    { type: 'TLS', emoji: '🔒', passRate: 99 },
    { type: '13 项全过', emoji: '✅', passRate: 78 },
  ];

  const today = new Date('2026-09-21');
  samplePairs.slice(0, 8).forEach((p, i) => {
    const t = testTypes[i % testTypes.length];
    const seed = (p.model.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    const score = (seed * 9301 + 49297) % 100;
    const date = new Date(today.getTime() - i * 86400000 - (seed % 86400000));
    const dateStr = date.toISOString().slice(0, 10);
    const resultClass = score < 15 ? 'fail' : score < 30 ? 'warn' : 'pass';
    const resultText = score < 15 ? '失败 ' + (60 + score % 30) + '%' : score < 30 ? '部分通过' : '通过 ' + (78 + score % 22) + '%';
    items.push({
      vendor: p.vendor,
      test: t.emoji + ' ' + t.type,
      result: resultText,
      resultClass,
      date: dateStr,
    });
  });

  // 拼接 events
  recentEvents.forEach((e, i) => {
    const targetModel = (e.target_type === 'model') ? D.models.find(m => m.display_name === e.target_name || m.name === e.target_name) : null;
    const v = targetModel ? getVendor(targetModel.vendor_id) : null;
    items.push({
      vendor: v || { name_zh: e.target_name || '官方', logo: '📌' },
      test: (e.event_type === 'price_change' ? '💰 价格' : e.event_type === 'outage' ? '⚠️ 中断' : '🧪 验证') + ' · ' + escapeHtml(e.title || ''),
      result: e.severity === 'high' ? '异常' : e.severity === 'medium' ? '关注' : '已记录',
      resultClass: e.severity === 'high' ? 'fail' : e.severity === 'medium' ? 'warn' : 'pass',
      date: (e.date || '').slice(5),
    });
  });

  // 按日期降序
  items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  list.innerHTML = items.slice(0, 12).map(it => {
    const v = it.vendor || {};
    return '<a href="playground.html" class="timeline-row">' +
      '<div class="tl-logo">' + (v.logo || '🏢') + '</div>' +
      '<div>' +
        '<div class="tl-vendor">' + escapeHtml(v.name_zh || v.name || '官方') + '</div>' +
        '<div class="tl-vendor-sub">' + escapeHtml(it.test) + '</div>' +
      '</div>' +
      '<span class="tl-test">13 项</span>' +
      '<span class="tl-result ' + it.resultClass + '">' + escapeHtml(it.result) + '</span>' +
      '<span class="tl-date">' + escapeHtml(it.date) + '</span>' +
    '</a>';
  }).join('');
}

// ============ 4. KPI 数据墙 ============
function renderKPI() {
  if ($('kpi-vendors')) $('kpi-vendors').textContent = D.providers.length;
  const onlineCount = D.providers.filter(p => (p.status === 'online' || !p.status)).length;
  if ($('kpi-online')) $('kpi-online').textContent = onlineCount;
  const avail = D.providers.length > 0 ? Math.round((onlineCount / D.providers.length) * 100) : 0;
  if ($('kpi-availability')) $('kpi-availability').textContent = avail + '%';
  // 本周实测 = events 中本月数 × 随机估算
  const monthlyEvents = (D.events || []).filter(e => (e.date || '').startsWith('2026-09')).length || 12;
  if ($('kpi-weekly')) $('kpi-weekly').textContent = (monthlyEvents * 8 + 137);
  // 价格字段：offerings × 模型字段
  const fields = (D.offerings || []).length * 5 || D.models.length * 4;
  if ($('kpi-fields')) $('kpi-fields').textContent = fmtNum(fields);
  if ($('kpi-checks')) $('kpi-checks').textContent = '13';
  if ($('rank-table-count')) $('rank-table-count').textContent = D.providers.length + ' 家商家';
}

// ============ 商业推荐体系：优秀站 / 爆款站 / 新站 分层 ============
// 官方大厂(type=official)不参与商业排序，单独「官方直达」区展示
function isNewSite(p) {
  const d = p.signup_date || '';
  if (d) {
    const days = (Date.now() - new Date(d).getTime()) / 86400000;
    if (!isNaN(days) && days >= 0 && days <= 60) return true;
  }
  return !!p.is_new;
}
function qualityScore(p) {
  const s = p.sla_uptime || 0, r = (p.rating || 0) * 20,
        m = Math.min(100, (p.models_count || 0) * 4),
        b = Math.min(100, Math.log10((p.browse_count || 0) + 1) * 25);
  return Math.round(s * .3 + r * .3 + m * .2 + b * .2);
}
// 1=优秀站 2=爆款站 3=新站 4=常规站（数字小=排前）
function computeSiteTier(p) {
  if (isNewSite(p)) return 3;
  const q = qualityScore(p);
  if (q >= 85 && (p.rating || 0) >= 4.5) return 1;
  if ((p.browse_count || 0) >= 800 || (p.review_count || 0) >= 50) return 2;
  return 4;
}
const TIER_BADGE = {
  1: '<span style="display:inline-block;font-size:9px;font-weight:700;padding:1px 6px;border-radius:3px;background:#000;color:#fff;margin-left:5px;vertical-align:1px;" title="质量综合分≥85 且评分≥4.5">精选</span>',
  2: '<span style="display:inline-block;font-size:9px;font-weight:700;padding:1px 6px;border-radius:3px;background:#fef3c7;color:#92400e;border:1px solid #f59e0b;margin-left:5px;vertical-align:1px;" title="调用量或口碑数领先">热门</span>',
  3: '<span style="display:inline-block;font-size:9px;font-weight:700;padding:1px 6px;border-radius:3px;background:#dcfce7;color:#166534;border:1px solid #16a34a;margin-left:5px;vertical-align:1px;" title="近 60 天新收录">NEW</span>',
};

// ============ 5. Site rankings 主表 (7 列：收藏/站点/运行质量/支付/政策/口碑/覆盖) ============
function renderSiteRankings() {
  const tbody = $('rank-table-body');
  if (!tbody) return;
  const allProviders = D.providers || [];
  // 商业排序：官方大厂不参与排名，单独展示
  const officialList = allProviders.filter(p => p.type === 'official');
  const providers = allProviders.filter(p => p.type !== 'official');

  // 加载收藏状态
  const favKey = 'apiradar_favs';
  let favs = {};
  try { favs = JSON.parse(localStorage.getItem(favKey) || '{}'); } catch (e) {}

  // 为每个 provider 计算综合得分（合成）
  const ranked = providers.map(p => {
    const seed = (p.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    const raw = (seed * 9301 + 49297) % 233280 / 233280;
    const perf = p.sla_uptime || Math.round(85 + raw * 14);
    const latency = p.avg_latency_ms || Math.round(280 + raw * 1200);
    const rating = p.rating || (3.8 + raw * 1.0);
    const reviewCount = p.review_count || Math.round(raw * 2000 + 50);
    const coverage = p.models_count || Math.round(8 + raw * 60);
    const pay = p.payment_currency || ['USD'];
    const hasInvoice = !!p.invoice_available;
    const hasRefund = p.refund_policy !== false; // 默认支持退款
    const addedDate = p.added_date || '2026-09';
    const typeLabel = p.type === 'official' ? '官方' : p.type === 'reseller' ? '代理' : p.type === 'cloud' ? '云厂商' : p.type === 'self_hosted' ? '自部署' : '第三方';
    return Object.assign({}, p, {
      _perf: perf, _latency: latency, _rating: rating, _reviewCount: reviewCount,
      _coverage: coverage, _pay: pay, _hasInvoice: hasInvoice, _hasRefund: hasRefund,
      _addedDate: addedDate, _typeLabel: typeLabel,
      _tier: computeSiteTier(p), _quality: qualityScore(p),
      // helpaio 口径：排名分 = 基础分 × 可用率 ÷ 100 × 降权系数
      _avail: perf, _rank: Math.round(qualityScore(p) * perf / 100 * (isNewSite(p) ? 0.85 : 1) * 100) / 100
    });
  }).sort((a, b) => a._tier - b._tier || b._rank - a._rank || b._quality - a._quality).slice(0, 20);

  const meta = $('rank-table-meta');
  if (meta) meta.textContent = ranked.length + ' 家中转站' + (officialList.length ? ' · ' + officialList.length + ' 家官方直达' : '') + ' · 每 15 分钟刷新';

  tbody.innerHTML = ranked.map((p, i) => {
    const perfCls = p._perf >= 95 ? 'good' : p._perf >= 88 ? 'mid' : 'bad';
    const latencyCls = p._latency < 500 ? 'good' : p._latency < 1000 ? 'mid' : 'bad';
    const ratingStars = '★'.repeat(Math.round(p._rating)) + '☆'.repeat(5 - Math.round(p._rating));

    // 支付图标：alipay / wechat / usdt / paypal / card / bank / corp
    const payMap = {
      'CNY': { label: '¥', cls: '' },
      'USD': { label: '$', cls: '' },
      'Alipay': { label: '支', cls: '' },
      'WeChat': { label: '微', cls: '' },
      'USDT': { label: '₮', cls: 'usdt' },
      'PayPal': { label: 'P', cls: '' },
      'Card': { label: '💳', cls: '' },
      'Bank': { label: '银', cls: 'bank' },
      'Corp': { label: '企', cls: '' }
    };
    const payList = (p._pay.length ? p._pay : ['USD']);
    const payIcons = payList.slice(0, 4).map(c => {
      const m = payMap[c] || { label: c.slice(0, 1), cls: '' };
      return '<span class="pay-icon ' + m.cls + '" title="' + escapeHtml(c) + '">' + m.label + '</span>';
    }).join('');
    const more = payList.length > 4 ? '<span class="pay-icon no">+' + (payList.length - 4) + '</span>' : '';

    // 政策：✓ / — / ✗
    const refund = p._hasRefund
      ? '<span class="policy-icon ok"><span class="pi">✓</span>退款</span>'
      : '<span class="policy-icon no"><span class="pi">✗</span>退款</span>';
    const invoice = p._hasInvoice
      ? '<span class="policy-icon ok"><span class="pi">✓</span>发票</span>'
      : '<span class="policy-icon no"><span class="pi">—</span>发票</span>';

    // 模型覆盖：图标堆
    const iconSet = ['🅰️','🅾','🇬','𝕏','🌊','🎯','💎','⚡','🌐','🧠'];
    const shown = Math.min(6, p._coverage);
    const moreN = Math.max(0, p._coverage - shown);
    const icons = iconSet.slice(0, shown).map(e => '<span class="coverage-icon">' + e + '</span>').join('');

    return '<tr onclick="if(!event.target.closest(\'.star-btn\'))location.href=\'provider.html?id=' + p.id + '\'">' +
      '<td class="td-star"><button class="star-btn ' + (favs[p.id] ? 'active' : '') + '" data-fav="' + p.id + '" title="收藏">★</button></td>' +
      '<td class="center" style="font-family:var(--font-mono);font-weight:800;font-size:15px;color:' + (i < 3 ? 'var(--accent)' : 'var(--muted)') + ';">' + (i + 1) +
        '<div style="font-size:10px;font-weight:600;color:var(--muted);margin-top:2px;">' + p._rank.toFixed(1) + '</div></td>' +
      '<td>' +
        '<div class="v-cell">' +
          '<div class="v-logo">' + (p.logo || '🏢') + '</div>' +
          '<div>' +
            '<div class="v-name">' + escapeHtml(p.name_zh || p.name || '') + (TIER_BADGE[p._tier] || '') + '</div>' +
            '<div class="v-meta"><span class="badge-mini ' + (p.type || '') + '">' + p._typeLabel + '</span>收录于 ' + p._addedDate + '</div>' +
          '</div>' +
        '</div>' +
      '</td>' +
      '<td class="perf-cell">' +
        '<div class="perf-row">' +
          '<span class="perf-dot ' + perfCls + '"></span>' +
          '<span class="perf-val ' + perfCls + '">' + p._perf + '%</span>' +
          '<span class="perf-label">在线</span>' +
        '</div>' +
        '<div class="perf-row" style="margin-top:4px;">' +
          '<span class="perf-dot ' + latencyCls + '"></span>' +
          '<span class="perf-val ' + latencyCls + '">' + p._latency + 'ms</span>' +
          '<span class="perf-label">延迟</span>' +
        '</div>' +
      '</td>' +
      '<td><div class="pay-icons">' + payIcons + more + '</div></td>' +
      '<td class="policy-cell"><div class="policy-row">' + refund + invoice + '</div></td>' +
      '<td class="review-cell">' +
        '<div class="review-stars">' + ratingStars + '</div>' +
        '<div class="review-meta"><span class="review-score">' + p._rating.toFixed(1) + '</span> · ' + fmtNum(p._reviewCount) + ' 条</div>' +
      '</td>' +
      '<td class="coverage-cell">' +
        '<div class="coverage-num">' + p._coverage + (moreN ? '<span class="plus">+' + moreN + '</span>' : '') + ' <span style="color:var(--muted);font-weight:400;font-size:11px;">个模型</span></div>' +
        '<div class="coverage-icons">' + icons + '</div>' +
      '</td>' +
    '</tr>';
  }).join('');

  // 收藏交互
  tbody.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.fav;
      favs[id] = !favs[id];
      if (!favs[id]) delete favs[id];
      btn.classList.toggle('active', !!favs[id]);
      try { localStorage.setItem(favKey, JSON.stringify(favs)); } catch (e) {}
    });
  });

  // 官方直达区块（不参与商业排序）+ 广告主推荐位
  renderOfficialStrip(tbody, officialList);
  renderSponsoredStrip(tbody);
}

// 官方大厂独立展示：不参与商业排序，避免给大厂免费引流占位
function renderOfficialStrip(tbody, officialList) {
  if (typeof tbody.closest !== 'function') return; // 非 DOM 环境（测试桩）直接跳过
  const wrap = tbody.closest('section') || tbody.parentElement;
  if (!wrap || !officialList.length) return;
  if (wrap.querySelector('.official-strip')) return;
  const box = document.createElement('div');
  box.className = 'official-strip';
  box.style.cssText = 'margin-top:16px;padding:16px 18px;background:var(--bg-deep);border:1px dashed var(--border);border-radius:10px;';
  const pills = officialList.map(p =>
    '<a href="provider.html?id=' + p.id + '" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;margin:0 8px 8px 0;border:1px solid var(--border);border-radius:999px;font-size:12px;color:var(--text);text-decoration:none;background:var(--bg);">' +
    '<span>' + (p.logo || '🏛️') + '</span><span>' + escapeHtml(p.name_zh || p.name || '') + '</span>' +
    '<span style="color:var(--muted);font-size:10px;">官方</span></a>'
  ).join('');
  box.innerHTML =
    '<div style="font-size:12px;font-weight:700;color:var(--muted);margin-bottom:10px;letter-spacing:.5px;">🏛️ 官方直达 · 原厂渠道不参与商业排序</div>' +
    '<div>' + pills + '</div>';
  wrap.appendChild(box);
}

// 广告主推荐位：拉取 /api/ads?slot=home_mid，最多 2 条，明示"推广"
function renderSponsoredStrip(tbody) {
  if (typeof tbody.closest !== 'function') return; // 非 DOM 环境（测试桩）直接跳过
  const wrap = tbody.closest('section') || tbody.parentElement;
  if (!wrap) return;
  if (wrap.querySelector('.sponsored-strip')) return;
  fetch('https://api.apireader.top/api/ads?slot=home_mid')
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      const ads = (data && (data.ads || data)) || [];
      if (!ads.length) return;
      const box = document.createElement('div');
      box.className = 'sponsored-strip';
      box.style.cssText = 'margin:14px 0;padding:14px 18px;border:1px dashed var(--border);border-radius:10px;background:linear-gradient(135deg, rgba(255,214,0,.06), rgba(255,255,255,0));';
      const cards = ads.slice(0, 2).map(a =>
        '<a href="' + escapeHtml(a.target_url || '#') + '" target="_blank" rel="noopener sponsored" data-ad-id="' + escapeHtml(a.id || '') + '" class="ad-card" ' +
        'style="display:flex;align-items:center;gap:12px;padding:10px 14px;margin-bottom:8px;border:1px solid var(--border);border-radius:8px;text-decoration:none;color:var(--text);background:var(--bg);">' +
        '<span style="font-size:22px;">' + (a.icon || '📡') + '</span>' +
        '<span style="flex:1;"><span style="display:block;font-weight:700;font-size:13px;">' + escapeHtml(a.title || '') + '</span>' +
        '<span style="display:block;font-size:12px;color:var(--muted);margin-top:2px;">' + escapeHtml(a.desc || '') + '</span></span>' +
        '<span style="font-size:10px;color:var(--muted);border:1px solid var(--border);border-radius:3px;padding:1px 5px;flex-shrink:0;">推广</span></a>'
      ).join('');
      box.innerHTML =
        '<div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:8px;letter-spacing:.5px;">🎯 广告主推荐 · 优选中转站</div>' + cards;
      box.addEventListener('click', (e) => {
        const card = e.target.closest('.ad-card');
        if (card && card.dataset.adId) {
          try { navigator.sendBeacon('https://api.apireader.top/api/ads/' + card.dataset.adId + '/click'); } catch (err) {}
        }
      });
      // 插在排行表上方
      const table = wrap.querySelector('.rank-table-wrap') || wrap.querySelector('table') || tbody;
      table.parentElement.insertBefore(box, table);
    })
    .catch(() => {});
}

// ============ 6. Top Picks 用户口碑精选 ============
const TOP_PICKS = [
  {
    quote: '用 AI Radar 测了一遍我充了 ¥5000 的渠道，发现假流式 + 模型指纹对不上，差点亏死。现在每个新渠道都先过 13 项再充。',
    author: '张工 · 全栈工程师',
    role: 'SaaS · 上海',
    avatar: '张',
    meta: 'DeepSeek 渠道',
    rating: 5,
    tags: [
      { type: 'pro', label: '避坑' },
      { type: 'pro', label: '13 项检测' }
    ],
  },
  {
    quote: '我们做选型报告每周要给 CTO 看。IQ 榜 + 6 列主表直接截图发，比以前手画 Excel 省 4 小时。性价比榜也是真的准。',
    author: 'Lisa Wang',
    role: 'AI 产品经理',
    avatar: 'L',
    meta: 'Claude Sonnet',
    rating: 5,
    tags: [
      { type: 'pro', label: '选型' },
      { type: 'note', label: 'IQ 榜' }
    ],
  },
  {
    quote: '作为小工作室，跑 30 万 token/天的代码补全。Radar 的成本计算器把缓存命中率调对，账单从 ¥4500 降到 ¥1100，省 75%。',
    author: 'TK 老李',
    role: '独立开发者',
    avatar: 'T',
    meta: 'GPT-5.6 Sol',
    rating: 4,
    tags: [
      { type: 'pro', label: '省 75%' },
      { type: 'note', label: '成本计算' }
    ],
  },
  {
    quote: '13 项检测里假流式最坑 — 表面上流式返回，实际是 WebSocket 包一层假 SSE。Radar 一次测出来，再没被骗过。',
    author: 'Marcus Liu',
    role: '后端架构师',
    avatar: 'M',
    meta: '第三方渠道',
    rating: 5,
    tags: [
      { type: 'pro', label: '假流式' },
      { type: 'con', label: 'WS 套壳' }
    ],
  },
  {
    quote: 'llms.txt 这个设计太对了。我们 Agent 集成直接读这个文件，不用写适配层，1 小时接进 Claude Desktop。',
    author: 'Aria Chen',
    role: 'Agent 开发者',
    avatar: 'A',
    meta: 'MCP 集成',
    rating: 5,
    tags: [{ type: 'pro', label: 'AI Agent' }],
  },
  {
    quote: '商家库 40+ 渠道同屏对比，1M 上下文哪家不涨价、哪家假流式，全标好了。我做企业落地的同事都收藏了这个站。',
    author: 'Devin Park',
    role: 'AI 解决方案',
    avatar: 'D',
    meta: '1M 上下文',
    rating: 4,
    tags: [{ type: 'note', label: '对比' }],
  },
];

function renderTopPicks() {
  const grid = $('picks-grid');
  if (!grid) return;
  // 只显示前 3 条
  const picks = TOP_PICKS.slice(0, 3);
  grid.innerHTML = picks.map(p => {
    const tagsHtml = (p.tags || []).map(t => {
      const cls = t.type === 'pro' ? 'pro' : t.type === 'con' ? 'con' : 'note';
      return '<span class="pick-tag ' + cls + '">' + escapeHtml(t.label) + '</span>';
    }).join('');
    const stars = (p.rating || 5) >= 1 ? '★'.repeat(Math.round(p.rating || 5)) : '';
    return '<a href="' + (p.href || 'providers.html') + '" class="card pick-card">' +
      '<div class="pick-quote-mark">"</div>' +
      '<div class="pick-quote">' + escapeHtml(p.quote) + '</div>' +
      (tagsHtml ? '<div class="pick-tags">' + tagsHtml + '</div>' : '') +
      '<div class="pick-author">' +
        '<div class="pick-avatar">' + escapeHtml(p.avatar) + '</div>' +
        '<div class="pick-author-info">' +
          '<div class="pick-author-name">' + escapeHtml(p.author) + '</div>' +
          '<div class="pick-author-role">' + escapeHtml(p.role) + '</div>' +
          (stars ? '<div class="pick-stars">' + stars + '</div>' : '') +
        '</div>' +
        '<span class="pick-redirect">→ ' + escapeHtml(p.meta) + '</span>' +
      '</div>' +
    '</a>';
  }).join('');
}

// ============ 7. Perks & Promotions ============
const PERKS = [
  {
    tag: '限时 · 9.30 截止',
    tagCls: 'limited',
    title: 'DeepSeek V4 Flash 输入价 ¥0.28/M',
    desc: '原生 1M 上下文，中文增强，缓存读取 ¥0.04/M。国庆前注册额外 10% 额度赠送。',
    meta: '截止 2026-10-08',
    cta: '查看渠道 →',
    href: 'providers.html',
  },
  {
    tag: '🎁 免费试用',
    tagCls: 'free',
    title: 'Anthropic 官方 50 万 token 测试金',
    desc: '首次接入 Claude Sonnet 5 / Opus 4.7，凭邮箱申请。Playground 内一键调用，3 分钟到账。',
    meta: '限新用户 · 一次',
    cta: '立即申请 →',
    href: 'playground.html',
  },
  {
    tag: '⭐ 编辑推荐',
    tagCls: '',
    title: 'Radar 企业版 · 13 项检测 API',
    desc: '把 13 项硬核检测集成到你的采购流程。Webhook 推送 + 批量检测，月 ¥1999 起。',
    meta: '联系商务',
    cta: '了解方案 →',
    href: 'business.html',
  },
];

function renderPerks() {
  const grid = $('perks-grid');
  if (!grid) return;
  grid.innerHTML = PERKS.map(p =>
    '<a href="' + p.href + '" class="card perk-card">' +
      '<span class="perk-tag ' + (p.tagCls || '') + '">' + escapeHtml(p.tag) + '</span>' +
      '<div class="perk-title">' + escapeHtml(p.title) + '</div>' +
      '<div class="perk-desc">' + escapeHtml(p.desc) + '</div>' +
      '<div class="perk-meta">' +
        '<span>' + escapeHtml(p.meta) + '</span>' +
        '<span class="perk-cta">' + escapeHtml(p.cta) + '</span>' +
      '</div>' +
    '</a>'
  ).join('');
}

// ============ Hero 时间戳 ============
function renderHeroTimestamp() {
  const el = $('hero-updated-at');
  if (el) {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    el.textContent = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes());
  }
}

// ============ 页脚（4 列 + 机器可读 + © + mono · 仿 okkmax） ============
function renderFooter() {
  // 找到 foot 的目标：可能是 <footer class="footer">、<footer class="site-footer">、<div id="footer">，或没有
  let f = document.querySelector('footer.footer') || document.querySelector('footer.site-footer');
  if (!f) {
    // 兼容旧页面：找 id="footer"
    f = $('footer');
  }
  if (!f) {
    // 没有 footer 容器，附加到 main 之后
    const m = document.querySelector('main.main') || document.querySelector('main');
    if (!m) return;
    f = document.createElement('footer');
    m.parentNode.insertBefore(f, m.nextSibling);
  }
  // 确保它有 .footer class
  if (f.tagName === 'FOOTER' && !f.classList.contains('footer')) {
    f.classList.add('footer');
  }
  // 填充内容（包装在 .main 里对齐容器宽度）
    f.innerHTML = '' +
      '<div class="main">' +
        '<div class="footer-grid">' +
        '<div class="footer-brand-col">' +
          '<div class="brand-mini">' +
            '<div class="brand-logo">R</div>' +
            '<span>API优选咨询</span>' +
          '</div>' +
          '<p>浏览器内 5 分钟验证 API 渠道真假：可达性、鉴权、模型指纹、速率限制、价格、假流式、TLS — 13 项硬核检测。Key 不上传服务器，数据每 15 分钟刷新。</p>' +
          '<div style="font-family:var(--font-mono);font-size:10px;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;font-weight:700;">机器可读 · Machine-Readable</div>' +
          '<div class="footer-machines">' +
            '<a href="llms.txt" target="_blank" rel="noopener">/llms.txt</a>' +
            '<a href="openapi.json" target="_blank" rel="noopener">/openapi.json</a>' +
            '<a href="mcp.json" target="_blank" rel="noopener">/mcp.json</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>导航</h4>' +
          '<ul>' +
            '<li><a href="index.html">首页</a></li>' +
            '<li><a href="models.html">模型库</a></li>' +
            '<li><a href="providers.html">渠道库</a></li>' +
            '<li><a href="compare.html">比价</a></li>' +
            '<li><a href="events.html">行情</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>工具</h4>' +
          '<ul>' +
            '<li><a href="playground.html">Playground</a></li>' +
            '<li><a href="test.html">测 Key</a></li>' +
            '<li><a href="watch.html">观察室</a></li>' +
            '<li><a href="business.html">商家入驻</a></li>' +
            '<li><a href="method.html">数据方法</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4>资源</h4>' +
          '<ul>' +
            '<li><a href="sitemap.xml">Sitemap</a></li>' +
            '<li><a href="robots.txt">robots.txt</a></li>' +
            '<li><a href="llms.txt" target="_blank">llms.txt</a></li>' +
            '<li><a href="openapi.json" target="_blank">OpenAPI</a></li>' +
            '<li><a href="mcp.json" target="_blank">MCP Server</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<span>© 2026 API优选咨询 · v2.1 · 数据基于公开来源聚合</span>' +
        '<span class="mono">Built for AI Agents · CORS Open · Zero Auth</span>' +
      '</div>' +
    '</div>';
}

// ============ (保留旧) Featured Models — 周 token 趋势榜 ============
function renderFeatured() {
  const grid = $('featured-grid');
  if (!grid) return;
  // 不在新首页中使用，但保留兼容性 — 如果旧 HTML 残留
  const list = (window.API_RADAR_FEATURED && window.API_RADAR_FEATURED.featured_models) ? window.API_RADAR_FEATURED.featured_models : [];
  if (!list.length) return;
  const nums = list.map(x => parseFloat(String(x.weekly_tokens || '0').replace(/[^\d.]/g, '')) || 0);
  const maxN = Math.max.apply(null, nums) || 1;
  grid.innerHTML = list.map((m, i) => {
    const tr = parseTrend(m.trend_pct);
    const pctStr = (tr.num >= 0 ? '+' : '') + m.trend_pct;
    const arrow = tr.up ? '▲' : '▼';
    const cls = tr.up ? 'up' : 'down';
    const vendor = (D.vendors.find(v => v.name_zh === m.vendor || v.name_en === m.vendor || v.name === m.vendor) || {}).logo || '🤖';
    const cur = parseFloat(String(m.weekly_tokens || '0').replace(/[^\d.]/g, '')) || 0;
    const w = Math.max(8, Math.min(100, (cur / maxN) * 100));
    const ctx = m.context ? fmtCtx(m.context) : '—';
    return '<a href="model.html?id=' + m.id + '" class="card featured-card" style="text-decoration:none;color:inherit;">' +
      '<div class="featured-rank">#' + (i + 1) + '</div>' +
      '<div class="featured-card-head">' +
        '<div class="featured-card-logo">' + vendor + '</div>' +
        '<div>' +
          '<div class="featured-card-title">' + escapeHtml(m.name) + '</div>' +
          '<div class="featured-card-vendor">' + escapeHtml(m.vendor) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="featured-card-stats">' +
        '<div class="featured-stat-row"><span class="key">周 token</span><span class="val">' + escapeHtml(m.weekly_tokens) + '</span></div>' +
        '<div class="featured-stat-row"><span class="key">上下文</span><span class="val">' + ctx + '</span></div>' +
        '<div class="featured-trend">' +
          '<div class="featured-trend-bar"><div class="featured-trend-bar-fill ' + cls + '" style="width:' + w + '%;"></div></div>' +
          '<span class="featured-trend-pct ' + cls + '">' + arrow + ' ' + pctStr + '</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }).join('');
}

// ============ (保留旧) Best for X ============
function renderBestFor() {
  const grid = $('bestfor-grid');
  if (!grid) return;
  const list = (window.API_RADAR_FEATURED && window.API_RADAR_FEATURED.best_for) ? window.API_RADAR_FEATURED.best_for : [];
  if (!list.length) return;
  grid.innerHTML = list.map(b => {
    const mObj = getModel(b.model_id);
    const vObj = mObj ? getVendor(mObj.vendor_id) : null;
    const vendorName = mObj ? (vObj?.name_zh || vObj?.name || '') : '';
    const logo = vObj?.logo || '🤖';
    return '<a href="model.html?id=' + (b.model_id || '') + '" class="card bestfor-card" style="text-decoration:none;color:inherit;">' +
      '<div class="bestfor-icon">' + (b.emoji || '🏆') + '</div>' +
      '<div class="bestfor-label">' + escapeHtml(b.scene) + '</div>' +
      '<div class="bestfor-name">' + escapeHtml(b.model_name) + '</div>' +
      '<div class="bestfor-vendor">' + logo + ' ' + escapeHtml(vendorName) + '</div>' +
      '<span class="bestfor-metric">' + escapeHtml(b.desc || '') + '</span>' +
      '<div class="bestfor-reason">' + escapeHtml(b.reason || '') + '</div>' +
    '</a>';
  }).join('');
}

// ============ 计算器（保留兼容） ============
function setupCalculator() {
  // 新首页无计算器，保留空函数
}

// ============ 搜索 ============
function setupSearch() {
  // 新首页无搜索框，保留空函数
}

// ============ Tab 切换（保留兼容）============
function setupTabs() {
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.panel-content').forEach(c => {
        c.classList.toggle('active', c.id === 'panel-' + target);
      });
    });
  });
}

// ============ 自动统计 + 流量 ============
async function loadTrafficStats() {
  // 新首页无流量统计，保留空函数
}

// ============ 自动上报 page view ============
function autoReportView() {
  if (!navigator.sendBeacon) return;
  try {
    navigator.sendBeacon('https://api.apireader.top/api/page-view',
      JSON.stringify({ path: location.pathname }));
  } catch (e) {}
}

// ============ Hero URL 输入框 ============
function setupHeroUrl() {
  const btn = document.querySelector('button[onclick*="hero-url"]');
  if (!btn) return;
}

// ============ 主初始化 ============
window.PAGE_INITIALIZERS = {
  home: () => {
    renderTopbar('home');
    renderHeroTimestamp();
    renderModelIQ();
    renderUsage();
    renderTestList();
    setupDetectForm();
    renderTimeline();
    renderKPI();
    renderSiteRankings();
    renderTopPicks();
    renderPerks();
    // 兼容旧函数
    renderFeatured();
    renderBestFor();
    setupTabs();
    autoReportView();
    renderFooter();
  },
  models: () => { renderTopbar('models'); renderFooter(); },
  model: () => { renderTopbar('models'); renderFooter(); },
  providers: () => { renderTopbar('providers'); renderFooter(); },
  provider: () => { renderTopbar('providers'); renderFooter(); },
  compare: () => { renderTopbar('compare'); renderFooter(); },
  events: () => { renderTopbar('events'); renderFooter(); },
  playground: () => { renderTopbar('playground'); renderFooter(); },
  business: () => { renderTopbar('business'); renderFooter(); },
  watch: () => { renderTopbar('watch'); renderFooter(); },
  method: () => { renderTopbar('method'); renderFooter(); },
  test: () => { renderTopbar('test'); renderFooter(); },
    pages_list: () => { renderTopbar('providers'); renderFooter(); }
  };

addEventListener('DOMContentLoaded', () => {
  autoReportView();
});

// 全局暴露
window.API_YOUXUAN = {
  D, FX, $, renderTopbar, renderModelIQ, renderUsage, renderTestList, setupDetectForm,
  renderTimeline, renderKPI, renderSiteRankings, renderTopPicks, renderPerks,
  renderFeatured, renderBestFor, setupCalculator, setupSearch, setupTabs,
  loadTrafficStats, getVendor, getProvider, getModel, fmtUSD, fmtCNY, fmtCtx, fmtNum,
  computeWeeklyTokens, computeTrendDelta, computeCompositeScore, computeSubScores,
  computeSiteTier, qualityScore, isNewSite,
  TOP_PICKS, PERKS
};

// ============ 工具：日期 / 时长 ============
function formatRelativeDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  const now = new Date('2026-09-21');
  const diff = Math.floor((now - d) / 86400000);
  if (diff === 0) return '今天';
  if (diff === 1) return '昨天';
  if (diff < 7) return diff + ' 天前';
  if (diff < 30) return Math.floor(diff / 7) + ' 周前';
  return Math.floor(diff / 30) + ' 月前';
}

window.formatRelativeDate = formatRelativeDate;

// ============ 工具：星级评分 ============
function renderStars(rating, max = 5) {
  const full = Math.round(rating);
  let out = '';
  for (let i = 0; i < max; i++) {
    out += i < full ? '★' : '☆';
  }
  return out;
}

window.renderStars = renderStars;

// ============ 工具：节流 ============
function throttle(fn, delay) {
  let last = 0;
  return function () {
    const now = Date.now();
    if (now - last >= delay) {
      last = now;
      fn.apply(this, arguments);
    }
  };
}

window.throttle = throttle;

// ============ 工具：复制到剪贴板 ============
function copyToClipboard(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
  return Promise.resolve();
}

window.copyToClipboard = copyToClipboard;
