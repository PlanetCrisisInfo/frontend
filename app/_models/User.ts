import { z } from "zod"

export const UserModel = z.object({
  name: z.string(),
  age: z.number().positive("Age must be a positive number"),
})
