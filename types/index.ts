import { NextPage } from "next"

export type ComponentProps<T> = T

export type Component<T> = React.FC<ComponentProps<T>>

export type PageProps<T> = T

export type Page<T> = NextPage<PageProps<T>>

export type ThemeMode = "happy" | "sad" | "neutral"
