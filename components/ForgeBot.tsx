// The "forging" mascot used in the in-progress work card.
// The arm + hammer swing onto the anvil; sparks flash on impact (CSS animated).
export default function ForgeBot() {
  return (
    <svg width="156" height="111" viewBox="0 0 180 128" aria-hidden="true" style={{ position: "relative" }}>
      <g stroke="#1ECBE1" strokeWidth="2.2" fill="#0A1829" strokeLinejoin="round">
        <line x1="56" y1="34" x2="56" y2="22" strokeLinecap="round" />
        <circle cx="56" cy="19" r="3.5" fill="#1ECBE1" stroke="none" />
        <rect x="30" y="34" width="52" height="34" rx="12" />
        <rect x="41" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
        <rect x="59" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
        <rect x="34" y="70" width="44" height="38" rx="14" />
        <text x="56" y="89.5" textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize="9" fontWeight="700" fill="#1ECBE1" stroke="none">TJ</text>
        <rect x="40" y="108" width="12" height="15" rx="5" />
        <rect x="60" y="108" width="12" height="15" rx="5" />
        <rect x="21" y="76" width="11" height="28" rx="5" />
        <circle cx="26" cy="106" r="5" />
        <circle cx="78" cy="72" r="3" />
        <polygon points="100,86 90,89 100,95" />
        <rect x="100" y="84" width="44" height="11" rx="2" />
        <rect x="114" y="95" width="12" height="9" />
        <rect x="104" y="104" width="34" height="7" rx="2" />
        <g className="arm">
          <rect x="73" y="50" width="10" height="24" rx="5" />
          <circle cx="78" cy="48" r="5" />
          <rect x="75" y="28" width="6" height="22" rx="3" />
          <rect x="66" y="22" width="24" height="12" rx="2" />
        </g>
      </g>
      <g className="spark" fill="none" stroke="#1ECBE1" strokeWidth="2" strokeLinecap="round">
        <line x1="122" y1="82" x2="128" y2="75" />
        <line x1="126" y1="85" x2="134" y2="84" />
        <line x1="118" y1="85" x2="114" y2="78" />
        <circle cx="132" cy="77" r="1.6" fill="#1ECBE1" stroke="none" />
        <circle cx="116" cy="76" r="1.4" fill="#1ECBE1" stroke="none" />
      </g>
    </svg>
  );
}
