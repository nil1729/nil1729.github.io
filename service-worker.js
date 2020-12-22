importScripts("/precache-manifest.95cf89f0da525f3e670ea7c2e7e03514.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.setConfig({
	debug: false,
});

workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
	new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
	new workbox.strategies.CacheFirst({
		cacheName: 'googleapis',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 30,
			}),
		],
		method: 'GET',
		cacheableResponse: { statuses: [0, 200] },
	})
);

