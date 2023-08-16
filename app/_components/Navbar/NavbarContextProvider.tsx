"use client"
import React, { createContext, useState } from "react"

export const NavbarContext = createContext({
  isToggleOpen: false,
  setIsToggleOpen: (value: boolean) => {},
})
export default function NavbarContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false)

  return (
    <>
      <NavbarContext.Provider value={{ isToggleOpen, setIsToggleOpen }}>
        {children}
      </NavbarContext.Provider>
    </>
  )
}
