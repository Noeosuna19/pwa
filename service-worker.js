const CACHE_NAME = 'menu-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
  // Agrega aquí las rutas de tus archivos CSS, JS y cualquier otro recurso estático.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});