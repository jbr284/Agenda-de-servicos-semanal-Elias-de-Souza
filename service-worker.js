
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('agenda-pwa').then(function(cache) {
            return cache.addAll([
                '/',
                'index.html',
                'manifest.json',
                'service-worker.js',
                'https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js',
                'https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
