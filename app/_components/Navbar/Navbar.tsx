import Image from "next/image"
import Link from "next/link"

import { Component } from "@/types"

import Hamburger from "./Hamburger"
import NavbarContextProvider from "./NavbarContextProvider"
import NavigationLinks from "./NavigationLinks"

type Props = {}

const Navbar: Component<Props> = () => {
  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
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
              <div className="max-w-[100px]">
                <Image
                  src="/images/planet-crisis-logo.png"
                  alt="Planet Crisis Logo"
                  layout=""
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
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="#"
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
                    className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="#"
                  >
                    <span>Features</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="#"
                  >
                    <span>About</span>
                  </Link>
                </li>
                <li role="none" className="flex items-stretch">
                  <Link
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex={0}
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="#"
                  >
                    <span>US</span>
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
