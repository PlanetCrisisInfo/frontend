"use client"
import { useContext } from "react"

import { Component } from "@/types"

import { NavbarContext } from "./NavbarContextProvider"

type Props = {
  children: React.ReactNode
}

const NavigationLinks: Component<Props> = ({ children }) => {
  const { isToggleOpen } = useContext(NavbarContext)
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        isToggleOpen
          ? "visible opacity-100 backdrop-blur-sm min-h-screen"
          : "invisible opacity-0"
      }`}
    >
      {children}
    </ul>
  )
}

export default NavigationLinks
