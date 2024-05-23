import { ExtendedJwtPayload } from "../jwtPayload";

declare global {
  namespace Express {
    interface Request {
      auth?: ExtendedJwtPayload;
    }
  }
}
