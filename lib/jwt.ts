import jwt, { Secret, SignOptions } from "jsonwebtoken";

// Ensure JWT_SECRET is typed as a Secret and has a default fallback
const JWT_SECRET: Secret = process.env.JWT_SECRET || "default_jwt_secret_key";

export interface JwtPayload {
  [key: string]: any;
}

export function generateToken(payload: JwtPayload) {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
}