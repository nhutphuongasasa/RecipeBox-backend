import { z } from "zod";

export const CommentSchema = z.object({
  id: z.string().optional().nullable(),
  recipeId: z.string(),
  userId: z.string(),
  content: z.string(),
});

export type CommentEntity = z.infer<typeof CommentSchema>;
