"use server"

import { ContactUs } from "@/types"

import { ContactUsValidation } from "../_validationModels/models"

// action and whatever it is
export const actionSubmitContactForm = async (data: ContactUs) => {
  //your form inputs fields
  const result = ContactUsValidation.safeParse(data)

  if (!result.success) {
    return { success: false, error: result.error.format() }
  }

  return { success: true, data: result.data }
}
