import { z } from "zod";

export const RecipeSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  image_url: z.string(),
  status: z.enum(["TRENDING", "POPULAR", "NEW"]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  ingredient: z
    .array(
      z.object({
        id: z.string(),
        ingredientName: z.string(),
        quantity: z.string(),
      })
    )
    .optional(),
  category: z.string().optional(),
  step: z
    .array(
      z.object({
        stepTitle: z.string(),
        content: z.string(),
      })
    )
    .optional(),
  comments: z.array(z.string()).optional(),
  ratings: z.array(z.string()).optional(),
  // favorites: z.boolean().optional().nullable(),
  // stats: z.string().optional(),
});

export type Recipe = z.infer<typeof RecipeSchema>;
