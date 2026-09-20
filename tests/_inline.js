
function escapeHtml(s) { return String(s || "").replace(/[&<>"']/g, c => ({"&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"})[c]); }
if (typeof renderTopbar === "function") renderTopbar("playground");


const PRESETS = [
  { name: "中英翻译", icon: "🌐", system: "你是一个专业翻译。将用户输入的中文翻译成英文，保持原意自然流畅。", user: "人工智能正在改变世界。" },
  { name: "总结", icon: "📝", system: "你是文章摘要助手。用 3 句话总结用户输入的核心要点。", user: "请粘贴一段长文，我帮你总结..." },
  { name: "代码助手", icon: "💻", system: "你是 Python 专家。帮用户写清晰、可运行的代码，优先使用标准库。", user: "写一个函数：输入 URL 列表，并发下载并返回状态码" },
  { name: "中翻英+润色", icon: "✍️", system: "你是英文写作教练。先翻译，再优化用词让表达更地道专业。", user: "请粘贴中文..." },
  { name: "SQL 助手", icon: "🗄️", system: "你是 SQL 专家。生成可执行的 SQL 查询，附简短解释。", user: "查询最近 30 天订单，按用户分组统计总金额" },
  { name: "JSON 提取", icon: "📋", system: "你是 JSON 提取助手。从用户输入中提取结构化数据，返回 JSON。", user: "用户：李明，30 岁，北京，手机 13800138000" },
  { name: "代码解释", icon: "🔍", system: "你是代码审查员。逐行解释代码的功能和潜在问题。", user: "粘贴代码..." },
  { name: "情感分析", icon: "💬", system: "你是情感分析助手。返回：情感类型（正面/负面/中性）、置信度、关键词。", user: "粘贴文本..." }
];

function renderPresets() {
  const row = document.getElementById("preset-row");
  row.innerHTML = PRESETS.map((p, i) =>
    `<button class="preset-btn" data-idx="${i}" style="padding:8px 14px;background:var(--bg-deep);border:1px solid var(--border);border-radius:8px;color:var(--fg);font-size:13px;cursor:pointer;transition:all 0.15s;">
       ${p.icon} ${p.name}
     </button>`
  ).join("");
  row.querySelectorAll(".preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = PRESETS[btn.dataset.idx];
      $("param-system").value = p.system;
      $("user-input").value = p.user;
      $("user-input").focus();
    });
  });
}


function generateCode(lang) {
  const url = $("cfg-base-url").value.trim();
  const key = $("cfg-api-key").value.trim();
  const model = $("cfg-model").value.trim();
  const sys = $("param-system").value.trim();
  const msgs = [];
  if (sys) msgs.push({ role: "system", content: sys });
  msgs.push({ role: "user", content: $("user-input").value.trim() || "你的 prompt" });
  
  if (lang === "curl") {
    const body = JSON.stringify({model, messages: msgs, stream: false});
    return `curl -X POST "${url}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${key}" \\
  -d '${body}'`;
  }
  if (lang === "python") { {
    return `import requests

url = "${url}"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${key}",
}
payload = {
    "model": "${model}",
    "messages": ${JSON.stringify(msgs, null, 4)},
}
response = requests.post(url, json=payload, headers=headers)
print(response.json())`;
  }
  if (lang === "js") {
    return `const resp = await fetch("${url}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${key}"
  },
  body: JSON.stringify({
    model: "${model}",
    messages: ${JSON.stringify(msgs, null, 2)}
  })
});
const data = await resp.json();
console.log(data);`;
  }
  if (lang === "node") {
    return `const https = require('https');

const data = JSON.stringify({
  model: "${model}",
  messages: ${JSON.stringify(msgs, null, 2)}
});

const options = {
  hostname: new URL("${url}").hostname,
  port: 443,
  path: new URL("${url}").pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization': 'Bearer ${key}'
  }
};

const req = https.request(options, res => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log(JSON.parse(body)));
});
req.write(data);
req.end();`;
  }
}

function updateCodeOutput() {
  const lang = $("code-lang").value;
  $("code-output").textContent = generateCode(lang);
}

function copyCode() {
  const text = $("code-output").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = event.target;
    btn.textContent = "✓ 已复制";
    setTimeout(() => btn.textContent = "📋 复制到剪贴板", 1500);
  });
}


// ============ 分享链接 ============
function generateShareLink() {
  const data = {
    u: $("cfg-base-url").value.trim(),
    m: $("cfg-model").value.trim(),
    s: $("param-system").value,
    p: $("user-input").value,
    t: $("param-temp").value,
    mtk: $("param-maxtok").value,
    p2: $("param-topp").value
  };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
  const url = location.origin + location.pathname + "#share=" + encoded;
  navigator.clipboard.writeText(url).then(() => {
    const btn = document.getElementById("share-btn");
    btn.textContent = "✓ 已复制";
    setTimeout(() => btn.textContent = "🔗 分享当前配置", 1500);
  });
}

function loadFromShare() {
  const hash = location.hash;
  if (!hash.startsWith("#share=")) return;
  try {
    const json = decodeURIComponent(escape(atob(hash.slice(7))));
    const data = JSON.parse(json);
    if (data.u) $("cfg-base-url").value = data.u;
    if (data.m) $("cfg-model").value = data.m;
    if (data.s) $("param-system").value = data.s;
    if (data.p) $("user-input").value = data.p;
    if (data.t) { $("param-temp").value = data.t; $("val-temp").textContent = data.t; }
    if (data.mtk) { $("param-maxtok").value = data.mtk; $("val-maxtok").textContent = data.mtk; }
    if (data.p2) { $("param-topp").value = data.p2; $("val-topp").textContent = data.p2; }
  } catch(e) { console.error("Bad share link", e); }
}
const $ = (id) => document.getElementById(id);
const STEPS = {
  reachable: { name: "可达性 + TLS", icon: "🌐" },
  auth: { name: "鉴权有效性", icon: "🔐" },
  model: { name: "模型真实性", icon: "🤖" },
  perf: { name: "性能 + 计费", icon: "⚡" },
  stream: { name: "流式响应", icon: "📡" },
  cors: { name: "CORS 浏览器直跑", icon: "🔗" }
};

const state = { checks: {}, results: {}, url: "", key: "", model: "", protocol: "openai" };
let abortCtrl = null;

document.querySelectorAll(".ap-tabs button").forEach(b => {
  b.addEventListener("click", () => {
    document.querySelectorAll(".ap-tabs button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const quick = b.dataset.mode === "quick";
    ["chk-perf","chk-stream","chk-cors"].forEach(id => $(id).checked = !quick);
  });
});

function addStep(id) {
  const wrap = document.createElement("div");
  wrap.className = "ap-step";
  wrap.id = "step-" + id;
  wrap.innerHTML = `
    <div class="ap-step-icon pending" id="step-icon-${id}">⏳</div>
    <div class="ap-step-name">${STEPS[id].icon} ${escapeHtml(STEPS[id].name)}</div>
    <div class="ap-step-result" id="step-result-${id}">等待</div>
  `;
  $("steps-container").appendChild(wrap);
}

function setStep(id, status, resultText) {
  const icon = $(`step-icon-${id}`);
  const result = $(`step-result-${id}`);
  const statusMap = {
    pending: ["⏳", "pending", "等待"],
    running: ["⏳", "running", "检测中..."],
    ok: ["✅", "ok", resultText || "通过"],
    warn: ["⚠️", "warn", resultText || "警告"],
    fail: ["❌", "fail", resultText || "失败"]
  };
  const [emoji, cls, txt] = statusMap[status] || statusMap.pending;
  icon.className = "ap-step-icon " + cls;
  icon.textContent = emoji;
  result.textContent = txt;
}

function renderRow(parentId, rows) {
  const el = $(parentId);
  el.innerHTML = rows.map(r => {
    const cls = r.status || "";
    return `<div class="ap-row"><span class="key">${r.key}</span><span class="val ${cls}">${r.val}</span></div>`;
  }).join("");
}

function addWarning(type, msg) {
  const wrap = document.createElement("div");
  wrap.className = type === "danger" ? "ap-danger" : "ap-warning";
  wrap.innerHTML = type === "danger" ? `<strong>🚨 高风险：</strong>${escapeHtml(msg)}` : `<strong>⚠️ 注意：</strong>${escapeHtml(msg)}`;
  $("warnings-container").appendChild(wrap);
}

function calcScore() {
  let s = 10;
  Object.values(state.results).forEach(r => {
    if (r.status === "fail") s -= 3;
    else if (r.status === "warn") s -= 1;
  });
  return Math.max(0, Math.min(10, s));
}

function verdict(score) {
  if (score >= 9) return { text: "✅ 真品，可以放心用", color: "#22c55e" };
  if (score >= 7) return { text: "🟢 基本可信，建议先用小金额", color: "#00d9ff" };
  if (score >= 5) return { text: "⚠️ 有风险，建议先小金额测试", color: "#ffb84d" };
  if (score >= 3) return { text: "🚨 高风险，建议立即停止", color: "#ff6b9d" };
  return { text: "❌ 大概率是假渠道/假 API", color: "#ff4757" };
}

async function start() {
  state.url = $("in-url").value.trim().replace(/\/$/, "");
  state.key = $("in-key").value.trim();
  state.model = $("in-model").value.trim();
  state.protocol = $("in-protocol").value;
  if (!state.url || !state.key || !state.model) { alert("请填完整 URL / Key / 模型"); return; }

  state.checks = {
    reachable: $("chk-reachable").checked,
    auth: $("chk-auth").checked,
    model: $("chk-model").checked,
    perf: $("chk-perf").checked,
    stream: $("chk-stream").checked,
    cors: $("chk-cors").checked
  };

  $("input-card").style.display = "none";
  $("progress-card").classList.add("show");
  $("steps-container").innerHTML = "";
  Object.keys(STEPS).forEach(id => { if (state.checks[id]) addStep(id); });

  // 顺序执行
  if (state.checks.reachable) await checkReachable();
  if (state.checks.auth) await checkAuth();
  if (state.checks.model) await checkModel();
  if (state.checks.perf) await checkPerf();
  if (state.checks.stream) await checkStream();
  if (state.checks.cors) await checkCORS();

  showReport();
}

// ============ 检查 1：可达性 ============
async function checkReachable() {
  setStep("reachable", "running");
  try {
    const t0 = Date.now();
    const resp = await fetch(state.url.replace(/\/v1$/, "") + "/models", {
      method: "GET",
      headers: { "Authorization": "Bearer " + state.key },
      signal: AbortSignal.timeout(10000)
    }).catch(() => null);
    const latency = Date.now() - t0;
    const reachable = resp !== null;
    const tls = location.protocol === "https:";
    state.results.reachable = {
      status: reachable ? "ok" : "fail",
      latency,
      statusCode: resp ? resp.status : null,
      tls
    };
    setStep("reachable", state.results.reachable.status, reachable ? `${latency}ms` : "连接失败");
    renderRow("r-reachable", [
      { key: "URL 可达", val: reachable ? "✅ 是" : "❌ 否", status: reachable ? "ok" : "fail" },
      { key: "HTTPS", val: tls ? "✅ 是" : "❌ 否", status: tls ? "ok" : "fail" },
      { key: "响应延迟", val: latency + "ms", status: latency > 3000 ? "warn" : "ok" },
      { key: "HTTP 状态", val: resp ? resp.status : "N/A", status: resp && resp.status < 400 ? "ok" : "fail" }
    ]);
    if (!reachable) addWarning("danger", "无法连接到目标 URL。这可能是：URL 拼错 / 域名挂了 / 被防火墙屏蔽。");
    else if (latency > 3000) addWarning("warning", "响应延迟较高（" + latency + "ms），用户体验会受影响。");
  } catch (e) {
    state.results.reachable = { status: "fail", error: e.message };
    setStep("reachable", "fail", e.message);
    renderRow("r-reachable", [{ key: "URL 可达", val: "❌ 否", status: "fail" }, { key: "错误", val: e.message, status: "fail" }]);
    addWarning("danger", "连接错误：" + e.message);
  }
}

// ============ 检查 2：鉴权 ============
async function checkAuth() {
  setStep("auth", "running");
  try {
    const url = state.protocol === "openai"
      ? state.url + "/chat/completions"
      : state.url + "/v1/messages";
    const headers = state.protocol === "openai"
      ? { "Content-Type": "application/json", "Authorization": "Bearer " + state.key }
      : { "Content-Type": "application/json", "x-api-key": state.key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" };
    const body = state.protocol === "openai"
      ? JSON.stringify({ model: state.model, messages: [{ role: "user", content: "hi" }], max_tokens: 5 })
      : JSON.stringify({ model: state.model, messages: [{ role: "user", content: "hi" }], max_tokens: 5 });

    const resp = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(15000) });
    const data = await resp.json().catch(() => ({}));

    let authOk = false, status = "fail", label = "鉴权失败";
    if (resp.status === 200) { authOk = true; status = "ok"; label = "鉴权通过"; }
    else if (resp.status === 401 || resp.status === 403) { status = "fail"; label = "Key 无效或过期"; }
    else if (resp.status === 404) { status = "fail"; label = "模型不存在或路径错"; }
    else if (resp.status === 429) { status = "warn"; label = "限流（Key 可能是好的）"; }
    else if (resp.status >= 500) { status = "warn"; label = "服务端错误"; }

    state.results.auth = { status, code: resp.status, body: data };
    setStep("auth", status, label);

    const errMsg = data?.error?.message || data?.message || "";
    renderRow("r-auth", [
      { key: "HTTP 状态", val: resp.status, status: status },
      { key: "鉴权结果", val: authOk ? "✅ 通过" : "❌ 失败", status: status },
      { key: "响应内容", val: authOk ? "(成功)" : errMsg.slice(0, 80), status: authOk ? "ok" : "fail" }
    ]);
    if (!authOk && resp.status === 401) addWarning("danger", "API Key 无效。可能原因：key 拼错 / 渠道挂了 / 充值被清零。");
    if (resp.status === 404) addWarning("danger", "模型 " + state.model + " 不存在或路径错误。这是**最常见的假渠道迹象**：假 API 会乱编模型名。");
  } catch (e) {
    state.results.auth = { status: "fail", error: e.message };
    setStep("auth", "fail", e.message);
    renderRow("r-auth", [{ key: "鉴权结果", val: "❌ 请求失败", status: "fail" }, { key: "错误", val: e.message, status: "fail" }]);
  }
}

// ============ 检查 3：模型真实性 ============
async function checkModel() {
  setStep("model", "running");
  try {
    // 用固定 prompt 验证模型响应特征
    const probe = state.protocol === "openai"
      ? { model: state.model, messages: [{ role: "user", content: "What is 2+2? Reply with only the number." }], max_tokens: 10, temperature: 0 }
      : { model: state.model, messages: [{ role: "user", content: "What is 2+2? Reply with only the number." }], max_tokens: 10, temperature: 0 };
    const url = state.protocol === "openai" ? state.url + "/chat/completions" : state.url + "/v1/messages";
    const headers = state.protocol === "openai"
      ? { "Content-Type": "application/json", "Authorization": "Bearer " + state.key }
      : { "Content-Type": "application/json", "x-api-key": state.key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" };

    const t0 = Date.now();
    const resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(probe), signal: AbortSignal.timeout(15000) });
    const data = await resp.json().catch(() => ({}));
    const latency = Date.now() - t0;
    const content = data?.choices?.[0]?.message?.content || data?.content?.[0]?.text || "";

    // 真伪特征
    const saysFour = /4/.test(content);
    const isSuspicious = !saysFour || content.length > 20;
    let status = "ok", label = "响应正常";
    if (!saysFour) { status = "fail"; label = "模型不响应"; }
    else if (isSuspicious) { status = "warn"; label = "回答过长，疑似不是该模型"; }
    else if (latency > 10000) { status = "warn"; label = "响应过慢，疑似中转"; }

    state.results.model = { status, latency, content, rawResponse: data };
    setStep("model", status, `${latency}ms · "${escapeHtml(content.slice(0, 20))}"`);

    renderRow("r-model", [
      { key: "Probe 响应", val: '"' + content.slice(0, 30) + '"', status: saysFour ? "ok" : "fail" },
      { key: "响应延迟", val: latency + "ms", status: latency > 5000 ? "warn" : "ok" },
      { key: "是否回答 4", val: saysFour ? "✅ 是" : "❌ 否", status: saysFour ? "ok" : "fail" },
      { key: "回答字数", val: content.length + " 字", status: isSuspicious ? "warn" : "ok" },
      { key: "模型 ID（响应中）", val: data?.model || data?.id || "N/A", status: "ok" }
    ]);

    if (!saysFour) addWarning("danger", "模型回答 '2+2' 不是 4。这极大概率不是真实模型（可能是个 shell 接口或被冒充）。");
    if (data?.model && data.model !== state.model) addWarning("warning", "声称调用 '" + state.model + "'，但返回的模型 ID 是 '" + data.model + "'。可能是被替换或动态转发。");
  } catch (e) {
    state.results.model = { status: "fail", error: e.message };
    setStep("model", "fail", e.message);
  }
}

// ============ 检查 4：性能 ============
async function checkPerf() {
  setStep("perf", "running");
  try {
    const probe = { model: state.model, messages: [{ role: "user", content: "Say OK" }], max_tokens: 5 };
    const url = state.url + "/chat/completions";
    const headers = { "Content-Type": "application/json", "Authorization": "Bearer " + state.key };

    const t0 = Date.now();
    const resp = await fetch(url, { method: "POST", headers, body: JSON.stringify(probe), signal: AbortSignal.timeout(15000) });
    const data = await resp.json().catch(() => ({}));
    const latency = Date.now() - t0;

    // 取 token 计费
    const usage = data?.usage || {};
    const tokens = usage.total_tokens || (usage.input_tokens + usage.output_tokens) || 0;

    state.results.perf = { status: "ok", latency, tokens, usage };
    setStep("perf", "ok", latency + "ms · " + tokens + " tokens");

    const speedLabel = latency < 1500 ? "快" : latency < 5000 ? "中" : "慢";
    renderRow("r-perf", [
      { key: "响应延迟", val: latency + "ms (" + speedLabel + ")", status: latency < 5000 ? "ok" : "warn" },
      { key: "消耗 tokens", val: tokens, status: "ok" },
      { key: "input_tokens", val: usage.prompt_tokens || usage.input_tokens || 0, status: "ok" },
      { key: "output_tokens", val: usage.completion_tokens || usage.output_tokens || 0, status: "ok" }
    ]);
  } catch (e) {
    state.results.perf = { status: "fail", error: e.message };
    setStep("perf", "fail", e.message);
  }
}

// ============ 检查 5：流式 ============
async function checkStream() {
  setStep("stream", "running");
  try {
    const url = state.url + "/chat/completions";
    const headers = { "Content-Type": "application/json", "Authorization": "Bearer " + state.key };
    const body = JSON.stringify({ model: state.model, messages: [{ role: "user", content: "Hi" }], max_tokens: 10, stream: true });
    const t0 = Date.now();
    const resp = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(15000) });
    const reader = resp.body.getReader();
    let firstChunkTime = null;
    let chunks = 0;
    let totalBytes = 0;
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (firstChunkTime === null) firstChunkTime = Date.now();
      chunks++;
      totalBytes += value.length;
      decoder.decode(value);
    }
    const totalTime = Date.now() - t0;
    const ttft = firstChunkTime ? firstChunkTime - t0 : totalTime;
    state.results.stream = { status: "ok", chunks, ttft, totalTime, totalBytes };
    setStep("stream", "ok", chunks + " chunks, TTFT " + ttft + "ms");
    $("r-stream-section").style.display = "block";
    renderRow("r-stream", [
      { key: "流式 chunks", val: chunks, status: chunks > 1 ? "ok" : "fail" },
      { key: "首 token 延迟", val: ttft + "ms", status: ttft < 1000 ? "ok" : "warn" },
      { key: "总响应", val: totalTime + "ms", status: "ok" },
      { key: "总字节", val: totalBytes + "B", status: "ok" }
    ]);
    if (chunks <= 1) addWarning("warning", "声称支持流式但只收到 1 个 chunk。可能不支持流式。");
  } catch (e) {
    state.results.stream = { status: "fail", error: e.message };
    setStep("stream", "fail", e.message);
    $("r-stream-section").style.display = "block";
    renderRow("r-stream", [{ key: "流式", val: "❌ 不支持或失败", status: "fail" }]);
  }
}

// ============ 检查 6：CORS ============
async function checkCORS() {
  setStep("cors", "running");
  try {
    const url = state.url + "/chat/completions";
    const headers = { "Content-Type": "application/json", "Authorization": "Bearer " + state.key };
    const body = JSON.stringify({ model: state.model, messages: [{ role: "user", content: "Hi" }], max_tokens: 5 });
    const resp = await fetch(url, { method: "POST", headers, body, mode: "cors", signal: AbortSignal.timeout(10000) });
    const allowOrigin = resp.headers.get("access-control-allow-origin");
    const status = resp.ok ? "ok" : "warn";
    state.results.cors = { status, allowOrigin, ok: resp.ok };
    setStep("cors", status, allowOrigin || (resp.ok ? "支持" : "受限"));
    $("r-cors-section").style.display = "block";
    renderRow("r-cors", [
      { key: "CORS", val: allowOrigin ? "✅ " + allowOrigin : "⚠️ 受限", status: status },
      { key: "HTTP 状态", val: resp.status, status: status }
    ]);
    if (!allowOrigin && resp.ok) addWarning("warning", "API 可用但 CORS 受限。该渠道不允许浏览器直接调用，需要服务端代理。");
  } catch (e) {
    if (e.name === "TypeError" && e.message.includes("fetch")) {
      state.results.cors = { status: "fail", error: "CORS 阻止" };
      setStep("cors", "fail", "CORS 阻止");
      $("r-cors-section").style.display = "block";
      renderRow("r-cors", [{ key: "CORS", val: "❌ 被浏览器阻止", status: "fail" }]);
      addWarning("warning", "CORS 被浏览器阻止。这表明该渠道不允许从浏览器直接调用（需要服务端代理或本地工具）。");
    } else {
      state.results.cors = { status: "fail", error: e.message };
      setStep("cors", "fail", e.message);
    }
  }
}

// ============ 报告 ============
function showReport() {
  const score = calcScore();
  const v = verdict(score);

  $("progress-card").classList.remove("show");
  $("report-card").classList.add("show");
  $("score-num").textContent = score.toFixed(1);
  $("score-verdict").textContent = v.text;
  $("score-verdict").style.color = v.color;
  $("report-card").scrollIntoView({ behavior: "smooth" });
}

$("start-btn").addEventListener("click", start);
