import { z } from "zod";
export declare const CreateStepDto: z.ZodObject<{
    recipeId: z.ZodString;
    stepTitle: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type CreateStepDto = z.infer<typeof CreateStepDto>;
export declare const UpdateStepDto: z.ZodObject<{
    stepTitle: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type UpdateStepDto = z.infer<typeof UpdateStepDto>;
export declare const ResponseStepDto: z.ZodObject<{
    id: z.ZodString;
    recipeId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    stepTitle: z.ZodString;
    content: z.ZodString;
}, z.core.$strip>;
export type ResponseStepDto = z.infer<typeof ResponseStepDto>;
//# sourceMappingURL=dto.d.ts.map