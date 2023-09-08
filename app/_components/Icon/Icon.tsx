import type { Component } from "@/types"

type Props = {
  children: React.ReactNode
  animateClass?: string
}
const Icon: Component<Props> = ({ children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="200"
      height="200"
      className="hoverable-svg" // Apply a CSS class for hover effect
    >
      {children}
      {/*  */}
    </svg>
  )
}

export default Icon
