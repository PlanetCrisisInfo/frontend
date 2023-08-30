import { z } from "zod"

import { ContactUsValidation } from "@/app/_validationModels/models"

export type Component<T> = React.FC<T>

export type PageProps = {
  params: unknown | undefined
  searchParams?: unknown
}

export type ThemeMode = "happy" | "sad" | "neutral"

export type ContactUs = z.infer<typeof ContactUsValidation>

export type Status = {
  isLoading: boolean
  isSuccessful: boolean
  isError: boolean
  errorMessage: string | null
}

type SuccessfulResponse = {
  status: "success"
  data: unknown
  message: null
}

type FailedResponse = {
  status: "error"
  data: null
  message: string
}

export type Response = {
  status: "success" | "error"
} & (SuccessfulResponse | FailedResponse)
