"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionDto = exports.ResponseRecipeDto = exports.UpdateRecipeDto = exports.CreateRecipeDto = void 0;
const zod_1 = require("zod");
exports.CreateRecipeDto = zod_1.z.object({
    name: zod_1.z.string(),
    image_url: zod_1.z.string(),
    description: zod_1.z.string(),
    category: zod_1.z.string(),
    ingredient: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string().optional().nullable(),
        ingredientName: zod_1.z.string(),
        quantity: zod_1.z.string(),
    })),
    step: zod_1.z.array(zod_1.z.object({
        stepTitle: zod_1.z.string(),
        content: zod_1.z.string(),
    })),
});
exports.UpdateRecipeDto = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    category: zod_1.z.string(),
    status: zod_1.z.enum(["TRENDING", "POPULAR", "NEW"]),
    image_url: zod_1.z.string(),
    ingredient: zod_1.z.array(zod_1.z.object({
        id: zod_1.z.string(),
        ingredientName: zod_1.z.string(),
        quantity: zod_1.z.string(),
    })),
    step: zod_1.z.array(zod_1.z.object({
        stepTitle: zod_1.z.string(),
        content: zod_1.z.string(),
    })),
});
exports.ResponseRecipeDto = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    image_url: zod_1.z.string(),
    status: zod_1.z.enum(["TRENDING", "POPULAR", "NEW"]).optional(),
    authorId: zod_1.z.string().optional().nullable(),
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
    hasFavorites: zod_1.z.boolean().optional().nullable(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    totalCount: zod_1.z.number().optional().nullable(),
});
exports.ConditionDto = zod_1.z.object({
    userId: zod_1.z.string().optional().nullable(),
});
//# sourceMappingURL=dto.js.map