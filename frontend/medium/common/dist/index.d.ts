import z from "zod";
export declare const signupInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name?: string | undefined;
}, {
    email: string;
    password: string;
    name?: string | undefined;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const blogInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const blogUpdateInput: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    id: z.ZodNumber;
    content: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}, {
    id: number;
    title?: string | undefined;
    content?: string | undefined;
}>;
export type BlogUpdateInput = z.infer<typeof blogUpdateInput>;
export type BlogInput = z.infer<typeof blogInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type SignupInput = z.infer<typeof signupInput>;
