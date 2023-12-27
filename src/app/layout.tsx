import type { Metadata } from "next"
import "./globals.scss"

import { headers } from "next/headers"

import Navbar from "@/components/common/header/Navbar"
import { extractPathname } from "@/utils/extractpathname"

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

  const pathname = extractPathname(header_url)

  console.log("pathname", pathname)
  const theme: Theme = (pathname === "/" && "sad") || "sad"
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-100">
          <div className="mx-auto max-w-[2160px]">
            <Navbar theme={theme} />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
