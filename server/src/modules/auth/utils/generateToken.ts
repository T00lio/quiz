import jwt from "jsonwebtoken";
import { ExtendedJwtPayload } from "../../../types/jwtPayload";

function generateToken(payload: ExtendedJwtPayload): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err || !token) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
}

export default generateToken;
