import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import { comparePassword } from "@/lib/bcrypt";
import { generateToken } from "@/lib/jwt";

import { loginSchema } from "@/lib/validations";
import {
  successResponse,
  errorResponse,
} from "@/lib/response";

import { COOKIE_NAME } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return errorResponse(
        "Validation failed",
        400,
        result.error.flatten()
      );
    }

    const { email, password } = result.data;

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return errorResponse(
        "Invalid email or password",
        401
      );
    }

    const isPasswordCorrect =
      await comparePassword(
        password,
        user.password
      );

    if (!isPasswordCorrect) {
      return errorResponse(
        "Invalid email or password",
        401
      );
    }

    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const response = successResponse(
  {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  },
  "Login successful"
);

response.cookies.set("aeroresq_token", token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
});

return response;
  } catch (error) {
    console.error(error);

    return errorResponse(
      "Internal Server Error",
      500
    );
  }
}