import GalaxyStars from "./GalaxyStars";

export type Project = {
  title: string;
  tagline: string;
  stack: string[];
  live: string;
  blog: string;
  featured?: boolean;
};

// A project as a console "save card": memory-card graphic over a galaxy
// cluster, gradient action buttons that fan out on hover, and an infinitely
// scrolling tech-stack ticker along the bottom.
export default function ProjectCard({ project }: { project: Project }) {
  const chips = [...project.stack, ...project.stack];

  return (
    <div className={"card mc" + (project.featured ? " active" : "")}>
      <div className="mc-stage">
        <div className="neb" />
        <GalaxyStars />
        <div className="mcard">
          <div className="mc-strip">tj</div>
          <div className="mc-screen">
            <svg width="50" height="42" viewBox="0 0 180 150" aria-hidden="true">
              <g stroke="#1ECBE1" strokeWidth="3" fill="#0A1829" strokeLinejoin="round">
                <line x1="90" y1="34" x2="90" y2="22" strokeLinecap="round" />
                <circle cx="90" cy="19" r="3.5" fill="#1ECBE1" stroke="none" />
                <rect x="64" y="34" width="52" height="34" rx="12" />
                <rect x="75" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
                <rect x="93" y="46" width="12" height="10" rx="3" fill="#1ECBE1" stroke="none" />
                <rect x="68" y="70" width="44" height="24" rx="12" />
              </g>
            </svg>
          </div>
          <div className="mc-label">PROJECT CARD</div>
          <div className="mc-chip" />
        </div>
      </div>

      <p className="ctitle">{project.title}</p>
      <p className="cstack">{project.tagline}</p>

      <div className="acts">
        <a className="psbtn" href={project.live} target="_blank" rel="noreferrer">
          view live site
        </a>
        <a className="psbtn" href={project.blog}>
          view project blog
        </a>
      </div>

      <div className="ticker">
        <div className="t-track">
          {chips.map((t, i) => (
            <span className="t-chip" key={i}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
