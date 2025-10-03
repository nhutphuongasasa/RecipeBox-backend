"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStatsDto = exports.StatsConditionDto = exports.UpdateStatsDto = exports.CreateStatsDto = void 0;
const zod_1 = require("zod");
exports.CreateStatsDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
});
exports.UpdateStatsDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    likes: zod_1.z.number(),
    views: zod_1.z.number(),
    favorites: zod_1.z.number(),
});
exports.StatsConditionDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    likes: zod_1.z.number(),
    views: zod_1.z.number(),
    favorites: zod_1.z.number(),
});
exports.ResponseStatsDto = zod_1.z.object({
    id: zod_1.z.string(),
    recipeId: zod_1.z.string(),
    likes: zod_1.z.number(),
    views: zod_1.z.number(),
    favorites: zod_1.z.number(),
});
//# sourceMappingURL=dto.js.map