import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  experimental: {
    cpus: 1,
    memoryBasedWorkersCount: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'transporteselsol1.cl',
      },
    ],
  },
}

export default nextConfig
