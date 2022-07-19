const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: false,
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
		register: true,
		sw: 'service-worker.js',
	},
});

module.exports = nextConfig;
