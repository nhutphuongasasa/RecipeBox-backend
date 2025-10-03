import { z } from "zod";
export declare const CreateFavoriteDto: z.ZodObject<{
    recipeId: z.ZodString;
}, z.core.$strip>;
export type CreateFavoriteDto = z.infer<typeof CreateFavoriteDto>;
export declare const ResponseFavoriteDto: z.ZodObject<{
    id: z.ZodString;
    recipeId: z.ZodString;
    userId: z.ZodString;
}, z.core.$strip>;
export type ResponseFavoriteDto = z.infer<typeof ResponseFavoriteDto>;
//# sourceMappingURL=dto.d.ts.map