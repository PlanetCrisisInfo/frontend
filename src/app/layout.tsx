import type { Metadata } from "next"
import "./globals.scss"

import { Archivo, Hanken_Grotesk } from "next/font/google"

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin-ext"],
  weight: ["300", "500", "600", "800"],
  display: "swap",
})
const ArchivoFont = Archivo({
  subsets: ["latin-ext"],
  weight: ["300", "600", "800"],
  display: "swap",
})

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
      <body className={`${HankenGrotesk.className} ${ArchivoFont.className}`}>
        {children}
      </body>
    </html>
  )
}
