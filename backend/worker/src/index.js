// API优选咨询 Cloudflare Worker - Phase 2
// hostname routing: api.apiyouxuan.top -> API, admin.apiyouxuan.top -> Admin
// Phase 2.1: Brand fallback for www.apireader.top when origin is down

// 源站（Tunnel → Python http.server）的回源地址。
// Worker 路由到 www.apireader.top 时，先去拉源站；拉不到就降级。
const ORIGIN_HOSTS = [
  'https://www.apireader.top',
  'https://apireader.top',
];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = (request.headers.get('host') || '').toLowerCase();
    const path = url.pathname;
    const method = request.method;

    if (method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders() });
    }

    // ============ Phase 2.1: 品牌降级 fallback ============
    // www.apireader.top / apireader.top 走主站源站；
    // 不接管 /api/* 和 /admin*，留给下方原路由处理。
    if (method === 'GET' && shouldProxyToOrigin(host, path)) {
      const fallback = await tryOrigin(request, path);
      if (fallback) return fallback;
      // 源站死了 → 品牌降级页
      return brandFallbackPage(host, path);
    }

    if (host.startsWith('admin.')) {
      if (path === '/' || path === '/index.html' || path === '') {
        // 从 GitHub raw 拉最新版 admin.html（始终最新）
        try {
          const resp = await fetch("https://raw.githubusercontent.com/suiyue6562/api-radar-mvp/main/03_prototype/admin.html");
          if (resp.ok) {
            const html = await resp.text();
            return new Response(html, {
              headers: { 
                'Content-Type': 'text/html; charset=utf-8',
                'Cache-Control': 'public, max-age=60'
              }
            });
          }
        } catch (e) {}
        // fallback 到内嵌
        return new Response(ADMIN_HTML, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }
      if (path.startsWith('/api/')) {
        try { return await handleApi(request, env, path, method); }
        catch (e) { return jsonErr('Server error: ' + e.message, 500); }
      }
      return new Response('Not found', { status: 404 });
    }

    // Default Worker URL: path /admin* serves admin.html, otherwise API
    if (path === '/' || path === '/admin' || path === '/admin/' || path === '/admin/index.html') {
      return new Response(ADMIN_HTML, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
    if (path.startsWith('/admin/')) {
      return new Response(ADMIN_HTML, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    try { return await handleApi(request, env, path, method); }
    catch (e) { return jsonErr('Server error: ' + e.message, 500); }
  }
};

const ADMIN_HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>API优选咨询 Admin</title>
<style>
body { font-family: -apple-system, "PingFang SC", sans-serif; background: #050714; color: #e6edff; margin: 0; padding: 40px; }
.container { max-width: 1000px; margin: 0 auto; }
h1 { background: linear-gradient(135deg, #00d9ff, #b066ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; font-size: 32px; }
.card { background: rgba(15,22,41,0.72); border: 1px solid rgba(120,160,255,0.12); border-radius: 12px; padding: 24px; margin: 16px 0; }
input, select, button, textarea { padding: 10px 14px; background: #0a0e1f; border: 1px solid rgba(120,160,255,0.12); border-radius: 8px; color: #e6edff; font-size: 14px; font-family: inherit; box-sizing: border-box; width: 100%; }
input:focus, select:focus, textarea:focus { outline: none; border-color: #00d9ff; }
button { background: linear-gradient(135deg, #00d9ff, #b066ff); color: #001428; font-weight: 700; cursor: pointer; border: none; width: auto; }
button:hover { opacity: 0.85; }
table { width: 100%; border-collapse: collapse; font-size: 13px; }
th, td { padding: 10px 12px; border-bottom: 1px solid rgba(120,160,255,0.12); text-align: left; }
th { color: #8896b8; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
.btn-row { display: flex; gap: 6px; }
.btn-row button { padding: 4px 8px; font-size: 11px; }
.modal { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: none; align-items: center; justify-content: center; z-index: 100; }
.modal.show { display: flex; }
.modal-content { background: #0a0e1f; border: 1px solid rgba(120,160,255,0.3); border-radius: 12px; padding: 24px; max-width: 700px; width: 90%; max-height: 85vh; overflow-y: auto; }
.form-row { display: flex; gap: 12px; margin: 10px 0; }
.form-row > * { flex: 1; }
.form-row label { display: block; font-size: 11px; color: #8896b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
label { display: block; font-size: 11px; color: #8896b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.05em; }
.stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 16px 0; }
.stat-card { padding: 16px; text-align: center; background: linear-gradient(135deg, rgba(0,217,255,0.08), rgba(176,107,255,0.05)); border-radius: 8px; border: 1px solid rgba(120,160,255,0.1); }
.stat-num { font-size: 28px; font-weight: 700; background: linear-gradient(135deg, #00d9ff, #b066ff); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.muted { color: #8896b8; font-size: 12px; }
.tag { padding: 2px 8px; border-radius: 4px; font-size: 11px; background: rgba(0,217,255,0.1); color: #00d9ff; }
.tab-bar { display: flex; gap: 4px; margin-bottom: 16px; flex-wrap: wrap; }
.tab-bar button { padding: 8px 14px; background: rgba(15,22,41,0.5); color: #8896b8; }
.tab-bar button.active { background: linear-gradient(135deg, #00d9ff, #b066ff); color: #001428; }
.tab-bar button:hover { color: #fff; }
.top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.flex-row { display: flex; gap: 12px; align-items: center; }
.search-box { width: 240px; }
</style>
</head>
<body>
<div class="container">
  <h1>API优选咨询 Admin</h1>
  <div id="login-view">
    <div class="card" style="max-width:480px;margin:60px auto;">
      <h3 style="margin-top:0;">登录</h3>
      <label>ADMIN TOKEN</label>
      <input type="password" id="login-token" placeholder="粘贴 ADMIN_TOKEN" />
      <div style="display:flex;gap:8px;margin-top:16px;">
        <button onclick="doLogin()">登录</button>
        <button onclick="localStorage.removeItem(TOKEN_KEY);location.reload();" style="background:#8896b8;">清除 token</button>
      </div>
      <p class="muted" style="margin-top:16px;">TOKEN 存在 localStorage，30 天有效</p>
    </div>
  </div>
  <div id="main-view" style="display:none;">
    <div class="top-bar">
      <span class="muted" id="user-info"></span>
      <button onclick="logout()">登出</button>
    </div>
    <div class="card">
      <h3 style="margin-top:0;">仪表盘</h3>
      <div class="stat-grid" id="stats-grid"></div>
    </div>
    <div class="card">
      <div class="tab-bar">
        <button class="active" data-tab="models" onclick="switchTab('models')">模型</button>
        <button data-tab="providers" onclick="switchTab('providers')">渠道</button>
        <button data-tab="vendors" onclick="switchTab('vendors')">厂商</button>
        <button data-tab="events" onclick="switchTab('events')">事件</button>
        <button data-tab="ads" onclick="switchTab('ads')">广告位</button>
        <button data-tab="log" onclick="switchTab('log')">日志</button>
        <button data-tab="export" onclick="switchTab('export')">导出</button>
      </div>
      <div id="tab-content"></div>
    </div>
  </div>
</div>
<div class="modal" id="edit-modal">
  <div class="modal-content" id="modal-content"></div>
</div>
<script>
const TOKEN_KEY = "api_youxuan_admin_token";
let currentTab = "models";
let cache = {};

function $(id) { return document.getElementById(id); }
async function api(path, opts = {}) {
  const token = localStorage.getItem(TOKEN_KEY);
  opts.headers = Object.assign({ "Content-Type": "application/json" }, opts.headers || {}, { "Authorization": "Bearer " + token });
  if (opts.body && typeof opts.body !== "string") opts.body = JSON.stringify(opts.body);
  const r = await fetch(path, opts);
  return await r.json();
}

async function doLogin() {
  const t = $("login-token").value.trim();
  if (!t) return;
  localStorage.setItem(TOKEN_KEY, t);
  const r = await api("/api/admin/stats");
  if (r.counts) { $("login-view").style.display = "none"; $("main-view").style.display = "block"; loadStats(); switchTab("models"); }
  else { alert("登录失败"); localStorage.removeItem(TOKEN_KEY); }
}

function logout() { localStorage.removeItem(TOKEN_KEY); location.reload(); }

async function loadStats() {
  const stats = await api("/api/admin/stats");
  $("stats-grid").innerHTML = Object.entries(stats.counts).map(([k,v]) =>
    '<div class="stat-card"><div class="stat-num">' + v + '</div><div class="muted">' + k + '</div></div>'
  ).join('') +
  '<div class="stat-card"><div class="stat-num">' + stats.page_views_24h + '</div><div class="muted">24h PV</div></div>' +
  '<div class="stat-card"><div class="stat-num">' + stats.ad_clicks_24h + '</div><div class="muted">24h 广告点击</div></div>';
}

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab-bar button").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
  if (tab === "models") renderModels();
  else if (tab === "providers") renderProviders();
  else if (tab === "vendors") renderVendors();
  else if (tab === "events") renderEvents();
  else if (tab === "ads") renderAds();
  else if (tab === "log") renderLog();
  else if (tab === "export") renderExport();
}

async function renderTable(table, columns, schema) {
  cache[table] = await api("/api/admin/" + table);
  const data = cache[table];
  const html = '<div class="top-bar"><span class="muted">' + data.length + ' 条记录</span><button onclick="editRecord(\\'' + table + '\\', null, schema_' + table + ')">+ 新增</button></div>' +
    '<table><thead><tr>' + columns.map(c => '<th>' + c + '</th>').join('') + '<th>操作</th></tr></thead><tbody>' +
    data.map(row =>
      '<tr>' + columns.map(c => '<td>' + formatVal(row[c]) + '</td>').join('') +
      '<td class="btn-row"><button onclick="editRecord(\\'' + table + '\\', \\'' + row.id + '\\', schema_' + table + ')">编辑</button>' +
      '<button onclick="deleteRecord(\\'' + table + '\\', \\'' + row.id + '\\')" style="background:#ff4757;">删</button></td></tr>'
    ).join('') + '</tbody></table>';
  $("tab-content").innerHTML = html;
  window['schema_' + table] = schema;
}

function formatVal(v) {
  if (v === null || v === undefined) return '<span class="muted">—</span>';
  if (typeof v === "object") return '<span class="tag">' + JSON.stringify(v).slice(0,40) + '</span>';
  return String(v).slice(0, 80);
}

async function renderModels() {
  cache.vendors = await api("/api/admin/vendors");
  await renderTable("models", ["id","name","vendor_id","category","price_input_per_m","price_output_per_m","data_status"], {
    id: "text", vendor_id: "vendor", display_name: "text", name: "text", family: "text",
    category: ["reasoning","balanced","agentic_coding","multimodal"],
    tags: "json", context_window: "number", max_output_tokens: "number", release_date: "text",
    price_input_per_m: "number", price_output_per_m: "number", price_cache_read_per_m: "number",
    tool_use: "bool", vision: "bool", function_calling: "bool", streaming: "bool",
    batch_discount: "number", description: "textarea", notes: "textarea",
    license: "text", is_open_weight: "bool", data_status: ["A","B","C"]
  });
}

async function renderProviders() {
  await renderTable("providers", ["id","name_zh","type","region","min_charge","invoice_available","data_status"], {
    id: "text", name_zh: "text", name_en: "text",
    type: ["official","aggregator","gateway","self_host","platform","individual"],
    region: ["global","cn"], website: "text", min_charge: "number", sla_uptime: "text",
    concurrent_rpm: "number", notes: "textarea", data_status: ["A","B","C"]
  });
}

async function renderVendors() {
  await renderTable("vendors", ["id","name_zh","region","logo","data_status"], {
    id: "text", name_zh: "text", name_en: "text",
    region: ["global","cn"], logo: "text", website: "text", data_status: ["A","B","C"]
  });
}

async function renderEvents() {
  await renderTable("events", ["id","date","event_type","severity","target_name","title"], {
    id: "text", date: "text",
    event_type: ["price_change","new_model","outage","capability_update","policy_change","model_deprecate"],
    severity: ["high","medium","low","positive","neutral"],
    target_type: ["model","provider"], target_id: "text", target_name: "text",
    title: "text", description: "textarea"
  });
}

async function renderAds() {
  await renderTable("ads", ["id","slot","type","title","active","impressions","clicks"], {
    id: "text",
    slot: ["home_top","home_mid","sidebar","models_top","footer"],
    type: ["banner","text","sponsored_card"],
    title: "text", content: "textarea", image_url: "text", link_url: "text", advertiser: "text",
    start_date: "text", end_date: "text", active: "bool", priority: "number", max_impressions: "number"
  });
}

async function renderLog() {
  const log = await api("/api/admin/log");
  $("tab-content").innerHTML = '<h3>最近 100 条变更</h3><table><thead><tr><th>时间</th><th>操作</th><th>表</th><th>记录</th></tr></thead><tbody>' +
    log.map(r => '<tr><td class="muted">' + r.ts + '</td><td><span class="tag">' + r.action + '</span></td><td>' + r.table_name + '</td><td><code>' + r.record_id + '</code></td></tr>').join('') + '</tbody></table>';
}

function renderExport() {
  $("tab-content").innerHTML = '<h3>导出 seed_data.json</h3><p class="muted">点击下载完整 JSON。</p><button onclick="doExport()">下载</button><pre id="export-preview" style="margin-top:16px;padding:16px;background:#0a0e1f;border-radius:8px;max-height:300px;overflow:auto;font-size:11px;"></pre>';
  api("/api/admin/export").then(data => {
    $("export-preview").textContent = JSON.stringify({vendors: data.vendors.length, models: data.models.length, providers: data.providers.length, offerings: data.offerings.length, events: data.events.length, ads: data.ads.length}, null, 2);
  });
}

function doExport() {
  api("/api/admin/export").then(data => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "seed_data_" + new Date().toISOString().slice(0,10) + ".json"; a.click();
  });
}

async function editRecord(table, id, schema) {
  let record = {};
  if (id) {
    cache[table] = cache[table] || await api("/api/admin/" + table);
    record = cache[table].find(r => r.id === id) || {};
  }
  cache.vendors = cache.vendors || await api("/api/admin/vendors");
  const fields = Object.entries(schema).map(([key, def]) => {
    const v = record[key] !== undefined ? record[key] : (def === "bool" ? 0 : "");
    let input;
    if (def === "vendor") {
      input = '<select name="' + key + '">' + cache.vendors.map(o => '<option value="' + o.id + '"' + (v===o.id?' selected':'') + '>' + o.name_zh + '</option>').join('') + '</select>';
    } else if (Array.isArray(def)) {
      input = '<select name="' + key + '">' + def.map(o => '<option value="' + o + '"' + (v===o?' selected':'') + '>' + o + '</option>').join('') + '</select>';
    } else if (def === "bool") {
      input = '<label><input type="checkbox" name="' + key + '"' + (v?' checked':'') + '> ' + key + '</label>';
    } else if (def === "textarea" || def === "json") {
      const tv = typeof v === "object" ? JSON.stringify(v) : v;
      input = '<textarea name="' + key + '" rows="3">' + (tv || "") + '</textarea>';
    } else {
      input = '<input type="' + (def||"text") + '" name="' + key + '" value="' + v + '"' + (key==="id"?" readonly":"") + '>';
    }
    return '<div class="form-row"><div><label>' + key + '</label>' + input + '</div></div>';
  }).join('');
  $("modal-content").innerHTML = '<h3>' + (id ? "编辑" : "新增") + " " + table + '</h3><form onsubmit="submitRecord(event, \\'' + table + '\\', \\'' + (id||"") + '\\')">' + fields + '<div style="display:flex;gap:8px;margin-top:20px;"><button type="submit">保存</button><button type="button" onclick="closeModal()" style="background:#8896b8;">取消</button></div></form>';
  $("edit-modal").classList.add("show");
}

function closeModal() { $("edit-modal").classList.remove("show"); }

async function submitRecord(e, table, id) {
  e.preventDefault();
  const form = e.target;
  const data = {};
  for (const el of form.elements) {
    if (!el.name) continue;
    if (el.type === "checkbox") data[el.name] = el.checked ? 1 : 0;
    else if (el.type === "number") data[el.name] = parseFloat(el.value) || 0;
    else if (el.tagName === "TEXTAREA") { try { data[el.name] = JSON.parse(el.value); } catch { data[el.name] = el.value; } }
    else data[el.name] = el.value;
  }
  const method = id ? "PATCH" : "POST";
  const url = id ? "/api/admin/" + table + "/" + id : "/api/admin/" + table;
  const r = await api(url, { method, body: data });
  if (r.error) { alert("保存失败：" + r.error); return; }
  cache[table] = null;
  closeModal();
  switchTab(currentTab);
}

async function deleteRecord(table, id) {
  if (!confirm("确认删除 " + table + "/" + id + "？")) return;
  const r = await api("/api/admin/" + table + "/" + id, { method: "DELETE" });
  if (r.error) { alert("删除失败：" + r.error); return; }
  cache[table] = null;
  switchTab(currentTab);
}

if (localStorage.getItem(TOKEN_KEY)) {
  api("/api/admin/stats").then(r => {
    if (r && r.counts) { $("login-view").style.display = "none"; $("main-view").style.display = "block"; loadStats(); switchTab("models"); }
  });
}
</script>
</body>
</html>`;

async function handleApi(request, env, path, method) {
  const url = new URL(request.url);
  if (method === 'GET' && path === '/api/data') {
    return jsonOk(await getAllData(env));
  }
  if (method === 'GET' && path === '/api/models') {
    return jsonOk(await q(env, 'SELECT * FROM models ORDER BY release_date DESC'));
  }
  if (method === 'GET' && path.startsWith('/api/models/')) {
    const id = path.split('/').pop();
    const m = await q(env, 'SELECT * FROM models WHERE id = ?', [id]);
    if (!m.length) return jsonErr('Not found', 404);
    const offerings = await q(env, 'SELECT * FROM offerings WHERE model_id = ?', [id]);
    return jsonOk(Object.assign({}, m[0], { offerings }));
  }
  if (method === 'GET' && path === '/api/providers') {
    return jsonOk(await q(env, 'SELECT * FROM providers ORDER BY name_zh'));
  }
  if (method === 'GET' && path.startsWith('/api/providers/')) {
    const id = path.split('/').pop();
    const p = await q(env, 'SELECT * FROM providers WHERE id = ?', [id]);
    if (!p.length) return jsonErr('Not found', 404);
    return jsonOk(p[0]);
  }
  if (method === 'GET' && path === '/api/vendors') {
    return jsonOk(await q(env, 'SELECT * FROM vendors ORDER BY name_zh'));
  }
  if (method === 'GET' && path === '/api/events') {
    const days = parseInt(url.searchParams.get('days') || '30');
    return jsonOk(await q(env, 'SELECT * FROM events WHERE date >= date("now", ?) ORDER BY date DESC', ['-' + days + ' days']));
  }
  if (method === 'GET' && path === '/api/ads') {
    const slot = url.searchParams.get('slot');
    const ads = slot
      ? await q(env, 'SELECT * FROM ads WHERE slot = ? AND active = 1 AND (end_date IS NULL OR end_date >= date("now")) ORDER BY priority DESC LIMIT 1', [slot])
      : await q(env, 'SELECT * FROM ads WHERE active = 1 ORDER BY slot, priority DESC');
    return jsonOk(ads);
  }
  if (method === 'POST' && path.match(/^\/api\/ads\/[^/]+\/click$/)) {
    const adId = path.split('/')[3];
    await q(env, 'INSERT INTO ad_clicks (ad_id, user_agent, country) VALUES (?, ?, ?)', [adId, request.headers.get('user-agent') || '', request.cf?.country || '']);
    await q(env, 'UPDATE ads SET clicks = clicks + 1 WHERE id = ?', [adId]);
    return jsonOk({ ok: true });
  }
  if (method === 'POST' && path === '/api/page-view') {
    const body = await request.json().catch(() => ({}));
    await q(env, 'INSERT INTO page_views (path, user_agent, country) VALUES (?, ?, ?)', [body.path || '/', request.headers.get('user-agent') || '', request.cf?.country || '']);
    return jsonOk({ ok: true });
  }
  if (method === 'POST' && path === '/api/watches') {
    const body = await request.json();
    if (!body.user_token || !body.target_id) return jsonErr('Missing fields', 400);
    await q(env, 'INSERT OR IGNORE INTO watches (user_token, target_type, target_id, target_name) VALUES (?, ?, ?, ?)', [body.user_token, body.target_type, body.target_id, body.target_name || '']);
    return jsonOk({ ok: true });
  }
  if (method === 'GET' && path === '/api/watches') {
    const token = url.searchParams.get('user_token');
    if (!token) return jsonErr('Missing user_token', 400);
    return jsonOk(await q(env, 'SELECT * FROM watches WHERE user_token = ? ORDER BY created_at DESC', [token]));
  }
  if (method === 'DELETE' && path.startsWith('/api/watches/')) {
    const id = path.split('/').pop();
    await q(env, 'DELETE FROM watches WHERE id = ?', [id]);
    return jsonOk({ ok: true });
  }
  // ============ A/B 测试 ============
  if (method === 'POST' && path === '/api/ab/assign') {
    const body = await request.json();
    const userToken = body.user_token;
    const expId = body.experiment_id;
    if (!userToken || !expId) return jsonErr('Missing fields', 400);

    // 检查已有分桶
    let bucket = await q(env, 'SELECT * FROM user_buckets WHERE user_token = ? AND experiment_id = ?', [userToken, expId]);
    if (bucket.length) {
      return jsonOk({ variant: bucket[0].variant, cached: true });
    }

    // 拉实验
    const exp = await q(env, 'SELECT * FROM ab_experiments WHERE id = ? AND status = ?', [expId, 'running']);
    if (!exp.length) return jsonErr('Experiment not found or not running', 404);

    const split = JSON.parse(exp[0].traffic_split || '{}');
    const variants = Object.keys(split);
    if (!variants.length) return jsonErr('No variants', 400);

    // 用 hash 分桶（保证同 user_token 总落同一 variant）
    let hash = 0;
    const str = userToken + ':' + expId;
    for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0;
    const idx = Math.abs(hash) % 100;
    let acc = 0, chosen = variants[0];
    for (const v of variants) {
      acc += split[v] || 0;
      if (idx < acc) { chosen = v; break; }
    }

    await q(env, 'INSERT INTO user_buckets (user_token, experiment_id, variant) VALUES (?, ?, ?)', [userToken, expId, chosen]);
    return jsonOk({ variant: chosen, cached: false });
  }

  if (method === 'POST' && path === '/api/ab/event') {
    const body = await request.json();
    if (!body.experiment_id || !body.variant || !body.event_type) return jsonErr('Missing fields', 400);
    await q(env, 'INSERT INTO ab_events (experiment_id, variant, user_token, event_type) VALUES (?, ?, ?, ?)',
      [body.experiment_id, body.variant, body.user_token || '', body.event_type]);
    return jsonOk({ ok: true });
  }

  if (method === 'GET' && path.startsWith('/api/ab/results/')) {
    const expId = path.split('/').pop();
    const events = await q(env, 'SELECT variant, event_type, COUNT(*) as c FROM ab_events WHERE experiment_id = ? GROUP BY variant, event_type', [expId]);
    const buckets = await q(env, 'SELECT variant, COUNT(*) as users FROM user_buckets WHERE experiment_id = ? GROUP BY variant', [expId]);
    return jsonOk({ experiment_id: expId, buckets, events });
  }

  if (method === 'GET' && path === '/api/stats/traffic') {
    // 流量统计
    const last24h = await q(env, "SELECT path, COUNT(*) as pv FROM page_views WHERE ts >= datetime('now', '-1 day') GROUP BY path ORDER BY pv DESC LIMIT 20");
    const last7d = await q(env, "SELECT path, COUNT(*) as pv FROM page_views WHERE ts >= datetime('now', '-7 days') GROUP BY path ORDER BY pv DESC LIMIT 20");
    const sources = await q(env, "SELECT user_agent, COUNT(*) as c FROM page_views WHERE ts >= datetime('now', '-1 day') GROUP BY user_agent ORDER BY c DESC LIMIT 10");
    return jsonOk({ last_24h: last24h, last_7d: last7d, sources });
  }

  if (path.startsWith('/api/admin/')) {
    return await handleAdmin(request, env, path, method);
  }
  if (path.startsWith('/api/admin/')) {
    return await handleAdmin(request, env, path, method);
  }
  return jsonErr('Not found', 404);
}

async function handleAdmin(request, env, path, method) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace('Bearer ', '');
  if (token !== 'chen-admin-2026') return jsonErr('Unauthorized', 401);
  const match = path.match(/^\/api\/admin\/(\w+)(?:\/(\w+))?$/);
  if (!match) return jsonErr('Bad path', 400);
  const table = match[1];
  const id = match[2];
  if (path === '/api/admin/log' && method === 'GET') return jsonOk(await q(env, 'SELECT * FROM change_log ORDER BY ts DESC LIMIT 100'));
  if (path === '/api/admin/stats' && method === 'GET') return jsonOk(await getStats(env));
  if (path === '/api/admin/export') return jsonOk(await getAllData(env));
  const allowed = ['vendors', 'models', 'providers', 'offerings', 'events', 'ads', 'ab_experiments'];
  if (!allowed.includes(table)) return jsonErr('Table not editable: ' + table, 400);
  if (method === 'POST' && !id) return await insertRecord(env, table, await request.json(), request);
  if (method === 'PATCH' && id) return await updateRecord(env, table, id, await request.json(), request);
  if (method === 'DELETE' && id) return await deleteRecord(env, table, id, request);
  if (method === 'GET' && !id) return jsonOk(await q(env, 'SELECT * FROM ' + table + ' LIMIT 500'));
  return jsonErr('Bad request', 400);
}

async function insertRecord(env, table, body, request) {
  const cols = Object.keys(body);
  const vals = Object.values(body).map(v => v === '' ? null : v);
  const placeholders = cols.map(() => '?').join(',');
  const sql = 'INSERT INTO ' + table + ' (' + cols.join(',') + ') VALUES (' + placeholders + ')';
  try {
    await q(env, sql, vals);
    await logChange(env, request, 'create', table, body.id || body[cols[0]], null, body);
    return jsonOk({ ok: true });
  } catch (e) { return jsonErr('Insert failed: ' + e.message, 400); }
}

async function updateRecord(env, table, id, body, request) {
  const old = await q(env, 'SELECT * FROM ' + table + ' WHERE id = ? LIMIT 1', [id]);
  if (!old.length) return jsonErr('Not found', 404);
  const cols = Object.keys(body).filter(k => k !== 'id');
  const vals = cols.map(k => body[k] === '' ? null : body[k]);
  const sets = cols.map(c => c + ' = ?').join(', ');
  const sql = 'UPDATE ' + table + ' SET ' + sets + ', updated_at = CURRENT_TIMESTAMP WHERE id = ?';
  try {
    await q(env, sql, vals.concat([id]));
    await logChange(env, request, 'update', table, id, old[0], body);
    return jsonOk({ ok: true });
  } catch (e) { return jsonErr('Update failed: ' + e.message, 400); }
}

async function deleteRecord(env, table, id, request) {
  const old = await q(env, 'SELECT * FROM ' + table + ' WHERE id = ? LIMIT 1', [id]);
  if (!old.length) return jsonErr('Not found', 404);
  try {
    await q(env, 'DELETE FROM ' + table + ' WHERE id = ?', [id]);
    await logChange(env, request, 'delete', table, id, old[0], null);
    return jsonOk({ ok: true });
  } catch (e) { return jsonErr('Delete failed: ' + e.message, 400); }
}

async function logChange(env, request, action, table, recordId, oldVal, newVal) {
  await q(env, 'INSERT INTO change_log (username, action, table_name, record_id, old_value, new_value, ip_address) VALUES (?, ?, ?, ?, ?, ?, ?)', ['admin', action, table, String(recordId || ''), JSON.stringify(oldVal), JSON.stringify(newVal), request.headers.get('cf-connecting-ip') || '']);
}

async function getStats(env) {
  const tables = ['vendors', 'models', 'providers', 'offerings', 'events', 'ads'];
  const counts = {};
  for (const t of tables) {
    const r = await q(env, 'SELECT COUNT(*) as c FROM ' + t);
    counts[t] = r[0].c;
  }
  const views24h = await q(env, "SELECT COUNT(*) as c FROM page_views WHERE ts >= datetime('now', '-1 day')");
  const clicks24h = await q(env, "SELECT COUNT(*) as c FROM ad_clicks WHERE ts >= datetime('now', '-1 day')");
  return { counts: counts, page_views_24h: views24h[0].c, ad_clicks_24h: clicks24h[0].c, ts: new Date().toISOString() };
}

async function getAllData(env) {
  const [vendors, models, providers, offerings, events, ads] = await Promise.all([
    q(env, 'SELECT * FROM vendors'),
    q(env, 'SELECT * FROM models'),
    q(env, 'SELECT * FROM providers'),
    q(env, 'SELECT * FROM offerings'),
    q(env, 'SELECT * FROM events ORDER BY date DESC'),
    q(env, 'SELECT * FROM ads WHERE active = 1')
  ]);
  return { vendors: vendors, models: models, providers: providers, offerings: offerings, events: events, ads: ads, ts: new Date().toISOString() };
}

async function q(env, sql, params) {
  params = params || [];
  const stmt = env.DB.prepare(sql);
  const bound = params.length ? stmt.bind.apply(stmt, params) : stmt;
  const result = await bound.all();
  return result.results || [];
}

function jsonOk(data) {
  return new Response(JSON.stringify(data, null, 2), {
    headers: Object.assign({}, corsHeaders(), { 'Content-Type': 'application/json' })
  });
}

function jsonErr(msg, status) {
  status = status || 400;
  return new Response(JSON.stringify({ error: msg }), {
    status: status,
    headers: Object.assign({}, corsHeaders(), { 'Content-Type': 'application/json' })
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  };
}

// ============ Phase 2.1: 品牌降级 fallback ============
//
// 场景：apireader.top / www.apireader.top 走 Cloudflare Tunnel → 源站
//       (Python http.server) → 源站进程死了，Tunnel 把 502 透出给 Cloudflare。
//
// 行为：Worker 在路由接管前先试一次回源，成功就透传；
//       失败就返回品牌友好 HTML（不是 Cloudflare 通用 502 页）。

// 哪些 Host + Path 走回源策略？
function shouldProxyToOrigin(host, path) {
  // 只接管主站域
  if (host !== 'apireader.top' && host !== 'www.apireader.top') return false;
  // 不接管 Worker 自己的 API/Admin 路由
  if (path.startsWith('/api/')) return false;
  if (path === '/admin' || path.startsWith('/admin') || path === '/admin/') return false;
  return true;
}

// 试源站：成功返回 Response；失败返回 null（调用方决定降级）
async function tryOrigin(request, path) {
  const headers = new Headers(request.headers);
  // 移除 Cloudflare 专属头，避免回源时不一致
  headers.set('Host', 'www.apireader.top');
  for (const k of ['cf-connecting-ip', 'cf-warp-tag-id', 'cf-ray']) headers.delete(k);
  for (const base of ORIGIN_HOSTS) {
    try {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 4000); // 4s 超时，比 Cloudflare 早
      const r = await fetch(base + path + (new URL(request.url)).search, {
        method: 'GET',
        headers,
        redirect: 'follow',
        signal: controller.signal,
      });
      clearTimeout(t);
      if (r && r.ok && r.status >= 200 && r.status < 400) {
        // 透传：把 Content-Type 留给浏览器自己判
        return new Response(r.body, {
          status: r.status,
          headers: r.headers,
        });
      }
    } catch (_) {
      // 继续试下一个 base
    }
  }
  return null;
}

// 品牌降级页 —— 使用 03_prototype/style.css 同样的 okkmax 极简白底风格
function brandFallbackPage(host, path) {
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>API优选咨询 — 源站维护中</title>
<meta name="description" content="API优选咨询源站正在维护，API 路由仍正常可用。">
<meta name="robots" content="noindex">
<style>
  :root {
    --bg-base: #ffffff;
    --bg-deep: #f9fafb;
    --border: #e5e7eb;
    --border-strong: #d1d5db;
    --fg: #1a1a1a;
    --fg-strong: #000000;
    --muted: #6b7280;
    --muted-2: #9ca3af;
    --accent: #1f2937;
    --accent-2: #2563eb;
    --warning: #d97706;
    --success: #16a34a;
    --danger: #dc2626;
    --shadow-md: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    --radius: 6px;
    --radius-lg: 8px;
    --font-sans: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
    --font-mono: ui-monospace, 'JetBrains Mono', 'SF Mono', 'Cascadia Code', Consolas, monospace;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: #fcfcfd;
    color: var(--fg);
    font-family: var(--font-sans);
    font-size: 14px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a { color: var(--fg); text-decoration: none; transition: color 0.15s; }
  a:hover { color: var(--accent-2); }
  button { cursor: pointer; border: 0; background: transparent; color: inherit; font: inherit; }
  code, .mono { font-family: var(--font-mono); }

  /* === Topbar（与主站一致） === */
  .topbar {
    position: sticky; top: 0; z-index: 50;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    height: 56px;
    display: flex; align-items: center;
    padding: 0 24px;
  }
  .topbar-inner {
    width: 100%; max-width: 1100px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
  }
  .brand {
    display: flex; align-items: center; gap: 10px;
    font-weight: 700; font-size: 15px; color: var(--fg-strong);
  }
  .brand-mark {
    width: 28px; height: 28px;
    border-radius: var(--radius);
    background: var(--fg-strong);
    color: #fff;
    display: inline-flex; align-items: center; justify-content: center;
    font-family: var(--font-mono); font-weight: 800; font-size: 14px;
    letter-spacing: -0.02em;
  }
  .status-pill {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 10px;
    border: 1px solid var(--border-strong);
    border-radius: 999px;
    font-size: 12px;
    color: var(--muted);
    background: var(--bg-base);
  }
  .status-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: var(--warning);
    box-shadow: 0 0 0 0 rgba(217,119,6,0.6);
    animation: pulse 1.8s ease-out infinite;
  }
  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(217,119,6,0.55); }
    70% { box-shadow: 0 0 0 8px rgba(217,119,6,0); }
    100% { box-shadow: 0 0 0 0 rgba(217,119,6,0); }
  }

  /* === Main === */
  main {
    max-width: 760px;
    margin: 0 auto;
    padding: 80px 24px 120px;
  }
  .eyebrow {
    display: inline-block;
    padding: 4px 10px;
    background: var(--bg-deep);
    border: 1px solid var(--border);
    border-radius: 999px;
    font-size: 12px;
    color: var(--muted);
    margin-bottom: 24px;
    font-family: var(--font-mono);
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  h1 {
    font-size: 44px;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--fg-strong);
    margin-bottom: 16px;
  }
  .lede {
    font-size: 17px;
    color: var(--muted);
    max-width: 560px;
    margin-bottom: 40px;
  }

  /* === Info card === */
  .card {
    background: var(--bg-base);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 24px;
    margin: 16px 0;
    box-shadow: var(--shadow-md);
  }
  .card-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); }
  .card-row:last-child { border-bottom: 0; }
  .card-row .k { color: var(--muted); font-size: 13px; }
  .card-row .v { font-family: var(--font-mono); font-size: 13px; color: var(--fg-strong); }

  /* === CTAs === */
  .ctas { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 32px; }
  .btn {
    display: inline-flex; align-items: center; justify-content: center;
    height: 42px;
    padding: 0 20px;
    border-radius: var(--radius);
    font-size: 14px; font-weight: 600;
    transition: opacity 0.15s, border-color 0.15s, background 0.15s;
    border: 1px solid var(--border);
    background: var(--bg-base);
    color: var(--fg);
  }
  .btn:hover { border-color: var(--fg-strong); color: var(--fg-strong); }
  .btn-primary { background: var(--fg-strong); color: #fff; border-color: var(--fg-strong); }
  .btn-primary:hover { opacity: 0.88; color: #fff; }
  .btn-ghost { background: transparent; }

  /* === Notice === */
  .notice {
    margin-top: 32px;
    padding: 14px 16px;
    background: var(--bg-deep);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-size: 13px;
    color: var(--muted);
  }
  .notice strong { color: var(--fg-strong); }

  /* === Footer === */
  .footer {
    border-top: 1px solid var(--border);
    padding: 24px;
    text-align: center;
    color: var(--muted-2);
    font-size: 12px;
    font-family: var(--font-mono);
  }
  .footer code { background: var(--bg-deep); padding: 2px 6px; border-radius: 4px; }

  @media (max-width: 560px) {
    h1 { font-size: 32px; }
    main { padding: 48px 20px 80px; }
  }
</style>
</head>
<body>

<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="/">
      <span class="brand-mark">R</span>
      <span>API优选咨询</span>
    </a>
    <span class="status-pill">
      <span class="status-dot"></span>
      <span>源站维护中</span>
    </span>
  </div>
</header>

<main>
  <span class="eyebrow">Service Notice · 服务提示</span>
  <h1>源站正在维护，<br>数据服务不受影响。</h1>
  <p class="lede">
    www.apireader.top 的静态页面暂不可达（后台源站服务正在重启）。
    <strong>API 数据接口一切正常</strong>，开发者与已对接服务可继续调用。
    通常 1–3 分钟内自动恢复。
  </p>

  <div class="card" aria-label="状态详情">
    <div class="card-row"><span class="k">受影响范围</span><span class="v">主站静态页（HTML / JS / CSS）</span></div>
    <div class="card-row"><span class="k">API 接口</span><span class="v" style="color:var(--success);">✓ 正常</span></div>
    <div class="card-row"><span class="k">管理后台</span><span class="v" style="color:var(--success);">✓ 正常</span></div>
    <div class="card-row"><span class="k">预计恢复</span><span class="v">≤ 3 分钟（自动 watchdog）</span></div>
  </div>

  <div class="ctas">
    <button class="btn btn-primary" onclick="location.reload()">↻ 重新尝试</button>
    <a class="btn" href="https://api.apireader.top/api/data" target="_blank" rel="noopener">查看实时 API 数据 →</a>
    <a class="btn btn-ghost" href="https://status.apireader.top" target="_blank" rel="noopener">状态页</a>
  </div>

  <div class="notice">
    <strong>如果你正在对接 API：</strong>所有 <code>api.apireader.top/api/*</code> 端点返回真实数据，无需任何变更。
    问题仅出现在 <code>www.apireader.top</code> 的前端页面部分。
  </div>
</main>

<footer class="footer">
  <code>${host}${path}</code> · 502 透传 → Worker 品牌降级 · ${new Date().toISOString().slice(0,16).replace('T',' ')} UTC
</footer>

</body>
</html>`;
  return new Response(html, {
    status: 503, // 503 而不是 200，让监控工具知道这是降级状态
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, max-age=0',
      'X-Fallback': 'origin-down',
      'Retry-After': '60',
    },
  });
}