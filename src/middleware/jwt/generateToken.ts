import fs from "fs";
import jwt from "jsonwebtoken";

const privateKey = fs.readFileSync("./src/middleware/key/private.key", "utf-8");

export const generateToken = (payload: object): string => {
  return jwt.sign(
    {
      ...payload,
    },
    privateKey,
    { algorithm: "RS256", expiresIn: 60 * 60 }
  );
};
