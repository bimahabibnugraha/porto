import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/porto", // <--- Pastikan ini sesuai nama repo GitHub kamu
  images: {
    unoptimized: true,
  },
};

export default nextConfig;