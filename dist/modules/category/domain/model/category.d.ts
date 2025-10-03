import { z } from "zod";
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodString>;
    name: z.ZodString;
    ingredient: z.ZodOptional<z.ZodArray<z.ZodString>>;
    description: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type Category = z.infer<typeof CategorySchema>;
//# sourceMappingURL=category.d.ts.map