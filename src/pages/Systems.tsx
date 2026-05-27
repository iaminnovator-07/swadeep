import SectionTitle from "../components/SectionTitle";
import ProjectGrid from "../components/ProjectGrid";
import type { Project } from "../data";
import { hardwareProjects, softwareProjects } from "../data";

export default function SystemsPage() {
  return (
    <section className="content-section">
      <SectionTitle eyebrow="45 systems online" title="Hardware & Software Lab" subtitle="Embedded systems, robotics, IoT, dashboards and software platforms built for real products." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="section-eyebrow">Hardware Systems</h3>
            <ProjectGrid projects={hardwareProjects} activeProject={null} />
          </div>
          <div>
            <h3 className="section-eyebrow">Software Systems</h3>
            <ProjectGrid projects={softwareProjects} activeProject={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
