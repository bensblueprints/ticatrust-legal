/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ticatrustlegal.com',
      },
    ],
  },
}

module.exports = nextConfig
