import { z } from "zod";

export const StatsSchema = z.object({
  id: z.string().optional(),
  recipeId: z.string(),
  likes: z.number().optional().nullable(),
  views: z.number().optional().nullable(),
  favorites: z.number(),
  createdAt: z.date().optional().nullable(),
  updatedAt: z.date().optional().nullable(),
});

export type Stats = z.infer<typeof StatsSchema>;
