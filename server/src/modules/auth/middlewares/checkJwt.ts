import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ExtendedJwtPayload } from "../../../types/jwtPayload";

export function checkJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.get("access_token");

  if (!token) {
    return res.status(401).send("No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as ExtendedJwtPayload;
    req.auth = decoded;
    next();
  } catch (err) {
    res.status(401).send("Token is not valid");
  }
}

/*
Ejemplo de Token JWT de Auth0:
Un token JWT de Auth0 puede tener el siguiente contenido (decodificado):
{
    "sub": "auth0|123456789",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "iat": 1609459200,
    "exp": 1609462800,
    "iss": "https://your-auth0-domain/",
    "aud": "your-audience"
  }  

Proceso del Middleware:
Cuando se recibe una solicitud en una ruta protegida por checkJwt, el middleware:

1) Verifica el token:
Usa las claves públicas obtenidas de Auth0 para verificar la firma del token.

2) Decodifica el token:
Extrae las "claims" del token (como sub, email, name, etc.).

    3) Rellena req.auth:
    Coloca estas "claims" en req.auth, por lo que después del middleware, req.auth estará disponible en los controladores.
*/

// import { expressjwt, GetVerificationKey } from "express-jwt";
// import Cookies from "cookies";
// import jwksRsa from "jwks-rsa";
// import jwksClient from "jwks-rsa";
// import { JwtPayload } from "jsonwebtoken";

// const client = jwksClient({
//   jwksUri: "https://dev-2zrcct23kwxn7xt5.us.auth0.com/.well-known/jwks.json",
// });

// export const checkJwtAuth0 = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).send("No token, authorization denied");
//   }

//   const token = authHeader.split(" ")[1];

//   jwt.verify(
//     token,
//     (header, callback) => {
//       client.getSigningKey(header.kid, (err, key) => {
//         if (err || !key) {
//           console.error(err);
//           return res.status(500).send("Error retrieving signing key");
//         }

//         const signingKey = key.getPublicKey();
//         callback(null, signingKey);
//       });
//     },
//     { algorithms: ["RS256"] },
//     (err, decoded) => {
//       if (err) {
//         console.error(err);
//         return res.status(401).send("Token is not valid");
//       }
//       req.auth = decoded;
//       next();
//     },
//   );
// };

// export const checkJwtAuth0 = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
//   }) as GetVerificationKey,
//   audience: "mHIPL84ZqXPpf5Z6uheP6C2rohu5YJYA",
//   issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//   algorithms: ["RS256"],
// });
