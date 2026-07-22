import jwt, { Secret, SignOptions } from "jsonwebtoken";

const JWT_SECRET: Secret = process.env.JWT_SECRET || "default_jwt_secret_key";

export interface JwtPayload {
  [key: string]: any;
}

// 1. Token Generate karne ke liye
export function generateToken(payload: JwtPayload) {
  const options: SignOptions = {
    expiresIn: (process.env.JWT_EXPIRES_IN || "7d") as SignOptions["expiresIn"],
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

// 2. Token Verify karne ke liye (Ye lib/auth.ts ko zaroorat hai)
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}