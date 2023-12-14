import type { Metadata } from "next"
import "./globals.scss"

import { headers } from "next/headers"

import Navbar from "@/components/common/header/Navbar"

export const metadata: Metadata = {
  title: "Planet Crisis",
  description:
    "Join Planet Crisis in our journey to save our beautiful Earth! Discover easy tips, fun facts, and inspiring stories about fighting climate change and protecting nature. Perfect for everyday heroes of all ages who want to make a difference. Lets learn, share, and act together for a happier, healthier planet!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  // read the custom x-url header
  const header_url = headersList.get("x-url") || ""
  console.log("header_url", header_url)
  console.log(process.env.NODE_ENV)

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
