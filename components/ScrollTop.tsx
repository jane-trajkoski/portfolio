"use client";

import { useEffect, useState } from "react";

// Rocket "back to top" button. Appears once you've scrolled past ~half a
// viewport; on click it fires its thruster, smooth-scrolls to the top, and
// streaks off the top of the screen into the starfield.
export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [launching, setLaunching] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (!launching) setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [launching]);

  function launch() {
    if (launching) return;
    setLaunching(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => {
      setLaunching(false);
      setVisible(false);
    }, 950);
  }

  if (!visible && !launching) return null;

  return (
    <button
      className={"scrolltop" + (launching ? " launch" : "")}
      onClick={launch}
      aria-label="Scroll to top"
    >
      <span className="flame" aria-hidden="true" />
      <svg width="24" height="30" viewBox="0 0 32 44" fill="none" stroke="#1ECBE1" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        <path d="M16 3c5 5 7 13 7 21 0 3-1 6-2 8H11c-1-2-2-5-2-8 0-8 2-16 7-21z" fill="#0A1829" />
        <circle cx="16" cy="17" r="3.2" fill="#0A1829" />
        <path d="M9 26c-3 1-5 4-5 8 3-1 5-2 6-3" fill="#0A1829" />
        <path d="M23 26c3 1 5 4 5 8-3-1-5-2-6-3" fill="#0A1829" />
        <path d="M13 33h6" />
      </svg>
    </button>
  );
}
