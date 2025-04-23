import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "api.vatsalya.com.np",
  //       pathname: "/**",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "192.168.1.95",
  //       port: "5000",
  //       pathname: "/images/**",
  //     },
  //   ],
  // },

  images: {
    domains: ["192.168.1.95"],
  },
};

export default nextConfig;
