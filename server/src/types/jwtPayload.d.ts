import { JwtPayload } from "jsonwebtoken";

export interface ExtendedJwtPayload extends JwtPayload {
  email: string;
}
