// Service worker, served at /sw.js. Generated at build time (force-static) so
// each deploy gets a new VERSION: the browser then installs a fresh worker,
// re-precaches the whole app and drops the previous deploy's cache.
//
// The app is local-first (all data is in localStorage), so caching the app
// shell is all it takes to run fully offline.

export const dynamic = "force-static";

const VERSION = process.env.VERCEL_GIT_COMMIT_SHA ?? String(Date.now());

const ROUTES = [
  "/",
  "/dashboard",
  "/discover",
  "/portfolio",
  "/practice",
  "/achievements",
  "/analytics",
  "/settings",
  "/onboarding",
];

const EXTRAS = [
  "/manifest.webmanifest",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/apple-icon.png",
  "/icon.png",
];

const WORKER = String.raw`
const CACHE = "fluentbank-" + VERSION;
const NAV_TIMEOUT_MS = 4000;

// Every hashed asset a page needs is named in its HTML: as a tag URL
// ("/_next/static/...") or as a chunk path in the inline RSC payload
// ("static/chunks/..."). Stylesheets name their fonts the same way.
//
// Route-group chunks appear both ways — "app/%28app%29/..." in script tags and
// "app/(app)/..." when webpack requests them — so cache keys are always the
// decoded pathname.
const TAG_URL = /\/_next\/static\/[^"'\\\s<>]+?\.(?:js|css|woff2?|ttf|otf|png|svg|ico|json)/g;
const RSC_PATH = /["'](static\/(?:chunks|css|media)\/[^"'\\\s<>]+?\.(?:js|css|woff2?|ttf|otf|png|svg|ico|json))/g;

function assetKey(url) {
  return decodeURI(new URL(url, self.location.origin).pathname);
}

function assetUrls(text) {
  const urls = new Set();
  for (const m of text.matchAll(TAG_URL)) urls.add(assetKey(m[0]));
  for (const m of text.matchAll(RSC_PATH)) urls.add(assetKey("/_next/" + m[1]));
  return urls;
}

// A redirected response can't answer a navigation, so store a clean copy.
async function cacheable(res) {
  if (!res.redirected) return res;
  return new Response(await res.blob(), { status: res.status, headers: res.headers });
}

async function precache() {
  const cache = await caches.open(CACHE);
  const assets = new Set(EXTRAS);

  await Promise.all(
    ROUTES.map(async (route) => {
      const res = await fetch(route, { cache: "reload" });
      if (!res.ok) throw new Error("precache " + route + ": " + res.status);
      for (const u of assetUrls(await res.clone().text())) assets.add(u);
      await cache.put(route, await cacheable(res));
    }),
  );

  const fetchAsset = async (url) => {
    const res = await fetch(url);
    if (!res.ok) return "";
    const text = url.endsWith(".css") ? await res.clone().text() : "";
    await cache.put(url, res);
    return text;
  };
  const sheets = await Promise.all([...assets].map((u) => fetchAsset(u).catch(() => "")));
  const fonts = new Set();
  for (const css of sheets) for (const u of assetUrls(css)) if (!assets.has(u)) fonts.add(u);
  await Promise.all([...fonts].map((u) => fetchAsset(u).catch(() => "")));
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

// Pages: fresh from the network when it answers quickly, else the cached copy.
// All routes are static and read their query string client-side, so the
// pathname alone is the cache key.
async function handleNavigation(request) {
  const cache = await caches.open(CACHE);
  const path = new URL(request.url).pathname;
  const fromNetwork = fetch(request).then(async (res) => {
    if (res.ok) await cache.put(path, (await cacheable(res)).clone());
    return res;
  });
  fromNetwork.catch(() => {});
  const timeout = new Promise((resolve) => setTimeout(resolve, NAV_TIMEOUT_MS));
  try {
    const res = await Promise.race([fromNetwork, timeout]);
    if (res) return res;
  } catch {}
  const cached = (await cache.match(path)) || (await cache.match("/"));
  return cached || fromNetwork;
}

// Hashed build assets never change: cache-first.
async function handleStatic(request) {
  const cache = await caches.open(CACHE);
  const key = assetKey(request.url);
  const cached = await cache.match(key);
  if (cached) return cached;
  const res = await fetch(request);
  if (res.ok) await cache.put(key, res.clone());
  return res;
}

// Icons, manifest, etc.: serve the cached copy and refresh it in the background.
async function handleOther(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request.url);
  const fromNetwork = fetch(request).then(async (res) => {
    if (res.ok) await cache.put(request.url, res.clone());
    return res;
  });
  if (!cached) return fromNetwork;
  fromNetwork.catch(() => {});
  return cached;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Client-side route transitions (RSC payloads) are left to the network. When
  // offline they fail and Next falls back to a full page load, which the
  // navigation handler below serves from cache.
  if (request.headers.get("RSC") || url.searchParams.has("_rsc")) return;

  if (request.mode === "navigate") event.respondWith(handleNavigation(request));
  else if (url.pathname.startsWith("/_next/static/")) event.respondWith(handleStatic(request));
  else if (!url.pathname.startsWith("/_next/")) event.respondWith(handleOther(request));
});
`;

const SOURCE =
  `const VERSION = ${JSON.stringify(VERSION)};\n` +
  `const ROUTES = ${JSON.stringify(ROUTES)};\n` +
  `const EXTRAS = ${JSON.stringify(EXTRAS)};\n` +
  WORKER;

export function GET() {
  return new Response(SOURCE, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
