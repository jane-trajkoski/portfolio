"use client";

import { useEffect, useRef, useState } from "react";

const MSGS = [
  "Hey! check out my work →",
  "Got a project? say hello →",
  "Fresh posts on the blog →",
  "Let's build something →",
];

type FaceState = "sleep" | "happy" | "think";

// The hero mascot, "Forge".
//  - loads asleep (single line eyes)
//  - first mouse move -> wakes up happy (curved eyes + bounce)
//  - after a few idle seconds -> thinking face (o.O <-> O.o) + chat-bubble nudges
//  - moving again snaps it back to happy
export default function Bot() {
  const [state, setState] = useState<FaceState>("sleep");
  const [bubble, setBubble] = useState<string | null>(null);
  const cur = useRef<FaceState>("sleep");
  const idle = useRef<ReturnType<typeof setTimeout>>();
  const bubbleStart = useRef<ReturnType<typeof setTimeout>>();
  const bubbleTimer = useRef<ReturnType<typeof setInterval>>();
  const bi = useRef(0);

  useEffect(() => {
    const go = (s: FaceState) => {
      if (cur.current !== s) {
        cur.current = s;
        setState(s);
      }
    };
    const stopBubbles = () => {
      setBubble(null);
      clearTimeout(bubbleStart.current);
      clearInterval(bubbleTimer.current);
    };
    const startBubbles = () => {
      setBubble(MSGS[bi.current]);
      bubbleTimer.current = setInterval(() => {
        setBubble(null);
        setTimeout(() => {
          bi.current = (bi.current + 1) % MSGS.length;
          setBubble(MSGS[bi.current]);
        }, 350);
      }, 4500);
    };
    const goThink = () => {
      go("think");
      bubbleStart.current = setTimeout(startBubbles, 900);
    };
    const wake = () => {
      stopBubbles();
      go("happy");
      clearTimeout(idle.current);
      idle.current = setTimeout(goThink, 4500);
    };

    window.addEventListener("mousemove", wake, { passive: true });
    window.addEventListener("touchstart", wake, { passive: true });
    return () => {
      window.removeEventListener("mousemove", wake);
      window.removeEventListener("touchstart", wake);
      stopBubbles();
      clearTimeout(idle.current);
    };
  }, []);

  return (
    <div className="stage">
      <div className="halo" />
      <div className="halo2" />
      <div className={"bubble" + (bubble ? " show" : "")}>{bubble}</div>
      <svg
        className={"bot face s-" + state}
        width="240"
        height="200"
        viewBox="0 0 180 150"
        aria-hidden="true"
      >
        <g className="wakewrap" stroke="#1ECBE1" strokeWidth="2.2" fill="#0A1829" strokeLinejoin="round">
          <line x1="90" y1="34" x2="90" y2="22" strokeLinecap="round" />
          <circle className="tipP" cx="90" cy="19" r="3.5" fill="#1ECBE1" stroke="none" />
          <rect x="64" y="34" width="52" height="34" rx="12" />

          <g className="eyes-sleep">
            <line x1="76" y1="51" x2="104" y2="51" strokeWidth="3" strokeLinecap="round" />
          </g>
          <g className="eyes-happy" fill="#1ECBE1" stroke="none">
            <path d="M74.5 52 A6.5 6.5 0 0 1 87.5 52 Q81 49.4 74.5 52 Z" />
            <path d="M92.5 52 A6.5 6.5 0 0 1 105.5 52 Q99 49.4 92.5 52 Z" />
          </g>
          <g className="eyes-think">
            <circle className="te-l" cx="81" cy="51" r="6" fill="#1ECBE1" stroke="none" />
            <circle className="te-r" cx="99" cy="51" r="6" fill="#1ECBE1" stroke="none" />
          </g>
          <rect x="68" y="70" width="44" height="38" rx="14" />
          <text x="90" y="89.5" textAnchor="middle" fontFamily="var(--font-orbitron)" fontSize="9" fontWeight="700" fill="#1ECBE1" stroke="none">TJ</text>
          <rect x="74" y="108" width="12" height="15" rx="5" />
          <rect x="94" y="108" width="12" height="15" rx="5" />
          <rect x="55" y="76" width="11" height="28" rx="5" />
          <circle cx="60" cy="107" r="5" />
          <rect x="114" y="76" width="11" height="28" rx="5" />
          <circle cx="119" cy="107" r="5" />
        </g>
      </svg>
    </div>
  );
}
