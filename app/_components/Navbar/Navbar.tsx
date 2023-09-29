"use client"
import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import DesktopNav from "./DesktopNav"
import Hamburger from "./Hamburger"
import NavAccordion from "./MobileNavBar"

import type { Component, ThemeMode } from "@/types"
type Props = {
  themeMode?: ThemeMode
}

const Navbar: Component<Props> = ({ themeMode = "neutral" }) => {
  const pathname = usePathname()

  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false)

  return (
    <>
      <header
        className={`border-b-1 relative z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden`}
      >
        <div
          className={`relative mx-auto ${clsx({ container: !isToggleOpen })}`}
        >
          <nav
            aria-label="main navigation"
            className="flex h-[3.8rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap pt-1 pb-1 ml-1 text-lg focus:outline-none lg:flex-1 "
              href="/"
            >
              <div className="max-w-[75px]  ">
                <Image
                  src="/images/planet-crisisLogo.png"
                  alt="Planet Crisis Logo"
                  width={174}
                  height={131}
                  quality={100}
                  priority={true}
                  loading="eager"
                />
              </div>
            </Link>

            {/*      <!-- Mobile trigger --> */}
            <Hamburger
              isToggleOpen={isToggleOpen}
              setIsToggleOpen={setIsToggleOpen}
            />
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm min-h-screen"
                  : "invisible opacity-0"
              }`}
            >
              {!isToggleOpen && (
                <DesktopNav
                  themeMode={themeMode}
                  pathname={pathname}
                  setIsToggleOpen={setIsToggleOpen}
                />
              )}

              {isToggleOpen && <NavAccordion />}
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  )
}
export default Navbar
