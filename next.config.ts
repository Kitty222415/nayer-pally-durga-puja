import type { NextConfig } from "next";

// GitHub Pages serves this project site under /nayer-pally-durga-puja.
// Override with NEXT_PUBLIC_BASE_PATH="" for a root-hosted build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/nayer-pally-durga-puja";
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
