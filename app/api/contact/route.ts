import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  let delivered = false;

  // 1) Store in the database (backup inbox in /admin)
  if (process.env.DATABASE_URL) {
    try {
      await prisma.message.create({ data: { name, email, message } });
      delivered = true;
    } catch {}
  }

  // 2) Email via Resend
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FROM || "tjdev.io <noreply@tjdev.io>",
        to: process.env.CONTACT_TO || "hello@tjdev.io",
        replyTo: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      if (!error) delivered = true;
    } catch {}
  }

  if (!delivered) {
    return NextResponse.json({ ok: false, error: "Could not deliver" }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
