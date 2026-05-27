import { AnimatePresence, motion } from "framer-motion";
import { Radio, Zap } from "lucide-react";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { flagships } from "../data";

export default function FlagshipsPage() {
  const [expandedFlagship, setExpandedFlagship] = useState<string>(flagships[0]?.name || "");

  return (
    <section className="content-section">
      <SectionTitle eyebrow="Flagship Systems" title="Core Ecosystems & Future Platforms" subtitle="Startup-grade systems engineered for real-world impact." />
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {flagships.map((system) => {
          const isOpen = expandedFlagship === system.name;
          return (
            <motion.article layout key={system.name} className={`flagship-card ${isOpen ? "flagship-card-open" : ""}`}>
              <button className="w-full text-left" onClick={() => setExpandedFlagship(isOpen ? "" : system.name)}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="status-chip">{system.status}</span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-ink">{system.name}</h3>
                    <p className="mt-1 text-sm text-cyan">{system.category}</p>
                  </div>
                  <Radio className="mt-1 text-mint" size={22} />
                </div>
                <p className="mt-4 text-sm leading-6 text-mute">{system.description}</p>
                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs uppercase tracking-[0.18em] text-mute">
                    <span>Roadmap</span>
                    <span>{system.progress}%</span>
                  </div>
                  <div className="progress-track"><span style={{ width: `${system.progress}%` }} /></div>
                </div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {system.features.map((feature) => (
                        <div key={feature} className="telemetry-line">
                          <Zap size={14} /> {feature}
                        </div>
                      ))}
                    </div>
                    <p className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/78">{system.impact}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {system.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
