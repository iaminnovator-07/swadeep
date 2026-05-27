import type { Project } from "../data";
import { grouped } from "../data";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({ projects, activeProject }: { projects: Project[]; activeProject: string | null }) {
  const byYear = grouped(projects);

  return (
    <div className="space-y-8">
      {Object.entries(byYear).map(([year, items]) => (
        <div key={year}>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <h3 className="font-display text-sm uppercase tracking-[0.26em] text-cyan">{year} Systems</h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((project) => (
              <ProjectCard key={project.name} project={project} active={activeProject === project.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
