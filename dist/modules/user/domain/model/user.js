"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const zod_1 = require("zod");
exports.UserSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    email: zod_1.z.email(),
    password: zod_1.z.string(),
    comments: zod_1.z.array(zod_1.z.string()).optional(),
    ratings: zod_1.z.array(zod_1.z.string()).optional(),
    favorites: zod_1.z.array(zod_1.z.string()).optional(),
});
//# sourceMappingURL=user.js.map