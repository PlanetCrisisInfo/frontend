import Link from "next/link"

import { Component, ThemeMode } from "@/types"

type Props = {
  themeMode: ThemeMode
}
const SecondaryBar: Component<Props> = ({ themeMode = "neutral" }) => {
  return (
    <nav
      id="secondaryBar"
      className={`flex justify-between ${themeMode} bg px-4`}
    >
      <div className="container mx-auto">
        <li role="none" className="flex items-stretch">
          <Link
            role="menuitem"
            aria-current="page"
            aria-haspopup="false"
            tabIndex={0}
            className={`${themeMode} secondary-link`}
            href="/cleanest"
          >
            <span>Latest Topics</span>
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default SecondaryBar
