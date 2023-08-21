import { Component, ThemeMode } from "@/types"

type Props = {
  themeMode: ThemeMode
}
const Button: Component<Props> = (props) => {
  const { themeMode } = props
  return <button className={`${themeMode} btn`}>Button</button>
}

export default Button
