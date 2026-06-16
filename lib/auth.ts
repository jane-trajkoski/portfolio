import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Minimal single-editor auth: a successful password login stores the password
// in an httpOnly cookie, and we compare against it. Good enough for one admin;
// swap for Auth.js if you ever need real accounts.
export const ADMIN_COOKIE = "admin_session";

export function isAuthed(): boolean {
  const token = cookies().get(ADMIN_COOKIE)?.value;
  return !!token && !!process.env.ADMIN_PASSWORD && token === process.env.ADMIN_PASSWORD;
}

export function assertAdmin() {
  if (!isAuthed()) redirect("/admin/login");
}
