"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseIngredientDto = exports.UpdateIngredientDto = exports.CreateIngredientDto = void 0;
const zod_1 = require("zod");
exports.CreateIngredientDto = zod_1.z.object({
    name: zod_1.z.string(),
    categoryId: zod_1.z.string().optional().nullable(),
});
exports.UpdateIngredientDto = zod_1.z.object({
    name: zod_1.z.string().optional().nullable(),
    categoryId: zod_1.z.string().optional().nullable(),
});
exports.ResponseIngredientDto = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    categoryId: zod_1.z.string().optional().nullable(),
    category: zod_1.z
        .object({
        id: zod_1.z.string(),
        name: zod_1.z.string(),
    })
        .optional()
        .nullable(),
});
//# sourceMappingURL=dto.js.map