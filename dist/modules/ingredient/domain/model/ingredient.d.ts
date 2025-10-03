import { z } from "zod";
export declare const ingredientSchema: z.ZodObject<{
    id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    name: z.ZodString;
    categoryId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    category: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, z.core.$strip>>>;
}, z.core.$strip>;
export type Ingredient = z.infer<typeof ingredientSchema>;
//# sourceMappingURL=ingredient.d.ts.map