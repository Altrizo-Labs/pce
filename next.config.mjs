/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // File loader for .mp4 files
    config.module.rules.push({});

    return config;
  },
};

export default nextConfig;
