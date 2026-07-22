import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import User from "@/models/User"; // adjust model path if different
import connectDB from "@/lib/mongodb";// adjust db path if different

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // 1. Get token from Authorization Header or Cookies
    const authHeader = req.headers.get("authorization");
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : req.cookies.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized: No token provided" },
        { status: 401 }
      );
    }

    // 2. Verify token & assert type
    const payload = verifyToken(token) as { userId: string } | null;

    if (!payload || typeof payload === "string" || !payload.userId) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 401 }
      );
    }

    // 3. Find user
    const user = await User.findById(payload.userId).select("-password");
    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}