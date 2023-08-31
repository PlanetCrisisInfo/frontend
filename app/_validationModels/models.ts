import { z } from "zod"

export const ContactUsValidation = z.object({
  username: z.string().nonempty("Name is required").min(3, "Name is too short"),
  email: z.string().nonempty("Email is required").email("Invalid email"),
  message: z
    .string()
    .nonempty("Message is required")
    .min(10, "Message must be at least 10 characters"),
})
