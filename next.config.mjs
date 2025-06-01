/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' for server deployment with API routes
  // output: 'export',
  trailingSlash: true,
};

export default nextConfig;
