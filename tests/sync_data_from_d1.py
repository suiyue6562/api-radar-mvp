"""D1 数据库 → 03_prototype/data.js 同步脚本。

数据源：https://api.apireader.top/api/data （Worker 读 D1，公开 API）
策略：D1 为权威数据源（60 模型 / 40 渠道 / 1287 价格），
     旧 data.js 中的纯展示增强字段（评分/趋势/图标等）按 id 合并保留；
     旧有而 D1 已删除的记录不再保留。
用法：python sync_data_from_d1.py [--check]
"""
import json
import re
import sys
from pathlib import Path

PROTO = Path(__file__).resolve().parent.parent / "03_prototype"
DATA_JS = PROTO / "data.js"
BACKUP = PROTO / "data.js.bak"

# 展示增强字段：从旧记录保留（若存在）
MODEL_ENRICH = [
    "version", "capabilities", "official_cache_write_usd_m", "official_reasoning_usd_m",
    "popularity", "weekly_tokens", "monthly_tokens", "trend_week_pct", "best_for",
    "fingerprint_signature", "overall_score", "capability_icons", "official_cache_read_usd_m",
    "official_input_usd_m", "official_output_usd_m",
]
PROVIDER_ENRICH = [
    "name", "name_short", "status", "rating", "review_count", "tags", "browse_count",
    "promo", "last_check_at", "compliance", "signup_date", "models_count",
]
VENDOR_ENRICH = ["name", "name_short", "data_status"]
EVENT_FIELDS = ["id", "date", "title", "description", "event_type", "target_type",
                "target_name", "severity", "tags", "source_urls"]
OFFERING_FIELDS = ["model_id", "provider_id", "is_official", "multiplier",
                   "input_usd_m", "output_usd_m", "cache_read_usd_m", "source_url"]


def parse_js(path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"\s*var\s+API_RADAR_DATA\s*=\s*", raw)
    if not m:
        raise SystemExit("data.js 头部格式不符合预期")
    body = raw[m.end():].strip()
    if body.endswith(";"):
        body = body[:-1]
    return json.loads(body)


def j(v, default):
    """字段可能是 JSON 字符串，解析为对象。"""
    if v is None:
        return default
    if isinstance(v, str):
        try:
            return json.loads(v)
        except Exception:
            return [s.strip() for s in v.split(",") if s.strip()] or default
    return v


def derive_capabilities(m):
    caps = []
    if m.get("tool_use") or m.get("function_calling"):
        caps.append("tool_use")
    if m.get("vision"):
        caps.append("vision")
    if m.get("json_mode"):
        caps.append("json_mode")
    if m.get("streaming"):
        caps.append("streaming")
    return caps


def main():
    old = parse_js(DATA_JS)
    d1 = json.loads(Path(__file__).with_name("d1_api_data.json").read_text(encoding="utf-8"))

    old_models = {m["id"]: m for m in old.get("models", [])}
    old_providers = {p["id"]: p for p in old.get("providers", [])}
    old_vendors = {v["id"]: v for v in old.get("vendors", [])}

    # ---------- vendors ----------
    vendors = []
    for v in d1.get("vendors", []):
        row = {k: v.get(k) for k in ["id", "name_zh", "name_en", "region", "logo", "website"]}
        o = old_vendors.get(v["id"], {})
        for k in VENDOR_ENRICH:
            if o.get(k) is not None:
                row[k] = o[k]
        if "name" not in row:
            row["name"] = v.get("name_en") or v.get("name_zh")
        vendors.append(row)

    # ---------- models ----------
    models = []
    for m in d1.get("models", []):
        o = old_models.get(m["id"], {})
        row = {
            "id": m["id"],
            "vendor_id": m.get("vendor_id"),
            "name": m.get("name") or o.get("name") or m["id"],
            "display_name": m.get("display_name") or o.get("display_name") or m.get("name"),
            "family": m.get("family") or o.get("family"),
            "release_date": m.get("release_date") or o.get("release_date"),
            "context_window": m.get("context_window") or 0,
            "max_output_tokens": m.get("max_output_tokens") or 0,
            "modality": j(m.get("modality"), o.get("modality") or ["text"]),
            "scenes": j(m.get("scenes"), o.get("scenes") or []),
            "description": m.get("description") or o.get("description"),
            "license": m.get("license") or o.get("license") or "proprietary",
            "is_open_weight": bool(m.get("is_open_weight", o.get("is_open_weight", 0))),
        }
        # 价格：D1 为准
        row["official_input_usd_m"] = m.get("price_input_per_m")
        row["official_output_usd_m"] = m.get("price_output_per_m")
        row["official_cache_read_usd_m"] = m.get("price_cache_read_per_m")
        # 展示增强：旧数据优先，缺省推导
        for k in MODEL_ENRICH:
            if k in ("official_input_usd_m", "official_output_usd_m", "official_cache_read_usd_m"):
                continue  # 已用 D1 值
            if o.get(k) is not None:
                row[k] = o[k]
        if "capabilities" not in row:
            row["capabilities"] = derive_capabilities(m) or ["reasoning"]
        if "capability_icons" not in row:
            icons = []
            if "reasoning" in row["capabilities"]:
                icons.append("🧠")
            if "tool_use" in row["capabilities"]:
                icons.append("🔧")
            if "vision" in row["capabilities"] or "image" in row["modality"]:
                icons.append("🖼️")
            row["capability_icons"] = icons
        if "weekly_tokens" not in row:
            row["weekly_tokens"] = 0
        if "trend_week_pct" not in row:
            row["trend_week_pct"] = "0%"
        if "overall_score" not in row:
            row["overall_score"] = None
        if "best_for" not in row:
            row["best_for"] = j(m.get("scenes"), [])[:2]
        models.append(row)

    # ---------- providers ----------
    offerings = d1.get("offerings", [])
    count_by_provider = {}
    for off in offerings:
        count_by_provider[off.get("provider_id")] = count_by_provider.get(off.get("provider_id"), 0) + 1

    providers = []
    for p in d1.get("providers", []):
        o = old_providers.get(p["id"], {})
        row = {k: p.get(k) for k in ["id", "name_zh", "name_en", "type", "region", "website",
                                     "invoice_available", "min_charge",
                                     "sla_uptime", "concurrent_rpm",
                                     "notes"]}
        # D1 中这些字段是 JSON 字符串，前端需要数组
        row["payment_currency"] = j(p.get("payment_currency"), ["USD"])
        row["api_protocol"] = j(p.get("api_protocol"), [])
        row["regions_available"] = j(p.get("regions_available"), [])
        # sla_uptime 在 D1 是 "99.5%" 字符串，前端调用 .toFixed() 需要数值
        sla = p.get("sla_uptime")
        if isinstance(sla, str):
            try:
                row["sla_uptime"] = float(sla.rstrip("%").strip())
            except ValueError:
                row["sla_uptime"] = None
        elif sla is not None:
            row["sla_uptime"] = float(sla)
        for k in PROVIDER_ENRICH:
            if o.get(k) is not None:
                row[k] = o[k]
        if "name" not in row:
            row["name"] = p.get("name_en") or p.get("name_zh")
        if "status" not in row:
            row["status"] = "online"
        row["models_count"] = count_by_provider.get(p["id"], o.get("models_count", 0))
        providers.append(row)

    # ---------- offerings ----------
    new_offerings = [{k: off.get(k) for k in OFFERING_FIELDS} for off in offerings]

    # ---------- events ----------
    events = []
    for e in d1.get("events", []):
        row = {k: e.get(k) for k in EVENT_FIELDS}
        # tags / source_urls 在 D1 是 JSON 字符串，前端需要数组
        row["tags"] = j(e.get("tags"), [])
        row["source_urls"] = j(e.get("source_urls"), [])
        events.append(row)

    new_data = {
        "vendors": vendors,
        "models": models,
        "providers": providers,
        "offerings": new_offerings,
        "events": events,
        "fx_rate": old.get("fx_rate", {"USD_CNY": 7.1, "date": "2026-09-20"}),
    }

    if "--check" in sys.argv:
        print(f"模型: {len(old.get('models', []))} → {len(models)}")
        print(f"渠道: {len(old.get('providers', []))} → {len(providers)}")
        print(f"厂商: {len(old.get('vendors', []))} → {len(vendors)}")
        print(f"价格: {len(old.get('offerings', []))} → {len(new_offerings)}")
        print(f"事件: {len(old.get('events', []))} → {len(events)}")
        missing_price = [m['id'] for m in models if m.get('official_input_usd_m') is None]
        print(f"缺价格模型: {len(missing_price)} {missing_price[:5]}")
        return

    BACKUP.write_text(DATA_JS.read_text(encoding="utf-8"), encoding="utf-8")
    out = "var API_RADAR_DATA = " + json.dumps(new_data, ensure_ascii=False, indent=2) + ";\n"
    DATA_JS.write_text(out, encoding="utf-8")
    print(f"✅ data.js 已更新: 模型 {len(models)} / 渠道 {len(providers)} / 厂商 {len(vendors)} / 价格 {len(new_offerings)} / 事件 {len(events)}")
    print(f"   备份: {BACKUP}")


if __name__ == "__main__":
    main()
