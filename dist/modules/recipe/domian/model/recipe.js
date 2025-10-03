"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeSchema = void 0;
const zod_1 = require("zod");
exports.RecipeSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    image_url: zod_1.z.string(),
    status: zod_1.z.enum(["TRENDING", "POPULAR", "NEW"]).optional(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    ingredient: zod_1.z
        .array(zod_1.z.object({
        id: zod_1.z.string(),
        ingredientName: zod_1.z.string(),
        quantity: zod_1.z.string(),
    }))
        .optional(),
    category: zod_1.z.string().optional(),
    step: zod_1.z
        .array(zod_1.z.object({
        stepTitle: zod_1.z.string(),
        content: zod_1.z.string(),
    }))
        .optional(),
    comments: zod_1.z.array(zod_1.z.string()).optional(),
    ratings: zod_1.z.array(zod_1.z.string()).optional(),
    // favorites: z.boolean().optional().nullable(),
    // stats: z.string().optional(),
});
//# sourceMappingURL=recipe.js.map