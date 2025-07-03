/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc'
      }
    ]
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'https://immune-coyote-rested.ngrok-free.app'
  ]
}

export default nextConfig
