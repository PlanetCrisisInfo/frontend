import { z } from "zod"

import { ContactUsValidation } from "@/app/_validationModels/models"

export type Component<T> = React.FC<T>

export type PageProps = {
  params: any
  searchParams?: any
}

export type ThemeMode = "happy" | "sad" | "neutral"

export type ContactUs = z.infer<typeof ContactUsValidation>
