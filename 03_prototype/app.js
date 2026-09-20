// API Radar - 应用主逻辑 v2 (2026 重构)

function $(id) { return document.getElementById(id); }
function el(tag, attrs, ...children) {
  const e = document.createElement(tag);
  if (attrs) {
    for (const k in attrs) {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'style') e.setAttribute('style', attrs[k]);
      else if (k === 'html') e.innerHTML = attrs[k];
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), attrs[k]);
      else e.setAttribute(k, attrs[k]);
    }
  }
  children.flat().forEach(c => {
    if (c == null) return;
    if (typeof c === 'string' || typeof c === 'number') e.appendChild(document.createTextNode(c));
    else e.appendChild(c);
  });
  return e;
}

const D = API_RADAR_DATA;

const FX = D.fx_rate?.USD_CNY || 7.10;

// ============ 工具函数 ============
function getVendor(id) { return D.vendors.find(v => v.id === id); }
function getProvider(id) { return D.providers.find(p => p.id === id); }
function getModel(id) { return D.models.find(m => m.id === id); }
function getOfferingsForModel(modelId) { return D.offerings.filter(o => o.model_id === modelId); }

function fmtCtx(n) {
  if (!n) return '—';
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K';
  return n.toString();
}

function fmtCNY(n) {
  if (n == null) return '—';
  if (n === 0) return '¥0';
  if (n < 1) return '¥' + n.toFixed(3);
  return '¥' + Math.round(n).toLocaleString();
}

function fmtUSD(n) {
  if (n == null) return '—';
  if (n === 0) return '$0';
  if (n < 0.01) return '$' + n.toFixed(4);
  if (n < 1) return '$' + n.toFixed(3);
  return '$' + n.toFixed(2);
}

function fmtPrice(n, currency) {
  return currency === 'CNY' ? fmtCNY(n * FX) : fmtUSD(n);
}

function calcCost(model, offering, inputM, outputM, cacheM) {
  const inp = (offering.input_usd_m || 0) * inputM;
  const out = (offering.output_usd_m || 0) * outputM;
  const cache = (offering.cache_read_usd_m || 0) * cacheM;
  return { inputCost: inp, outputCost: out, cacheCost: cache, total: inp + out + cache };
}

// ============ 顶部导航栏 ============
function renderTopbar(active = '') {
  const nav = [
    { href: 'index.html', label: '首页', id: 'home' },
    { href: 'models.html', label: '模型库', id: 'models' },
    { href: 'providers.html', label: '渠道库', id: 'providers' },
    { href: 'compare.html', label: '比价', id: 'compare' },
    { href: 'events.html', label: '行情', id: 'events' },
    { href: 'watch.html', label: '关注', id: 'watch' },
    { href: 'method.html', label: '方法', id: 'method' },
  ];
  $('topbar').innerHTML = `
    <div class="topbar-inner">
      <a href="index.html" class="brand">
        <div class="brand-logo">R</div>
        <span class="brand-text">API Radar</span>
        <span class="brand-sub">v2.0</span>
      </a>
      <nav class="nav">
        ${nav.map(n => `<a href="${n.href}" class="${active === n.id ? 'active' : ''}">${n.label}</a>`).join('')}
      </nav>
    </div>`;
}

// ============ 统计 ============
function initStats() {
  if ($('stat-models')) $('stat-models').textContent = D.models.length;
  if ($('stat-providers')) $('stat-providers').textContent = D.providers.length;
  if ($('stat-offerings')) $('stat-offerings').textContent = D.offerings.length;
  if ($('stat-events')) $('stat-events').textContent = D.events.length;
}

// ============ 搜索 ============
function setupSearch() {
  const input = $('main-search');
  const results = $('search-results');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q || q.length < 1) {
      results.classList.remove('show');
      return;
    }

    const matches = [];

    // 模型
    D.models.forEach(m => {
      if (m.display_name.toLowerCase().includes(q) || m.family?.toLowerCase().includes(q)) {
        matches.push({
          type: 'model',
          id: m.id,
          title: m.display_name,
          sub: getVendor(m.vendor_id)?.name || '',
          url: 'model.html?id=' + m.id,
          icon: '🧠'
        });
      }
    });

    // 渠道
    D.providers.forEach(p => {
      if (p.name.toLowerCase().includes(q) || (p.notes || '').toLowerCase().includes(q)) {
        matches.push({
          type: 'provider',
          id: p.id,
          title: p.name,
          sub: p.type === 'official' ? '官方' : p.type === 'aggregator' ? '中转' : p.type === 'gateway' ? '网关' : '云厂商',
          url: 'provider.html?id=' + p.id,
          icon: '📡'
        });
      }
    });

    results.innerHTML = matches.slice(0, 12).map(m =>
      `<a href="${m.url}" class="search-result-item" style="text-decoration:none;color:inherit;display:flex;gap:12px;align-items:center;">
        <span style="font-size:18px;">${m.icon}</span>
        <div><div style="font-weight:600;">${m.title}</div><div style="font-size:11px;color:var(--muted);">${m.sub}</div></div>
        <span style="margin-left:auto;font-size:11px;color:var(--accent);">${m.type === 'model' ? '模型' : '渠道'}</span>
      </a>`
    ).join('') + (matches.length > 12 ? `<div class="search-result-item muted" style="text-align:center;">还有 ${matches.length - 12} 条...</div>` : '');

    results.classList.add('show');
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') results.classList.remove('show');
  });

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
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const panel = $('panel-' + target);
      if (panel) panel.classList.add('active');
    });
  });
}

// ============ 模型卡片网格 ============
function renderModelGrid() {
  const grid = $('model-grid');
  if (!grid) return;

  // 取前 9 个模型（按性价比/能力排序）
  const featured = D.models.slice(0, 9);

  grid.innerHTML = featured.map(m => {
    const vendor = getVendor(m.vendor_id);
    const officialOff = D.offerings.find(o => o.model_id === m.id && o.multiplier === 1.0);
    const price = officialOff?.input_usd_m ?? m.official_input_usd_m;
    const output = officialOff?.output_usd_m ?? m.official_output_usd_m;
    return `
      <a href="model.html?id=${m.id}" class="card model-card" style="text-decoration:none;color:inherit;">
        <div class="model-card-head">
          <div class="model-card-logo">${vendor?.logo || '🤖'}</div>
          <div style="flex:1;min-width:0;">
            <div class="model-card-title">${m.display_name}</div>
            <div class="model-card-vendor">${vendor?.name || ''} · ${m.release_date}</div>
          </div>
        </div>
        <div class="flex between items-center" style="margin-top:8px;">
          <div class="model-card-price mono">${fmtUSD(price)} <span class="muted text-xs">in</span> · ${fmtUSD(output)} <span class="muted text-xs">out</span></div>
          <div class="muted text-xs">${fmtCtx(m.context_window)} ctx</div>
        </div>
        <div class="model-card-tags">
          ${(m.capabilities || []).slice(0, 3).map(c => `<span class="tag">${c}</span>`).join('')}
          ${m.is_open_weight ? '<span class="tag tag-success">开源</span>' : ''}
        </div>
      </a>`;
  }).join('');
}

// ============ 价格表 ============
function renderPriceTable() {
  const body = $('price-table-body');
  if (!body) return;
  const sorted = [...D.models].sort((a, b) => (a.official_input_usd_m || 0) - (b.official_input_usd_m || 0));
  body.innerHTML = sorted.slice(0, 20).map(m => {
    const vendor = getVendor(m.vendor_id);
    return `<tr>
      <td><a href="model.html?id=${m.id}" style="text-decoration:none;color:inherit;font-weight:600;">${m.display_name}</a></td>
      <td>${vendor?.name || ''}</td>
      <td class="price-cell">${fmtUSD(m.official_input_usd_m)}</td>
      <td class="price-cell">${fmtUSD(m.official_output_usd_m)}</td>
      <td class="price-cell">${m.official_cache_read_usd_m ? fmtUSD(m.official_cache_read_usd_m) : '—'}</td>
      <td class="muted">${fmtCtx(m.context_window)}</td>
    </tr>`;
  }).join('');
}

// ============ 计算器 ============
function setupCalculator() {
  const sel = $('calc-model');
  if (!sel) return;
  sel.innerHTML = D.models.map(m => `<option value="${m.id}">${m.display_name} (${fmtUSD(m.official_input_usd_m)}/${fmtUSD(m.official_output_usd_m)})</option>`).join('');

  function runCalc() {
    const modelId = sel.value;
    const model = getModel(modelId);
    const input = parseFloat($('calc-input').value) || 0;
    const output = parseFloat($('calc-output').value) || 0;
    const cache = parseFloat($('calc-cache').value) || 0;
    const currency = $('calc-currency').value;

    // 用官方价
    const cost = {
      inputCost: (model.official_input_usd_m || 0) * input,
      outputCost: (model.official_output_usd_m || 0) * output,
      cacheCost: (model.official_cache_read_usd_m || 0) * cache,
    };
    cost.total = cost.inputCost + cost.outputCost + cost.cacheCost;

    const disp = (n) => fmtPrice(n, currency);
    $('calc-result').style.display = 'block';
    $('result-total').textContent = disp(cost.total);
    $('result-info').textContent = `${model.display_name} · 官方渠道`;
    $('result-input').textContent = disp(cost.inputCost);
    $('result-output').textContent = disp(cost.outputCost);
    $('result-cache').textContent = disp(cost.cacheCost);
  }

  $('calc-btn')?.addEventListener('click', runCalc);
  sel.addEventListener('change', runCalc);
  ['calc-input', 'calc-output', 'calc-cache', 'calc-currency'].forEach(id => {
    $(id)?.addEventListener('change', runCalc);
  });

  // 初始计算
  runCalc();
}

// ============ 热点 ============
function renderTrending() {
  const list = $('event-list-mini');
  if (!list) return;
  const recent = [...D.events].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6);
  list.innerHTML = recent.map(e => {
    const sev = e.severity || 'medium';
    const sevColor = { high: '#ff4757', medium: '#ffb84d', low: '#00ffa3', positive: '#00ffa3' }[sev] || '#8896b8';
    return `<div style="display:flex;gap:12px;padding:14px;background:rgba(10,16,32,0.4);border-radius:8px;border-left:3px solid ${sevColor};">
      <div style="font-size:11px;color:var(--muted);min-width:80px;">${e.date}</div>
      <div style="flex:1;"><div style="font-weight:600;font-size:13px;">${e.title}</div><div style="font-size:12px;color:var(--muted);margin-top:4px;">${(e.description || '').slice(0, 80)}...</div></div>
    </div>`;
  }).join('');
}

// ============ 性价比榜 ============
function renderValue() {
  const list = $('value-list');
  if (!list) return;
  // 输出价 ≤ $1 的模型，按输出价升序
  const value = D.models.filter(m => (m.official_output_usd_m || 0) <= 1.0)
    .sort((a, b) => (a.official_output_usd_m || 0) - (b.official_output_usd_m || 0))
    .slice(0, 10);
  list.innerHTML = '<table><thead><tr><th>排名</th><th>模型</th><th>厂商</th><th>输入</th><th>输出</th><th>上下文</th><th>特点</th></tr></thead><tbody>' + value.map((m, i) => {
    const vendor = getVendor(m.vendor_id);
    return `<tr>
      <td><strong style="color:${i < 3 ? 'var(--accent)' : 'var(--muted)'};">#${i + 1}</strong></td>
      <td><a href="model.html?id=${m.id}" style="text-decoration:none;color:inherit;font-weight:600;">${m.display_name}</a></td>
      <td class="muted">${vendor?.name || ''}</td>
      <td class="price-cell">${fmtUSD(m.official_input_usd_m)}</td>
      <td class="price-cell" style="color:var(--success);font-weight:700;">${fmtUSD(m.official_output_usd_m)}</td>
      <td class="muted">${fmtCtx(m.context_window)}</td>
      <td class="text-xs muted">${(m.capabilities || []).slice(0, 2).join(' · ')}</td>
    </tr>`;
  }).join('') + '</tbody></table>';
}

// ============ 初始化 ============
document.addEventListener('DOMContentLoaded', () => {
  // Skip all in-page rendering on pages that have their own custom renderer.
  // These pages define their own <script> after app.js and bind their own render().
  if (document.getElementById('model-grid') && document.getElementById('vendor-filter')) return;
  if ($('topbar')) renderTopbar('home');
  initStats();
  setupSearch();
  setupTabs();
  if ($('model-grid')) renderModelGrid();
  if ($('price-table-body')) renderPriceTable();
  if ($('calc-model')) setupCalculator();
  if ($('event-list-mini')) renderTrending();
  if ($('value-list')) renderValue();
});

// 暴露给其他页面用
window.API_RADAR = { D, FX, getVendor, getProvider, getModel, getOfferingsForModel, fmtCtx, fmtCNY, fmtUSD, fmtPrice, calcCost };