"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseRatingDto = exports.UpdateRatingDto = exports.CreateRatingDto = void 0;
const zod_1 = require("zod");
exports.CreateRatingDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    score: zod_1.z.number(),
});
exports.UpdateRatingDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    score: zod_1.z.number(),
});
exports.ResponseRatingDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    score: zod_1.z.number(),
});
//# sourceMappingURL=dto.js.map