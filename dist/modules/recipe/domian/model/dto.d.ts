import { z } from "zod";
export declare const CreateRecipeDto: z.ZodObject<{
    name: z.ZodString;
    image_url: z.ZodString;
    description: z.ZodString;
    category: z.ZodString;
    ingredient: z.ZodArray<z.ZodObject<{
        id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        ingredientName: z.ZodString;
        quantity: z.ZodString;
    }, z.core.$strip>>;
    step: z.ZodArray<z.ZodObject<{
        stepTitle: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type CreateRecipeDto = z.infer<typeof CreateRecipeDto>;
export declare const UpdateRecipeDto: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    category: z.ZodString;
    status: z.ZodEnum<{
        TRENDING: "TRENDING";
        POPULAR: "POPULAR";
        NEW: "NEW";
    }>;
    image_url: z.ZodString;
    ingredient: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        ingredientName: z.ZodString;
        quantity: z.ZodString;
    }, z.core.$strip>>;
    step: z.ZodArray<z.ZodObject<{
        stepTitle: z.ZodString;
        content: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type UpdateRecipeDto = z.infer<typeof UpdateRecipeDto>;
export declare const ResponseRecipeDto: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    image_url: z.ZodString;
    status: z.ZodOptional<z.ZodEnum<{
        TRENDING: "TRENDING";
        POPULAR: "POPULAR";
        NEW: "NEW";
    }>>;
    authorId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
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
    hasFavorites: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    totalCount: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, z.core.$strip>;
export type ResponseRecipeDto = z.infer<typeof ResponseRecipeDto>;
export declare const ConditionDto: z.ZodObject<{
    userId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type ConditionDto = z.infer<typeof ConditionDto>;
//# sourceMappingURL=dto.d.ts.map