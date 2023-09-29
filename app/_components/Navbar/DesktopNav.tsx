"use client"

import clsx from "clsx"
import Link from "next/link"
import React from "react"

import { Component, ThemeMode } from "@/types"

type Props = {
  themeMode?: ThemeMode
  pathname: string
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DesktopNav: Component<Props> = ({
  themeMode,
  pathname,
  setIsToggleOpen,
}) => {
  return (
    <>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-current="page"
          aria-haspopup="false"
          tabIndex={0}
          className={`link ${themeMode} ${clsx({
            "link-active": pathname === "/cleanest",
          })} `}
          style={{ textDecoration: "none" }}
          href="/"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Home</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-current="page"
          aria-haspopup="false"
          tabIndex={0}
          className={`link ${themeMode} ${clsx({
            "link-active": pathname === "/cleanest",
          })} `}
          style={{ textDecoration: "none" }}
          href="/cleanest"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Cleanest</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          tabIndex={0}
          className={`${themeMode} link ${clsx({
            "link-active": pathname === "/pollution",
          })} `}
          style={{ textDecoration: "none" }}
          href="/pollution"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Pollution</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          tabIndex={0}
          className={`${themeMode} link ${clsx({
            "link-active": pathname === "/disasters",
          })} `}
          style={{ textDecoration: "none" }}
          href="/disasters"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Disasters</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          tabIndex={0}
          className={`${themeMode} link ${clsx({
            "link-active": pathname === "/temperatures",
          })} `}
          style={{ textDecoration: "none" }}
          href="/temperatures"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Temperatures</span>
        </Link>
      </li>
      <li role="none" className="flex items-stretch">
        <Link
          role="menuitem"
          aria-haspopup="false"
          tabIndex={0}
          className={`${themeMode} link ${clsx({
            "link-active": pathname === "/temperatures",
          })} `}
          style={{ textDecoration: "none" }}
          href="/extinct"
          onClick={() => {
            setIsToggleOpen((prevState) => !prevState)
          }}
        >
          <span>Extinct</span>
        </Link>
      </li>
    </>
  )
}

export default DesktopNav
