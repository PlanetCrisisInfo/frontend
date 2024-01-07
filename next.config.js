/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "assets.vercel.com", "daisyui.com"],
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG:true,
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
        protocol: "https",
        hostname: "daisyui.com",
      },
      {
        protocol:"https",
        hostname:"cdn.builder.io"
      }
    ],
  },
}

module.exports = nextConfig
