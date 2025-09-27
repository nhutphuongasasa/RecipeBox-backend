import { z } from "zod";

export const CreateCategoryDto = z.object({
  name: z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
  description: z.string("Mô tả là bắt buộc").optional().nullable(),
});

export type CreateCategoryDto = z.infer<typeof CreateCategoryDto>;

export const UpdateCategoryDto = z.object({
  name: z.string().optional(),
  description: z.string().optional().nullable(),
});

export type UpdateCategoryDto = z.infer<typeof UpdateCategoryDto>;

export const ResponseCategoryDto = z.object({
  id: z.string("ID là bắt buộc"),
  name: z.string("Tên là bắt buộc"),
  description: z.string("Mô tả là bắt buộc").optional().nullable(),
});

export type ResponseCategoryDto = z.infer<typeof ResponseCategoryDto>;
