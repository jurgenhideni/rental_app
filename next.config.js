/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'prod.pictures.autoscout24.net',
      'archibalds.co.nz',
      'www.alphadrivesupercarhire.co.uk',
      'vipmotors.ae',
    ],
  },
}

module.exports = nextConfig
