// 自动生成：backend/scripts/ai_maintain.py
// 来源：02_data/samples/uptime.jsonl 真实 HTTP 探测，请勿手改。
// survival 口径：2xx/3xx/401/403 计为存活。
var PROBE_STATS = {
 "generated_at": "2026-09-22T20:37:47",
 "stats": {
  "p_anthropic_official": {
   "probes": 13,
   "alive": 13,
   "last_status": 403,
   "last_latency_ms": 3641,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 1978
  },
  "p_openai_official": {
   "probes": 13,
   "alive": 13,
   "last_status": 403,
   "last_latency_ms": 622,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 727
  },
  "p_google_official": {
   "probes": 13,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40112,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 0.0,
   "latency_avg_ms": 46961
  },
  "p_xai_official": {
   "probes": 11,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8048,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 0.0,
   "latency_avg_ms": 8663
  },
  "p_deepseek_official": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 198,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 198
  },
  "p_qwen_official": {
   "probes": 10,
   "alive": 10,
   "last_status": 200,
   "last_latency_ms": 181,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 211
  },
  "p_zhipu_official": {
   "probes": 10,
   "alive": 10,
   "last_status": 200,
   "last_latency_ms": 213,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 241
  },
  "p_moonshot_official": {
   "probes": 10,
   "alive": 10,
   "last_status": 200,
   "last_latency_ms": 959,
   "last_check_at": "2026-09-22T20:35:32",
   "survival": 100.0,
   "latency_avg_ms": 747
  },
  "p_doubao_official": {
   "probes": 9,
   "alive": 9,
   "last_status": 200,
   "last_latency_ms": 256,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 323
  },
  "p_baidu_qianfan": {
   "probes": 9,
   "alive": 9,
   "last_status": 200,
   "last_latency_ms": 167,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 223
  },
  "p_mistral_official": {
   "probes": 9,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8058,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 0.0,
   "latency_avg_ms": 7833
  },
  "p_groq": {
   "probes": 9,
   "alive": 9,
   "last_status": 403,
   "last_latency_ms": 623,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 649
  },
  "p_together_ai": {
   "probes": 9,
   "alive": 9,
   "last_status": 200,
   "last_latency_ms": 951,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 927
  },
  "p_fireworks_ai": {
   "probes": 9,
   "alive": 9,
   "last_status": 200,
   "last_latency_ms": 807,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 1076
  },
  "p_anyscale": {
   "probes": 8,
   "alive": 8,
   "last_status": 200,
   "last_latency_ms": 1756,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 1180
  },
  "p_openrouter": {
   "probes": 8,
   "alive": 8,
   "last_status": 200,
   "last_latency_ms": 1903,
   "last_check_at": "2026-09-22T20:37:47",
   "survival": 100.0,
   "latency_avg_ms": 948
  },
  "p_litellm": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 1560,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 100.0,
   "latency_avg_ms": 1741
  },
  "p_portkey": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 908,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 100.0,
   "latency_avg_ms": 1135
  },
  "p_helicone": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 1489,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 100.0,
   "latency_avg_ms": 1621
  },
  "p_cloudflare_ai": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 947,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 100.0,
   "latency_avg_ms": 985
  },
  "p_vercel_ai_gateway": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 399,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 100.0,
   "latency_avg_ms": 1077
  },
  "p_one_api": {
   "probes": 6,
   "alive": 2,
   "last_status": 0,
   "last_latency_ms": 7253,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 33.3,
   "latency_avg_ms": 4836
  },
  "p_new_api": {
   "probes": 6,
   "alive": 2,
   "last_status": 0,
   "last_latency_ms": 4029,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 33.3,
   "latency_avg_ms": 3094
  },
  "p_duckcoding": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 246,
   "last_check_at": "2026-09-22T20:32:55",
   "survival": 0.0,
   "latency_avg_ms": 380
  },
  "p_api2d": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 1576,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 100.0,
   "latency_avg_ms": 975
  },
  "p_aicnb": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 30,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 0.0,
   "latency_avg_ms": 143
  },
  "p_closeai": {
   "probes": 6,
   "alive": 0,
   "last_status": 451,
   "last_latency_ms": 653,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 0.0,
   "latency_avg_ms": 902
  },
  "p_woka_ai": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 31,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 0.0,
   "latency_avg_ms": 31
  },
  "p_chatfire": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 211,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 100.0,
   "latency_avg_ms": 335
  },
  "p_volcengine_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 263,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 100.0,
   "latency_avg_ms": 397
  },
  "p_tencent_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 383,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 100.0,
   "latency_avg_ms": 405
  },
  "p_jd_official": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 576,
   "last_check_at": "2026-09-22T20:33:29",
   "survival": 100.0,
   "latency_avg_ms": 635
  },
  "p_huggingface_inference": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 9119,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 0.0,
   "latency_avg_ms": 8259
  },
  "p_replicate": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 1239,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 100.0,
   "latency_avg_ms": 1248
  },
  "p_cerebrium": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 1149,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 100.0,
   "latency_avg_ms": 846
  },
  "p_lmstudio_cloud": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 2177,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 100.0,
   "latency_avg_ms": 1130
  },
  "p_coze": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 373,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 100.0,
   "latency_avg_ms": 221
  },
  "p_azure_openai": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 7899,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 0.0,
   "latency_avg_ms": 7705
  },
  "p_bedrock": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 2243,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 100.0,
   "latency_avg_ms": 1030
  },
  "p_vertex_ai": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40771,
   "last_check_at": "2026-09-22T20:34:09",
   "survival": 0.0,
   "latency_avg_ms": 40306
  }
 }
};
