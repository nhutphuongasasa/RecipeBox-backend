"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCategoryDto = exports.UpdateCategoryDto = exports.CreateCategoryDto = void 0;
const zod_1 = require("zod");
exports.CreateCategoryDto = zod_1.z.object({
    name: zod_1.z.string().min(2, "Tên phải có ít nhất 2 ký tự"),
    description: zod_1.z.string("Mô tả là bắt buộc").optional().nullable(),
});
exports.UpdateCategoryDto = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional().nullable(),
});
exports.ResponseCategoryDto = zod_1.z.object({
    id: zod_1.z.string("ID là bắt buộc"),
    name: zod_1.z.string("Tên là bắt buộc"),
    description: zod_1.z.string("Mô tả là bắt buộc").optional().nullable(),
});
//# sourceMappingURL=dto.js.map