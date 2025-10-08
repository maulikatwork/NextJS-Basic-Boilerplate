import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "host.in",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "host.in",
        pathname: "/uploads/**",
      },
      //For Firebase Storage
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      //Add More Hostnames here
    ],
  },
};

export default nextConfig;
