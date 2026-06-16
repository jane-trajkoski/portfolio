import ForgeBot from "./ForgeBot";
import ProjectCard from "./ProjectCard";
import { getProjects } from "../lib/projects";

export default async function WorkGrid() {
  const projects = await getProjects();

  return (
    <div className="grid">
      {projects.map((p) => (
        <ProjectCard key={p.id ?? p.title} project={p} />
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
