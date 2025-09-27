import { z } from "zod";

export const RegisterUserDto = z.object({
  name: z.string("Tên là bắt buộc").min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.email("Email là bắt buộc"),
  password: z.string("Mật khẩu là bắt buộc"),
});

export type RegisterUserDto = z.infer<typeof RegisterUserDto>;

export const LoginUserDto = z.object({
  email: z.email("Email là bắt buộc"),
  password: z.string("Mật khẩu là bắt buộc"),
});

export type LoginUserDto = z.infer<typeof LoginUserDto>;

export const CreateUserDto = z.object({
  name: z.string("Tên là bắt buộc").min(2, "Tên phải có ít nhất 2 ký tự"),
  email: z.email("Email là bắt buộc"),
  password: z.string("Mật khẩu là bắt buộc"),
});

export type CreateUserDto = z.infer<typeof CreateUserDto>;

export const UpdateUserDto = z.object({
  name: z
    .string("Tên là bắt buộc")
    .min(2, "Tên phải có ít nhất 2 ký tự")
    .optional(),
  email: z.email("Email là bắt buộc").optional(),
  password: z.string("Mật khẩu là bắt buộc").optional(),
});

export type UpdateUserDto = z.infer<typeof UpdateUserDto>;

export const ResponseUserDto = z.object({
  id: z.string(),
  name: z.string(),
  email: z.email(),
  token: z.string().optional().nullable(),
  //   password: z.string(),
});

export type ResponseUserDto = z.infer<typeof ResponseUserDto>;
