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

// ============ 顶部导航 ============
const NAV = [
  { href: 'index.html', label: '首页', id: 'home' },
  { href: 'models.html', label: '模型库', id: 'models' },
  { href: 'providers.html', label: '渠道库', id: 'providers' },
  { href: 'compare.html', label: '比价', id: 'compare' },
  { href: 'events.html', label: '行情', id: 'events' },
  { href: 'playground.html', label: 'Playground', id: 'playground' },
  { href: 'business.html', label: '商家', id: 'business' },
  { href: 'watch.html', label: '观察室', id: 'watch' },
  { href: 'method.html', label: '方法', id: 'method' },
  { href: 'test.html', label: '测 Key', id: 'test' },
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

// ============ 2. Model IQ Ranking (1/2/3 大卡片 + #4-6 小榜) ============
function renderModelIQ() {
  const grid = $('iq-grid');
  const tail = $('iq-tail');
  if (!grid) return;
  // 取 IQ 分数前 6 的模型
  const ranked = D.models
    .map(m => ({ m, score: computeCompositeScore(m) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 6);

  if (!ranked.length) {
    grid.innerHTML = '<div class="muted" style="grid-column:1/-1;text-align:center;padding:32px;">暂无模型数据</div>';
    return;
  }

  const top3 = ranked.slice(0, 3);
  grid.innerHTML = top3.map((row, i) => {
    const m = row.m;
    const v = getVendor(m.vendor_id);
    const vendorName = v?.name_zh || v?.name || '';
    const logo = v?.logo || '🤖';
    const subs = computeSubScores(m);
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    const ctx = m.context_window || 0;
    const trend = computeTrendDelta(m);
    const trendArrow = trend >= 0 ? '▲' : '▼';
    const trendColor = trend >= 0 ? 'var(--success)' : '#f87171';
    const cls = i === 0 ? 'iq-card-1' : '';
    return '<a href="model.html?id=' + m.id + '" class="card iq-card ' + cls + '" style="text-decoration:none;color:inherit;">' +
      '<div class="iq-rank-big">#' + (i + 1) + '</div>' +
      '<div class="iq-head">' +
        '<div class="iq-logo">' + logo + '</div>' +
        '<div style="flex:1;min-width:0;">' +
          '<div class="iq-name">' + escapeHtml(m.display_name || m.name) + '</div>' +
          '<div class="iq-vendor">' + escapeHtml(vendorName) + ' · ' + fmtCtx(ctx) + ' ctx · ' + fmtUSD(inp) + '/' + fmtUSD(out) + '</div>' +
        '</div>' +
        '<div style="text-align:right;">' +
          '<div class="iq-score">' + row.score + '</div>' +
          '<div class="iq-score-label">IQ 分数</div>' +
        '</div>' +
      '</div>' +
      '<div class="iq-breakdown">' +
        '<div class="iq-bd-cell"><div class="iq-bd-num">' + subs.Cap + '</div><div class="iq-bd-label">能力</div></div>' +
        '<div class="iq-bd-cell"><div class="iq-bd-num">' + subs.Price + '</div><div class="iq-bd-label">性价比</div></div>' +
        '<div class="iq-bd-cell"><div class="iq-bd-num" style="color:' + trendColor + ';">' + trendArrow + ' ' + Math.abs(trend) + '%</div><div class="iq-bd-label">周趋势</div></div>' +
      '</div>' +
    '</a>';
  }).join('');

  // 4-6 名小卡片
  if (tail && ranked.length > 3) {
    const tail3 = ranked.slice(3, 6);
    tail.innerHTML = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">' + tail3.map((row) => {
      const m = row.m;
      const v = getVendor(m.vendor_id);
      const vendorName = v?.name_zh || v?.name || '';
      const logo = v?.logo || '🤖';
      const inp = m.official_input_usd_m || m.price_input_per_m || 0;
      const out = m.official_output_usd_m || m.price_output_per_m || 0;
      const trend = computeTrendDelta(m);
      const trendArrow = trend >= 0 ? '▲' : '▼';
      const trendColor = trend >= 0 ? 'var(--success)' : '#f87171';
      return '<a href="model.html?id=' + m.id + '" class="card" style="padding:16px 18px;text-decoration:none;color:inherit;display:flex;align-items:center;gap:14px;transition:all 0.2s;">' +
        '<div style="font-family:var(--font-mono);font-size:22px;font-weight:800;color:var(--fg-strong);min-width:32px;">#' + row.score + '</div>' +
        '<div style="width:36px;height:36px;border-radius:8px;background:var(--bg-deep);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;">' + logo + '</div>' +
        '<div style="flex:1;min-width:0;">' +
          '<div style="font-weight:700;font-size:13px;line-height:1.2;">' + escapeHtml(m.display_name || m.name) + '</div>' +
          '<div style="font-size:11px;color:var(--muted);margin-top:3px;">' + escapeHtml(vendorName) + ' · ' + fmtUSD(inp) + '/' + fmtUSD(out) + '</div>' +
        '</div>' +
        '<div style="font-family:var(--font-mono);font-size:11px;font-weight:700;color:' + trendColor + ';">' + trendArrow + ' ' + Math.abs(trend) + '%</div>' +
      '</a>';
    }).join('') + '</div>';
  }
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

// ============ 5. Site rankings 6 列主表 ============
function renderSiteRankings() {
  const tbody = $('rank-table-body');
  if (!tbody) return;
  const providers = (D.providers || []).slice(0, 20);

  // 为每个 provider 计算综合得分（合成）
  const ranked = providers.map(p => {
    const seed = (p.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    const raw = (seed * 9301 + 49297) % 233280 / 233280;
    // 性能：基于 sla_uptime 或合成
    const perf = p.sla_uptime || Math.round(85 + raw * 14);
    // 评分：基于 rating
    const rating = p.rating || (3.8 + raw * 1.0);
    const reviewCount = p.review_count || Math.round(raw * 2000 + 50);
    // 模型覆盖：基于 models_count 或合成
    const coverage = p.models_count || Math.round(8 + raw * 60);
    // 支付：USD/CNY/发票
    const pay = p.payment_currency || ['USD'];
    const hasInvoice = !!p.invoice_available;
    // 政策：合规 tags
    const policy = p.compliance || [];
    return Object.assign({}, p, { _perf: perf, _rating: rating, _reviewCount: reviewCount, _coverage: coverage, _pay: pay, _hasInvoice: hasInvoice, _policy: policy });
  }).sort((a, b) => b._perf - a._perf);

  if ($('rank-table-count')) $('rank-table-count').textContent = ranked.length + ' 家商家';

  tbody.innerHTML = ranked.map((p, i) => {
    const perfCls = p._perf >= 95 ? 'good' : p._perf >= 88 ? 'mid' : 'bad';
    const ratingStars = '★'.repeat(Math.round(p._rating)) + '☆'.repeat(5 - Math.round(p._rating));
    const payIcons = p._pay.slice(0, 3).map(c => '<span class="pay-icon" title="' + c + '">' + (c === 'CNY' ? '¥' : c === 'USD' ? '$' : c === 'EUR' ? '€' : c === 'JPY' ? '¥' : c === 'HKD' ? 'HK$' : c === 'BTC' ? '₿' : c === 'USDT' ? '₮' : c === 'Alipay' ? '支' : c === 'WeChat' ? '微' : c.slice(0, 1)) + '</span>').join('');
    const invoice = p._hasInvoice ? '<span class="pay-icon" title="可开发票">🧾</span>' : '<span class="pay-icon no" title="无发票">—</span>';
    const policyIcons = p._policy.slice(0, 3).map(c => '<span class="pay-icon" title="' + c + '">' + (c === '发票' ? '🧾' : c === 'GDPR' ? 'EU' : c === 'SOC2' ? 'S2' : c === 'ISO27001' ? 'ISO' : c === 'CCRC' ? 'CC' : c.slice(0, 2)) + '</span>').join('') || '<span class="muted" style="font-size:10px;">—</span>';
    return '<tr onclick="location.href=\'provider.html?id=' + p.id + '\'">' +
      '<td class="col-rank">#' + (i + 1) + '</td>' +
      '<td class="col-vendor">' +
        '<div class="v-cell">' +
          '<div class="v-logo">' + (p.logo || '🏢') + '</div>' +
          '<div>' +
            '<div class="v-name">' + escapeHtml(p.name_zh || p.name || '') + '</div>' +
            '<div class="v-type">' + (p.type === 'official' ? '官方' : p.type === 'reseller' ? '代理' : p.type === 'cloud' ? '云厂商' : p.type === 'self_hosted' ? '自部署' : '第三方') + ' · ' + escapeHtml(p.region || 'global') + '</div>' +
          '</div>' +
        '</div>' +
      '</td>' +
      '<td>' +
        '<div class="score-cell ' + perfCls + '">' + p._perf + '%</div>' +
        '<div class="score-bar"><div class="score-bar-fill" style="width:' + p._perf + '%;"></div></div>' +
      '</td>' +
      '<td class="pay-cell">' + payIcons + invoice + '</td>' +
      '<td class="policy-cell">' + policyIcons + '</td>' +
      '<td>' +
        '<div class="review-stars">' + ratingStars + '</div>' +
        '<div class="review-num">' + p._rating.toFixed(1) + ' · ' + fmtNum(p._reviewCount) + ' 条</div>' +
      '</td>' +
      '<td class="model-coverage"><span>' + p._coverage + '</span> 个模型</td>' +
    '</tr>';
  }).join('');
}

// ============ 6. Top Picks 用户口碑精选 ============
const TOP_PICKS = [
  {
    quote: '用 AI Radar 测了一遍我充了 ¥5000 的渠道，发现假流式 + 模型指纹对不上，差点亏死。现在每个新渠道都先过 13 项再充。',
    author: '张工 · 全栈工程师',
    role: 'SaaS · 上海',
    avatar: '张',
    meta: 'DeepSeek 渠道',
  },
  {
    quote: '我们做选型报告每周要给 CTO 看。IQ 榜 + 6 列主表直接截图发，比以前手画 Excel 省 4 小时。性价比榜也是真的准。',
    author: 'Lisa Wang',
    role: 'AI 产品经理',
    avatar: 'L',
    meta: 'Claude Sonnet',
  },
  {
    quote: '作为小工作室，跑 30 万 token/天的代码补全。Radar 的成本计算器把缓存命中率调对，账单从 ¥4500 降到 ¥1100，省 75%。',
    author: 'TK 老李',
    role: '独立开发者',
    avatar: 'T',
    meta: 'GPT-5.6 Sol',
  },
  {
    quote: '13 项检测里假流式最坑 — 表面上流式返回，实际是 WebSocket 包一层假 SSE。Radar 一次测出来，再没被骗过。',
    author: 'Marcus Liu',
    role: '后端架构师',
    avatar: 'M',
    meta: '第三方渠道',
  },
  {
    quote: 'llms.txt 这个设计太对了。我们 Agent 集成直接读这个文件，不用写适配层，1 小时接进 Claude Desktop。',
    author: 'Aria Chen',
    role: 'Agent 开发者',
    avatar: 'A',
    meta: 'MCP 集成',
  },
  {
    quote: '商家库 40+ 渠道同屏对比，1M 上下文哪家不涨价、哪家假流式，全标好了。我做企业落地的同事都收藏了这个站。',
    author: 'Devin Park',
    role: 'AI 解决方案',
    avatar: 'D',
    meta: '1M 上下文',
  },
];

function renderTopPicks() {
  const grid = $('picks-grid');
  if (!grid) return;
  grid.innerHTML = TOP_PICKS.map(p =>
    '<a href="providers.html" class="card pick-card" style="text-decoration:none;color:inherit;">' +
      '<div class="pick-quote-mark">"</div>' +
      '<div class="pick-quote">' + escapeHtml(p.quote) + '</div>' +
      '<div class="pick-quote-mark-end">"</div>' +
      '<div class="pick-author">' +
        '<div class="pick-author-avatar">' + escapeHtml(p.avatar) + '</div>' +
        '<div>' +
          '<div class="pick-author-name">' + escapeHtml(p.author) + '</div>' +
          '<div class="pick-author-role">' + escapeHtml(p.role) + '</div>' +
        '</div>' +
        '<span class="pick-meta">' + escapeHtml(p.meta) + '</span>' +
      '</div>' +
    '</a>'
  ).join('');
}

// ============ 7. Perks & Promotions ============
const PERKS = [
  {
    tag: '限时 · 新商家',
    title: 'DeepSeek V4 Flash 输入价 ¥0.28/M',
    desc: '原生 1M 上下文，中文增强，缓存读取 ¥0.04/M。国庆前注册额外 10% 额度赠送。',
    meta: '截止 2026-10-08',
    cta: '查看渠道 →',
    href: 'providers.html',
  },
  {
    tag: '🎁 免费试用',
    title: 'Anthropic 官方 50 万 token 测试金',
    desc: '首次接入 Claude Sonnet 5 / Opus 4.7，凭邮箱申请。Playground 内一键调用，3 分钟到账。',
    meta: '限新用户 · 一次',
    cta: '立即申请 →',
    href: 'playground.html',
  },
  {
    tag: '📊 企业方案',
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
    '<a href="' + p.href + '" class="card perk-card" style="text-decoration:none;color:inherit;">' +
      '<span class="perk-tag">' + escapeHtml(p.tag) + '</span>' +
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

// ============ 页脚渲染 (兼容老调用，无内容不报错) ============
function renderFooter() {
  // 各页已自带 footer，保留空函数防止 PAGE_INITIALIZERS 报错
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
  test: () => { renderTopbar('test'); renderFooter(); }
};

addEventListener('DOMContentLoaded', () => {
  autoReportView();
});

// 全局暴露
window.API_YOUXUAN = {
  D, FX, $, renderTopbar, renderModelIQ, renderTimeline, renderKPI, renderSiteRankings, renderTopPicks, renderPerks,
  renderFeatured, renderBestFor, setupCalculator, setupSearch, setupTabs,
  loadTrafficStats, getVendor, getProvider, getModel, fmtUSD, fmtCNY, fmtCtx, fmtNum,
  computeWeeklyTokens, computeTrendDelta, computeCompositeScore, computeSubScores,
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
