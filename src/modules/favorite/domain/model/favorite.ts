import { z } from "zod";

export const FavoriteSchema = z.object({
  id: z.string().optional(),
  recipeId: z.string(),
  userId: z.string().optional().default(""),
});

export type Favorite = z.infer<typeof FavoriteSchema>;
