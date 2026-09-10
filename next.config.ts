import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/our_divisions",
        destination: "/our-divisions",
        permanent: true,
      },
      {
        source: "/our_divisions/:path*",
        destination: "/our-divisions/:path*",
        permanent: true,
      },
      {
        source: "/divisions",
        destination: "/our-divisions",
        permanent: true,
      },
      {
        source: "/divisions/:path*",
        destination: "/our-divisions/:path*",
        permanent: true,
      },
      {
        source: "/our-divisions/real-estate-and-land-investment",
        destination: "/our-divisions/real-state-and-land-investment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;