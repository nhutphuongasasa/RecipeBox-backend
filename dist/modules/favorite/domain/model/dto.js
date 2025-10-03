"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseFavoriteDto = exports.CreateFavoriteDto = void 0;
const zod_1 = require("zod");
exports.CreateFavoriteDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
});
exports.ResponseFavoriteDto = zod_1.z.object({
    id: zod_1.z.string(),
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
});
//# sourceMappingURL=dto.js.map