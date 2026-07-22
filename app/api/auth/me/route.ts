import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

import { getCurrentUser } from "@/lib/auth";
import { verifyToken } from "@/lib/jwt";

export async function GET() {
  try {
    await connectDB();

   // Naya code (Type safe check):
const payload = verifyToken(token) as { userId: string } | null;

if (!payload || typeof payload === "string" || !payload.userId) {
  return NextResponse.json({ message: "Invalid or expired token" }, { status: 401 });
}

const user = await User.findById(payload.userId).select("-password");

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}