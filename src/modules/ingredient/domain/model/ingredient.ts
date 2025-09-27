import { z } from "zod";

export const ingredientSchema = z.object({
  id: z.string().optional().nullable(),
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

export type Ingredient = z.infer<typeof ingredientSchema>;
