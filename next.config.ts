import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ⛔ ESLint akan di-skip saat `next build`
  },
};

export default nextConfig;
