"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const useCurrentUrl = () => {
  const pathname = usePathname()
  const [currentUrl, setCurrentUrl] = useState(pathname)
  useEffect(() => {
    setCurrentUrl(pathname)
  }, [pathname])

  return currentUrl
}

export default useCurrentUrl
