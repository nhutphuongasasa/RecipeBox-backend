import { z } from "zod";

export const CreateRatingDto = z.object({
  recipeId: z.string(),
  userId: z.string(),
  score: z.number(),
});

export type CreateRatingDto = z.infer<typeof CreateRatingDto>;

export const UpdateRatingDto = z.object({
  recipeId: z.string(),
  userId: z.string(),
  score: z.number(),
});

export type UpdateRatingDto = z.infer<typeof UpdateRatingDto>;

export const ResponseRatingDto = z.object({
  recipeId: z.string(),
  userId: z.string(),
  score: z.number(),
});

export type ResponseRatingDto = z.infer<typeof ResponseRatingDto>;
