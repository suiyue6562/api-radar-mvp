// API优选咨询 广告系统
// 用法: <div class="ad-slot" data-slot="home_top"></div>
// 自动拉广告 + 点击统计

(function() {
  const API_BASE = location.hostname === "localhost" || location.protocol === "file:" || location.hostname.endsWith("127.0.0.1")
    ? "http://127.0.0.1:8080"
    : (location.hostname.includes("apiyouxuan.top") || location.hostname.endsWith("workers.dev")
        ? location.origin
        : "https://api.apireader.top");

  async function loadAd(slot) {
    try {
      const resp = await fetch(API_BASE + "/api/ads?slot=" + slot);
      const ads = await resp.json();
      if (!ads || !ads.length) return null;
      return ads[0];
    } catch (e) {
      return null;
    }
  }

  async function trackClick(adId) {
    try {
      await fetch(API_BASE + "/api/ads/" + adId + "/click", { method: "POST" });
    } catch (e) {}
  }

  function renderAd(ad, slot) {
    const type = ad.type || "banner";
    const styles = {
      banner: "background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 20px;",
      card: "background: var(--bg-card); border: 1px solid var(--border); border-radius: 10px; padding: 16px;",
      text: "background: transparent; padding: 8px 0;"
    };
    const tag = '<span style="position:absolute;top:6px;right:8px;font-size:9px;color:var(--muted);background:var(--bg-deep);border:1px solid var(--border);padding:1px 6px;border-radius:3px;text-transform:uppercase;letter-spacing:0.05em;">广告</span>';
    const title = '<strong style="color:var(--fg-strong);font-size:14px;">' + (ad.title || ad.advertiser || "推广") + '</strong>';
    const content = ad.content ? '<div style="color:var(--muted);margin-top:6px;font-size:12px;line-height:1.5;">' + ad.content + '</div>' : "";
    const link = ad.link_url ? '<a href="' + ad.link_url + '" target="_blank" rel="noopener sponsored nofollow" style="color:inherit;text-decoration:none;display:block;">' : '<div style="cursor:default;">';
    const linkEnd = ad.link_url ? '</a>' : '</div>';
    return '<div class="card" style="position:relative;' + (styles[type] || styles.banner) + '">' + tag + link + title + content + linkEnd + '</div>';
  }

  function bindClick(el, ad) {
    if (ad && ad.link_url) {
      el.addEventListener("click", () => trackClick(ad.id));
    }
  }

  async function fillSlot(el) {
    const slot = el.dataset.slot;
    if (!slot) return;
    const ad = await loadAd(slot);
    if (!ad) return;
    const html = renderAd(ad, slot);
    el.innerHTML = html;
    el.style.display = "block";
    bindClick(el, ad);
  }

  function init() {
    document.querySelectorAll(".ad-slot[data-slot]").forEach(el => {
      el.dataset.size = el.dataset.size || "banner";
      el.innerHTML = '<div style="padding:16px;text-align:center;color:var(--muted);font-size:12px;">加载中…</div>';
      fillSlot(el);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();