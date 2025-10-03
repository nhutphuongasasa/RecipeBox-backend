"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteSchema = void 0;
const zod_1 = require("zod");
exports.FavoriteSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    recipeId: zod_1.z.string(),
    userId: zod_1.z.string().optional().default(""),
});
//# sourceMappingURL=favorite.js.map