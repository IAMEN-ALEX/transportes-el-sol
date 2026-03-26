import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',   // 👈 esta línea habilita el export estático
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'transporteselsol1.cl',
      },
    ],
  },
}

export default nextConfig
