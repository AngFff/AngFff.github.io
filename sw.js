const workboxVersion="5.1.3";importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"AngFff"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"bcd4bee849da31bcfa15f0e935135653",url:"./404.html"},{revision:"79c645c8bc513fa3f9edf99418bafe28",url:"./index.html"},{revision:"960297fafacb19dff1246d71f6dfcf6f",url:"./js/main.js"},{revision:"7b2d8af1e6d2b3bba8c8f65789e892da",url:"./css/index.css"}],{directoryIndex:null}),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();