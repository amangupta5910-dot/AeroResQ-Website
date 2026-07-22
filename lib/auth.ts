import { cookies } from "next/headers";
import { verifyToken } from "./jwt";

const COOKIE_NAME = "aeroresq_token";

export async function getCurrentUser() {
  const cookieStore = await cookies();

  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!token) {
    return null;
  }

  try {
    return verifyToken(token);
  } catch {
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}


export function hasRole(token: string, roles: string[]) {
  const user = verifyToken(token) as { role?: string } | null;

  if (!user || typeof user === "string" || !user.role) {
    return false;
  }

  return roles.includes(user.role);
}

export { COOKIE_NAME };