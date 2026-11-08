import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/story": ["./src/app/api/story/fonts/**"],
  },
};

export default nextConfig;
