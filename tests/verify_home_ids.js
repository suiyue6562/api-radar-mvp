// 用最小 DOM shim 在 Node 里真实执行 app.js 的渲染函数，验证首页 12 个 ID 被填充
const fs = require('fs');
const path = require('path');

const proto = path.join(__dirname, '..', '03_prototype');
const dataJs = fs.readFileSync(path.join(proto, 'data.js'), 'utf8');
const appJs = fs.readFileSync(path.join(proto, 'app.js'), 'utf8');

// 收集 index.html 中真实存在的 id
const html = fs.readFileSync(path.join(proto, 'index.html'), 'utf8');
const realIds = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

// 最小 DOM 元素
function makeEl(id) {
  return {
    id,
    innerHTML: '',
    textContent: '',
    value: '',
    checked: false,
    style: {},
    __listeners: {},
    addEventListener(ev, fn) { (this.__listeners[ev] = this.__listeners[ev] || []).push(fn); },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    getAttribute(name) { return this.__attrs ? (this.__attrs[name] ?? null) : null; },
    setAttribute(name, v) { (this.__attrs = this.__attrs || {})[name] = v; },
  };
}

const els = {};
global.document = {
  getElementById(id) {
    if (!els[id]) {
      els[id] = makeEl(id);
      // 模拟 index.html 里 detect 输入框的默认 value（占位示例值）
      if (id === 'detect-url') { els[id].value = 'https://api.example.com/v1'; els[id].__attrs = { value: 'https://api.example.com/v1' }; }
      if (id === 'detect-key') { els[id].value = 'sk-test-xxxxxxxxxxxxxxxx'; els[id].__attrs = { value: 'sk-test-xxxxxxxxxxxxxxxx' }; }
      if (id === 'detect-model') els[id].value = 'auto';
      if (id === 'detect-context') els[id].checked = true;
    }
    return els[id];
  },
  querySelector() { return null; },
  querySelectorAll() { return []; },
  createElement() { return { set textContent(v) {}, get innerHTML() { return ''; } }; },
  addEventListener() {},
};
global.window = global;
global.navigator = {};
global.location = { pathname: '/', href: '' };
global.addEventListener = () => {};

eval(dataJs);
eval(appJs);

// 执行 home 初始化
window.PAGE_INITIALIZERS.home();

const targets = ['iq-list', 'iq-downcount', 'usage-title', 'usage-tests', 'usage-online', 'usage-success', 'usage-cal', 'test-list'];
let fail = 0;
for (const id of targets) {
  const exists = realIds.has(id);
  const el = els[id];
  const filled = el && (String(el.textContent).trim() !== '' || String(el.innerHTML).trim() !== '');
  const ok = exists && filled;
  if (!ok) fail++;
  console.log((ok ? '✓' : '✗') + ' ' + id + '  [HTML中' + (exists ? '存在' : '缺失') + '] → ' +
    (filled ? (el.textContent ? JSON.stringify(String(el.textContent).slice(0, 40)) : 'innerHTML ' + String(el.innerHTML).length + ' chars') : '未填充'));
}

// 验证 usage-cal 生成了 7 天
const calHtml = els['usage-cal'] ? els['usage-cal'].innerHTML : '';
const dayCount = (calHtml.match(/usage-cal-day/g) || []).length;
console.log((dayCount === 7 ? '✓' : '✗') + ' usage-cal 天数 = ' + dayCount + '（应=7）');
if (dayCount !== 7) fail++;

// 验证 test-list 行数
const testHtml = els['test-list'] ? els['test-list'].innerHTML : '';
const rowCount = (testHtml.match(/test-row/g) || []).length;
console.log((rowCount === 5 ? '✓' : '✗') + ' test-list 行数 = ' + rowCount + '（应=5）');
if (rowCount !== 5) fail++;

// 验证 iq-list 行数与结构
const iqHtml = els['iq-list'] ? els['iq-list'].innerHTML : '';
const iqRows = (iqHtml.match(/iq-row/g) || []).length;
const hasBar = iqHtml.includes('iq-bar-fill');
console.log((iqRows === 5 && hasBar ? '✓' : '✗') + ' iq-list 行数 = ' + iqRows + '（应=5），含 iq-bar-fill: ' + hasBar);
if (iqRows !== 5 || !hasBar) fail++;

// 验证 detect-submit 绑定 + 跳转 URL 拼接
const btn = els['detect-submit'];
const clicks = btn && btn.__listeners.click || [];
console.log((clicks.length === 1 ? '✓' : '✗') + ' detect-submit 已绑定 click handler');
if (clicks.length !== 1) fail++;

// 1) 默认占位值应被拦截
let alertMsg = null;
global.alert = (m) => { alertMsg = m; };
clicks[0]();
const blocked = !!alertMsg && global.location.href === '';
console.log((blocked ? '✓' : '✗') + ' 默认占位值被拦截: ' + (alertMsg || '(未拦截!)'));
if (!blocked) fail++;

// 2) 真实值应跳转
alertMsg = null;
els['detect-url'].value = 'https://my-gateway.com/v1';
els['detect-key'].value = 'sk-real-abc123';
els['detect-model'].value = 'gpt-5';
clicks[0]();
const expect = 'playground.html?url=' + encodeURIComponent('https://my-gateway.com/v1') +
  '&key=' + encodeURIComponent('sk-real-abc123') + '&model=gpt-5&ctx=1';
const jumped = global.location.href === expect && !alertMsg;
console.log((jumped ? '✓' : '✗') + ' 真实值跳转: ' + global.location.href);
if (!jumped) fail++;

// 3) ctx=0 时 URL 带 ctx=0
els['detect-context'].checked = false;
clicks[0]();
const ctx0 = global.location.href.endsWith('&ctx=0');
console.log((ctx0 ? '✓' : '✗') + ' ctx=0 传递: ' + global.location.href.slice(-12));
if (!ctx0) fail++;

console.log(fail === 0 ? '\n🎉 全部通过' : '\n❌ ' + fail + ' 项失败');
process.exit(fail === 0 ? 0 : 1);
