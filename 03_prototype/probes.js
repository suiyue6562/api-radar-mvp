// API观察者 模型探测套件 (v2)
// 5 个有标准答案的探测 prompt，识别真假模型 + 模型指纹

const PROBE_SET = [
  {
    id: "math_precise",
    q: "Calculate 12345 \u00d7 67890. Reply with only the number, no other text.",
    expected: 838102050,
    weight: 2.0,
    type: "exact"
  },
  {
    id: "json_format",
    q: "Output a JSON object with keys 'a', 'b', 'c' where values are 1, 2, 3. Reply with only the JSON, no other text.",
    pattern: /\{\s*"a"\s*:\s*1\s*,\s*"b"\s*:\s*2\s*,\s*"c"\s*:\s*3\s*\}/,
    weight: 1.5,
    type: "regex"
  },
  {
    id: "reasoning",
    q: "If all roses are flowers, and some flowers fade quickly, can we conclude that some roses fade quickly? Reply Yes or No, with one sentence explanation.",
    pattern: /^\s*No\b/i,
    weight: 2.0,
    type: "regex"
  },
  {
    id: "chinese",
    q: "\u7528\u4e2d\u6587\u5199\u4e00\u9996\u5173\u4e8e\u79cb\u5929\u7684\u4e94\u8a00\u7edd\u53e5\uff084 \u53e5\uff0c\u6bcf\u53e5 5 \u5b57\uff09\u3002",
    pattern: /[\u4e00-\u9fff]{15,}/,
    weight: 1.5,
    type: "regex"
  },
  {
    id: "long_understanding",
    q: "Count the number of times the letter 'e' appears in this sentence (respond with only the number): 'The quick brown fox jumps over the lazy dog while reading newspapers in the evening.'",
    expected: 8,
    weight: 1.0,
    type: "exact"
  }
];

const MODEL_FINGERPRINTS = {
  "gpt-4-turbo":     { min_ttft: 200,  max_ttft: 2000,  typical_tps: 50,  label: "GPT-4 Turbo" },
  "gpt-4o":          { min_ttft: 150,  max_ttft: 1500,  typical_tps: 80,  label: "GPT-4o" },
  "gpt-4o-mini":     { min_ttft: 100,  max_ttft: 1000,  typical_tps: 120, label: "GPT-4o mini" },
  "gpt-3.5-turbo":   { min_ttft: 200,  max_ttft: 1500,  typical_tps: 100, label: "GPT-3.5 Turbo" },
  "claude-3-5-sonnet":{ min_ttft: 300,  max_ttft: 2500,  typical_tps: 70,  label: "Claude 3.5 Sonnet" },
  "claude-3-opus":   { min_ttft: 400,  max_ttft: 3000,  typical_tps: 40,  label: "Claude 3 Opus" },
  "claude-3-haiku":  { min_ttft: 100,  max_ttft: 1000,  typical_tps: 150, label: "Claude 3 Haiku" },
  "deepseek-chat":   { min_ttft: 200,  max_ttft: 2000,  typical_tps: 30,  label: "DeepSeek" },
  "deepseek-reasoner":{min_ttft: 1000, max_ttft: 30000, typical_tps: 20,  label: "DeepSeek-R1" },
  "qwen-turbo":      { min_ttft: 200,  max_ttft: 1500,  typical_tps: 60,  label: "Qwen Turbo" },
  "qwen-max":        { min_ttft: 400,  max_ttft: 3000,  typical_tps: 40,  label: "Qwen Max" },
  "gemini-1.5-pro":  { min_ttft: 200,  max_ttft: 2000,  typical_tps: 60,  label: "Gemini 1.5 Pro" },
  "gemini-2.0-flash":{ min_ttft: 100,  max_ttft: 1500,  typical_tps: 100, label: "Gemini 2.0 Flash" }
};

function getFingerprint(modelName) {
  const lower = (modelName || "").toLowerCase();
  for (const key in MODEL_FINGERPRINTS) {
    if (lower.includes(key)) return MODEL_FINGERPRINTS[key];
  }
  return null;
}

async function runProbe(probe, baseUrl, key, model, protocol) {
  const t0 = Date.now();
  try {
    let url, headers, body;
    if (protocol === "openai") {
      url = baseUrl + "/chat/completions";
      headers = { "Content-Type": "application/json", "Authorization": "Bearer " + key };
      body = JSON.stringify({ model, messages: [{ role: "user", content: probe.q }], max_tokens: 200, temperature: 0 });
    } else {
      url = baseUrl + "/v1/messages";
      headers = { "Content-Type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" };
      body = JSON.stringify({ model, messages: [{ role: "user", content: probe.q }], max_tokens: 200 });
    }
    const resp = await fetch(url, { method: "POST", headers, body, signal: AbortSignal.timeout(15000) });
    const data = await resp.json().catch(() => ({}));
    const latency = Date.now() - t0;
    const content = protocol === "openai" ? (data.choices?.[0]?.message?.content || "") : (data.content?.[0]?.text || "");
    return {
      content, latency,
      usage: data.usage || {},
      status: resp.status,
      success: true
    };
  } catch (e) {
    return { content: "", latency: Date.now() - t0, usage: {}, status: 0, success: false, error: e.message };
  }
}

function checkProbeAnswer(probe, content) {
  if (!content || !content.trim()) return { pass: false, reason: "无响应" };
  const text = content.trim();
  if (probe.type === "exact") {
    const numMatch = text.match(/-?\d+(\.\d+)?/);
    const num = numMatch ? parseFloat(numMatch[0]) : NaN;
    if (isNaN(num)) return { pass: false, reason: "未找到数字", got: text.slice(0, 50) };
    if (Math.abs(num - probe.expected) < 0.01) return { pass: true };
    return { pass: false, reason: "数字不匹配", expected: probe.expected, got: num };
  }
  if (probe.type === "regex") {
    if (probe.pattern.test(text)) return { pass: true };
    return { pass: false, reason: "正则不匹配", got: text.slice(0, 80) };
  }
  return { pass: false, reason: "未知 probe 类型" };
}

async function deepCheck(baseUrl, key, model, protocol, addStepFn) {
  const results = [];
  let totalWeight = 0, passWeight = 0;

  for (let i = 0; i < PROBE_SET.length; i++) {
    const probe = PROBE_SET[i];
    if (addStepFn) addStepFn("deepmodel", "running", `测试 ${i + 1}/${PROBE_SET.length}: ${probe.id}`);
    const r = await runProbe(probe, baseUrl, key, model, protocol);
    if (!r.success) {
      if (addStepFn) addStepFn("deepmodel", "fail", `探测失败: ${r.error}`);
      return { score: 0, results, error: r.error, fatal: true };
    }
    const check = checkProbeAnswer(probe, r.content);
    results.push({ probe: probe.id, content: r.content, ...check, latency: r.latency, usage: r.usage });
    totalWeight += probe.weight;
    if (check.pass) passWeight += probe.weight;
  }

  const fp = getFingerprint(model);
  const avgLatency = results.reduce((s, r) => s + r.latency, 0) / results.length;
  let fpScore = 1.0;
  let fpVerdict = "无指纹可对比（未知模型）";
  let fpDetails = "";

  if (fp) {
    if (avgLatency < fp.min_ttft) {
      fpScore = 0.6;
      fpVerdict = "延迟过短 - 可能不是 " + fp.label + "（声称慢但响应极快）";
      fpDetails = "声称 " + fp.label + " 典型延迟 " + fp.min_ttft + "~" + fp.max_ttft + "ms，实际 " + Math.round(avgLatency) + "ms";
    } else if (avgLatency > fp.max_ttft) {
      fpScore = 0.75;
      fpVerdict = "延迟超长 - 可能是中转或卡顿";
      fpDetails = "声称 " + fp.label + " 典型延迟 " + fp.min_ttft + "~" + fp.max_ttft + "ms，实际 " + Math.round(avgLatency) + "ms";
    } else {
      fpVerdict = "✓ 延迟符合 " + fp.label + " 特征";
      fpDetails = "实际平均 " + Math.round(avgLatency) + "ms（预期 " + fp.min_ttft + "~" + fp.max_ttft + "ms）";
    }
  }

  const passRate = passWeight / totalWeight;
  const finalScore = Math.round(passRate * fpScore * 100);

  return {
    score: finalScore,
    results,
    avgLatency: Math.round(avgLatency),
    fingerprint: fp,
    fpVerdict,
    fpDetails,
    passRate: Math.round(passRate * 100),
    passWeight,
    totalWeight
  };
}

async function rateLimitCheck(baseUrl, key, model, protocol) {
  const concurrent = [5, 10, 20];
  const results = {};

  for (const c of concurrent) {
    const promises = [];
    for (let i = 0; i < c; i++) {
      promises.push(
        fetch(baseUrl + "/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
          body: JSON.stringify({ model, messages: [{ role: "user", content: "hi" }], max_tokens: 5 })
        })
          .then(r => ({ status: r.status, ok: r.ok }))
          .catch(e => ({ status: 0, ok: false, err: e.message }))
      );
    }
    const responses = await Promise.all(promises);
    const ok = responses.filter(r => r.ok).length;
    const rateLimited = responses.filter(r => r.status === 429).length;
    results["c" + c] = { ok, total: c, rate: Math.round(ok / c * 100), rateLimited };
  }

  return results;
}

async function priceVerify(baseUrl, key, model, protocol, claimedInput, claimedOutput) {
  // 用 1000 字 prompt 看返回 usage 和声称价格
  if (!claimedInput || !claimedOutput) return { skipped: true };
  const prompt = "Tell me a 500-word story about AI in Chinese. " + "x".repeat(800);
  const t0 = Date.now();
  try {
    const resp = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }], max_tokens: 600, temperature: 0 })
    });
    const data = await resp.json();
    const usage = data.usage || {};
    const inputTokens = usage.prompt_tokens || 0;
    const outputTokens = usage.completion_tokens || 0;
    const costUsd = inputTokens * claimedInput / 1000000 + outputTokens * claimedOutput / 1000000;
    return { inputTokens, outputTokens, costUsd: costUsd.toFixed(6), duration: Date.now() - t0 };
  } catch (e) {
    return { error: e.message };
  }
}

// 导出（playground.html 用）
window.RADAR_PROBES = { PROBE_SET, MODEL_FINGERPRINTS, getFingerprint, deepCheck, rateLimitCheck, priceVerify, runProbe, checkProbeAnswer };
// API观察者 检测套件 v3 - 业内空白补全

// ============ 1. 假流式识别 ============
// 假流式特征：声称 SSE 但一次返回整段（单 chunk 巨大）
async function detectFakeStream(baseUrl, key, model) {
  const t0 = Date.now();
  try {
    const resp = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model, messages: [{ role: "user", content: "用中文写 30 个字的句子" }], max_tokens: 50, stream: true })
    });
    
    if (!resp.ok) return { status: "fail", error: "HTTP " + resp.status };
    if (!resp.body || !resp.body.getReader) return { status: "fail", error: "无 streaming body" };
    
    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    const chunks = [];
    const times = [];
    let buffer = "";
    
    while (true) {
      const { done, value } = await reader.read();
      const elapsed = Date.now() - t0;
      if (done) break;
      times.push(elapsed);
      chunks.push(value.length);
      buffer += decoder.decode(value, { stream: true });
    }
    
    const totalBytes = chunks.reduce((a, b) => a + b, 0);
    const numChunks = chunks.length;
    const firstChunkSize = chunks[0] || 0;
    const avgChunkSize = totalBytes / Math.max(numChunks, 1);
    const maxChunkSize = Math.max(...chunks);
    
    // 假流式特征：
    // 1. 单个 chunk > 总数据的 80%（"一次吐完"）
    // 2. chunk 数量 = 1（只 1 个 data:）
    // 3. 第一个 chunk 就是全部
    const fakeStreamScore = maxChunkSize / totalBytes;
    const isFake = (numChunks <= 2) || (fakeStreamScore > 0.8);
    
    return {
      status: isFake ? "fail" : "ok",
      numChunks,
      totalBytes,
      firstChunkSize,
      maxChunkSize,
      avgChunkSize: Math.round(avgChunkSize),
      fakeStreamScore: Math.round(fakeStreamScore * 100),
      bufferPreview: buffer.slice(0, 200)
    };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
}

// ============ 2. TLS 证书深度 ============
async function tlsDeepCheck(url) {
  try {
    const resp = await fetch(url, { method: "GET", signal: AbortSignal.timeout(10000) });
    // 现代浏览器 fetch 不暴露证书详情，但可以从 response URL 检测
    const isHttps = url.startsWith("https://");
    
    // 检查 HSTS（强制 HTTPS）
    const hsts = resp.headers.get("strict-transport-security");
    
    // 检测常见的假 API 证书特征：
    // 1. 没用 HTTPS
    // 2. 没用 HSTS
    // 3. 暴露服务端技术栈
    const server = resp.headers.get("server") || "";
    const xPoweredBy = resp.headers.get("x-powered-by") || "";
    
    const issues = [];
    if (!isHttps) issues.push("未使用 HTTPS");
    if (!hsts) issues.push("未启用 HSTS（可能受中间人攻击）");
    if (xPoweredBy) issues.push("暴露 X-Powered-By: " + xPoweredBy);
    if (server && /php|nginx\/1\.[0-9]|apache/i.test(server)) {
      issues.push("服务器标识异常: " + server + "（常见假 API 平台）");
    }
    
    return {
      status: issues.length === 0 ? "ok" : (issues.length <= 2 ? "warn" : "fail"),
      isHttps,
      hasHSTS: !!hsts,
      server,
      xPoweredBy,
      issues
    };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
}

// ============ 3. HTTP→HTTPS 重定向检测 ============
async function httpsRedirectCheck(url) {
  // 如果本身就是 https，尝试 http 版本，看是否 301/302
  if (!url.startsWith("https://")) {
    return { status: "ok", message: "非 HTTPS URL，不需要检查重定向" };
  }
  
  try {
    const httpUrl = url.replace("https://", "http://");
    const resp = await fetch(httpUrl, {
      method: "GET",
      redirect: "manual",
      signal: AbortSignal.timeout(10000)
    });
    
    const isRedirect = resp.status >= 300 && resp.status < 400;
    const location = resp.headers.get("location") || "";
    const redirectsToHttps = location.startsWith("https://");
    
    return {
      status: redirectsToHttps ? "ok" : "warn",
      httpStatus: resp.status,
      redirects: isRedirect,
      redirectsToHttps,
      message: isRedirect && !redirectsToHttps ? "HTTP 不重定向到 HTTPS - 中间人攻击风险" : "已强制 HTTPS"
    };
  } catch (e) {
    return { status: "warn", error: e.message, message: "无法测试 HTTP（可能服务端拒绝）" };
  }
}

// ============ 4. 响应头合规 ============
async function responseHeadersCheck(url, key, model) {
  try {
    const resp = await fetch(url + "/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
      body: JSON.stringify({ model, messages: [{ role: "user", content: "hi" }], max_tokens: 5 })
    });
    
    const checks = [];
    // 1. CORS 配置
    const corsOrigin = resp.headers.get("access-control-allow-origin");
    if (!corsOrigin) checks.push({ key: "CORS", val: "❌ 未设置", status: "fail" });
    else if (corsOrigin === "*") checks.push({ key: "CORS", val: "*（过宽）", status: "warn" });
    else checks.push({ key: "CORS", val: "✓ " + corsOrigin, status: "ok" });
    
    // 2. Rate limit 头
    const rateLimitRemaining = resp.headers.get("x-ratelimit-remaining-requests") || resp.headers.get("ratelimit-remaining");
    if (rateLimitRemaining) checks.push({ key: "限流头", val: "✓ " + rateLimitRemaining, status: "ok" });
    else checks.push({ key: "限流头", val: "❌ 未返回限流信息", status: "warn" });
    
    // 3. Request ID（专业 API 标志）
    const reqId = resp.headers.get("x-request-id") || resp.headers.get("x-amzn-requestid") || resp.headers.get("x-trace-id");
    if (reqId) checks.push({ key: "请求 ID", val: "✓ " + reqId.slice(0, 16), status: "ok" });
    else checks.push({ key: "请求 ID", val: "未返回（业余 API 标志）", status: "warn" });
    
    // 4. Content-Type
    const ct = resp.headers.get("content-type") || "";
    if (ct.includes("application/json")) checks.push({ key: "Content-Type", val: "✓ JSON", status: "ok" });
    else checks.push({ key: "Content-Type", val: ct, status: "warn" });
    
    // 5. Server 暴露
    const server = resp.headers.get("server") || "";
    if (server) checks.push({ key: "Server", val: "❌ 暴露 " + server, status: "warn" });
    else checks.push({ key: "Server", val: "✓ 未暴露", status: "ok" });
    
    return { status: checks.every(c => c.status !== "fail") ? "ok" : "fail", checks };
  } catch (e) {
    return { status: "fail", error: e.message };
  }
}

// ============ 5. 时间稳定性（jitter）============
async function stabilityCheck(baseUrl, key, model) {
  const samples = [];
  for (let i = 0; i < 3; i++) {
    const t0 = Date.now();
    try {
      const resp = await fetch(baseUrl + "/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": "Bearer " + key },
        body: JSON.stringify({ model, messages: [{ role: "user", content: "hi" }], max_tokens: 5 })
      });
      await resp.text();
      samples.push(Date.now() - t0);
    } catch (e) {
      samples.push(-1);
    }
    if (i < 2) await new Promise(r => setTimeout(r, 500));
  }
  
  const valid = samples.filter(s => s > 0);
  if (valid.length < 3) return { status: "fail", error: "请求失败", samples };
  
  const avg = valid.reduce((a, b) => a + b, 0) / 3;
  const variance = valid.reduce((s, x) => s + Math.pow(x - avg, 2), 0) / 3;
  const std = Math.sqrt(variance);
  const cv = std / avg;  // 变异系数
  
  // CV > 0.5 = 抖动很大（不稳定）
  let status = "ok";
  if (cv > 0.5) status = "warn";
  if (cv > 1.0) status = "fail";
  
  return {
    status,
    samples: valid,
    avg: Math.round(avg),
    std: Math.round(std),
    cv: Math.round(cv * 100) + "%",
    message: cv > 0.5 ? "抖动较大，可能受网络或限流影响" : "稳定"
  };
}

// 导出
window.RADAR_V3 = { detectFakeStream, tlsDeepCheck, httpsRedirectCheck, responseHeadersCheck, stabilityCheck };

// ===== 补充导出（让 playground 能用） =====
window.PROBE_RUN = { runProbe, deepCheck, rateLimitCheck, priceVerify };
