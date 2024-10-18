import { z } from 'zod';

// Sign-in validation schema
export const SignInSchema = z.object({
    userNamePhone: z.string().min(1, 'Username/Phone is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
});


// SignUp schema validation using Zod
export const SignUpSchema = z
    .object({
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters long" })
            .max(20, { message: "Username must be at most 20 characters long" }),
        email: z.string().email({ message: "Invalid email address" }),
        phone: z
            .string()
            .min(10, { message: "Phone number must be at least 10 characters long" }),
        password: z
            .string()
            .min(6, { message: "Password must be at least 6 characters long" }),
        rePassword: z.string().min(6, { message: "Confirm password must be at least 6 characters long" }),
        otp: z.string().optional(),
    })
    .refine((data) => data.password === data.rePassword, {
        message: "Passwords must match",
        path: ["rePassword"],
    });
