import type { NextConfig } from "next";

// Served at the root of the custom domain
// https://nayerpallysealdahsarbojanindurgapuja.com (GitHub Pages + public/CNAME).
// No basePath/assetPrefix. Set NEXT_PUBLIC_BASE_PATH (e.g. "/sub") only for a
// sub-path-hosted build.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
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
