import { z } from "zod";

export const CreateIngredientDto = z.object({
  name: z.string(),
  categoryId: z.string().optional().nullable(),
});

export type CreateIngredientDto = z.infer<typeof CreateIngredientDto>;

export const UpdateIngredientDto = z.object({
  name: z.string().optional().nullable(),
  categoryId: z.string().optional().nullable(),
});

export type UpdateIngredientDto = z.infer<typeof UpdateIngredientDto>;

export const ResponseIngredientDto = z.object({
  id: z.string(),
  name: z.string(),
  categoryId: z.string().optional().nullable(),
  category: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .optional()
    .nullable(),
});

export type ResponseIngredientDto = z.infer<typeof ResponseIngredientDto>;
