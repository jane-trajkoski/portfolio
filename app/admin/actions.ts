"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { ADMIN_COOKIE, assertAdmin } from "@/lib/auth";

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export async function login(formData: FormData) {
  const pw = String(formData.get("password") || "");
  if (process.env.ADMIN_PASSWORD && pw === process.env.ADMIN_PASSWORD) {
    cookies().set(ADMIN_COOKIE, pw, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    redirect("/admin");
  }
  redirect("/admin/login?error=1");
}

export async function logout() {
  cookies().delete(ADMIN_COOKIE);
  redirect("/admin/login");
}

export async function savePost(formData: FormData) {
  assertAdmin();
  const id = String(formData.get("id") || "");
  const title = String(formData.get("title") || "");
  const data = {
    title,
    slug: String(formData.get("slug") || "") || slugify(title),
    summary: String(formData.get("summary") || ""),
    body: String(formData.get("body") || ""),
    tags: String(formData.get("tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    date: new Date(String(formData.get("date") || new Date().toISOString().slice(0, 10))),
    published: formData.get("published") === "on",
  };
  if (id) await prisma.post.update({ where: { id }, data });
  else await prisma.post.create({ data });
  redirect("/admin");
}

export async function deletePost(formData: FormData) {
  assertAdmin();
  await prisma.post.delete({ where: { id: String(formData.get("id")) } });
  redirect("/admin");
}

export async function saveProject(formData: FormData) {
  assertAdmin();
  const id = String(formData.get("id") || "");

  let image = String(formData.get("image") || "").trim();
  const file = formData.get("imageFile") as File | null;
  if (file && typeof file === "object" && file.size > 0) {
    const { put } = await import("@vercel/blob");
    const safe = file.name.replace(/[^a-zA-Z0-9.-]+/g, "-");
    const blob = await put(`projects/${Date.now()}-${safe}`, file, { access: "public" });
    image = blob.url;
  }

  const data = {
    title: String(formData.get("title") || ""),
    tagline: String(formData.get("tagline") || ""),
    stack: String(formData.get("stack") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    live: String(formData.get("live") || "#"),
    blog: String(formData.get("blog") || "/blog"),
    featured: formData.get("featured") === "on",
    order: Number(formData.get("order") || 0),
    image: image || null,
    imageAlt: String(formData.get("imageAlt") || "") || null,
  };
  if (id) await prisma.project.update({ where: { id }, data });
  else await prisma.project.create({ data });
  redirect("/admin");
}

export async function deleteProject(formData: FormData) {
  assertAdmin();
  await prisma.project.delete({ where: { id: String(formData.get("id")) } });
  redirect("/admin");
}

export async function saveSettings(formData: FormData) {
  assertAdmin();
  const data = {
    heroLine1: String(formData.get("heroLine1") || ""),
    heroAccent: String(formData.get("heroAccent") || ""),
    heroLine2: String(formData.get("heroLine2") || ""),
    subtitle: String(formData.get("subtitle") || ""),
    available: formData.get("available") === "on",
    availableText: String(formData.get("availableText") || ""),
    github: String(formData.get("github") || ""),
    linkedin: String(formData.get("linkedin") || ""),
  };
  await prisma.settings.upsert({ where: { id: 1 }, update: data, create: { id: 1, ...data } });
  redirect("/admin");
}

export async function markMessageRead(formData: FormData) {
  assertAdmin();
  await prisma.message.update({
    where: { id: String(formData.get("id")) },
    data: { read: String(formData.get("read")) === "1" },
  });
  redirect("/admin");
}

export async function deleteMessage(formData: FormData) {
  assertAdmin();
  await prisma.message.delete({ where: { id: String(formData.get("id")) } });
  redirect("/admin");
}
