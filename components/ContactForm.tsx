"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Couldn't send right now — email me directly at hello@tjdev.io.");
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="sent">
        <svg width="150" height="125" viewBox="0 0 180 150" aria-hidden="true">
          <g stroke="#1ECBE1" strokeWidth="2.2" fill="#0A1829" strokeLinejoin="round">
            <line x1="90" y1="34" x2="90" y2="24" strokeLinecap="round" />
            <circle cx="90" cy="21" r="3.5" fill="#1ECBE1" stroke="none" />
            <rect x="64" y="34" width="52" height="34" rx="12" />
            <rect x="75" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
            <rect x="93" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
            <rect x="68" y="70" width="44" height="38" rx="14" />
            <rect x="74" y="108" width="12" height="15" rx="5" />
            <rect x="94" y="108" width="12" height="15" rx="5" />
            <rect x="54" y="56" width="11" height="24" rx="5" />
            <circle cx="59" cy="52" r="6" />
            <rect x="115" y="56" width="11" height="24" rx="5" />
            <circle cx="121" cy="52" r="6" />
          </g>
          <g fill="#1ECBE1" stroke="none">
            <path d="M46 44 l2 5 l5 -1 l-4 4 l2 5 l-5 -3 l-5 3 l2 -5 l-4 -4 l5 1 z" />
            <path d="M134 44 l2 5 l5 -1 l-4 4 l2 5 l-5 -3 l-5 3 l2 -5 l-4 -4 l5 1 z" />
          </g>
        </svg>
        <p>Message sent!</p>
        <p className="sm">Thanks for reaching out &mdash; I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row">
        <input type="text" name="name" placeholder="your name" required />
        <input type="email" name="email" placeholder="your email" required />
      </div>
      <textarea name="message" placeholder="what are you building?" required />
      {error ? <p className="adm-err">{error}</p> : null}
      <button type="submit" className="send" disabled={busy}>
        {busy ? "sending…" : "send it →"}
      </button>
    </form>
  );
}
