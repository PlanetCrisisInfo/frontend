import { useState } from "react"

import type { Status } from "@/types"

export const useStatus = () => {
  const [status, setStatus] = useState<Status>({
    isLoading: false,
    isSuccessful: false,
    isError: false,
    errorMessage: null,
  })

  return { status, setStatus }
}
