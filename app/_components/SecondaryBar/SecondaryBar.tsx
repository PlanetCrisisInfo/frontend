import Link from "next/link"

import { Component, ThemeMode } from "@/types"

type Props = {
  themeMode: ThemeMode
  pagesLinks?: {
    name: string
    path: string
  }[]
}
const SecondaryBar: Component<Props> = ({
  themeMode = "neutral",
  pagesLinks = [],
}) => {
  const staticPagesLinks = [
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Members",
      path: "/members",
    },
  ]

  pagesLinks = [...staticPagesLinks, ...pagesLinks]

  return (
    <nav
      id="secondaryBar"
      className={`flex justify-between ${themeMode} bg px-4`}
    >
      <ul className="container mx-auto flex">
        {pagesLinks.length > 0 &&
          pagesLinks.map((pageLink, idx) => (
            <li
              role="none"
              className="flex items-stretch"
              key={`${pageLink}-${idx}`}
            >
              <Link
                role="menuitem"
                aria-haspopup="false"
                tabIndex={0}
                className={`${themeMode} link`}
                style={{ textDecoration: "none" }}
                href={pageLink.path}
              >
                <span>{pageLink.name}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default SecondaryBar
