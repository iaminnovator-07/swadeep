import SectionTitle from "../components/SectionTitle";
import { skillGroups } from "../data";

export default function SkillsPage() {
  return (
    <section className="content-section">
      <SectionTitle eyebrow="Capability Matrix" title="Skills" subtitle="What’s loaded into the system." />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {skillGroups.map(([group, ...skills]) => (
          <div key={group} className="glass-panel">
            <h3 className="font-display text-xl font-semibold text-ink">{group}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
