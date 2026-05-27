import type { Project } from "../data";

export default function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <article id={`project-${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} className={`project-card ${active ? "project-card-active" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-mute">{project.year}</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">{project.name}</h3>
        </div>
        {project.status && <span className="status-chip">{project.status}</span>}
      </div>
      <p className="mt-3 text-sm leading-6 text-mute">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
