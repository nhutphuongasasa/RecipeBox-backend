import { z } from "zod";
export declare const FavoriteSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    recipeId: z.ZodString;
    userId: z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export type Favorite = z.infer<typeof FavoriteSchema>;
//# sourceMappingURL=favorite.d.ts.map