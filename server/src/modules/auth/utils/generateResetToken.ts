import jwt from "jsonwebtoken";
import { ExtendedJwtPayload } from "../../../types/jwtPayload";

function generateResetToken(payload: ExtendedJwtPayload) {
  const secret = process.env.RESET_PASSWORD_SECRET as string;
  const options = { expiresIn: "1h" };
  const token = jwt.sign(payload, secret, options);

  return token;
}

export default generateResetToken;
