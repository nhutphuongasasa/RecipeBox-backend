"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseStepDto = exports.UpdateStepDto = exports.CreateStepDto = void 0;
const zod_1 = require("zod");
exports.CreateStepDto = zod_1.z.object({
    recipeId: zod_1.z.string(),
    stepTitle: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.UpdateStepDto = zod_1.z.object({
    stepTitle: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.ResponseStepDto = zod_1.z.object({
    id: zod_1.z.string(),
    recipeId: zod_1.z.string().optional().nullable(),
    stepTitle: zod_1.z.string(),
    content: zod_1.z.string(),
});
//# sourceMappingURL=dto.js.map