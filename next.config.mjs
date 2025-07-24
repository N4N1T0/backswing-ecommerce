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
      },
      {
        protocol: 'https',
        hostname: 's7g3.scene7.com'
      }
    ]
  },
  allowedDevOrigins: ['localhost:3000', 'immune-coyote-rested.ngrok-free.app']
}

export default nextConfig
