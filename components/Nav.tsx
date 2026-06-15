import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navbox">
      <Link href="/" className="brand">
        <span className="tjsq">TJ</span>
        <span>
          <span className="dotdev">.dev</span>
        </span>
      </Link>
      <div className="nlinks">
        <Link href="/#work">work</Link>
        <Link href="/blog">blog</Link>
        <Link href="/#hello">about</Link>
      </div>
      <div className="helloWrap">
        <svg className="helloBot" viewBox="0 0 180 150" aria-hidden="true">
          <g stroke="#1ECBE1" strokeWidth="3" fill="#0A1829" strokeLinejoin="round">
            <line x1="90" y1="34" x2="90" y2="22" strokeLinecap="round" />
            <circle cx="90" cy="19" r="3.5" fill="#1ECBE1" stroke="none" />
            <rect x="64" y="34" width="52" height="34" rx="12" />
            <rect x="75" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
            <rect x="93" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
            <rect x="68" y="70" width="44" height="38" rx="14" />
            <rect x="80" y="82" width="20" height="9" rx="3" strokeWidth="2" />
            <rect x="74" y="108" width="12" height="15" rx="5" />
            <rect x="94" y="108" width="12" height="15" rx="5" />
            <rect x="55" y="76" width="11" height="28" rx="5" />
            <circle cx="60" cy="106" r="5" />
            <g className="waveArm">
              <rect x="113" y="56" width="11" height="26" rx="5" />
              <circle cx="118" cy="52" r="6" />
              <line x1="127" y1="46" x2="132" y2="42" strokeWidth="2" strokeLinecap="round" />
              <line x1="128" y1="54" x2="134" y2="53" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </svg>
        <Link href="/#hello" className="hello">
          say hello &rarr;
        </Link>
      </div>
    </nav>
  );
}
