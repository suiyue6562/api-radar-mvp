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
  grid.innerHTML = top.map(m => {
    const v = getVendor(m.vendor_id);
    const inp = m.official_input_usd_m || m.price_input_per_m || 0;
    const out = m.official_output_usd_m || m.price_output_per_m || 0;
    return '<a href="model.html?id=' + m.id + '" class="card model-card model-card-hover" style="text-decoration:none;color:inherit;">' +
      '<div class="model-card-head">' +
        '<div class="model-card-logo">' + (v?.logo || '🤖') + '</div>' +
        '<div>' +
          '<div class="model-card-title">' + (m.display_name || m.name) + '</div>' +
          '<div class="model-card-vendor">' + (v?.name_zh || v?.name || '') + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="model-card-price">' + fmtUSD(inp) + ' / ' + fmtUSD(out) + '</div>' +
      '<div class="model-card-tags">' +
        ((m.capabilities || m.tags || []).slice(0, 3).map(t => '<span class="tag">' + t + '</span>').join('')) +
      '</div>' +
    '</a>';
  }).join('');
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
  home: () => { renderTopbar('home'); initStats(); renderModelGrid(); renderPriceTable(); renderValue(); renderTrending(); setupCalculator(); setupSearch(); setupTabs(); loadTrafficStats(); autoReportView(); },
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
  loadTrafficStats, getVendor, getProvider, getModel, fmtUSD, fmtCNY, fmtCtx
};
