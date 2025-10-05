import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nda.org.vn',
      },
      {
        protocol: 'https',
        hostname: 'imgprofile.vnanet.vn',
      },
      {
        protocol: 'https',
        hostname: 'cafef1.mediacdn.vn',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vivatechnology.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'nda-project-storage.s3.ap-southeast-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '13.250.127.168',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '3.1.20.236',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '3.1.20.236',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '124.197.21.86',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '124.197.21.86',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
