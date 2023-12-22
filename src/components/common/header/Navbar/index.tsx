import { FC } from "react"

interface INavbarComponentProps {
  pathname: string
}
const Navbar: FC<INavbarComponentProps> = ({
  pathname,
}: INavbarComponentProps) => {
  return (
    <nav
      className={`font-semibold leading-6  ${
        pathname === "/" ? "gradient bg" : ""
      }`}
    >
      <div className="min-h-[6vh] container flex justify-between items-center pt-8 text-white text-xl relative z-20">
        <h2>Logo</h2>
        <ul className="flex min-w-[50vw] justify-between">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
