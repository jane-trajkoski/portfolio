import ForgeBot from "./ForgeBot";
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
        <div className="soon-head">
          <p className="soon-title">Coming soon</p>
          <p className="soon-load">
            <span className="pd" /> loading&hellip;
          </p>
          <div className="mc-progress">
            <span />
          </div>
        </div>
        <div className="soon-bot">
          <div className="neb" />
          <ForgeBot />
        </div>
      </div>
    </div>
  );
}