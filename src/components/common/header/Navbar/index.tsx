import { FC } from "react"

import Nav from "./Nav"

interface INavbarComponentProps {}
const Navbar: FC<INavbarComponentProps> = ({}: INavbarComponentProps) => {
  return (
    <>
      <Nav />
    </>
  )
}

export default Navbar
