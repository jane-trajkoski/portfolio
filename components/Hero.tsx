import Link from "next/link";
import Bot from "./Bot";
import { getSettings } from "@/lib/settings";

export default async function Hero() {
  const s = await getSettings();
  return (
    <section className="hero">
      <div>
        <h1>
          {s.heroLine1}
          <br />
          <span className="c">{s.heroAccent}</span>
          <br />
          {s.heroLine2}
        </h1>
        <p className="sub">{s.subtitle}</p>
        <div className="cta">
          <Link href="/#work" className="b1">view my work</Link>
          <Link href="/blog" className="b2">read the blog</Link>
        </div>
      </div>
      <Bot />
    </section>
  );
}
