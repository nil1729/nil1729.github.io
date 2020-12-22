import siteOwner from './account';

export default {
	title: siteOwner.defaultTitle,
	titleTemplate: '%s',

	// Meta Tags
	meta: [
		{ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
		{
			name: 'generator',
			content: 'VueJS',
		},
		{
			name: 'description',
			content: siteOwner.description,
		},
		{
			name: 'image',
			content: '/favicons/favicon-16x16.png',
		},
		{
			name: 'application-name',
			content: `${siteOwner.defaultTitle} Portfolio`,
		},
		{
			name: 'msapplication-TileColor',
			content: siteOwner.website.themeColor,
		},
		{
			name: 'msapplication-TileImage',
			content: '/favicons/ms-icon-144x144.png',
		},
		{
			name: 'theme-color',
			content: siteOwner.website.themeColor,
		},
		{ property: 'og:title', content: siteOwner.defaultTitle },
		{
			property: 'og:description',
			content: siteOwner.description,
		},
		{ property: 'og:site_name', content: siteOwner.defaultTitle },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:url', content: siteOwner.website.hostURL },
		{
			property: 'og:image',
			content: siteOwner.website.faviconLocation,
		},
		{ name: 'twitter:card', content: 'summary' },
		{
			name: 'twitter:site',
			content: siteOwner.website.hostURL,
		},
		{ name: 'twitter:title', content: siteOwner.defaultTitle },
		{
			name: 'twitter:description',
			content: siteOwner.description,
		},
		{ name: 'twitter:creator', content: siteOwner.social.twitter.url },
		{
			name: 'twitter:image:src',
			content: siteOwner.website.faviconLocation,
		},
		{
			name: 'twitter:image:alt',
			content: siteOwner.defaultTitle,
		},
		{ itemprop: 'name', content: siteOwner.defaultTitle },
		{
			itemprop: 'description',
			content: siteOwner.description,
		},
		{
			itemprop: 'image',
			content: siteOwner.website.faviconLocation,
		},
	],
	// Links,
	link: [
		{ rel: 'canonical', href: siteOwner.website.hostURL },
		{ rel: 'manifest', href: '/manifest.json' },
		// link for favicons
		{
			rel: 'mask-icon',
			sizes: '/favicons/safari-pinned-tab.svg',
			color: '#5bbad5',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '57x57',
			href: '/favicons/apple-icon-57x57.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '60x60',
			href: '/favicons/apple-icon-60x60.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '72x72',
			href: '/favicons/apple-icon-72x72.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '76x76',
			href: '/favicons/apple-icon-76x76.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '114x114',
			href: '/favicons/apple-icon-114x114.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '120x120',
			href: '/favicons/apple-icon-120x120.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '144x144',
			href: '/favicons/apple-icon-144x144.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '152x152',
			href: '/favicons/apple-icon-152x152.png',
		},
		{
			rel: 'apple-touch-icon',
			sizes: '180x180',
			href: '/favicons/apple-icon-180x180.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '192x192',
			href: '/favicons/android-icon-192x192.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '32x32',
			href: '/favicons/favicon-32x32.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '96x96',
			href: '/favicons/favicon-96x96.png',
		},
		{
			rel: 'icon',
			type: 'image/png',
			sizes: '16x16',
			href: '/favicons/favicon-16x16.png',
		},
	],
	// script
	script: [
		{
			type: 'application/ld+json',
			json: {
				'@context': 'http://schema.org',
				'@type': 'Organization',
				legalName: siteOwner.defaultTitle,
				url: 'nilanjandeb.me',
				logo: siteOwner.website.faviconLocation,
				foundingDate: siteOwner.website.foundingDate,
				founders: [
					{
						'@type': 'Person',
						name: siteOwner.defaultTitle,
					},
				],
				contactPoint: [
					{
						'@type': 'ContactPoint',
						...siteOwner.contact,
						contactType: 'customer service',
					},
				],
				address: {
					'@type': 'PostalAddress',
					...siteOwner.address,
				},
				sameAs: [
					siteOwner.social.github.url,
					siteOwner.social.linkedin.url,
					siteOwner.social.twitter.url,
				],
			},
		},
		{
			src: `https://www.googletagmanager.com/gtag/js?id=${siteOwner.googleAnalyticsTagID}`,
			async: true,
			defer: true,
		},
		{
			defer: true,
			innerHTML: `
				window.dataLayer = window.dataLayer || [];
				function gtag() {
					dataLayer.push(arguments);
				}
				gtag('js', new Date());
				gtag('config', "${siteOwner.googleAnalyticsTagID}");
			`,
		},
	],
};
