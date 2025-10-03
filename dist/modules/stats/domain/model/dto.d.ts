import { z } from "zod";
export declare const CreateStatsDto: z.ZodObject<{
    recipeId: z.ZodString;
}, z.core.$strip>;
export type CreateStatsDto = z.infer<typeof CreateStatsDto>;
export declare const UpdateStatsDto: z.ZodObject<{
    recipeId: z.ZodString;
    likes: z.ZodNumber;
    views: z.ZodNumber;
    favorites: z.ZodNumber;
}, z.core.$strip>;
export type UpdateStatsDto = z.infer<typeof UpdateStatsDto>;
export declare const StatsConditionDto: z.ZodObject<{
    recipeId: z.ZodString;
    likes: z.ZodNumber;
    views: z.ZodNumber;
    favorites: z.ZodNumber;
}, z.core.$strip>;
export type StatsConditionDto = z.infer<typeof StatsConditionDto>;
export declare const ResponseStatsDto: z.ZodObject<{
    id: z.ZodString;
    recipeId: z.ZodString;
    likes: z.ZodNumber;
    views: z.ZodNumber;
    favorites: z.ZodNumber;
}, z.core.$strip>;
export type ResponseStatsDto = z.infer<typeof ResponseStatsDto>;
//# sourceMappingURL=dto.d.ts.map