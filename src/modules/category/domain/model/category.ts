import { z } from "zod";

export const CategorySchema = z.object({
  id: z.string().nullable(),
  name: z.string(),
  ingredient: z.array(z.string()).optional(),
  description: z.string().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Category = z.infer<typeof CategorySchema>;
