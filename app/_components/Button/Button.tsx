import type { Component, ThemeMode } from "@/types"

type Props = {
  themeMode?: ThemeMode
  text: string
  type?: "button" | "submit" | "reset"
  isLoading?: boolean
  loadingText?: string
}

const Button: Component<Props> = (props) => {
  const {
    themeMode = "neutral",
    text,
    type = "button",
    isLoading = false,
    loadingText = "loading...",
  } = props
  return (
    <button className={`${themeMode} btn`} type={type}>
      {isLoading ? loadingText : text}
    </button>
  )
}

export default Button
