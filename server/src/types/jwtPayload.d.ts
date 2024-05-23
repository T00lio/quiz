import { JwtPayload } from "jsonwebtoken";

export interface ExtendedJwtPayload extends JwtPayload {
  userId: number;
}