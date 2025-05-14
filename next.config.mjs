/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    // File loader for .mp4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos", // Optional: where to save files
            publicPath: "/_next/static/videos", // Public path for videos
          },
        },
      ],
    });

    return config;
  },
  images: {
    domains: ["demo.ghost.io"]
  },
};

export default nextConfig;
