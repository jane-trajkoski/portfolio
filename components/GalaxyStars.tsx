// Dense circular star cluster shown behind a card's memory-card graphic —
// bright at the core, thinning toward the edges (a little galaxy disc).
export default function GalaxyStars() {
  return (
    <svg className="gstars" width="180" height="138" viewBox="0 0 200 150" aria-hidden="true">
      <circle cx="100" cy="72" r="1.6" fill="#fff" opacity=".95" className="tw" />
      <circle cx="94" cy="66" r="1" fill="#fff" opacity=".8" />
      <circle cx="108" cy="76" r="1" fill="#7FE6FF" opacity=".8" />
      <circle cx="120" cy="72" r="1" fill="#1ECBE1" opacity=".75" className="tw" style={{ animationDelay: ".5s" }} />
      <circle cx="100" cy="50" r="1.1" fill="#fff" opacity=".7" />
      <circle cx="82" cy="56" r="1" fill="#7FE6FF" opacity=".65" />
      <circle cx="76" cy="76" r="1" fill="#fff" opacity=".65" className="tw" style={{ animationDelay: "1.1s" }} />
      <circle cx="86" cy="92" r="1" fill="#1ECBE1" opacity=".6" />
      <circle cx="100" cy="94" r="1" fill="#fff" opacity=".6" />
      <circle cx="118" cy="90" r="1" fill="#7FE6FF" opacity=".6" />
      <circle cx="140" cy="62" r="1" fill="#fff" opacity=".5" />
      <circle cx="62" cy="62" r="1" fill="#fff" opacity=".5" className="tw" style={{ animationDelay: "1.6s" }} />
      <circle cx="112" cy="42" r="1" fill="#1ECBE1" opacity=".5" />
      <circle cx="88" cy="40" r="1" fill="#fff" opacity=".5" />
      <circle cx="146" cy="80" r="1" fill="#7FE6FF" opacity=".45" />
      <circle cx="58" cy="86" r="1" fill="#fff" opacity=".4" />
      <circle cx="128" cy="104" r="1" fill="#fff" opacity=".4" />
      <circle cx="74" cy="104" r="1" fill="#1ECBE1" opacity=".4" />
      <circle cx="158" cy="58" r="1" fill="#fff" opacity=".35" className="tw" style={{ animationDelay: "2s" }} />
      <circle cx="42" cy="60" r="1" fill="#fff" opacity=".35" />
      <circle cx="100" cy="116" r="1" fill="#7FE6FF" opacity=".35" />
      <circle cx="100" cy="30" r="1" fill="#fff" opacity=".35" />
    </svg>
  );
}
