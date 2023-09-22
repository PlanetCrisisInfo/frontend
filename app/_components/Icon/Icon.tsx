import type { Component, ThemeMode } from "@/types"
import clsx from "clsx"

import { applyDynamicClass } from "@/app/_utils/applyDynamicClass"

import styles from "./Icon.module.scss"

type Props = {
  children: React.ReactNode
  animateClass?: string
  themeMode: ThemeMode
}
const Icon: Component<Props> = ({ children, animateClass, themeMode }) => {
  console.log("themeMode", themeMode)
  const dynamicAnimateClass = applyDynamicClass({
    styles,
    utilClass: animateClass,
  })

  const dynamicThemeModeClass = applyDynamicClass({
    styles,
    utilClass: themeMode,
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="200"
      height="200"
      className={clsx(dynamicAnimateClass, dynamicThemeModeClass)} // Apply a CSS class for hover effect
    >
      {children}
    </svg>
  )
}

export default Icon
