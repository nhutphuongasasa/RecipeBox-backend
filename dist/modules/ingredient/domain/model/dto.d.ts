import { z } from "zod";
export declare const CreateIngredientDto: z.ZodObject<{
    name: z.ZodString;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type CreateIngredientDto = z.infer<typeof CreateIngredientDto>;
export declare const UpdateIngredientDto: z.ZodObject<{
    name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type UpdateIngredientDto = z.infer<typeof UpdateIngredientDto>;
export declare const ResponseIngredientDto: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    category: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type ResponseIngredientDto = z.infer<typeof ResponseIngredientDto>;
//# sourceMappingURL=dto.d.ts.map