"use server"

import type { ContactUs, Response } from "@/types"

import { ContactUsValidation } from "../_validationModels/models"

// action and whatever it is
export const actionSubmitContactForm = async (
  data: ContactUs
): Promise<Response> => {
  //your form inputs fields
  const result = ContactUsValidation.safeParse(data)

  if (!result.success) {
    return {
      status: "error",
      data: null,
      message: result.error.message,
    }
  }

  return {
    status: "success",
    data: { something: "ok" },
    message: null,
  }
}
