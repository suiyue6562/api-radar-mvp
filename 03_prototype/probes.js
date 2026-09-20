// API Radar 模型探测套件 (v2)
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