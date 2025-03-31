/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  trailingSlash: false,
  poweredByHeader: false,
  env: {
    PORT: process.env.PORT || 3000,
  },
}

module.exports = nextConfig 