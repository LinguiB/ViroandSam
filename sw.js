const V="basbousa-v2";
const CORE=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","icon-maskable-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
if(u.origin===location.origin){
 if(r.mode==="navigate"){e.respondWith(fetch(r).then(x=>{const cp=x.clone();caches.open(V).then(c=>c.put("index.html",cp));return x}).catch(()=>caches.match("index.html")));return}
 e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(x=>{const cp=x.clone();caches.open(V).then(c=>c.put(r,cp));return x})));return}
// fonts and flag images: cache after the first online visit so they work offline
e.respondWith(caches.open(V).then(c=>c.match(r).then(m=>{const f=fetch(r).then(x=>{if(x&&(x.ok||x.type==="opaque"))c.put(r,x.clone());return x}).catch(()=>m);return m||f})))});
