// API Radar - 应用主逻辑

// ========== 初始化统计数字 ==========
function initStats() {
  const el = (id) => document.getElementById(id);
  if (el('stat-models')) el('stat-models').textContent = API_RADAR_DATA.models.length;
  if (el('stat-providers')) el('stat-providers').textContent = API_RADAR_DATA.providers.length;
  if (el('stat-offerings')) el('stat-offerings').textContent = API_RADAR_DATA.offerings.length;
  if (el('stat-events')) el('stat-events').textContent = API_RADAR_DATA.events.length;
}

// ========== 搜索 ==========
let searchTimer = null;
function setupSearch() {
  const mainInput = document.getElementById('main-search');
  const topInput = document.getElementById('topbar-search-input');
  const resultsEl = document.getElementById('search-results');

  if (mainInput) {
    mainInput.addEventListener('input', (e) => doSearch(e.target.value));
    mainInput.addEventListener('focus', (e) => e.target.value && doSearch(e.target.value));
  }
  if (topInput) {
    topInput.addEventListener('input', (e) => {
      mainInput.value = e.target.value;
      doSearch(e.target.value);
      resultsEl.scrollIntoView({behavior: 'smooth', block: 'nearest'});
    });
  }

  // 点击外部关闭搜索结果
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-block') && !e.target.closest('.topbar-search')) {
      resultsEl.classList.remove('show');
    }
  });

  // 搜索标签
  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const val = tag.textContent;
      if (mainInput) mainInput.value = val;
      if (topInput) topInput.value = val;
      doSearch(val);
      resultsEl.classList.add('show');
    });
  });

  // 快捷键
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      (mainInput || topInput).focus();
    }
    if (e.key === 'Escape') resultsEl.classList.remove('show');
  });
}

function doSearch(q) {
  const resultsEl = document.getElementById('search-results');
  if (!q || q.length < 1) { resultsEl.classList.remove('show'); return; }
  const query = q.toLowerCase();

  // 模型
  const models = API_RADAR_DATA.models.filter(m =>
    m.name.toLowerCase().includes(query) ||
    m.display_name.toLowerCase().includes(query) ||
    (m.alias || []).some(a => a.toLowerCase().includes(query)) ||
    (getVendor(m.vendor_id)?.name_zh || '').toLowerCase().includes(query) ||
    (getVendor(m.vendor_id)?.name_en || '').toLowerCase().includes(query)
  ).slice(0, 5);

  // 渠道
  const providers = API_RADAR_DATA.providers.filter(p =>
    p.name.toLowerCase().includes(query) ||
    (p.entity_name || '').toLowerCase().includes(query)
  ).slice(0, 5);

  let html = '';
  if (models.length > 0) {
    html += '<div class="search-group"><div class="search-group-title">模型 · ' + models.length + '</div>';
    models.forEach(m => {
      const v = getVendor(m.vendor_id);
      html += '<a href="model.html?id=' + m.id + '" class="search-item" style="text-decoration:none;color:inherit;"><span>' + m.display_name + '</span><span class="meta">' + v.name_zh + '</span></a>';
    });
    html += '</div>';
  }
  if (providers.length > 0) {
    html += '<div class="search-group"><div class="search-group-title">渠道 · ' + providers.length + '</div>';
    providers.forEach(p => {
      html += '<a href="provider.html?id=' + p.id + '" class="search-item" style="text-decoration:none;color:inherit;"><span>' + p.name + '</span><span class="meta">' + p.type + '</span></a>';
    });
    html += '</div>';
  }
  if (!models.length && !providers.length) {
    html = '<div class="search-group"><div class="search-item" style="color:var(--muted);cursor:default;">无匹配结果 — 试试 "Claude"、"GPT-4o"、"硅基流动"</div></div>';
  }
  resultsEl.innerHTML = html;
  resultsEl.classList.add('show');
}

// ========== Tab 切换 ==========
function setupTabs() {
  document.querySelectorAll('.panel-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.panel-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(target).classList.add('active');
      window.scrollTo({top: document.querySelector('.panel-tabs').offsetTop - 80, behavior: 'smooth'});
    });
  });
}

function switchTabTo(id) {
  const tab = document.querySelector('.panel-tab[data-tab="' + id + '"]');
  if (tab) tab.click();
}

// ========== 模型选择器填充 ==========
function populateModelSelect() {
  const sel = document.getElementById('calc-model');
  if (!sel) return;
  API_RADAR_DATA.models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id;
    const v = getVendor(m.vendor_id);
    opt.textContent = m.display_name + ' (' + v.name_zh + ')';
    sel.appendChild(opt);
  });
  sel.value = 'm_claude_sonnet_4';
}

// ========== 计算器 ==========
function setTokens(n) {
  document.getElementById('calc-input').value = n;
  if (n > 0 && document.getElementById('calc-output').value === '0') {
    document.getElementById('calc-output').value = Math.floor(n * 0.2);
  }
}

function runCalc() {
  const input = parseFloat(document.getElementById('calc-input').value) || 0;
  const output = parseFloat(document.getElementById('calc-output').value) || 0;
  const cache = parseFloat(document.getElementById('calc-cache').value) || 0;
  const modelId = document.getElementById('calc-model').value;
  const currency = document.getElementById('calc-currency').value;
  const topN = parseInt(document.getElementById('calc-topn').value) || 5;
  const model = getModel(modelId);
  if (!model) return;

  // 获取该模型的所有渠道 offering
  const offerings = getOfferingsForModel(modelId);
  if (offerings.length === 0) {
    alert('该模型暂无可用渠道');
    return;
  }

  // 计算每个 offering 的成本
  const results = offerings.map(o => {
    const provider = getProvider(o.provider_id);
    const cost = calcCost(model, o, input, output, cache);
    return { offering: o, provider, cost };
  });

  // 排序（总价升序）
  results.sort((a, b) => a.cost.total - b.cost.total);

  // 取前 N
  const topResults = results.slice(0, topN);
  const best = topResults[0];
  const fx = API_RADAR_DATA.fx_rate.USD_CNY;

  // 显示最佳结果
  const totalDisp = currency === 'CNY' ? fmtCNY(best.cost.total) : fmtUSD(best.cost.total / fx);
  const inputDisp = currency === 'CNY' ? fmtCNY(best.cost.inputCost) : fmtUSD(best.cost.inputCost / fx);
  const outputDisp = currency === 'CNY' ? fmtCNY(best.cost.outputCost) : fmtUSD(best.cost.outputCost / fx);
  const cacheDisp = currency === 'CNY' ? fmtCNY(best.cost.cacheCost) : fmtUSD(best.cost.cacheCost / fx);

  document.getElementById('result-total').textContent = totalDisp;
  document.getElementById('res-input').textContent = inputDisp;
  document.getElementById('res-output').textContent = outputDisp;
  document.getElementById('res-cache').textContent = cacheDisp;
  document.getElementById('res-multi').textContent = best.offering.multiplier + '×';
  document.getElementById('result-best-provider').textContent = '最优：' + best.provider.name;
  document.getElementById('result-best-time').textContent = '汇率 2026-09-20 · ' + currency;

  // 横向对比
  const compEl = document.getElementById('result-comparison');
  compEl.innerHTML = '';
  topResults.forEach((r, i) => {
    const diff = r.cost.total - best.cost.total;
    const diffPct = best.cost.total > 0 ? (diff / best.cost.total * 100).toFixed(0) : 0;
    const isBest = i === 0;
    const totalDisp = currency === 'CNY' ? fmtCNY(r.cost.total) : fmtUSD(r.cost.total / fx);

    const row = document.createElement('div');
    row.className = 'calc-comparison-row' + (isBest ? ' best' : '');
    row.innerHTML =
      '<a href="provider.html?id=' + r.provider.id + '" class="provider" style="color:var(--fg);text-decoration:none;">' +
        r.provider.name + (r.offering.is_official ? ' <span style="color:var(--accent2);font-size:10px;">官方</span>' : ' <span style="color:var(--warning);font-size:10px;">中转</span>') +
      '</a>' +
      '<div class="price">' + totalDisp + (isBest ? '<span class="badge-best" style="margin-left:8px;">最省</span>' : '') + '</div>' +
      '<div class="diff">' + (isBest ? '基线' : '+' + diffPct + '%') + '</div>' +
      '<div style="text-align:right;font-size:11px;color:var(--muted);">' + r.offering.multiplier + '×</div>';
    compEl.appendChild(row);
  });

  // 备注
  let note = '此为估算，实际以渠道账单为准。';
  if (cache > 0 && !model.official_cache_read_usd_m && !model.official_cache_read_cny_m) {
    note = '⚠️ 该模型未公布缓存价格，缓存成本未计入。建议关闭缓存或选择其他模型。';
  }
  if (input === 0 && output === 0) {
    note = '⚠️ 输入和输出都为 0，结果无意义。';
  }
  document.getElementById('result-note').textContent = note;

  document.getElementById('calc-result').classList.add('show');
}

function copyCalcResult() {
  const total = document.getElementById('result-total').textContent;
  const provider = document.getElementById('result-best-provider').textContent;
  const text = 'API Radar 计算结果\n' + total + '\n' + provider;
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制到剪贴板');
  }).catch(() => {
    alert('复制失败，请手动选择');
  });
}

// ========== 价格榜 ==========
function renderPriceTable() {
  const body = document.getElementById('price-table-body');
  if (!body) return;

  const scene = document.getElementById('filter-scene')?.value || '';
  const vendor = document.getElementById('filter-vendor')?.value || '';
  const sort = document.getElementById('filter-sort')?.value || 'input';
  const fx = API_RADAR_DATA.fx_rate.USD_CNY;

  let models = API_RADAR_DATA.models.slice();

  if (scene) models = models.filter(m => (m.scenes || []).includes(scene));
  if (vendor) models = models.filter(m => m.vendor_id === vendor);

  models.forEach(m => {
    m._inputCny = m.official_input_cny_m || (m.official_input_usd_m ? m.official_input_usd_m * fx : 0);
    m._outputCny = m.official_output_cny_m || (m.official_output_usd_m ? m.official_output_usd_m * fx : 0);
    m._cacheCny = m.official_cache_read_cny_m || (m.official_cache_read_usd_m ? m.official_cache_read_usd_m * fx : 0);
    m._combo = m._inputCny + m._outputCny * 5;
  });

  if (sort === 'input') models.sort((a, b) => a._inputCny - b._inputCny);
  else if (sort === 'output') models.sort((a, b) => a._outputCny - b._outputCny);
  else if (sort === 'combo') models.sort((a, b) => a._combo - b._combo);
  else if (sort === 'context') models.sort((a, b) => b.context_window - a.context_window);

  body.innerHTML = '';
  models.forEach(m => {
    const v = getVendor(m.vendor_id);
    const offerings = getOfferingsForModel(m.id);
    const tr = document.createElement('tr');
    tr.innerHTML =
      '<td><a href="model.html?id=' + m.id + '"><div class="model-cell"><span class="model-name">' + m.display_name + '</span><span class="model-vendor">' + v.name_zh + '</span></div></a></td>' +
      '<td>' + (m.status === 'available' ? '<span style="color:var(--accent2);">●</span>' : '<span style="color:var(--warning);">●</span>') + ' 可用</td>' +
      '<td class="price-cell">' + fmtCNY(m._inputCny) + '<span class="unit">/M</span></td>' +
      '<td class="price-cell">' + fmtCNY(m._outputCny) + '<span class="unit">/M</span></td>' +
      '<td class="price-cell">' + (m._cacheCny > 0 ? fmtCNY(m._cacheCny) + '<span class="unit">/M</span>' : '—') + '</td>' +
      '<td>' + fmtCtx(m.context_window) + '</td>' +
      '<td><span style="color:var(--accent);">' + offerings.length + '</span> 家</td>';
    body.appendChild(tr);
  });

  if (models.length === 0) {
    body.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:40px;color:var(--muted);">无匹配模型</td></tr>';
  }
}

function populateVendorFilter() {
  const sel = document.getElementById('filter-vendor');
  if (!sel) return;
  API_RADAR_DATA.vendors.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = v.name_zh;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', renderPriceTable);
  document.getElementById('filter-scene')?.addEventListener('change', renderPriceTable);
  document.getElementById('filter-sort')?.addEventListener('change', renderPriceTable);
}

// ========== 行情事件 ==========
function renderEvents(filterType) {
  const list = document.getElementById('event-list');
  if (!list) return;

  let events = API_RADAR_DATA.events.slice();
  if (filterType) events = events.filter(e => e.event_type === filterType);

  events.sort((a, b) => new Date(b.effective_date) - new Date(a.effective_date));

  list.innerHTML = '';
  if (events.length === 0) {
    list.innerHTML = '<div class="empty-state">暂无该类型事件</div>';
    return;
  }

  events.forEach(e => {
    let targetName = '';
    if (e.target_type === 'model') {
      const m = getModel(e.target_id);
      targetName = m ? m.display_name : e.target_id;
    } else if (e.target_type === 'provider') {
      const p = getProvider(e.target_id);
      targetName = p ? p.name : e.target_id;
    } else if (e.target_type === 'vendor') {
      const v = getVendor(e.target_id);
      targetName = v ? v.name_zh : e.target_id;
    }

    const dotClass = e.severity === 'high' ? 'dot-high' : e.severity === 'medium' ? 'dot-medium' : 'dot-low';
    const eventTypeLabel = {
      'price_change': '价格变动',
      'model_release': '新模型',
      'capability_change': '能力变化',
      'policy_change': '政策变化',
      'outage': '故障',
      'deprecation': '弃用',
      'provider_change': '渠道变化'
    }[e.event_type] || e.event_type;

    const changeBadge = e.change_percent !== null && e.change_percent !== undefined ?
      (e.change_percent < 0 ? '<span class="trend-down">↓ ' + Math.abs(e.change_percent * 100).toFixed(0) + '%</span>' :
       e.change_percent > 0 ? '<span class="trend-up">↑ ' + (e.change_percent * 100).toFixed(0) + '%</span>' : '') : '';

    const item = document.createElement('div');
    item.className = 'event-item';
    item.innerHTML =
      '<div class="event-dot ' + dotClass + '"></div>' +
      '<div class="event-content">' +
        '<div class="event-title"><span class="event-target">' + targetName + '</span> · ' + e.headline + ' ' + changeBadge + '</div>' +
        '<div class="event-summary">' + (e.summary || '') + '</div>' +
        '<div class="event-meta">' +
          '<span class="event-time">⏱ ' + timeAgo(e.effective_date) + '</span>' +
          '<span>📋 ' + eventTypeLabel + '</span>' +
          '<span>来源：' + (e.source_type === 'official' ? '官方' : e.source_type) + '</span>' +
          (e.source_urls && e.source_urls[0] ? '<a href="' + e.source_urls[0] + '" target="_blank">🔗 来源</a>' : '') +
        '</div>' +
      '</div>';
    list.appendChild(item);
  });
}

// ========== 模型卡片网格 ==========
function renderModelGrid() {
  const grid = document.getElementById('model-grid');
  if (!grid) return;

  const vendorFilter = document.getElementById('model-filter-vendor')?.value || '';
  const capFilter = document.getElementById('model-filter-cap')?.value || '';
  const ctxFilter = document.getElementById('model-filter-context')?.value || '';
  const fx = API_RADAR_DATA.fx_rate.USD_CNY;

  let models = API_RADAR_DATA.models.slice();

  if (vendorFilter) models = models.filter(m => m.vendor_id === vendorFilter);
  if (capFilter) models = models.filter(m => (m.capabilities || []).includes(capFilter));

  if (ctxFilter) {
    models = models.filter(m => {
      const c = m.context_window;
      if (ctxFilter === '0-32000') return c <= 32000;
      if (ctxFilter === '32001-128000') return c > 32000 && c <= 128000;
      if (ctxFilter === '128001-1000000') return c > 128000 && c <= 1000000;
      if (ctxFilter === '1000001-') return c > 1000000;
      return true;
    });
  }

  grid.innerHTML = '';
  models.forEach(m => {
    const v = getVendor(m.vendor_id);
    const inputCny = m.official_input_cny_m || (m.official_input_usd_m ? m.official_input_usd_m * fx : 0);
    const outputCny = m.official_output_cny_m || (m.official_output_usd_m ? m.official_output_usd_m * fx : 0);

    const card = document.createElement('a');
    card.href = 'model.html?id=' + m.id;
    card.className = 'model-card';
    card.innerHTML =
      '<div class="model-card-name">' + m.display_name + '</div>' +
      '<div class="model-card-vendor">' + v.name_zh + '</div>' +
      '<div class="model-card-price">¥' + inputCny.toFixed(1) + ' / ¥' + outputCny.toFixed(1) + ' 输入/输出</div>' +
      '<div class="model-card-context">📏 ' + fmtCtx(m.context_window) + ' 上下文</div>' +
      '<div class="model-card-tags">' +
        (m.scenes || []).slice(0, 3).map(s => '<span class="tag tag-scene">' + s + '</span>').join('') +
        (m.capabilities || []).slice(0, 2).map(c => '<span class="tag tag-cap">' + c + '</span>').join('') +
      '</div>';
    grid.appendChild(card);
  });

  if (models.length === 0) {
    grid.innerHTML = '<div class="empty-state">无匹配模型</div>';
  }
}

function setupModelFilters() {
  const sel = document.getElementById('model-filter-vendor');
  if (!sel) return;
  sel.innerHTML = '<option value="">全部</option>';
  API_RADAR_DATA.vendors.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = v.name_zh;
    sel.appendChild(opt);
  });
  sel.addEventListener('change', renderModelGrid);
  document.getElementById('model-filter-cap')?.addEventListener('change', renderModelGrid);
  document.getElementById('model-filter-context')?.addEventListener('change', renderModelGrid);
  API_RADAR_DATA.vendors.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.id;
    opt.textContent = v.name_zh;
    sel.appendChild(opt);
  });
}

// ========== 渠道卡片 ==========
function renderProviderGrid() {
  const grid = document.getElementById('provider-grid');
  if (!grid) return;

  const typeFilter = document.getElementById('provider-filter-type')?.value || '';
  const regionFilter = document.getElementById('provider-filter-region')?.value || '';
  const payFilter = document.getElementById('provider-filter-pay')?.value || '';
  const invoiceFilter = document.getElementById('provider-filter-invoice')?.value || '';

  let providers = API_RADAR_DATA.providers.slice();

  if (typeFilter) providers = providers.filter(p => p.type === typeFilter);
  if (regionFilter === 'china') providers = providers.filter(p => (p.service_regions || []).some(r => r.includes('中国')));
  if (regionFilter === 'global') providers = providers.filter(p => (p.service_regions || []).some(r => r.includes('全球')));
  if (payFilter) providers = providers.filter(p => (p.payment_currency || []).includes(payFilter));
  if (invoiceFilter === 'true') providers = providers.filter(p => p.invoice_available);

  grid.innerHTML = '';
  providers.forEach(p => {
    const offerings = getOfferingsForProvider(p.id);
    const typeLabel = p.type === 'official' ? '官方' : p.type === 'aggregator' ? '聚合' : '云厂商';
    const typeClass = 't-' + p.type;

    const card = document.createElement('div');
    card.className = 'provider-card';
    card.onclick = () => location.href = 'provider.html?id=' + p.id;
    card.innerHTML =
      '<div class="provider-card-header">' +
        '<div class="provider-card-name">' + p.name + '</div>' +
        '<span class="provider-card-type ' + typeClass + '">' + typeLabel + '</span>' +
      '</div>' +
      '<div class="provider-card-region">📍 ' + (p.entity_region || '—') + ' · 💳 ' + (p.payment_currency || []).join('/') + '</div>' +
      '<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">' + (p.description || '').slice(0, 50) + '</div>' +
      '<div class="provider-card-models">' +
        offerings.slice(0, 4).map(o => {
          const m = getModel(o.model_id);
          return m ? '<span class="tag">' + m.display_name + '</span>' : '';
        }).join('') +
        (offerings.length > 4 ? '<span class="tag">+' + (offerings.length - 4) + '</span>' : '') +
      '</div>' +
      '<div style="margin-top:10px;font-size:11px;color:var(--muted);display:flex;justify-content:space-between;">' +
        '<span class="provider-card-status"><span class="dot"></span> ' + (p.status === 'active' ? '活跃' : '受限') + '</span>' +
        '<span>' + (p.invoice_available ? '✓ 可开票' : '× 无发票') + '</span>' +
      '</div>';
    grid.appendChild(card);
  });

  if (providers.length === 0) {
    grid.innerHTML = '<div class="empty-state">无匹配渠道</div>';
  }
}

function setupProviderFilters() {
  document.getElementById('provider-filter-type')?.addEventListener('change', renderProviderGrid);
  document.getElementById('provider-filter-region')?.addEventListener('change', renderProviderGrid);
  document.getElementById('provider-filter-pay')?.addEventListener('change', renderProviderGrid);
  document.getElementById('provider-filter-invoice')?.addEventListener('change', renderProviderGrid);
}

// ========== 关注列表（localStorage） ==========
const WATCH_KEY = 'apiradar_watch';
function getWatchList() {
  try { return JSON.parse(localStorage.getItem(WATCH_KEY) || '[]'); }
  catch { return []; }
}
function setWatchList(list) {
  localStorage.setItem(WATCH_KEY, JSON.stringify(list));
}
function isWatching(targetType, targetId) {
  return getWatchList().some(w => w.targetType === targetType && w.targetId === targetId);
}
function toggleWatch(targetType, targetId, targetName) {
  let list = getWatchList();
  const idx = list.findIndex(w => w.targetType === targetType && w.targetId === targetId);
  if (idx >= 0) {
    list.splice(idx, 1);
    setWatchList(list);
    return false;
  } else {
    list.push({ targetType, targetId, targetName, addedAt: new Date().toISOString() });
    setWatchList(list);
    return true;
  }
}

// ========== 入口 ==========
document.addEventListener('DOMContentLoaded', () => {
  initStats();
  setupSearch();
  setupTabs();
  populateModelSelect();
  populateVendorFilter();
  setupModelFilters();
  setupProviderFilters();

  if (document.getElementById('price-table-body')) renderPriceTable();
  if (document.getElementById('model-grid')) renderModelGrid();
  if (document.getElementById('provider-grid')) renderProviderGrid();
  renderEvents();
});
