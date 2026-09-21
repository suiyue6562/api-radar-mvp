// Smoke test using JSDOM-like minimal DOM
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = __dirname;
const pages = ['index.html','models.html','model.html','providers.html','provider.html','compare.html','events.html','playground.html','business.html','watch.html','method.html','test.html','admin.html','gray_market.html'];

// Build a mock DOM with element creation that responds to common methods
class FakeEl {
  constructor(id = '', tag = 'div') {
    this.id = id;
    this.tagName = tag.toUpperCase();
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.children = [];
    this.style = {};
    this.dataset = {};
    this.classList = {
      _set: new Set(),
      add: function(...c) { c.forEach(x => this._set.add(x)); },
      remove: function(...c) { c.forEach(x => this._set.delete(x)); },
      toggle: function(c, force) {
        const has = this._set.has(c);
        const should = force === undefined ? !has : force;
        if (should) this._set.add(c); else this._set.delete(c);
        return should;
      },
      contains: function(c) { return this._set.has(c); }
    };
    this._listeners = {};
    this._attrs = {};
  }
  get className() { return Array.from(this.classList._set).join(' '); }
  set className(v) { this.classList._set = new Set(String(v || '').split(/\s+/).filter(Boolean)); }
  addEventListener(ev, fn) { (this._listeners[ev] = this._listeners[ev] || []).push(fn); }
  appendChild(c) { this.children.push(c); return c; }
  removeChild(c) { this.children = this.children.filter(x => x !== c); return c; }
  setAttribute(k, v) { this._attrs[k] = v; }
  getAttribute(k) { return this._attrs[k]; }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  cloneNode() { return new FakeEl(); }
}

const elements = new Map();
function getElement(id) {
  if (!elements.has(id)) elements.set(id, new FakeEl(id));
  return elements.get(id);
}
function createElement(tag) { return new FakeEl('', tag); }
function qs(sel) {
  // Crude: just return any element
  if (elements.size === 0) return null;
  return Array.from(elements.values())[0];
}
function qsa() { return []; }

function makeSandbox() {
  // clear elements
  elements.clear();
  const sb = {
    console,
    navigator: { sendBeacon: null, userAgent: 'test', clipboard: null },
    location: { pathname: '/test', search: '', hostname: 'localhost', protocol: 'file:', origin: 'http://localhost' },
    localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    sessionStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
    URLSearchParams: require('url').URLSearchParams,
    Date,
    Math,
    JSON,
    Object,
    Array,
    String,
    Number,
    Boolean,
    RegExp,
    setTimeout: (fn, t) => { try { fn(); } catch(e) {} return 0; },
    setInterval: () => 0,
    addEventListener: () => {},
    removeEventListener: () => {},
    crypto: { randomUUID: () => 'uuid-' + Math.random().toString(36).slice(2) },
    atob: (s) => Buffer.from(s, 'base64').toString(),
    btoa: (s) => Buffer.from(s).toString('base64'),
    alert: (msg) => console.log('  alert:', String(msg).slice(0, 80)),
    confirm: () => true,
    prompt: () => '',
    fetch: () => Promise.reject('no fetch'),
    history: { pushState: () => {} },
  };
  sb.document = {
    getElementById: getElement,
    querySelector: qs,
    querySelectorAll: qsa,
    addEventListener: () => {},
    createElement,
    body: new FakeEl('','body'),
    head: new FakeEl('','head'),
    readyState: 'complete',
    addEventListener: () => {},
  };
  sb.window = sb;
  sb.global = sb;
  vm.createContext(sb);
  return sb;
}

function loadPage(pageName) {
  const sandbox = makeSandbox();
  const html = fs.readFileSync(path.join(dir, pageName), 'utf8');

  // Pre-populate elements with IDs found in HTML
  const idRe = /\bid="([\w-]+)"/g;
  let im;
  while ((im = idRe.exec(html)) !== null) {
    if (!elements.has(im[1])) elements.set(im[1], new FakeEl(im[1]));
  }

  // Collect scripts
  const scripts = [];
  const re = /<script(?:\s+src="([^"]+)")?[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    scripts.push({ src: m[1], body: m[2] });
  }
  return { sandbox, scripts };
}

function testPage(pageName) {
  const { sandbox, scripts } = loadPage(pageName);
  // Pre-load dependencies inside their own IIFE scope to avoid duplicate-const issues
  for (const src of ['data.js','featured.js','app.js','ads.js','ab.js']) {
    try {
      const src_code = fs.readFileSync(path.join(dir, src), 'utf8');
      // Wrap in IIFE so top-level const/let don't leak into the page script
      vm.runInContext('(function(){\n' + src_code + '\n})();', sandbox);
    } catch(e) {
      return { page: pageName, status: 'FAIL', err: `[${src}] ${e.message}` };
    }
  }
  // Run inline scripts
  const errs = [];
  for (let i = 0; i < scripts.length; i++) {
    const s = scripts[i];
    if (!s.body) continue;
    try {
      vm.runInContext(s.body, sandbox);
    } catch(e) {
      errs.push(`script#${i}: ${e.message}`);
    }
  }
  return { page: pageName, status: errs.length ? 'FAIL' : 'PASS', err: errs.join(' | ') };
}

const results = [];
for (const p of pages) {
  const r = testPage(p);
  results.push(r);
}

console.log('\n=== 14-Page Smoke Test ===\n');
let pass = 0, fail = 0;
for (const r of results) {
  const icon = r.status === 'PASS' ? '✅' : '❌';
  console.log(`${icon} ${r.page}: ${r.status}${r.err ? ' — ' + r.err.slice(0, 200) : ''}`);
  if (r.status === 'PASS') pass++; else fail++;
}
console.log(`\nTotal: ${pass} pass / ${fail} fail`);
