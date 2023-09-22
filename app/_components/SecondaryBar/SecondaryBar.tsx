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
      <div className="container mx-auto flex">
        <li role="none" className="flex items-stretch">
          <Link
            role="menuitem"
            aria-haspopup="false"
            tabIndex={0}
            className={`${themeMode} link`}
            style={{ textDecoration: "none" }}
            href="/blog"
          >
            <span>Blog</span>
          </Link>
        </li>
        <li role="none" className="flex items-stretch">
          <Link
            role="menuitem"
            aria-haspopup="false"
            tabIndex={0}
            className={`${themeMode} link`}
            style={{ textDecoration: "none" }}
            href="/members"
          >
            <span>Members</span>
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default SecondaryBar
