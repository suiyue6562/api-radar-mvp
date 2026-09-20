"""
将 seed_data.json 导入 D1 数据库
用法：
  1. 先在本地 wrangler dev 启动 Worker
  2. python3 scripts/import_seed.py http://localhost:8787 YOUR_ADMIN_TOKEN
  或：
  2. python3 scripts/import_seed.py https://api.apireader.top YOUR_ADMIN_TOKEN
"""
import sys, json, urllib.request, urllib.error

def post(url, token, table, record):
    data = json.dumps(record).encode('utf-8')
    req = urllib.request.Request(
        f"{url}/api/admin/{table}",
        data=data,
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {token}'
        },
        method='POST'
    )
    try:
        urllib.request.urlopen(req, timeout=30)
        return True, None
    except urllib.error.HTTPError as e:
        return False, f"{e.code} {e.reason}: {e.read().decode('utf-8', errors='ignore')}"
    except Exception as e:
        return False, str(e)

def import_seed(seed_path, base_url, token):
    with open(seed_path, encoding='utf-8') as f:
        seed = json.load(f)
    
    counts = {'vendors': 0, 'models': 0, 'providers': 0, 'offerings': 0, 'events': 0}
    errors = []

    # 1. 厂商
    for v in seed.get('vendors', []):
        ok, err = post(base_url, token, 'vendors', v)
        if ok: counts['vendors'] += 1
        else: errors.append(f"vendor {v.get('id')}: {err}")

    # 2. 模型（转换字段格式）
    for m in seed.get('models', []):
        record = {
            'id': m['id'],
            'vendor_id': m['vendor_id'],
            'name': m.get('name') or m.get('display_name') or m['id'],
            'display_name': m.get('display_name') or m.get('name') or m['id'],
            'family': m.get('family', ''),
            'category': m.get('category', 'balanced'),
            'tags': json.dumps(m.get('tags') or m.get('capabilities') or [], ensure_ascii=False),
            'context_window': m.get('context_window', 0),
            'max_output_tokens': m.get('max_output_tokens', 0),
            'release_date': m.get('release_date', ''),
            'price_input_per_m': m.get('price_input_per_m') or m.get('official_input_usd_m', 0),
            'price_output_per_m': m.get('price_output_per_m') or m.get('official_output_usd_m', 0),
            'price_cache_read_per_m': m.get('price_cache_read_per_m') or m.get('official_cache_read_usd_m', 0),
            'tool_use': int(bool(m.get('tool_use') or 'tool_use' in (m.get('tags') or m.get('capabilities') or []))),
            'vision': int(bool(m.get('vision') or 'multimodal' in (m.get('tags') or m.get('capabilities') or []))),
            'json_mode': int(m.get('json_mode', True)),
            'function_calling': int(bool(m.get('function_calling') or 'tool_use' in (m.get('tags') or m.get('capabilities') or []))),
            'streaming': int(m.get('streaming', True)),
            'batch_discount': m.get('batch_discount', 0.5),
            'long_context_premium': json.dumps(m.get('long_context_premium') or {'32k':1.0,'128k':1.5,'1m':2.0}, ensure_ascii=False),
            'modality': json.dumps(m.get('modality') or ['text'], ensure_ascii=False),
            'scenes': json.dumps(m.get('scenes') or [], ensure_ascii=False),
            'description': m.get('description', ''),
            'notes': m.get('notes', ''),
            'license': m.get('license', 'proprietary'),
            'is_open_weight': int(m.get('is_open_weight', False)),
            'data_status': m.get('data_status', 'B')
        }
        ok, err = post(base_url, token, 'models', record)
        if ok: counts['models'] += 1
        else: errors.append(f"model {record['id']}: {err}")

    # 3. 渠道
    for p in seed.get('providers', []):
        record = {
            'id': p['id'],
            'name_zh': p['name_zh'],
            'name_en': p.get('name_en', ''),
            'type': p.get('type', 'aggregator'),
            'region': p.get('region', 'global'),
            'website': p.get('website', ''),
            'payment_currency': json.dumps(p.get('payment_currency') or ['USD'], ensure_ascii=False),
            'invoice_available': int(p.get('invoice_available', False)),
            'min_charge': p.get('min_charge', 0),
            'sla_uptime': p.get('sla_uptime', '99.5%'),
            'concurrent_rpm': p.get('concurrent_rpm', 1000),
            'api_protocol': json.dumps(p.get('api_protocol') or ['openai'], ensure_ascii=False),
            'regions_available': json.dumps(p.get('regions_available') or ['global'], ensure_ascii=False),
            'notes': p.get('notes', ''),
            'data_status': p.get('data_status', 'B')
        }
        ok, err = post(base_url, token, 'providers', record)
        if ok: counts['providers'] += 1
        else: errors.append(f"provider {record['id']}: {err}")

    # 4. 提供关系
    for o in seed.get('offerings', []):
        ok, err = post(base_url, token, 'offerings', o)
        if ok: counts['offerings'] += 1
        else: errors.append(f"offering {o.get('model_id')}/{o.get('provider_id')}: {err}")

    # 5. 事件
    for e in seed.get('events', []):
        record = {
            'id': e.get('id') or f"e_{hash(e.get('title','')+e.get('date',''))}",
            'date': e['date'],
            'event_type': e.get('event_type', 'price_change'),
            'severity': e.get('severity', 'medium'),
            'target_type': e.get('target_type', ''),
            'target_id': e.get('target_id', ''),
            'target_name': e.get('target_name', ''),
            'title': e['title'],
            'description': e.get('description', ''),
            'tags': json.dumps(e.get('tags') or [], ensure_ascii=False),
            'source_urls': json.dumps(e.get('source_urls') or [], ensure_ascii=False)
        }
        ok, err = post(base_url, token, 'events', record)
        if ok: counts['events'] += 1
        else: errors.append(f"event {record['id']}: {err}")

    print("\n=== 导入结果 ===")
    for table, n in counts.items():
        print(f"  {table}: {n} 条")
    if errors:
        print(f"\n=== {len(errors)} 个错误 ===")
        for err in errors[:10]:
            print(f"  {err}")
        if len(errors) > 10:
            print(f"  ... 还有 {len(errors)-10} 个")
    return counts, errors

if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("用法: python import_seed.py <base_url> <admin_token>")
        print("示例: python import_seed.py http://localhost:8787 my-secret-token")
        sys.exit(1)
    
    base_url = sys.argv[1].rstrip('/')
    token = sys.argv[2]
    seed_path = sys.argv[3] if len(sys.argv) > 3 else r'C:\Users\Administrator\Desktop\API-Radar-MVP\02_data\seed_data.json'
    
    print(f"目标: {base_url}")
    print(f"种子数据: {seed_path}\n")
    import_seed(seed_path, base_url, token)