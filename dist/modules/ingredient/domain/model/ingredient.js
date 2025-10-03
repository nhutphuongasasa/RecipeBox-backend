"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingredientSchema = void 0;
const zod_1 = require("zod");
exports.ingredientSchema = zod_1.z.object({
    id: zod_1.z.string().optional().nullable(),
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
//# sourceMappingURL=ingredient.js.map