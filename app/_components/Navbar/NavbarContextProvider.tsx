"use client"
import React, { createContext, useState } from "react"

type CreateContextType = {
  isToggleOpen: boolean
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<CreateContextType>({
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
