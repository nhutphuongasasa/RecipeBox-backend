"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingSchema = void 0;
const zod_1 = require("zod");
exports.RatingSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    score: zod_1.z.number(),
});
//# sourceMappingURL=rating.js.map