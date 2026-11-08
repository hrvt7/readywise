/* Haven72 service worker – offline mód
 * Stratégia: statikus Next-fájlok cache-first; oldalak network-first, offline esetén cache,
 * végső esetben az /offline oldal. Telepítéskor előre letölti a legfontosabb oldalakat. */
const VERSION = "h72-v2";
const PAGES = `${VERSION}-pages`;
const ASSETS = `${VERSION}-assets`;
const PRECACHE = ["/", "/terv", "/terv/kartya", "/helyzetek", "/tippek", "/forgatokonyvek", "/orszagok", "/orszagok/hu", "/manifest.webmanifest", "/icons/icon-192.png"];
const OFFLINE_HTML = "/offline.html";

/** Egy oldal HTML-jéből kigyűjti a Next statikus fájljait és betölti az eszköz-cache-be. */
async function cacheAssetsOf(res) {
  try {
    const html = await res.clone().text();
    const urls = new Set(html.match(/\/_next\/static\/[^"'\s)]+/g) || []);
    const c = await caches.open(ASSETS);
    for (const u of urls) { try { if (!(await c.match(u))) { const r = await fetch(u); if (r.ok) await c.put(u, r); } } catch {} }
  } catch {}
}
async function addPage(c, u) {
  const res = await fetch(new Request(u, { cache: "reload" }));
  if (!res.ok) return;
  await c.put(u, res.clone());
  await cacheAssetsOf(res);
}

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(PAGES).then(async (c) => {
      await c.add(new Request(OFFLINE_HTML, { cache: "reload" }));
      await Promise.allSettled(PRECACHE.map((u) => c.add(new Request(u, { cache: "reload" }))));
    }).then(() => self.skipWaiting()),
  );
});

/** Az előtöltött oldalak szkriptjeit utólag, a háttérben gyűjti be (a page kéri CACHE_ASSETS üzenettel). */
async function cacheAssetsOfPrecached() {
  const c = await caches.open(PAGES);
  for (const u of PRECACHE) {
    const res = await c.match(u);
    if (res && (res.headers.get("content-type") || "").includes("text/html")) await cacheAssetsOf(res);
  }
}

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => !k.startsWith(VERSION)).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "SKIP_WAITING") self.skipWaiting();
  if (e.data && e.data.type === "CACHE_ASSETS") e.waitUntil(cacheAssetsOfPrecached());
  if (e.data && e.data.type === "CACHE_URLS") {
    e.waitUntil(caches.open(PAGES).then((c) => Promise.allSettled(e.data.urls.map((u) => addPage(c, u)))));
  }
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  // Next statikus fájlok és betűk: cache-first
  if (url.pathname.startsWith("/_next/static/") || url.pathname.startsWith("/icons/") || /\.(woff2?|png|svg|jpg|webp)$/.test(url.pathname)) {
    e.respondWith(
      caches.open(ASSETS).then(async (c) => {
        const hit = await c.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) c.put(req, res.clone());
        return res;
      }),
    );
    return;
  }

  // Oldalak és RSC-payloadok: network-first, cache fallback
  e.respondWith(
    caches.open(PAGES).then(async (c) => {
      try {
        const res = await fetch(req);
        if (res.ok && req.mode === "navigate") { c.put(url.pathname, res.clone()); cacheAssetsOf(res); } else if (res.ok && url.searchParams.has("_rsc")) c.put(req, res.clone());
        return res;
      } catch {
        const hit = (await c.match(req)) || (await c.match(url.pathname));
        if (hit) return hit;
        if (req.mode === "navigate") return (await c.match(OFFLINE_HTML)) || Response.error();
        throw new Error("offline");
      }
    }),
  );
});
