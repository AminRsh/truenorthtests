import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
      port: '',
      pathname: '/**',
    },
  ],
},
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, 
      },
    ];
  },
  serverExternalPackages: ["@node-rs/argon2"],
};

export default nextConfig;
