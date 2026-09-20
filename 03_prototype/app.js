// API优选咨询 - 主应用脚本
// 包含顶部导航、统计数据、模型网格、价格表、计算器、性价比榜、搜索

const D = (typeof API_RADAR_DATA !== 'undefined') ? API_RADAR_DATA : (window.API_RADAR_DATA || { vendors: [], models: [], providers: [], offerings: [], events: [] });

// FX 汇率
const FX = D.fx_rate || { USD_CNY: 7.1, date: '2026-01-01' };

// 工具函数
const $ = (id) => document.getElementById(id);
const fmtUSD = (n) => '$' + (n || 0).toFixed(n < 1 ? 4 : 2);
const fmtCNY = (n) => '¥' + ((n || 0) * FX.USD_CNY).toFixed(n < 1 ? 2 : 0);
const fmtCtx = (n) => n >= 1000000 ? (n/1000000).toFixed(0) + 'M' : n >= 1000 ? Math.round(n/1000) + 'K' : n;
const getVendor = (id) => D.vendors.find(v => v.id === id);
const getProvider = (id) => D.providers.find(p => p.id === id);
const getModel = (id) => D.models.find(m => m.id === id);
const getOfferingsForModel = (id) => D.offerings.filter(o => o.model_id === id);
const fmtPrice = (n, currency) => currency === 'CNY' ? fmtCNY(n) : fmtUSD(n);

// ============ (NEW) 能力图标 — 学 models.dev ============
const CAP_META = {
  reasoning:    { emoji: '🧠', label: 'Reasoning' },
  tool_use:     { emoji: '🔧', label: 'Tool Call' },
  structured:   { emoji: '📋', label: 'Structured' },
  vision:       { emoji: '🖼️', label: 'Vision' },
  audio:        { emoji: '🎤', label: 'Audio' },
  video:        { emoji: '🎬', label: 'Video' },
  coding:       { emoji: '💻', label: 'Coding' },
  agentic:      { emoji: '🤖', label: 'Agentic' },
  multimodal:   { emoji: '🎨', label: 'Multimodal' },
  long_context: { emoji: '📚', label: 'Long Ctx' },
};

// 从 model.capabilities / modality 推导能力集
function getModelCaps(m) {
  const caps = new Set();
  // reasoning 来源：capabilities 里含 reasoning/agentic_reasoning/math/chain_of_thought
  const capsArr = (m.capabilities || []);
  if (capsArr.some(c => /reasoning|math|chain_of_thought|thinking/.test(c))) caps.add('reasoning');
  if (capsArr.some(c => /tool_use|computer_use|terminal|browsing/.test(c))) caps.add('tool_use');
  if (capsArr.some(c => /structured|json_schema|instruction_following/.test(c))) caps.add('structured');
  if (capsArr.some(c => /coding|agentic_coding/.test(c))) caps.add('coding');
  if (capsArr.some(c => /^agentic|agents|long_horizon|self_evolving/.test(c))) caps.add('agentic');
  if (capsArr.some(c => /agentic|long_horizon|multimodal|open_weight|long_context/.test(c))) caps.add('long_context');
  // modality
  const mod = (m.modality || []);
  if (mod.includes('image')) caps.add('vision');
  if (mod.includes('audio')) caps.add('audio');
  if (mod.includes('video')) caps.add('video');
  if (mod.length >= 3) caps.add('multimodal');
  return caps;
}

// 渲染能力图标行（学 models.dev 顶部 cap 列）
function renderCapIcons(m) {
  const caps = getModelCaps(m);
  if (caps.size === 0) return '';
  const items = ['reasoning', 'tool_use', 'structured', 'vision', 'audio', 'coding', 'agentic', 'multimodal', 'long_context']
    .filter(k => caps.has(k))
    .slice(0, 6);
  return '<div class="model-card-caps">' + items.map(k => {
    const c = CAP_META[k];
    return '<span class="cap-icon has" title="' + c.label + '"><span class="cap-icon-emoji">' + c.emoji + '</span></span>';
  }).join('') + '</div>';
}

// ============ (NEW) 趋势方向解析 ============
function parseTrend(pctStr) {
  const n = parseFloat(String(pctStr || '').replace(/[^0-9.\-]/g, ''));
  if (isNaN(n)) return { num: 0, up: true };
  return { num: n, up: n >= 0 };
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

// ============ 统计数据 ============
function initStats() {
  if ($('stat-models')) $('stat-models').textContent = D.models.length;
  if ($('stat-providers')) $('stat-providers').textContent = D.providers.length;
  if ($('stat-offerings')) $('stat-offerings').textContent = D.offerings.length;
  if ($('stat-events')) $('stat-events').textContent = (D.events || []).length;
}

// ============ 模型网格（推荐模型）============
function renderModelGrid() {
  const grid = $('model-grid');
  if (!grid) return;
  // 取前 9 个有 logo 的
  const top = D.models.slice(0, 9);
  // 取出 weekly_tokens 映射（来自 featured.js）
  const trendMap = (window.API_RADAR_FEATURED && window.API_RADAR_FEATURED.featured_models) ? window.API_RADAR_FEATURED.featured_models : [];
  const trendById = {};
  trendMap.forEach(t => { trendById[t.id] = t; });
  grid.innerHTML = top.map(m => {
    const v = getVendor(m.vendor_id);
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    const t = trendById[m.id];
    const trendHtml = t ? (function () {
      const tr = parseTrend(t.trend_pct);
      const pctStr = (tr.num >= 0 ? '+' : '') + t.trend_pct;
      const arrow = tr.up ? '▲' : '▼';
      const cls = tr.up ? 'up' : 'down';
      const color = tr.up ? 'var(--success)' : '#f87171';
      return '<div class="model-card-trend"><span style="color:var(--muted);">周 token</span> <span style="color:var(--fg);">' + t.weekly_tokens + '</span> <span class="pct" style="color:' + color + ';">' + arrow + ' ' + pctStr + '</span></div>';
    })() : '';
    return '<a href="model.html?id=' + m.id + '" class="card model-card model-card-hover" style="text-decoration:none;color:inherit;">' +
      '<div class="model-card-head">' +
        '<div class="model-card-logo">' + (v?.logo || '🤖') + '</div>' +
        '<div>' +
          '<div class="model-card-title">' + (m.display_name || m.name) + '</div>' +
          '<div class="model-card-vendor">' + (v?.name_zh || v?.name || '') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="model-card-price">' + fmtUSD(inp) + ' / ' + fmtUSD(out) + ' <span class="muted" style="font-size:10px;font-weight:500;">(in/out)</span></div>' +
      '<div class="model-card-tags">' +
        ((m.capabilities || m.tags || []).slice(0, 3).map(tt => '<span class="tag">' + tt + '</span>').join('')) +
      '</div>' +
      renderCapIcons(m) +
      trendHtml +
    '</a>';
  }).join('');
}

// ============ (NEW) Featured Models — 周 token 趋势榜 ============
function renderFeatured() {
  const grid = $('featured-grid');
  if (!grid) return;
  const list = (window.API_RADAR_FEATURED && window.API_RADAR_FEATURED.featured_models) ? window.API_RADAR_FEATURED.featured_models : [];
  if (!list.length) {
    grid.innerHTML = '<div class="muted" style="grid-column:1/-1;text-align:center;padding:32px;">暂无趋势数据</div>';
    return;
  }
  // 计算 max 用于归一化柱长
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

// ============ (NEW) Best for X — 场景榜首 ============
function renderBestFor() {
  const grid = $('bestfor-grid');
  if (!grid) return;
  const list = (window.API_RADAR_FEATURED && window.API_RADAR_FEATURED.best_for) ? window.API_RADAR_FEATURED.best_for : [];
  if (!list.length) {
    grid.innerHTML = '<div class="muted" style="grid-column:1/-1;text-align:center;padding:32px;">暂无榜首数据</div>';
    return;
  }
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

// ============ 模型衍生指标 (学 models.dev / llm-stats / OpenRouter) ============
// 周 token 用量：根据厂商热度 + 模型上下文长度 + 是否新模型 合成一个稳定的伪随机数
function computeWeeklyTokens(m) {
  const seed = (m.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const vendorBoost = (D.vendors.findIndex(v => v.id === m.vendor_id) + 1) * 0.4;
  const ctxBoost = Math.log10(Math.max(m.context_window || 32000, 1000)) / 6; // 0~1
  const isNew = (m.release_date || '').startsWith('2026') ? 0.25 : 0;
  const base = 1.5 + (seed % 100) / 30 + vendorBoost + ctxBoost + isNew; // ~1.5 ~ 7
  const billions = Math.max(0.1, base);
  return (billions >= 1 ? billions.toFixed(1) + 'B' : (billions * 1000).toFixed(0) + 'M');
}

// 趋势变化 %：基于 id 哈希给一个 [-20, +35] 的稳定伪随机数
function computeTrendDelta(m) {
  const seed = (m.id || '').split('').reduce((s, c) => s + c.charCodeAt(0), 0);
  const raw = (seed * 9301 + 49297) % 233280 / 233280; // 0~1
  const delta = Math.round((raw * 55) - 20); // -20 ~ +35
  return delta;
}

// Best for：从 scenes 推导，按出现频次去重，最多 3 个
function computeBestFor(m) {
  const raw = m.scenes || [];
  const map = {
    coding: 'Coding', agentic_coding: 'Coding', code: 'Coding',
    reasoning: 'Reasoning', math: 'Reasoning',
    knowledge_work: 'Knowledge', writing: 'Writing',
    agents: 'Agents', agent: 'Agents',
    long_context: 'Long Context',
    vision: 'Vision', multimodal: 'Vision',
    audio: 'Audio', speech: 'Audio',
    translation: 'Translation',
    throughput: 'Throughput', cheap: 'Throughput',
  };
  const seen = new Set();
  const out = [];
  raw.forEach(s => {
    const tag = map[s] || (s.charAt(0).toUpperCase() + s.slice(1).replace(/_/g, ' '));
    if (!seen.has(tag)) { seen.add(tag); out.push(tag); }
  });
  // 至少返回一个兜底标签
  if (!out.length) {
    if (m.is_open_weight) out.push('Throughput');
    else if ((m.official_input_usd_m || 0) <= 1) out.push('Throughput');
    else out.push('General');
  }
  return out.slice(0, 3);
}

// 综合分数 0~100：性价比(35) + 能力(30) + 上下文(15) + 趋势(20)
function computeCompositeScore(m) {
  const inp = m.official_input_usd_m ?? m.price_input_per_m ?? 0;
  const out = m.official_output_usd_m ?? m.price_output_per_m ?? 0;
  // 性价比：越便宜越好（output 主权），封顶 100
  const refPrice = 30; // $30/M output 作为基准
  const priceScore = Math.max(0, Math.min(100, (1 - Math.max(inp, out) / refPrice) * 100));
  // 能力：capabilities 多 + 含 reasoning/tool_use 加分
  const caps = m.capabilities || [];
  const capScore = Math.min(100, caps.length * 18 + (caps.includes('reasoning') ? 15 : 0) + (caps.includes('tool_use') || caps.includes('agentic_coding') ? 15 : 0));
  // 上下文：1M 满分
  const ctx = m.context_window || 0;
  const ctxScore = Math.min(100, Math.log10(Math.max(ctx, 1000)) / 6 * 100);
  // 趋势：取 -20~+35 映射到 0~100
  const trend = computeTrendDelta(m);
  const trendScore = Math.max(0, Math.min(100, ((trend + 20) / 55) * 100));
  const total = priceScore * 0.35 + capScore * 0.30 + ctxScore * 0.15 + trendScore * 0.20;
  return Math.round(total);
}

// ============ 价格表 ============
function renderPriceTable() {
  const tbody = $('price-table-body');
  if (!tbody) return;
  tbody.innerHTML = D.models.slice(0, 15).map(m => {
    const v = getVendor(m.vendor_id);
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    const cache = m.official_cache_read_usd_m || m.price_cache_read_per_m;
    return '<tr>' +
      '<td><a href="model.html?id=' + m.id + '">' + (m.display_name || m.name) + '</a></td>' +
      '<td>' + (v?.name_zh || v?.name || '') + '</td>' +
      '<td class="price-cell">' + fmtUSD(inp) + '</td>' +
      '<td class="price-cell">' + fmtUSD(out) + '</td>' +
      '<td class="price-cell">' + (cache ? fmtUSD(cache) : '—') + '</td>' +
      '<td class="muted">' + fmtCtx(m.context_window || 0) + '</td>' +
    '</tr>';
  }).join('');
}

// ============ 性价比榜 ============
function renderValue() {
  const list = $('value-list');
  if (!list) return;
  const value = D.models
    .map(m => {
      const inp = m.official_input_usd_m || m.price_input_per_m || 0;
      const out = m.official_output_usd_m || m.price_output_per_m || 0;
      const ctx = m.context_window || 32000;
      const ctxScore = Math.max(0.7, Math.min(1.5, ctx / 128000));
      const composite = (inp * 0.3 + out * 0.7) * ctxScore;
      return Object.assign({}, m, { _composite: composite });
    })
    .filter(m => m._composite > 0 && m._composite <= 1.5)
    .sort((a, b) => a._composite - b._composite)
    .slice(0, 10);
  list.innerHTML = '<table><thead><tr><th>排名</th><th>模型</th><th>厂商</th><th>输入</th><th>输出</th><th>综合成本</th><th>上下文</th><th>特点</th></tr></thead><tbody>' + value.map((m, i) => {
    const v = getVendor(m.vendor_id);
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    const tags = (m.tags || m.capabilities || []).slice(0, 2).join(' / ');
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    return '<tr>' +
      '<td><strong style="color:' + (i < 3 ? 'var(--accent)' : 'var(--muted)') + ';">#' + (i + 1) + ' ' + medal + '</strong></td>' +
      '<td><a href="model.html?id=' + m.id + '" style="text-decoration:none;color:inherit;font-weight:600;">' + (m.display_name || m.name) + '</a></td>' +
      '<td class="muted">' + (v?.name_zh || v?.name || '') + '</td>' +
      '<td class="price-cell">' + fmtUSD(inp) + '</td>' +
      '<td class="price-cell" style="color:var(--success);font-weight:700;">' + fmtUSD(out) + '</td>' +
      '<td class="price-cell" style="color:var(--accent);font-weight:700;">' + fmtUSD(m._composite) + '</td>' +
      '<td class="muted">' + fmtCtx(m.context_window || 0) + '</td>' +
      '<td class="text-xs muted">' + tags + '</td>' +
    '</tr>';
  }).join('') + '</tbody></table>';
}

// ============ 行情事件 ============
function renderTrending() {
  const list = $('event-list-mini');
  if (!list) return;
  const recent = [...(D.events || [])].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 6);
  const typeMap = { price_change: '💰', new_model: '🚀', outage: '⚠️', capability_update: '🧠', policy_change: '📋', model_deprecate: '🗑️' };
  list.innerHTML = recent.map(e => {
    const date = (e.date || '').slice(5);
    return '<a href="events.html" style="text-decoration:none;color:inherit;display:block;padding:12px;border-bottom:1px solid var(--border);">' +
      '<div style="display:flex;justify-content:space-between;align-items:center;">' +
        '<div><strong style="font-size:14px;">' + (typeMap[e.event_type] || '📌') + ' ' + escapeHtml(e.title || '') + '</strong>' +
          '<div class="muted" style="font-size:11px;margin-top:4px;">' + escapeHtml((e.description || '').slice(0, 80)) + '</div></div>' +
        '<span class="muted" style="font-size:11px;">' + date + '</span>' +
      '</div></a>';
  }).join('');
}

function escapeHtml(s) { var div = document.createElement('div'); div.textContent = s || ''; return div.innerHTML; }

// ============ 计算器 ============
function setupCalculator() {
  const sel = $('calc-model');
  if (!sel) return;
  sel.innerHTML = D.models.map(m => {
    const name = m.display_name || m.name || m.id;
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    return '<option value="' + m.id + '">' + escapeHtml(name) + ' (' + fmtUSD(inp) + '/' + fmtUSD(out) + ')</option>';
  }).join('');

  function runCalc() {
    const modelId = sel.value;
    const model = getModel(modelId);
    if (!model) return;
    const input = parseFloat($('calc-input').value) || 0;
    const output = parseFloat($('calc-output').value) || 0;
    const cache = parseFloat($('calc-cache').value) || 0;
    const cacheRatio = Math.min(100, Math.max(0, parseFloat($('calc-cache-ratio').value) || 0)) / 100;
    const ctxTier = $('calc-ctx-tier').value;
    const mode = $('calc-mode').value;
    const currency = $('calc-currency').value;

    const inp = model.official_input_usd_m || model.price_input_per_m || 0;
    const out = model.official_output_usd_m || model.price_output_usd_m || 0;
    const cachePrice = model.official_cache_read_usd_m || model.price_cache_read_per_m || 0;

    const cacheHit = cache * cacheRatio;
    const cacheMiss = cache * (1 - cacheRatio);
    const inputCost = (input + cacheMiss) * inp;
    const outputCost = output * out;
    const cacheCost = cacheHit * (cachePrice || inp);

    let ctxMultiplier = 1.0;
    if (ctxTier === '128k') ctxMultiplier = 1.5;
    else if (ctxTier === '1m') ctxMultiplier = 2.0;
    else if (ctxTier === '10m') ctxMultiplier = 3.0;
    const ctx = model.context_window || 32000;
    if (ctxTier === '128k' && ctx < 128000) ctxMultiplier = 1.0;
    if (ctxTier === '1m' && ctx < 1000000) ctxMultiplier = 1.0;
    if (ctxTier === '10m' && ctx < 5000000) ctxMultiplier = 1.0;
    const longCtxExtra = (inputCost + outputCost + cacheCost) * (ctxMultiplier - 1);

    let batchDiscount = 0;
    if (mode === 'batch') {
      const bd = model.batch_discount || 0.5;
      batchDiscount = (inputCost + outputCost + cacheCost + longCtxExtra) * (1 - bd);
    }
    const total = inputCost + outputCost + cacheCost + longCtxExtra - batchDiscount;

    const disp = (n) => currency === 'CNY' ? fmtCNY(n) : fmtUSD(n);
    $('calc-result').style.display = 'block';
    $('result-total').textContent = disp(total);
    $('result-info').textContent = (model.display_name || model.name) + ' · ' + currency;
    $('result-input').textContent = disp(inputCost);
    $('result-output').textContent = disp(outputCost);
    $('result-cache').textContent = disp(cacheCost);
    $('result-longctx').textContent = disp(longCtxExtra);
    $('result-batch').textContent = batchDiscount > 0 ? '-' + disp(batchDiscount) : '—';
    $('result-batch').style.color = batchDiscount > 0 ? '#22c55e' : 'var(--muted)';

    const tips = [];
    if (!cachePrice && cache > 0) tips.push('⚠️ ' + model.display_name + ' 没有缓存价');
    if (mode === 'batch') tips.push('💡 批量 API 有 24h 延迟');
    if (cacheRatio > 0 && cache > 0) {
      const saved = (cacheHit * inp) - cacheCost;
      if (saved > 0) tips.push('💡 缓存节省 ' + disp(saved) + '/月');
    }
    $('result-note').innerHTML = tips.length ? tips.join('；') : '基于官方价 + ' + (ctxMultiplier*100).toFixed(0) + '% 上下文系数';
  }

  $('calc-btn')?.addEventListener('click', runCalc);
  sel.addEventListener('change', runCalc);
  ['calc-input', 'calc-output', 'calc-cache', 'calc-cache-ratio', 'calc-ctx-tier', 'calc-mode', 'calc-currency'].forEach(id => {
    $(id)?.addEventListener('change', runCalc);
    $(id)?.addEventListener('input', runCalc);
  });
  runCalc();
}

// ============ 搜索 ============
function setupSearch() {
  const input = $('main-search');
  if (!input) return;
  const results = $('search-results');
  
  function search(q) {
    if (!q || q.length < 2) {
      results.classList.remove('show');
      results.innerHTML = '';
      return;
    }
    q = q.toLowerCase();
    const matches = [];
    D.models.forEach(m => {
      const name = (m.display_name || m.name || '').toLowerCase();
      const vendor = (getVendor(m.vendor_id)?.name_zh || '').toLowerCase();
      if (name.includes(q) || vendor.includes(q) || m.id.includes(q)) {
        matches.push({ type: 'model', name: m.display_name || m.name, vendor: vendor, url: 'model.html?id=' + m.id });
      }
    });
    D.providers.forEach(p => {
      const name = (p.name_zh || p.name || '').toLowerCase();
      if (name.includes(q)) {
        matches.push({ type: 'provider', name: p.name_zh || p.name, vendor: '', url: 'provider.html?id=' + p.id });
      }
    });
    results.innerHTML = matches.slice(0, 8).map(m =>
      '<div class="search-result-item" data-url="' + m.url + '">' +
        '<strong>' + escapeHtml(m.name) + '</strong> <span class="muted" style="font-size:11px;">' + m.type + '</span>' +
        (m.vendor ? '<div class="muted" style="font-size:11px;">' + escapeHtml(m.vendor) + '</div>' : '') +
      '</div>'
    ).join('') || '<div class="search-result-item muted">无匹配</div>';
    // 绑定点击
    results.querySelectorAll('.search-result-item[data-url]').forEach(item => {
      item.addEventListener('click', () => { location.href = item.dataset.url; });
    });
    results.classList.add('show');
  }
  
  input.addEventListener('input', () => search(input.value));
  input.addEventListener('focus', () => search(input.value));
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('show');
    }
  });
}

// ============ Tab 切换 ============
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
  try {
    const resp = await fetch('https://api.apireader.top/api/stats/traffic');
    const d = await resp.json();
    const total = d.last_7d.reduce((s, x) => s + x.pv, 0);
    const last24 = d.last_24h.reduce((s, x) => s + x.pv, 0);
    const topPath = d.last_24h[0]?.path || '/';
    if ($('pv-total')) $('pv-total').textContent = total;
    if ($('pv-24h')) $('pv-24h').textContent = last24;
    if ($('top-path')) $('top-path').textContent = topPath;
  } catch (e) {}
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
  // 已经在 HTML 里写了 onclick，无需额外绑定
}

// ============ 主初始化 ============
document.// 全局初始化 - 各页面会调自己的 initialize
window.PAGE_INITIALIZERS = {
  home: () => { renderTopbar('home'); initStats(); renderModelGrid(); renderFeatured(); renderBestFor(); renderPriceTable(); renderValue(); renderTrending(); setupCalculator(); setupSearch(); setupTabs(); loadTrafficStats(); autoReportView(); },
  models: () => { renderTopbar('models'); },
  model: () => { renderTopbar('models'); },
  providers: () => { renderTopbar('providers'); },
  provider: () => { renderTopbar('providers'); },
  compare: () => { renderTopbar('compare'); },
  events: () => { renderTopbar('events'); },
  playground: () => { renderTopbar('playground'); },
  business: () => { renderTopbar('business'); },
  watch: () => { renderTopbar('watch'); },
  method: () => { renderTopbar('method'); },
  test: () => { renderTopbar('test'); }
};

addEventListener('DOMContentLoaded', () => {
  // 顶部导航由各页面自己调用
  // 上报浏览（每页都做）
  autoReportView();
});

// 全局暴露
window.API_YOUXUAN = {
  D, FX, $, renderTopbar, initStats, renderModelGrid, renderPriceTable,
  renderValue, renderTrending, setupCalculator, setupSearch, setupTabs,
  loadTrafficStats, getVendor, getProvider, getModel, fmtUSD, fmtCNY, fmtCtx,
  computeWeeklyTokens, computeTrendDelta, computeBestFor, computeCompositeScore
};
