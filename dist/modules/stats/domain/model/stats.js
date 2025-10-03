"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatsSchema = void 0;
const zod_1 = require("zod");
exports.StatsSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    recipeId: zod_1.z.string(),
    likes: zod_1.z.number().optional().nullable(),
    views: zod_1.z.number().optional().nullable(),
    favorites: zod_1.z.number(),
    createdAt: zod_1.z.date().optional().nullable(),
    updatedAt: zod_1.z.date().optional().nullable(),
});
//# sourceMappingURL=stats.js.map