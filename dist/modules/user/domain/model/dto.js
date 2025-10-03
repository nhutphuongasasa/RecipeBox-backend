"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUserDto = exports.UpdateUserDto = exports.CreateUserDto = exports.LoginUserDto = exports.RegisterUserDto = void 0;
const zod_1 = require("zod");
exports.RegisterUserDto = zod_1.z.object({
    name: zod_1.z.string("Tên là bắt buộc").min(2, "Tên phải có ít nhất 2 ký tự"),
    email: zod_1.z.email("Email là bắt buộc"),
    password: zod_1.z.string("Mật khẩu là bắt buộc"),
});
exports.LoginUserDto = zod_1.z.object({
    email: zod_1.z.email("Email là bắt buộc"),
    password: zod_1.z.string("Mật khẩu là bắt buộc"),
});
exports.CreateUserDto = zod_1.z.object({
    name: zod_1.z.string("Tên là bắt buộc").min(2, "Tên phải có ít nhất 2 ký tự"),
    email: zod_1.z.email("Email là bắt buộc"),
    password: zod_1.z.string("Mật khẩu là bắt buộc"),
});
exports.UpdateUserDto = zod_1.z.object({
    name: zod_1.z
        .string("Tên là bắt buộc")
        .min(2, "Tên phải có ít nhất 2 ký tự")
        .optional(),
    email: zod_1.z.email("Email là bắt buộc").optional(),
    password: zod_1.z.string("Mật khẩu là bắt buộc").optional(),
});
exports.ResponseUserDto = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.email(),
    token: zod_1.z.string().optional().nullable(),
    //   password: z.string(),
});
//# sourceMappingURL=dto.js.map