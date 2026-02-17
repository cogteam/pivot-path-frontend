// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|pdf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "10.5.50.55",
        port: "8001",
        pathname: "/uploads/blog/**",
      },
    ],
  },
};

export default nextConfig;


