"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = void 0;
const zod_1 = require("zod");
exports.CommentSchema = zod_1.z.object({
    id: zod_1.z.string().optional().nullable(),
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string(),
    content: zod_1.z.string(),
});
//# sourceMappingURL=comment.js.map