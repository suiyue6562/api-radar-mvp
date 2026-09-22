// 验证 helpaio 结构首页：真实执行 data.js + app.js + index.html 内联脚本，检查各区块渲染
const fs = require('fs');
const path = require('path');

const proto = path.join(__dirname, '..', '03_prototype');
const dataJs = fs.readFileSync(path.join(proto, 'data.js'), 'utf8');
const radarJs = fs.readFileSync(path.join(proto, 'radar_sites.js'), 'utf8');
const probeJs = fs.readFileSync(path.join(proto, 'probe_stats.js'), 'utf8');
const appJs = fs.readFileSync(path.join(proto, 'app.js'), 'utf8');
const html = fs.readFileSync(path.join(proto, 'index.html'), 'utf8');
const inline = [...html.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).join('\n;\n');

const realIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

function makeEl(id) {
  return {
    id, innerHTML: '', textContent: '', value: '', checked: false, style: {}, __listeners: {},
    addEventListener(ev, fn) { (this.__listeners[ev] = this.__listeners[ev] || []).push(fn); },
    querySelector() { return null; }, querySelectorAll() { return []; },
  };
}
const els = {};
global.document = {
  getElementById(id) { if (!els[id]) els[id] = makeEl(id); return els[id]; },
  querySelector() { return null; },
  querySelectorAll() { return []; },
  createElement() { return { style: {}, set textContent(v) {}, get innerHTML() { return ''; } }; },
  addEventListener() {},
};
global.window = global;
global.navigator = {};
global.location = { pathname: '/', href: '' };
global.addEventListener = () => {};
global.fetch = () => Promise.reject(new Error('offline')); // 广告位请求离线，走 catch 静默分支

eval(dataJs);
global.API_RADAR_DATA = API_RADAR_DATA; // data.js 用顶层 var，浏览器自动挂 window，Node 需手动挂
eval(radarJs);
global.RADAR_SITES = RADAR_SITES;
eval(probeJs);
global.PROBE_STATS = PROBE_STATS;
eval(appJs);
eval(inline); // 块级作用域内自执行

let fail = 0;
function check(name, ok, detail) {
  console.log((ok ? '✓' : '✗') + ' ' + name + (detail ? ' → ' + detail : ''));
  if (!ok) fail++;
}
function fill(id) {
  const el = els[id];
  return el ? String(el.innerHTML || el.textContent) : '';
}

// 1. HTML 关键容器存在
for (const id of ['avail-board-rows', 'stats-band', 'radar-home', 'mult-compare', 'mon-snapshot', 'news-list', 'faq-list', 'sponsored-slot']) {
  check('容器 #' + id, realIds.has(id));
}

// 2. 可用率榜：5 行，含 Claude/GPT 双指标
const board = fill('avail-board-rows');
const boardRows = (board.match(/avail-row/g) || []).length;
check('可用率榜 5 行', boardRows === 5, 'rows=' + boardRows);
check('可用率榜为站级实测口径', board.includes('存活') || board.includes('实测'));

// 3. 统计带：≥4 项且为数字
const stats = fill('stats-band');
check('统计带 ≥4 项', (stats.match(/stat-card/g) || []).length >= 4);
check('统计带含收录站数', /收录中转站/.test(stats));

// 4. 收录雷达：首页紧凑榜有数据行且含总数
const radar = fill('radar-home');
check('收录雷达有数据行', (radar.match(/avail-row/g) || []).length >= 10);
check('收录雷达含来源快照说明', /快照 2026-09-22/.test(radar));

// 5. 模型比价：≥1 条倍率，最低值高亮
const mult = fill('mult-compare');
const multCount = (mult.match(/mult-badge/g) || []).length;
check('比价行 ≥1', multCount >= 1, 'badges=' + multCount);
check('最低倍率高亮', mult.includes('mult-badge min'));

// 6. 可用率快照 5 行
check('监测快照 5 行', (fill('mon-snapshot').match(/mon-row/g) || []).length === 5);

// 7. 最新动态：有内容
const news = fill('news-list');
check('动态列表非空', news.length > 100, news.length + ' chars');

// 8. FAQ：4 条
check('FAQ 4 条', (fill('faq-list').match(/faq-item/g) || []).length === 4);

// 9. 首页文案
check('Hero 标题', html.includes('API 中转站的真实现状'));
check('排名口径声明', html.includes('基础分 × 可用率') || html.includes('基础分'));

console.log(fail === 0 ? '\n🎉 全部通过' : '\n❌ ' + fail + ' 项失败');
process.exit(fail === 0 ? 0 : 1);
