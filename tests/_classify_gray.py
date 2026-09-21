#!/usr/bin/env python3
"""
根据 Excel 备注 + 价格 + 上线时间，给 488 个不合规站自动分类
生成 5 类标签：
  - price_tier (超低价 / 平价 / 溢价 / 高溢价 / 未标)
  - age_tier (新站 / 中等 / 老牌 / 未标)
  - risk_flags (公益嫌疑 / 疑似跑路 / 缺数据 / 限流)
  - payment_methods (parsed)
  - trust_indicators (退款✓/发票✓)

输出：02_data/non_compliant_providers_v2.json
"""
import json
import re
from pathlib import Path

WORKDIR = Path(__file__).parent.parent
INPUT = WORKDIR / "02_data" / "non_compliant_providers.json"
OUTPUT = WORKDIR / "02_data" / "non_compliant_providers.json"  # 直接更新


def classify(provider):
    note = provider.get("notes") or ""
    tags = []
    strengths = []  # ✓ 优点
    weaknesses = []  # ✗ 缺点 / ⚠️ 风险

    # 1. 价格倍率
    mult = provider.get("price_multiplier")
    if mult is not None:
        if mult < 0.3:
            tags.append("price_ultra_low")  # 💰 超低价
            tags.append("risk_charity_suspicion")  # ⚠️ 公益嫌疑
            weaknesses.append(f"倍率 {mult}x 极低，疑似公益或亏损")
        elif mult < 0.5:
            tags.append("price_super_low")
            tags.append("risk_charity_suspicion")
            weaknesses.append(f"倍率 {mult}x 远低于市场价")
        elif mult < 1.0:
            tags.append("price_low")  # 💸 平价（健康）
            strengths.append(f"💸 倍率 {mult}x，低于官方价")
        elif mult < 1.5:
            tags.append("price_normal")
            strengths.append(f"⚖️ 倍率 {mult}x，接近标准")
        elif mult < 2.5:
            tags.append("price_premium")  # 💎 溢价
            tags.append("risk_premium")
            weaknesses.append(f"💎 倍率 {mult}x 偏高")
        else:
            tags.append("price_high_premium")  # 🔴 高溢价
            tags.append("risk_high_premium")
            weaknesses.append(f"🔴 倍率 {mult}x 极高，警惕虚标")
    else:
        tags.append("price_unknown")
        weaknesses.append("❓ 倍率未公开")

    # 2. 上线时间
    months = provider.get("months_active")
    if months is not None:
        if months < 3:
            tags.append("age_new")  # 🆕 新站
            weaknesses.append(f"🆕 仅运营 {months} 个月，运营稳定性未知")
        elif months < 12:
            tags.append("age_medium")  # 🟡 中等
        else:
            tags.append("age_old")  # ✅ 老牌
            strengths.append(f"✅ 已运营 {months}+ 个月，老牌")
    else:
        tags.append("age_unknown")

    # 3. 在线率
    uptime = provider.get("uptime_pct")
    if uptime is not None:
        if uptime < 30:
            tags.append("risk_ruined")  # ⚠️ 疑似跑路
            weaknesses.append(f"⚠️ 在线率仅 {uptime}%，疑似跑路")
        elif uptime < 70:
            tags.append("risk_unstable")  # ⚠️ 限流
            weaknesses.append(f"⚠️ 在线率 {uptime}%，服务不稳定")
        elif uptime < 90:
            tags.append("uptime_medium")
        else:
            tags.append("uptime_high")
            strengths.append(f"✓ 在线率 {uptime}% 健康")
    else:
        tags.append("uptime_unknown")
        weaknesses.append("❓ 在线率未实测")

    # 4. 支付方式
    pays = provider.get("payment_methods") or []
    if pays:
        if "alipay" in pays or "wechat" in pays:
            tags.append("pay_cn_friendly")
            strengths.append("✓ 支持国内直接充")
        if "usdt" in pays:
            tags.append("pay_crypto")
            strengths.append("✓ 支持 USDT")
    else:
        tags.append("pay_unknown")

    # 5. 退款/发票
    invoice = provider.get("invoice_available")
    min_charge = provider.get("min_charge")
    if invoice:
        tags.append("invoice_yes")
        strengths.append("✓ 可开发票")
    elif min_charge:
        tags.append("invoice_min")
        weaknesses.append(f"发票 ¥{min_charge} 起")
    else:
        tags.append("invoice_unknown")

    # 6. 来源数量（信任指标）
    sources = provider.get("source_list") or []
    if len(sources) >= 2:
        tags.append("multi_source")
        strengths.append(f"✓ {len(sources)} 个数据源收录")
    elif len(sources) == 1:
        tags.append("single_source")
    else:
        tags.append("no_source")

    # 7. 模型覆盖
    models = provider.get("supported_models") or []
    if len(models) >= 3:
        tags.append("models_diverse")
        strengths.append(f"✓ 支持 {len(models)} 类模型")
    elif models:
        tags.append("models_limited")

    # 8. 风险等级汇总（高级）
    high_risk_count = sum([
        'risk_charity_suspicion' in tags,
        'risk_ruined' in tags,
        'risk_high_premium' in tags,
        'price_unknown' in tags,
        'uptime_unknown' in tags,
    ])
    if high_risk_count >= 2:
        risk_level = 'high'  # 🔴
    elif high_risk_count == 1:
        risk_level = 'medium'  # 🟡
    else:
        risk_level = 'low'  # 🟢

    return {
        **provider,
        "tags": tags,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "risk_level": risk_level,
    }


def main():
    print(f"读 {INPUT} ...")
    d = json.loads(INPUT.read_text(encoding="utf-8"))
    print(f"原 providers: {len(d['providers'])}")

    # 分类
    new_providers = [classify(p) for p in d["providers"]]

    # 统计
    tier_count = {}
    risk_count = {}
    for p in new_providers:
        for t in p.get("tags", []):
            tier_count[t] = tier_count.get(t, 0) + 1
        risk_count[p["risk_level"]] = risk_count.get(p["risk_level"], 0) + 1

    print(f"\n=== 标签分布 ===")
    for t, c in sorted(tier_count.items(), key=lambda x: -x[1]):
        print(f"  {t}: {c}")

    print(f"\n=== 风险等级分布 ===")
    for r, c in risk_count.items():
        print(f"  {r}: {c}")

    # 写回
    d["providers"] = new_providers
    if "stats" in d.get("meta", {}):
        d["meta"]["stats"]["tag_distribution"] = tier_count
        d["meta"]["stats"]["risk_distribution"] = risk_count

    OUTPUT.write_text(json.dumps(d, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n✓ 写回 {OUTPUT} ({OUTPUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()