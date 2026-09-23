// 自动生成：backend/scripts/ai_maintain.py
// 来源：02_data/samples/uptime.jsonl 真实 HTTP 探测，请勿手改。
// survival 口径：2xx/3xx/401/403 计为存活。
var PROBE_STATS = {
 "generated_at": "2026-09-23T08:21:31",
 "stats": {
  "p_anthropic_official": {
   "probes": 14,
   "alive": 14,
   "last_status": 403,
   "last_latency_ms": 1523,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 1945
  },
  "p_openai_official": {
   "probes": 14,
   "alive": 14,
   "last_status": 403,
   "last_latency_ms": 698,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 725
  },
  "p_google_official": {
   "probes": 14,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40141,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 0.0,
   "latency_avg_ms": 46474
  },
  "p_xai_official": {
   "probes": 12,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8054,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 0.0,
   "latency_avg_ms": 8612
  },
  "p_deepseek_official": {
   "probes": 12,
   "alive": 12,
   "last_status": 200,
   "last_latency_ms": 191,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 197
  },
  "p_qwen_official": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 180,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 208
  },
  "p_zhipu_official": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 178,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 235
  },
  "p_moonshot_official": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 728,
   "last_check_at": "2026-09-23T08:17:42",
   "survival": 100.0,
   "latency_avg_ms": 745
  },
  "p_doubao_official": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 227,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 302
  },
  "p_baidu_qianfan": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 201,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 217
  },
  "p_mistral_official": {
   "probes": 11,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8037,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 0.0,
   "latency_avg_ms": 7511
  },
  "p_groq": {
   "probes": 11,
   "alive": 11,
   "last_status": 403,
   "last_latency_ms": 680,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 673
  },
  "p_together_ai": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 713,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 888
  },
  "p_fireworks_ai": {
   "probes": 11,
   "alive": 11,
   "last_status": 200,
   "last_latency_ms": 895,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 1049
  },
  "p_anyscale": {
   "probes": 10,
   "alive": 10,
   "last_status": 200,
   "last_latency_ms": 1009,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 1118
  },
  "p_openrouter": {
   "probes": 10,
   "alive": 10,
   "last_status": 200,
   "last_latency_ms": 681,
   "last_check_at": "2026-09-23T08:21:31",
   "survival": 100.0,
   "latency_avg_ms": 911
  },
  "p_litellm": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 2127,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 100.0,
   "latency_avg_ms": 1796
  },
  "p_portkey": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 811,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 100.0,
   "latency_avg_ms": 1089
  },
  "p_helicone": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 1398,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 100.0,
   "latency_avg_ms": 1589
  },
  "p_cloudflare_ai": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 960,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 100.0,
   "latency_avg_ms": 981
  },
  "p_vercel_ai_gateway": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 366,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 100.0,
   "latency_avg_ms": 975
  },
  "p_one_api": {
   "probes": 7,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 822,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 42.9,
   "latency_avg_ms": 4263
  },
  "p_new_api": {
   "probes": 7,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 797,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 42.9,
   "latency_avg_ms": 2766
  },
  "p_duckcoding": {
   "probes": 7,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 639,
   "last_check_at": "2026-09-23T08:19:32",
   "survival": 0.0,
   "latency_avg_ms": 417
  },
  "p_api2d": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 959,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 100.0,
   "latency_avg_ms": 973
  },
  "p_aicnb": {
   "probes": 7,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 302,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 0.0,
   "latency_avg_ms": 166
  },
  "p_closeai": {
   "probes": 7,
   "alive": 0,
   "last_status": 451,
   "last_latency_ms": 1202,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 0.0,
   "latency_avg_ms": 945
  },
  "p_woka_ai": {
   "probes": 7,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 105,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 0.0,
   "latency_avg_ms": 42
  },
  "p_chatfire": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 173,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 100.0,
   "latency_avg_ms": 312
  },
  "p_volcengine_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 353,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 100.0,
   "latency_avg_ms": 391
  },
  "p_tencent_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 301,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 100.0,
   "latency_avg_ms": 390
  },
  "p_jd_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 200,
   "last_latency_ms": 656,
   "last_check_at": "2026-09-23T08:19:55",
   "survival": 100.0,
   "latency_avg_ms": 638
  },
  "p_huggingface_inference": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8058,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 0.0,
   "latency_avg_ms": 8225
  },
  "p_replicate": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 1197,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 100.0,
   "latency_avg_ms": 1240
  },
  "p_cerebrium": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 1656,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 100.0,
   "latency_avg_ms": 981
  },
  "p_lmstudio_cloud": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 739,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 100.0,
   "latency_avg_ms": 1065
  },
  "p_coze": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 119,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 100.0,
   "latency_avg_ms": 204
  },
  "p_azure_openai": {
   "probes": 6,
   "alive": 0,
   "last_status": 503,
   "last_latency_ms": 889,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 0.0,
   "latency_avg_ms": 6569
  },
  "p_bedrock": {
   "probes": 6,
   "alive": 6,
   "last_status": 200,
   "last_latency_ms": 680,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 100.0,
   "latency_avg_ms": 972
  },
  "p_vertex_ai": {
   "probes": 6,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40109,
   "last_check_at": "2026-09-23T08:20:25",
   "survival": 0.0,
   "latency_avg_ms": 40273
  }
 }
};
