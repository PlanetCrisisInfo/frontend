"use client"
import React, { createContext, useState } from "react"

type NavbarContextType = {
  isToggleOpen: boolean
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarContextType>({
  isToggleOpen: false,
  setIsToggleOpen: () => {},
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
