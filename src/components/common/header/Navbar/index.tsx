import { FC } from "react"

interface INavbarComponentProps {
  pathname: string
}
const Navbar: FC<INavbarComponentProps> = ({
  pathname,
}: INavbarComponentProps) => {
  return (
    <nav
      className={`font-semibold leading-6 ${
        pathname === "/" ? "gradient bg" : ""
      }`}
    >
      <div className="min-h-[8vh] container flex justify-between items-center text-white text-xl relative z-40 ">
        <h2 className="min-w-[20%] cursor-pointer">Logo</h2>
        <ul className="flex justify-between min-w-[60%] cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li className="">Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
