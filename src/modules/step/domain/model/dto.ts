import { z } from "zod";

export const CreateStepDto = z.object({
  recipeId: z.string(),
  stepTitle: z.string(),
  content: z.string(),
});

export type CreateStepDto = z.infer<typeof CreateStepDto>;

export const UpdateStepDto = z.object({
  stepTitle: z.string(),
  content: z.string(),
});

export type UpdateStepDto = z.infer<typeof UpdateStepDto>;

export const ResponseStepDto = z.object({
  id: z.string(),
  recipeId: z.string().optional().nullable(),
  stepTitle: z.string(),
  content: z.string(),
});

export type ResponseStepDto = z.infer<typeof ResponseStepDto>;
