import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.email(),
  password: z.string(),
  comments: z.array(z.string()).optional(),
  ratings: z.array(z.string()).optional(),
  favorites: z.array(z.string()).optional(),
});

export type User = z.infer<typeof UserSchema>;
