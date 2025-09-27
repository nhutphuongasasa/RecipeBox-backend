import { z } from "zod";

export const CreateCommentDto = z.object({
  recipeId: z.string(),
  userId: z.string(),
  content: z.string(),
});

export type CreateCommentDto = z.infer<typeof CreateCommentDto>;

export const UpdateCommentDto = z.object({
  recipeId: z.string(),
  userId: z.string(),
  content: z.string(),
});

export type UpdateCommentDto = z.infer<typeof UpdateCommentDto>;

export const ResponseCommentDto = z.object({
  id: z.string(),
  recipeId: z.string(),
  userId: z.string(),
  content: z.string(),
});

export type ResponseCommentDto = z.infer<typeof ResponseCommentDto>;
