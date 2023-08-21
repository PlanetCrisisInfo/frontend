import "@/app/globals.scss"

import { Inter } from "next/font/google"

import Navbar from "@/app/_components/Navbar/Navbar"

import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
