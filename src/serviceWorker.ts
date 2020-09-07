const CASHE_NAME = 'v-1'
const urlsToCache = ['index.html',
'/static/js/2.b8453fb6.chunk.js',
'/static/js/main.fac0d96c.chunk.js',
'/static/css/2.11829350.chunk.css',
'/static/css/main.8ee7fde6.chunk.css',
'/manifest.json',
'/logo192.png',
]

const self = this

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CASHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
})

// Listen to Reqeusts
const options = {
    ignoreSearch: true,
    ignoreMethod: true,
    ignoreVary: true
  };

self.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request, options)
                .then((response) => {
                    if (response) {
                        console.log(response)
                        return (response)
                    } else {
                        return fetch(event.request).then((response) => {
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                console.log(response)
                                return response;
                            }
                            var responseToCache = response.clone();

                            caches.open(CASHE_NAME).then((cache) => {
                                cache.put(event.request, responseToCache)
                            })
                            console.log(response)
                            return response;

                        }).catch((err) => {
                            console.log('err', err)
                        })

                    }

                }).catch((err) => {
                    console.log('err', err)

                })
        )
    }

})

// Activate Service Worker
self.addEventListener('activate', (event) => {
    const casheWhitelist = []
    casheWhitelist.push(CASHE_NAME)

    event.waitUntil(
        caches.keys().then((casheNames) => Promise.all(
            casheNames.map((cacheName) => {
                if (!casheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})