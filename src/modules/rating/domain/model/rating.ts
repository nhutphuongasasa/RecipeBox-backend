import { z } from "zod";

export const RatingSchema = z.object({
  id: z.string().optional(),
  recipeId: z.string(),
  userId: z.string(),
  score: z.number(),
});

export type Rating = z.infer<typeof RatingSchema>;
