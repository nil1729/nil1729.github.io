importScripts("/precache-manifest.7433fa4f258c72c3d7f46fd24b4f958d.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

