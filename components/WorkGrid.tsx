import ForgeBot from "./ForgeBot";
import GalaxyStars from "./GalaxyStars";
import ProjectCard, { type Project } from "./ProjectCard";

const PROJECTS: Project[] = [
  {
    title: "QuestBoard",
    tagline: "Gamified task tracker — to-dos become loot & XP.",
    stack: ["Next.js", "TypeScript", "Postgres", "Prisma", "Vercel"],
    live: "#",
    blog: "/blog",
    featured: true,
  },
  {
    title: "Pixel Forge",
    tagline: "A tiny browser platformer + level editor at 60fps.",
    stack: ["WebGL", "React", "Vite", "Canvas"],
    live: "#",
    blog: "/blog",
  },
];

export default function WorkGrid() {
  return (
    <div className="grid">
      {PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}

      <div className="card mc soon">
        <div className="mc-stage">
          <div className="neb" />
          <GalaxyStars />
          <div className="mcard dashed">
            <div className="mc-strip">tjforge</div>
            <div className="mc-screen mc-forge">
              <ForgeBot />
            </div>
            <div className="mc-label">NO DATA</div>
            <div className="mc-chip" />
          </div>
        </div>
        <p className="ctitle muted">Coming soon</p>
        <p className="cstack muted">in progress&hellip;</p>
        <div className="mc-progress">
          <span />
        </div>
      </div>
    </div>
  );
}
