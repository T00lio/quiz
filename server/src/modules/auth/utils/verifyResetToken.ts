import jwt from "jsonwebtoken";

function verifyResetToken(token: string) {
  try {
    const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET as string);
    return decoded;
  } catch (err) {
    throw new Error("Invalid or expired reset token");
  }
}

export default verifyResetToken;
