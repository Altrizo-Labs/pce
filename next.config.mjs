/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  output: 'standalone', // For smaller Docker images, not directly client-side perf
  webpack(config, { isServer }) {
    // File loader for .mp4 files
    config.module.rules.push({});

    return config;
  },
};

export default nextConfig;
