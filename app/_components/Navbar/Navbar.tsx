"use client"
import { clsx } from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Hamburger from "./Hamburger"
import NavbarContextProvider from "./NavbarContextProvider"
import NavigationLinks from "./NavigationLinks"

import type { Component, ThemeMode } from "@/types"
type Props = {
  themeMode?: ThemeMode
}

const Navbar: Component<Props> = ({ themeMode = "neutral" }) => {
  const pathname = usePathname()

  console.log(pathname)

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header
        className={`border-b-1 relative z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden`}
      >
        <div className="relative container mx-auto">
          <nav
            aria-label="main navigation"
            className="flex h-[3.8rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="/"
            >
              <div className="max-w-[75px]  ">
                <Image
                  src="/images/planet-crisis-logo.png"
                  alt="Planet Crisis Logo"
                  width={174}
                  height={131}
                  quality={100}
                  priority={true}
                  loading="eager"
                />
              </div>
            </Link>
            <NavbarContextProvider>
              {/*      <!-- Mobile trigger --> */}
              <Hamburger />
              {/*      <!-- Navigation links --> */}
              <NavigationLinks>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/",
                    })} `}
                    href="/"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/cleanest",
                    })} `}
                    href="/cleanest"
                  >
                    <span>Cleanest</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/pollution",
                    })} `}
                    href="/pollution"
                  >
                    <span>Pollution</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/disasters",
                    })} `}
                    href="/disasters"
                  >
                    <span>Disasters</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/temperatures",
                    })} `}
                    href="/temperatures"
                  >
                    <span>Temperatures</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className={`${themeMode} link ${clsx({
                      "link-active": pathname === "/Extinct",
                    })} `}
                    href="/extinct"
                  >
                    <span>Extinct</span>
                  </Link>
                </li>
                {/* <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="/contactus"
                  >
                    <span>ContactUs</span>
                  </Link>
                </li> */}
              </NavigationLinks>
            </NavbarContextProvider>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  )
}
export default Navbar
