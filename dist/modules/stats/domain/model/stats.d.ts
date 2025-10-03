import { z } from "zod";
export declare const StatsSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    recipeId: z.ZodString;
    likes: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    views: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    favorites: z.ZodNumber;
    createdAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    updatedAt: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
}, z.core.$strip>;
export type Stats = z.infer<typeof StatsSchema>;
//# sourceMappingURL=stats.d.ts.map