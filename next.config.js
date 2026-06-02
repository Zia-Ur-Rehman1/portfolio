/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const buildDate = new Date().toISOString().slice(0, 10);

const nextConfig = {
  env: {
    NEXT_PUBLIC_RESUME_VERSION: buildDate,
  },
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio/' : '',
  // Only static-export in production builds so dev keeps API routes working.
  ...(isProd ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizeCss: false,
  }
};

module.exports = nextConfig;
