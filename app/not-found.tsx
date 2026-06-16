import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// 404 — the "lost" mascot: X eyes, a dangling plug, and a "?" that orbits the bot.
export default function NotFound() {
  return (
    <main className="wrap">
      <Nav />
      <section className="notfound">
        <svg width="220" height="184" viewBox="0 0 180 150" aria-hidden="true">
          <g transform="rotate(-8 86 72)" stroke="#1ECBE1" strokeWidth="2.6" fill="#0A1829" strokeLinejoin="round">
            <line x1="86" y1="34" x2="86" y2="22" strokeLinecap="round" />
            <circle cx="86" cy="19" r="3.5" fill="#1ECBE1" stroke="none" />
            <rect x="60" y="34" width="52" height="34" rx="12" />
            <line x1="70" y1="46" x2="80" y2="56" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="80" y1="46" x2="70" y2="56" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="92" y1="46" x2="102" y2="56" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="102" y1="46" x2="92" y2="56" strokeWidth="2.4" strokeLinecap="round" />
            <rect x="64" y="70" width="44" height="38" rx="14" />\
            <text x="86" y="89.5" textAnchor="middle" fontFamily="var(--font-orbitron)" fontSize="9" fontWeight="700" fill="#1ECBE1" stroke="none">TJ</text>
            <rect x="70" y="108" width="12" height="15" rx="5" />
            <rect x="90" y="108" width="12" height="15" rx="5" />
            <rect x="51" y="76" width="11" height="28" rx="5" />
            <circle cx="56" cy="106" r="5" />
            <rect x="109" y="76" width="11" height="24" rx="5" />
            <rect x="110" y="100" width="11" height="9" rx="2" />
            <line x1="113" y1="109" x2="113" y2="113" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="118" y1="109" x2="118" y2="113" strokeWidth="2.4" strokeLinecap="round" />
          </g>
          <g className="qOrbit">
            <g className="qUp">
              <text
                x="86"
                y="34"
                textAnchor="middle"
                fontFamily="ui-monospace,monospace"
                fontSize="26"
                fontWeight="700"
                fill="#1ECBE1"
              >
                ?
              </text>
            </g>
          </g>
        </svg>
        <h1 className="nf-title">404 — lost in space</h1>
        <p className="nf-sub">This page wandered off. Let&apos;s get you back.</p>
        <div className="cta">
          <Link href="/" className="b1">back home</Link>
          <Link href="/blog" className="b2">read the blog</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
