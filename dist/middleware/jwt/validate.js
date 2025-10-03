"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = require("crypto");
const publicKey = (0, crypto_1.createPublicKey)({
    key: fs_1.default.readFileSync("./src/middleware/key/public.key", "utf-8"),
    format: "pem",
    type: "spki",
});
// export const validateToken = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log("run validateToken");
//   const authHeader = req.headers.authorization;
//   if (!authHeader)
//     return res.status(401).json({ message: "No token provided" });
//   const token = authHeader.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided" });
//   // jwt.verify(token, publicKey, { algorithms: ["RS256"] }, (err, decoded) => {
//   //   if (err || !decoded)
//   //     return res.status(401).json({ message: "Invalid token" });
//   //   req.user = decoded;
//   //   req.id = decoded.id;
//   //   next();
//   // });
//   const decoded = jwt.verify(token, publicKey, {
//     algorithms: ["RS256"],
//   }) as JwtPayload;
//   req.user = decoded;
//   req.id = decoded.id;
//   res.json({ message: "Token is valid", decoded });
//   next();
// };
const validateToken = (req, res, next) => {
    console.log("run validateToken");
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ message: "No token provided" });
    const token = authHeader.split(" ")[1];
    if (!token)
        return res.status(401).json({ message: "No token provided" });
    try {
        console.log("bat dau try");
        const decoded = jsonwebtoken_1.default.verify(token, publicKey, {
            algorithms: ["RS256"],
        });
        console.log(decoded);
        req.user = decoded;
        req.id = decoded.id;
        console.log("validate thanh cong");
        next(); // quan trọng: chỉ gọi next(), không res.json()
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
exports.validateToken = validateToken;
//# sourceMappingURL=validate.js.map