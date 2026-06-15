// Fixed deep-space layer behind the whole site. Content scrolls over it
// (parallax feel); the bright nebula (see layout) sits in the scrolling flow
// at the very top, so the lit area is only ever seen near the hero.
export default function Starfield() {
  return (
    <div className="starfield" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <circle cx="60" cy="80" r="1.2" fill="#fff" opacity=".4" className="tw" />
        <circle cx="220" cy="40" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="380" cy="120" r="1.3" fill="#fff" opacity=".45" className="tw" style={{ animationDelay: ".7s" }} />
        <circle cx="540" cy="60" r="1" fill="#7FE6FF" opacity=".4" />
        <circle cx="720" cy="100" r="1.4" fill="#fff" opacity=".5" className="tw" style={{ animationDelay: "1.3s" }} />
        <circle cx="900" cy="50" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="1080" cy="110" r="1.2" fill="#fff" opacity=".45" />
        <circle cx="1260" cy="70" r="1" fill="#7FE6FF" opacity=".4" className="tw" style={{ animationDelay: ".4s" }} />
        <circle cx="1390" cy="130" r="1.2" fill="#fff" opacity=".4" />
        <circle cx="120" cy="240" r="1.3" fill="#fff" opacity=".5" className="tw" style={{ animationDelay: "1.6s" }} />
        <circle cx="330" cy="300" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="560" cy="260" r="1.2" fill="#fff" opacity=".45" />
        <circle cx="780" cy="320" r="1" fill="#7FE6FF" opacity=".4" className="tw" style={{ animationDelay: ".9s" }} />
        <circle cx="1010" cy="270" r="1.3" fill="#fff" opacity=".5" />
        <circle cx="1240" cy="320" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="1400" cy="260" r="1.1" fill="#fff" opacity=".4" className="tw" style={{ animationDelay: "2s" }} />
        <circle cx="40" cy="460" r="1.4" fill="#fff" opacity=".55" className="tw" style={{ animationDelay: ".5s" }} />
        <circle cx="260" cy="500" r="1.1" fill="#fff" opacity=".45" />
        <circle cx="480" cy="450" r="1.2" fill="#1ECBE1" opacity=".4" />
        <circle cx="700" cy="510" r="1" fill="#7FE6FF" opacity=".4" />
        <circle cx="940" cy="470" r="1.3" fill="#fff" opacity=".5" className="tw" style={{ animationDelay: "1.1s" }} />
        <circle cx="1160" cy="520" r="1.1" fill="#fff" opacity=".45" />
        <circle cx="1380" cy="470" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="100" cy="660" r="1.3" fill="#fff" opacity=".5" />
        <circle cx="340" cy="700" r="1.1" fill="#7FE6FF" opacity=".45" className="tw" style={{ animationDelay: "1.8s" }} />
        <circle cx="580" cy="650" r="1.2" fill="#fff" opacity=".5" />
        <circle cx="820" cy="710" r="1" fill="#1ECBE1" opacity=".4" />
        <circle cx="1060" cy="660" r="1.3" fill="#fff" opacity=".5" className="tw" style={{ animationDelay: ".8s" }} />
        <circle cx="1300" cy="700" r="1.1" fill="#fff" opacity=".45" />
        <circle cx="180" cy="820" r="1.2" fill="#fff" opacity=".5" />
        <circle cx="430" cy="850" r="1.1" fill="#1ECBE1" opacity=".45" className="tw" style={{ animationDelay: "1.4s" }} />
        <circle cx="680" cy="810" r="1.3" fill="#fff" opacity=".5" />
        <circle cx="920" cy="860" r="1" fill="#7FE6FF" opacity=".4" />
        <circle cx="1180" cy="820" r="1.2" fill="#fff" opacity=".5" />
        <circle cx="1360" cy="860" r="1.1" fill="#fff" opacity=".45" className="tw" style={{ animationDelay: "2.2s" }} />
      </svg>
    </div>
  );
}
