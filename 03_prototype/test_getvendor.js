// Verify if getVendor is on window after app.js loads
const fs = require('fs');
const vm = require('vm');

const sb = {};
sb.window = sb;
sb.document = { getElementById: () => null, querySelectorAll: () => [], querySelector: () => null, addEventListener: () => {}, createElement: () => ({textContent:'', innerHTML:''}) };
sb.navigator = { sendBeacon: null };
sb.URLSearchParams = require('url').URLSearchParams;
sb.localStorage = { getItem:()=>null, setItem:()=>{}, removeItem:()=>{} };
vm.createContext(sb);

eval(fs.readFileSync('data.js','utf8'));

try {
  vm.runInContext(fs.readFileSync('app.js','utf8'), sb);
} catch(e) {
  console.error('app.js err:', e.message);
}

console.log('typeof window.getVendor:', typeof sb.getVendor);
console.log('typeof window.API_YOUXUAN.getVendor:', typeof sb.API_YOUXUAN?.getVendor);
console.log('typeof window.renderTopbar:', typeof sb.renderTopbar);
console.log('typeof window.PAGE_INITIALIZERS:', typeof sb.PAGE_INITIALIZERS);

// Test calling getVendor from inline script context (simulated)
try {
  vm.runInContext('console.log("call getVendor:", getVendor ? getVendor("v_anthropic") : "undef")', sb);
} catch(e) {
  console.log('getVendor call err:', e.message);
}
