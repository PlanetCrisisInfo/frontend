import "@/app/globals.scss"

import { Inter, Roboto } from "next/font/google"

import Navbar from "@/app/_components/Navbar/Navbar"

import type { Metadata } from "next"
const inter = Inter({ subsets: ["latin"] })
const roboto = Roboto({
  subsets: ["cyrillic-ext"],
  display: "swap",
  weight: ["400", "700"],
})
export const metadata: Metadata = {
  title: "Planet Crisis",
  description: "A info about the only Planet we can live in",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
