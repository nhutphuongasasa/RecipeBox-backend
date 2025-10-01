import { z } from "zod";

export const CreateRecipeDto = z.object({
  name: z.string(),
  image_url: z.string(),
  description: z.string(),
  category: z.string(),
  ingredient: z.array(
    z.object({
      id: z.string().optional().nullable(),
      ingredientName: z.string(),
      quantity: z.string(),
    })
  ),
  step: z.array(
    z.object({
      stepTitle: z.string(),
      content: z.string(),
    })
  ),
});

export type CreateRecipeDto = z.infer<typeof CreateRecipeDto>;

export const UpdateRecipeDto = z.object({
  name: z.string(),
  description: z.string(),
  category: z.string(),
  status: z.enum(["TRENDING", "POPULAR", "NEW"]),
  image_url: z.string(),
  ingredient: z.array(
    z.object({
      id: z.string(),
      ingredientName: z.string(),
      quantity: z.string(),
    })
  ),
  step: z.array(
    z.object({
      stepTitle: z.string(),
      content: z.string(),
    })
  ),
});

export type UpdateRecipeDto = z.infer<typeof UpdateRecipeDto>;

export const ResponseRecipeDto = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  image_url: z.string(),
  status: z.enum(["TRENDING", "POPULAR", "NEW"]).optional(),
  authorId: z.string().optional().nullable(),
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
  hasFavorites: z.boolean().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  totalCount: z.number().optional().nullable(),
});

export type ResponseRecipeDto = z.infer<typeof ResponseRecipeDto>;

export const ConditionDto = z.object({
  userId: z.string().optional().nullable(),
});

export type ConditionDto = z.infer<typeof ConditionDto>;
