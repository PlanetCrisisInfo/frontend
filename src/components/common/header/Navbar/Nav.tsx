"use client"

import Link from "next/link"

import useCurrentUrl from "@/hooks/useCurrentUrl"

function Nav() {
  const currentUrl = useCurrentUrl()
  const isHome = currentUrl === "/"
  const isExpPage = currentUrl === "/exp"
  let theme: Theme

  if (isHome) {
    theme = "happy"
  } else if (isExpPage) {
    theme = "sad"
  } else {
    theme = "neutral"
  }

  return (
    <nav className={`font-semibold leading-6 relative ${theme} bg z-50`}>
      <div className="min-h-[8vh]  container flex justify-between items-center text-xl relative z-40 ">
        <h2 className="min-w-[20%] cursor-pointer">Logo</h2>
        <ul className="flex justify-between min-w-[60%] cursor-pointer">
          <li className={`${theme} link`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${theme} link`}>
            <Link href="/exp">Exp</Link>
          </li>
          <li className={`${theme} link`}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={`${theme} link`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
