import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The portfolio uses plain <img> tags and self-hosted assets in /public,
  // so the built-in Image Optimization pipeline is not required.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
