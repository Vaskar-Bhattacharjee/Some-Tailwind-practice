import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Optional: If you want to restrict to specific ports/pathnames,
        // you can add 'port' and 'pathname' here.
      },
    ],
  },
};

export default nextConfig;
