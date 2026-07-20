import { NextResponse } from "next/server";

export function successResponse(
  data: unknown = null,
  message = "Success",
  status = 200
) {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    {
      status,
    }
  );
}

export function errorResponse(
  message = "Error",
  status = 400,
  errors: unknown = null
) {
  return NextResponse.json(
    {
      success: false,
      message,
      errors,
    },
    {
      status,
    }
  );
}