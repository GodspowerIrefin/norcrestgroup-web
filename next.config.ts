import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the build root so Next doesn't pick up the stray package-lock.json
  // sitting in the parent (home) directory.
  turbopack: { root: __dirname },
};

export default nextConfig;
