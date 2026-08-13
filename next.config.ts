import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Static imports (src/assets/*) are optimized automatically.
    // Add remotePatterns here if you later load images from a CMS.
  },
};

export default nextConfig;
