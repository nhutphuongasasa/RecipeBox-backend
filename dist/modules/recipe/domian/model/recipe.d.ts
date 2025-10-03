import { z } from "zod";
export declare const RecipeSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodString;
    image_url: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        TRENDING: "TRENDING";
        POPULAR: "POPULAR";
        NEW: "NEW";
    }>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    ingredient: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        ingredientName: z.ZodString;
        quantity: z.ZodString;
    }, z.core.$strip>>>;
    category: z.ZodOptional<z.ZodString>;
    step: z.ZodOptional<z.ZodArray<z.ZodObject<{
        stepTitle: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>>>;
    comments: z.ZodOptional<z.ZodArray<z.ZodString>>;
    ratings: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export type Recipe = z.infer<typeof RecipeSchema>;
//# sourceMappingURL=recipe.d.ts.map