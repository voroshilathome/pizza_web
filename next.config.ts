import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    return config
  },
  reactStrictMode: false,
};

export default nextConfig;
