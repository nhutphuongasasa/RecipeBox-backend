import { z } from "zod";

export const CreateStatsDto = z.object({
  recipeId: z.string(),
});

export type CreateStatsDto = z.infer<typeof CreateStatsDto>;

export const UpdateStatsDto = z.object({
  recipeId: z.string(),
  likes: z.number(),
  views: z.number(),
  favorites: z.number(),
});

export type UpdateStatsDto = z.infer<typeof UpdateStatsDto>;

export const StatsConditionDto = z.object({
  recipeId: z.string(),
  likes: z.number(),
  views: z.number(),
  favorites: z.number(),
});

export type StatsConditionDto = z.infer<typeof StatsConditionDto>;

export const ResponseStatsDto = z.object({
  id: z.string(),
  recipeId: z.string(),
  likes: z.number(),
  views: z.number(),
  favorites: z.number(),
});

export type ResponseStatsDto = z.infer<typeof ResponseStatsDto>;
