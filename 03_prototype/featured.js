// API优选咨询 - 首页特色数据
// 来源: _featured_data.json
// 包含：featured_models（周 token 趋势榜）+ best_for（场景榜首）
window.API_RADAR_FEATURED = {
  "featured_models": [
    {"id": "m_claude_fable_5", "name": "Claude Fable 5", "vendor": "Anthropic", "weekly_tokens": "~6.1B", "trend_pct": "16.1%", "context": 1000000},
    {"id": "m_claude_opus_5", "name": "Claude Opus 5", "vendor": "Anthropic", "weekly_tokens": "~75.3B", "trend_pct": "-1.3%", "context": 1000000},
    {"id": "m_claude_sonnet_5", "name": "Claude Sonnet 5", "vendor": "Anthropic", "weekly_tokens": "~83.9B", "trend_pct": "-7.7%", "context": 1000000},
    {"id": "m_claude_opus_4_7", "name": "Claude Opus 4.7", "vendor": "Anthropic", "weekly_tokens": "~87.9B", "trend_pct": "22.3%", "context": 1000000},
    {"id": "m_gpt_5_6_sol", "name": "GPT-5.6 Sol", "vendor": "OpenAI", "weekly_tokens": "~79.8B", "trend_pct": "-13.8%", "context": 1050000},
    {"id": "m_gpt_5_5", "name": "GPT-5.5", "vendor": "OpenAI", "weekly_tokens": "~85.9B", "trend_pct": "37.0%", "context": 1050000}
  ],
  "best_for": [
    {"scene": "最佳推理", "emoji": "🧠", "desc": "GPQA Diamond 第一梯队", "model_id": "m_claude_fable_5", "model_name": "Claude Fable 5", "reason": "GPQA Diamond 91.2% · MMLU-Pro 88%"},
    {"scene": "最佳代码", "emoji": "💻", "desc": "SWE-bench 最高分", "model_id": "m_claude_fable_5", "model_name": "Claude Fable 5", "reason": "SWE-bench Verified 87% · 实测通过率最高"},
    {"scene": "最高吞吐", "emoji": "⚡", "desc": "tps 最高", "model_id": "m_gemini_3_5_flash", "model_name": "Gemini 3.5 Flash", "reason": "1800 tps · ¥0.075/M input · 限速宽松"},
    {"scene": "最便宜输入", "emoji": "💰", "desc": "输入价最低", "model_id": "m_deepseek_v4_flash", "model_name": "DeepSeek V4 Flash", "reason": "输入价 $0.04/M · 中文增强"},
    {"scene": "最大上下文", "emoji": "📚", "desc": "上下文最长", "model_id": "m_llama_4_maverick", "model_name": "Llama 4 Maverick", "reason": "1M tokens · 长上下文不涨价"}
  ],
  "source": "_featured_data.json",
  "snapshot_at": "2026-09-21"
};
