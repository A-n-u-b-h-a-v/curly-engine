import z from "zod";

export const signupInput=z.object({
    name: z.string().optional(),
    email:z.string().email(),
    password:z.string().min(6)
})

export const signinInput=z.object({
    email:z.string().email(),
    password:z.string().min(6)
})

export const blogInput=z.object({
    title:z.string(),
    content:z.string(),
})

export const blogUpdateInput=z.object({
    title:z.string().optional(),
    id:z.number(),
    content:z.string().optional()
})
export type BlogUpdateInput=z.infer<typeof blogUpdateInput>
export type BlogInput=z.infer<typeof blogInput>
export type SigninInput=z.infer<typeof signinInput>
export type SignupInput=z.infer<typeof signupInput>

