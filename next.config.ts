import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
