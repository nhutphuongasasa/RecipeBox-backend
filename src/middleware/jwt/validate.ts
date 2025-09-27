import fs from "fs";
import jwt, { JwtPayload } from "jsonwebtoken";
import { createPublicKey } from "crypto";
import { Request, Response, NextFunction } from "express";

const publicKey = createPublicKey({
  key: fs.readFileSync("./src/middleware/key/public.key", "utf-8"),
  format: "pem",
  type: "spki",
});

declare global {
  namespace Express {
    interface Request {
      user?: any;
      id?: string;
    }
  }
}

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

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("run validateToken");
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    console.log("bat dau try");
    const decoded = jwt.verify(token, publicKey, {
      algorithms: ["RS256"],
    }) as JwtPayload;
    console.log(decoded);
    req.user = decoded;
    req.id = decoded.id;
    console.log("validate thanh cong");
    next(); // quan trọng: chỉ gọi next(), không res.json()
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
