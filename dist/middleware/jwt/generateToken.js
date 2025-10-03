"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const privateKey = fs_1.default.readFileSync("./src/middleware/key/private.key", "utf-8");
const generateToken = (payload) => {
    return jsonwebtoken_1.default.sign({
        ...payload,
    }, privateKey, { algorithm: "RS256", expiresIn: 60 * 60 });
};
exports.generateToken = generateToken;
//# sourceMappingURL=generateToken.js.map