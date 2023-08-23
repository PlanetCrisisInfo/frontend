import { z } from "zod"

import { UserModel } from "@/app/_models/User"

export type Component<T> = React.FC<T>

export type PageProps = {
  params: any
  searchParams?: any
}

export type ThemeMode = "happy" | "sad" | "neutral"

export type User = z.infer<typeof UserModel>
