import { NextRequest } from "next/server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import { hashPassword } from "@/lib/bcrypt";
import { registerSchema } from "@/lib/validations";
import {
  successResponse,
  errorResponse,
} from "@/lib/response";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const result = registerSchema.safeParse(body);

    if (!result.success) {
      return errorResponse(
        "Validation failed",
        400,
        result.error.flatten()
      );
    }

    const {
      name,
      email,
      phone,
      password,
    } = result.data;

    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      return errorResponse(
        "User already exists",
        409
      );
    }

    const hashedPassword =
      await hashPassword(password);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    return successResponse(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      "Account created successfully",
      201
    );
  } catch (error: any) {
  console.error("REGISTER API ERROR:", error);

  return Response.json(
    {
      success: false,
      message: error.message,
      stack: error.stack,
    },
    {
      status: 500,
    }
  );
}
}