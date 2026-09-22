// 自动生成：backend/scripts/ai_maintain.py
// 来源：02_data/samples/uptime.jsonl 真实 HTTP 探测，请勿手改。
// survival 口径：2xx/3xx/401/403 计为存活。
var PROBE_STATS = {
 "generated_at": "2026-09-22T18:18:48",
 "stats": {
  "p_anthropic_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 403,
   "last_latency_ms": 1536,
   "last_check_at": "2026-09-22T18:18:48",
   "survival": 100.0,
   "latency_avg_ms": 1773
  },
  "p_openai_official": {
   "probes": 7,
   "alive": 7,
   "last_status": 403,
   "last_latency_ms": 699,
   "last_check_at": "2026-09-22T18:18:48",
   "survival": 100.0,
   "latency_avg_ms": 737
  },
  "p_google_official": {
   "probes": 7,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40344,
   "last_check_at": "2026-09-22T18:18:48",
   "survival": 0.0,
   "latency_avg_ms": 54511
  },
  "p_xai_official": {
   "probes": 5,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8118,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 8694
  },
  "p_deepseek_official": {
   "probes": 5,
   "alive": 5,
   "last_status": 200,
   "last_latency_ms": 189,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 198
  },
  "p_qwen_official": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 190,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 196
  },
  "p_zhipu_official": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 179,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 180
  },
  "p_moonshot_official": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 999,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 826
  },
  "p_doubao_official": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 423,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 342
  },
  "p_baidu_qianfan": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 521,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 278
  },
  "p_mistral_official": {
   "probes": 4,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8054,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 7558
  },
  "p_groq": {
   "probes": 4,
   "alive": 4,
   "last_status": 403,
   "last_latency_ms": 587,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 638
  },
  "p_together_ai": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 920,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 910
  },
  "p_fireworks_ai": {
   "probes": 4,
   "alive": 4,
   "last_status": 200,
   "last_latency_ms": 1232,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1403
  },
  "p_anyscale": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 1197,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1455
  },
  "p_openrouter": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 679,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 731
  },
  "p_litellm": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 1546,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 2012
  },
  "p_portkey": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 1200,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1396
  },
  "p_helicone": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 1544,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1669
  },
  "p_cloudflare_ai": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 871,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1070
  },
  "p_vercel_ai_gateway": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 1447,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1731
  },
  "p_one_api": {
   "probes": 3,
   "alive": 1,
   "last_status": 0,
   "last_latency_ms": 7275,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 33.3,
   "latency_avg_ms": 4418
  },
  "p_new_api": {
   "probes": 3,
   "alive": 1,
   "last_status": 0,
   "last_latency_ms": 4031,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 33.3,
   "latency_avg_ms": 3179
  },
  "p_duckcoding": {
   "probes": 3,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 207,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 425
  },
  "p_api2d": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 649,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 864
  },
  "p_aicnb": {
   "probes": 3,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 31,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 119
  },
  "p_closeai": {
   "probes": 3,
   "alive": 0,
   "last_status": 451,
   "last_latency_ms": 777,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 886
  },
  "p_woka_ai": {
   "probes": 3,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 37,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 31
  },
  "p_chatfire": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 410,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 480
  },
  "p_volcengine_official": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 568,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 447
  },
  "p_tencent_official": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 453,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 441
  },
  "p_jd_official": {
   "probes": 3,
   "alive": 3,
   "last_status": 200,
   "last_latency_ms": 624,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 667
  },
  "p_huggingface_inference": {
   "probes": 2,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 8048,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 8044
  },
  "p_replicate": {
   "probes": 2,
   "alive": 2,
   "last_status": 200,
   "last_latency_ms": 1514,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 1404
  },
  "p_cerebrium": {
   "probes": 2,
   "alive": 2,
   "last_status": 200,
   "last_latency_ms": 794,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 963
  },
  "p_lmstudio_cloud": {
   "probes": 2,
   "alive": 2,
   "last_status": 200,
   "last_latency_ms": 788,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 979
  },
  "p_coze": {
   "probes": 2,
   "alive": 2,
   "last_status": 200,
   "last_latency_ms": 161,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 134
  },
  "p_azure_openai": {
   "probes": 2,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 7219,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 7224
  },
  "p_bedrock": {
   "probes": 2,
   "alive": 2,
   "last_status": 200,
   "last_latency_ms": 704,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 100.0,
   "latency_avg_ms": 795
  },
  "p_vertex_ai": {
   "probes": 2,
   "alive": 0,
   "last_status": 0,
   "last_latency_ms": 40340,
   "last_check_at": "2026-09-22T17:51:46",
   "survival": 0.0,
   "latency_avg_ms": 40224
  }
 }
};
