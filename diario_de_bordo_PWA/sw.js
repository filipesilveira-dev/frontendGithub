// recebe o nome do cache onde conterão as informações salvas
const CACHE_NAME = "flashecards-cache-v1";
// recebe os endereços dos arquivos que ficarão salvos no cache
const URLS_CACHE = [
  "/index.html",
  "/styles.css",
  "/manifest.json",
  "/public/icon-192.png",
  "/public/icon-512.png",
  "/public/favicon.png",
  "/",
];

//1. Install - primeira vez que o SW é instalado (ideal para cache inicial)
self.addEventListener("install", (event) => {
  console.log("Service Worker foi instalado");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_CACHE)),
  );
});

//2. Activate - ativado após a instalação (pode limpar caches antigos)
self.addEventListener("activate", (event) => {
  console.log("Service Worker foi ativado");
  event.waitUntil(
    caches.keys().then((keys) => {
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)),
      );
    }),
  );
});

// 3. Fetch - Interceptar todas as requisições da página e decide como respondê-las
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => res || fetch(event.request)),
  );
});
