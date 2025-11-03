import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["oceania.co.id", "oceania-hazel.vercel.app"],
    formats: ["image/avif", "image/webp"],
  },
  trailingSlash: true,
  reactStrictMode: true,
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/vercel",
        destination: "https://oceania.co.id",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
