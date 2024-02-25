/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's7g3.scene7.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      }
    ],
  },
};

export default nextConfig;
