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
  return (
    <>
      <header
        className={`border-b-1 relative z-20 w-full border-b border-slate-200  shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden`}
      >
        <div className="relative container mx-auto">
          <nav
            aria-label="main navigation"
            className="flex h-[3.8rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
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
                    style={{ textDecoration: "none" }}
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
                    className={`link ${themeMode} ${clsx({
                      "link-active": pathname === "/cleanest",
                    })} `}
                    style={{ textDecoration: "none" }}
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
                    style={{ textDecoration: "none" }}
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
                    style={{ textDecoration: "none" }}
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
                    style={{ textDecoration: "none" }}
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
                      "link-active": pathname === "/temperatures",
                    })} `}
                    style={{ textDecoration: "none" }}
                    href="/extinct"
                  >
                    <span>Extinct</span>
                  </Link>
                </li>
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
