import { z } from "zod";
export declare const RatingSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    recipeId: z.ZodString;
    userId: z.ZodString;
    score: z.ZodNumber;
}, z.core.$strip>;
export type Rating = z.infer<typeof RatingSchema>;
//# sourceMappingURL=rating.d.ts.map