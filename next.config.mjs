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
			},
			{
				protocol: 'https',
				hostname: 'backswingpadel.com',
			},
		],
	},
	experimental: {
		staleTimes: {
			dynamic: 30,
			static: 180,
		},
	},
}

export default nextConfig
