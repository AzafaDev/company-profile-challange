import withPayload from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      // INI YANG PENTING: Izinkan domain Vercel Blob
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      // Opsional: Tetap simpan ini jika kamu masih punya fallback ke local API
      {
        protocol: 'https',
        hostname: 'janji-jiwa-coffee-company-profile.vercel.app',
        pathname: '/api/media/file/**',
      },
    ],
  },
};

export default withPayload(nextConfig);