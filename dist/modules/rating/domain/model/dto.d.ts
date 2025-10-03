import { z } from "zod";
export declare const CreateRatingDto: z.ZodObject<{
    recipeId: z.ZodString;
    userId: z.ZodString;
    score: z.ZodNumber;
}, z.core.$strip>;
export type CreateRatingDto = z.infer<typeof CreateRatingDto>;
export declare const UpdateRatingDto: z.ZodObject<{
    recipeId: z.ZodString;
    userId: z.ZodString;
    score: z.ZodNumber;
}, z.core.$strip>;
export type UpdateRatingDto = z.infer<typeof UpdateRatingDto>;
export declare const ResponseRatingDto: z.ZodObject<{
    recipeId: z.ZodString;
    userId: z.ZodString;
    score: z.ZodNumber;
}, z.core.$strip>;
export type ResponseRatingDto = z.infer<typeof ResponseRatingDto>;
//# sourceMappingURL=dto.d.ts.map