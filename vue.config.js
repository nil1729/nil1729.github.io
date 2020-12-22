module.exports = {
	pwa: {
		name: 'Nilanjan Deb',
		themeColor: '#FBFBFF',
		msTileColor: '#FBFBFF',
		manifestCrossorigin: 'anonymous',
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js',
		},
		iconPaths: {
			favicon32: 'favicons/favicon-32x32.png',
			favicon16: 'favicons/favicon-16x16.png',
			appleTouchIcon: 'favicons/apple-icon-152x152.png',
			maskIcon: 'favicons/apple-icon.png',
			msTileImage: 'favicons/ms-icon-144x144.png',
		},
	},
};
