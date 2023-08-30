import { useState } from "react"

export type Status = {
  isLoading: boolean
  isSuccessful: boolean
  isError: boolean
  errorMessage: string | null
}

export const useStatus = () => {
  const [status, setStatus] = useState<Status>({
    isLoading: false,
    isSuccessful: false,
    isError: false,
    errorMessage: null,
  })

  return { status, setStatus }
}
