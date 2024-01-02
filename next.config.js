/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.vercel.com"],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol:"https",
        hostname:"cdn.builder.io"
      }
     
    ],
  },
}

module.exports = nextConfig
