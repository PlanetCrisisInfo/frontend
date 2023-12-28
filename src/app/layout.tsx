import type { Metadata } from "next"
import "./globals.scss"

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
  return (
    <html lang="en">
      <body>
        <div className="bg-slate-100">
          <div className="mx-auto max-w-[2160px]">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
