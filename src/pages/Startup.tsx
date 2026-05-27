import { Rocket } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { startupCards } from "../data";

export default function StartupPage() {
  return (
    <section className="content-section">
      <SectionTitle eyebrow="Startup Ecosystem" title="Building Beyond Projects" subtitle="Transforming experimental systems into scalable innovation ecosystems." />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="startup-dashboard">
          <div>
            <p className="section-eyebrow text-left">Founder philosophy</p>
            <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Build systems that solve real-world problems while inspiring the next generation of engineers.</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {['R&D', 'Mentor', 'Ship'].map((metric, index) => (
              <div key={metric} className="metric-tile">
                <strong>{index === 0 ? '05' : index === 1 ? 'ATL' : '65'}</strong>
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {startupCards.map(([name, description, vision]) => (
            <article key={name} className="glass-panel">
              <Rocket className="mb-4 text-cyan" />
              <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-mute">{description}</p>
              <p className="mt-4 text-sm leading-6 text-white/78">Vision: {vision}</p>
            </article>
          ))}
        </div>
        <div className="roadmap-strip">
          {['Q1 — Aurora 3.0', 'Q2 — AranyaSync Mesh', 'Q3 — Phantom Grid Pilot', 'Q4 — SYGNIX Lab'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </section>
  );
}
