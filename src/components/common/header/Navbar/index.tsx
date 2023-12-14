import { FC } from "react"

interface INavbarComponentProps {
  pathname: string
}
const Navbar: FC<INavbarComponentProps> = ({
  pathname,
}: INavbarComponentProps) => {
  return (
    <nav className={`${pathname === "/" ? "gradient bg" : ""}`}>
      <ul className="container flex relative z-20 ">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
