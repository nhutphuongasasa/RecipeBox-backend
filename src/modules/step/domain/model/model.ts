import { z } from "zod";

export const StepSchema = z.object({
  id: z.string(),
  recipeId: z.string().optional().nullable(),
  stepTitle: z.string(),
  content: z.string(),
});

export type Step = z.infer<typeof StepSchema>;
