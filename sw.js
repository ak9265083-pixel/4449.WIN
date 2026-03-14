const CACHE_NAME = '4449win-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/logo.png',
  '/manifest.json'
];

// Service Worker Install karna
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Requests ko fetch karna
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
