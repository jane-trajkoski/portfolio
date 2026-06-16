import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 500 });
  }

  try {
    const resend = new Resend(key);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || "tjdev.io <noreply@tjdev.io>",
      to: process.env.CONTACT_TO || "hello@tjdev.io",
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (error) throw new Error(String(error));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Send failed" }, { status: 500 });
  }
}
