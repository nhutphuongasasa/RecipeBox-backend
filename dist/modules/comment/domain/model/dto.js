"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCommentDto = exports.UpdateCommentDto = exports.CreateCommentDto = void 0;
const zod_1 = require("zod");
exports.CreateCommentDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.UpdateCommentDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.ResponseCommentDto = zod_1.z.object({
    id: zod_1.z.string(),
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    content: zod_1.z.string(),
});
//# sourceMappingURL=dto.js.map