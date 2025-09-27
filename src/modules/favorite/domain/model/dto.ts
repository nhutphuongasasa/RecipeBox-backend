import { z } from "zod";

export const CreateFavoriteDto = z.object({
  recipeId: z.string(),
});

export type CreateFavoriteDto = z.infer<typeof CreateFavoriteDto>;

export const ResponseFavoriteDto = z.object({
  id: z.string(),
  recipeId: z.string(),
  userId: z.string(),
});

export type ResponseFavoriteDto = z.infer<typeof ResponseFavoriteDto>;
