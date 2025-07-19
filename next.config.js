/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['instagram.com', 'scontent.cdninstagram.com'],
  },
}

module.exports = nextConfig