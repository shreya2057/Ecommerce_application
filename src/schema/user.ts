import * as z from "zod";
export const userSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Enter valid email" }),
  avatar: z.string(),
  password: z
    .string()
    .min(8, { message: "Should be atleast 8 characters long" }),
});
