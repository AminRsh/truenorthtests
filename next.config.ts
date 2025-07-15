import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // Use true for SEO permanent redirect
      },
    ];
  },
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
