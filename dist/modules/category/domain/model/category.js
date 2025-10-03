"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
const zod_1 = require("zod");
exports.CategorySchema = zod_1.z.object({
    id: zod_1.z.string().nullable(),
    name: zod_1.z.string(),
    ingredient: zod_1.z.array(zod_1.z.string()).optional(),
    description: zod_1.z.string().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
});
//# sourceMappingURL=category.js.map