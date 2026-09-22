// API观察者 A/B 测试客户端
// 自动分桶 + 事件追踪 + 流量统计

(function() {
  const API_BASE = location.hostname === "localhost" || location.hostname.endsWith("127.0.0.1")
    ? "http://127.0.0.1:8080"
    : (location.hostname.includes("apiyouxuan.top") || location.hostname.endsWith("workers.dev")
        ? location.origin
        : "https://api.apireader.top");

  // 用户身份（匿名）
  function getUserToken() {
    let t = localStorage.getItem("ar_user_token");
    if (!t) {
      t = (crypto && crypto.randomUUID) ? crypto.randomUUID() : (Date.now() + "-" + Math.random().toString(36).slice(2));
      localStorage.setItem("ar_user_token", t);
    }
    return t;
  }

  const userToken = getUserToken();

  // 流量统计（自动）
  if (navigator.sendBeacon) {
    try {
      navigator.sendBeacon(API_BASE + "/api/page-view", JSON.stringify({ path: location.pathname }));
    } catch (e) {}
  }

  async function assign(experimentId) {
    try {
      const r = await fetch(API_BASE + "/api/ab/assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_token: userToken, experiment_id: experimentId })
      });
      const d = await r.json();
      return d.variant || "control";
    } catch (e) {
      return "control";
    }
  }

  async function track(experimentId, variant, eventType) {
    try {
      await fetch(API_BASE + "/api/ab/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_token: userToken, experiment_id: experimentId, variant, event_type: eventType })
      });
    } catch (e) {}
  }

  // 暴露 API
  window.AR_AB = { assign, track, userToken, API_BASE };

  // 自动绑定 CTA 按钮追踪（可选）
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-ab-track]").forEach(el => {
      el.addEventListener("click", () => {
        const exp = el.dataset.abExperiment || "auto";
        const variant = el.dataset.abVariant || "unknown";
        track(exp, variant, "click_button");
      });
    });
  });
})();