import Link from "next/link";
import Bot from "./Bot";

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <h1>
          Hey, I&apos;m TJ.
          <br />
          <span className="c">I forge things</span>
          <br />
          for the web.
        </h1>
        <p className="sub">Solo developer. Problem solver. Lifelong gamer.</p>
        <div className="cta">
          <Link href="/#work" className="b1">
            view my work
          </Link>
          <Link href="/blog" className="b2">
            read the blog
          </Link>
        </div>
      </div>
      <Bot />
    </section>
  );
}
