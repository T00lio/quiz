import jwt from "jsonwebtoken";

interface Payload {
  userId: string | number;
}

export const generateToken = (payload: Payload): Promise<string> => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" }, (err, token) => {
      if (err || !token) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};
