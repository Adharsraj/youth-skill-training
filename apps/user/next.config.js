/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},
  transpilePackages: ["@repo/ui"],
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
