import { z } from "zod";
export declare const UserSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    email: z.ZodEmail;
    password: z.ZodString;
    comments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ratings: z.ZodOptional<z.ZodArray<z.ZodString>>;
    favorites: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type User = z.infer<typeof UserSchema>;
//# sourceMappingURL=user.d.ts.map