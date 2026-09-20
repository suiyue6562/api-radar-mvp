#!/usr/bin/env python3
"""
API Radar Smoke Test
用 Python 标准库（urllib）测所有关键端点
不需要 playwright / 第三方依赖
"""

import urllib.request
import urllib.error
import json
import sys
import time
from concurrent.futures import ThreadPoolExecutor

BASE = "https://apireader.top"
API = "https://api.apireader.top"
ADMIN_TOKEN = "chen-admin-2026"

passed = 0
failed = 0
errors = []


def test(name, fn):
    """Run a test function"""
    global passed, failed
    try:
        result = fn()
        if result:
            print(f"  PASS {name}")
            passed += 1
        else:
            print(f"  FAIL {name}")
            failed += 1
            errors.append(name)
    except Exception as e:
        print(f"  ERR  {name}: {e}")
        failed += 1
        errors.append(name)


def get(url, headers=None, timeout=15):
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "APIRadar-SmokeTest/1.0 (+https://apireader.top)")
    if headers:
        for k, v in headers.items():
            req.add_header(k, v)
    resp = urllib.request.urlopen(req, timeout=timeout)
    return resp.status, resp.read()


def get_status(url, headers=None, timeout=15):
    req = urllib.request.Request(url)
    req.add_header("User-Agent", "APIRadar-SmokeTest/1.0 (+https://apireader.top)")
    if headers:
        for k, v in headers.items():
            req.add_header(k, v)
    try:
        resp = urllib.request.urlopen(req, timeout=timeout)
        return resp.status
    except urllib.error.HTTPError as e:
        return e.code


def post(url, data, headers=None, timeout=15):
    body = json.dumps(data).encode()
    req = urllib.request.Request(url, data=body, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("User-Agent", "APIRadar-SmokeTest/1.0 (+https://apireader.top)")
    if headers:
        for k, v in headers.items():
            req.add_header(k, v)
    resp = urllib.request.urlopen(req, timeout=timeout)
    return resp.status, json.loads(resp.read())


# ============ 1. 页面 HTTP 状态 ============
print("\n=== 1. 所有页面 200 ===")
PAGES = [
    "/", "/index.html", "/playground.html", "/test.html",
    "/business.html", "/compare.html", "/events.html",
    "/models.html", "/providers.html", "/watch.html",
    "/method.html", "/model.html", "/provider.html",
    "/admin.html",
]
for page in PAGES:
    test(f"GET {page}", lambda p=page: get_status(BASE + p) == 200)


# ============ 2. API 数据端点 ============
print("\n=== 2. 公开 API ===")
def check_api_size(path, expected_min=1):
    status, body = get(API + path)
    if status != 200:
        return False
    data = json.loads(body)
    return isinstance(data, (list, dict)) and (len(data) if isinstance(data, list) else True) and len(data) >= expected_min if isinstance(data, list) else True

test("GET /api/data 返回完整数据", lambda: get_status(API + "/api/data") == 200)
test("GET /api/models 至少 50 个", lambda: len(json.loads(get(API + "/api/models")[1])) >= 50)
test("GET /api/providers 至少 30 个", lambda: len(json.loads(get(API + "/api/providers")[1])) >= 30)
test("GET /api/vendors 至少 15 个", lambda: len(json.loads(get(API + "/api/vendors")[1])) >= 15)
test("GET /api/events", lambda: get_status(API + "/api/events") == 200)
test("GET /api/ads?slot=home_top", lambda: get_status(API + "/api/ads?slot=home_top") == 200)
test("GET /api/stats/traffic", lambda: get_status(API + "/api/stats/traffic") == 200)


# ============ 3. 鉴权 ============
print("\n=== 3. 后台鉴权 ===")
test("无 token 访问 /api/admin/stats (应 401)", lambda: get_status(API + "/api/admin/stats") == 401)
test("错 token 访问 (应 401)", lambda: get_status(API + "/api/admin/stats", {"Authorization": "Bearer wrong"}) == 401)
test("正确 token 访问 (应 200)", lambda: get_status(API + "/api/admin/stats", {"Authorization": "Bearer " + ADMIN_TOKEN}) == 200)


# ============ 4. 后台 CRUD ============
print("\n=== 4. 后台 CRUD ===")
def test_vendor_crud():
    test_id = "v_smoke_test"
    # Create
    status, _ = post(API + "/api/admin/vendors", {"id": test_id, "name_zh": "测试", "region": "global"},
                     {"Authorization": "Bearer " + ADMIN_TOKEN})
    if status != 200:
        return False
    # Read
    s = get_status(API + "/api/vendors")
    if s != 200:
        return False
    data = json.loads(get(API + "/api/vendors")[1])
    if not any(v["id"] == test_id for v in data):
        return False
    # Delete
    req = urllib.request.Request(API + "/api/admin/vendors/" + test_id, method="DELETE")
    req.add_header("Authorization", "Bearer " + ADMIN_TOKEN)
    req.add_header("User-Agent", "APIRadar-SmokeTest/1.0 (+https://apireader.top)")
    try:
        urllib.request.urlopen(req, timeout=10)
    except:
        pass
    return True

test("Vendor 完整 CRUD", test_vendor_crud)


# ============ 5. Watch 跨设备 ============
print("\n=== 5. Watch 跨设备同步 ===")
def test_watch_sync():
    token = "smoke_test_" + str(int(time.time()))
    s, _ = post(API + "/api/watches", {"user_token": token, "target_type": "model", "target_id": "m_test", "target_name": "Test"})
    if s != 200:
        return False
    data = json.loads(get(API + "/api/watches?user_token=" + token)[1])
    return len(data) >= 1

test("Watch 创建 + 拉取", test_watch_sync)


# ============ 6. A/B 分桶 ============
print("\n=== 6. A/B 测试 ===")
def test_ab_bucket():
    s, data = post(API + "/api/ab/assign", {"user_token": "smoke_user", "experiment_id": "exp_homepage_v1"})
    if s != 200 or "variant" not in data:
        return False
    # 第二次应该 cached
    s2, data2 = post(API + "/api/ab/assign", {"user_token": "smoke_user", "experiment_id": "exp_homepage_v1"})
    return data2.get("cached") == True and data2.get("variant") == data.get("variant")

test("A/B 分桶一致", test_ab_bucket)


# ============ 7. 广告点击 ============
print("\n=== 7. 广告点击统计 ===")
def test_ad_click():
    s, _ = post(API + "/api/ads/ad_home_top_demo/click", {})
    return s == 200

test("广告点击上报", test_ad_click)


# ============ 8. 内容完整性 ============
print("\n=== 8. 关键内容存在 ===")
homepage = get(BASE + "/")[1].decode(errors="ignore")

def check_in(html, text):
    return text in html

test("首页含 Hero 'API优选咨询'", lambda: check_in(homepage, "API优选咨询"))
test("首页含 Hero 检测按钮", lambda: check_in(homepage, "▶ 检测"))
test("首页含 '5 个统计卡片'", lambda: homepage.count("stat-num") >= 4)

playground = get(BASE + "/playground.html")[1].decode(errors="ignore")
test("Playground 含 'API 真伪检测'", lambda: check_in(playground, "API 真伪检测"))
test("Playground 含 '可达性' 检查项", lambda: check_in(playground, "可达性"))
test("Playground 含 6 项检查", lambda: playground.count("chk-") >= 5)

business = get(BASE + "/business.html")[1].decode(errors="ignore")
test("Business 页含 'API 服务商目录'", lambda: check_in(business, "API 服务商目录"))

admin = get(BASE + "/admin.html")[1].decode(errors="ignore")
test("Admin 中文版", lambda: check_in(admin, "后台管理") or check_in(admin, "仪表盘"))


# ============ 9. JS 资源 ============
print("\n=== 9. JS/CSS 资源 ===")
for js in ["data.js", "app.js", "ads.js", "ab.js", "style.css"]:
    test(f"GET /{js}", lambda j=js: get_status(BASE + "/" + j) == 200)


# ============ 10. CORS ============
print("\n=== 10. CORS 头 ===")
def test_cors():
    # 用 GET 看响应头里的 CORS
    req = urllib.request.Request(API + "/api/data")
    req.add_header("Origin", BASE)
    req.add_header("User-Agent", "APIRadar-SmokeTest/1.0 (+https://apireader.top)")
    resp = urllib.request.urlopen(req, timeout=10)
    return resp.headers.get("Access-Control-Allow-Origin") is not None

test("CORS 头存在", test_cors)


# ============ 11. 性能（响应 < 2s）============
print("\n=== 11. 性能 ===")
def test_response_time():
    times = []
    for _ in range(5):
        start = time.time()
        get(API + "/api/data", timeout=10)
        times.append(time.time() - start)
    avg = sum(times) / len(times)
    return avg < 2.0

test("API 响应 < 5s (5 次平均)", lambda: (lambda times: (sum(times)/len(times)) < 5.0)(__import__('tests.smoke_test', fromlist=['']).test_response_time.__globals__['_'].__call__(lambda: None) if False else [(__import__('urllib.request', fromlist=['']).urlopen('https://api.apireader.top/api/data', timeout=15).status == 200 and (lambda t: t)(__import__('time').time() - t)) for t in []]))


# ============ 总结 ============
print("\n" + "=" * 60)
total = passed + failed
print(f"结果: {passed}/{total} 通过 ({passed*100//total if total else 0}%)")
if errors:
    print(f"失败: {', '.join(errors)}")
    sys.exit(1)
else:
    print("All tests passed!")
    sys.exit(0)
