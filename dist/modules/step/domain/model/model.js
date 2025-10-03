"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepSchema = void 0;
const zod_1 = require("zod");
exports.StepSchema = zod_1.z.object({
    id: zod_1.z.string(),
    recipeId: zod_1.z.string().optional().nullable(),
    stepTitle: zod_1.z.string(),
    content: zod_1.z.string(),
});
//# sourceMappingURL=model.js.map