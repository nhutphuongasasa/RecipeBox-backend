import { z } from "zod";
export declare const RegisterUserDto: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type RegisterUserDto = z.infer<typeof RegisterUserDto>;
export declare const LoginUserDto: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type LoginUserDto = z.infer<typeof LoginUserDto>;
export declare const CreateUserDto: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type CreateUserDto = z.infer<typeof CreateUserDto>;
export declare const UpdateUserDto: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodEmail>;
    password: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;
export declare const ResponseUserDto: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodEmail;
    token: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type ResponseUserDto = z.infer<typeof ResponseUserDto>;
//# sourceMappingURL=dto.d.ts.map