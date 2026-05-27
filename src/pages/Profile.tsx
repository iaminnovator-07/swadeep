import { BrainCircuit } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import AuroraOrb from "../components/AuroraOrb";

const profileTiles = [
  ["Origin", "Started with Arduino, robotics, and curiosity — with strong mentorship from Bishwa Ranjan Behara and Chhaya Marbate, who helped shape the foundation of my engineering journey."],
  ["Build", "Embedded C/C++, ESP32, FreeRTOS, sensor fusion, robotics systems, IoT meshes and PCB engineering."],
  ["Lead", "Founded SYGNIX. Built Aurora ecosystems and startup-grade engineering systems."],
  ["Mentor", "Mentor at Atal Tinkering Lab and independent innovation mentor helping students build IoT projects."],
];

export default function ProfilePage() {
  return (
    <section className="content-section">
      <SectionTitle eyebrow="Profile · v1.0" title="About Swadeep" subtitle="IoT hardware engineer, robotics developer, innovator. Builder of AURORA. Lead of SYGNIX." />
      <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {profileTiles.map(([title, copy]) => (
          <div key={title} className="glass-panel">
            <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-mute">{copy}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-cyan/40 hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]">
          <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-cyan/20 blur-3xl transition-all duration-700 group-hover:scale-125" />
          <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl transition-all duration-700 group-hover:scale-125" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-1500" />
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan/20 bg-cyan/10 shadow-[0_0_30px_rgba(0,255,255,0.25)]">
              <BrainCircuit className="h-10 w-10 text-cyan transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Engineering Philosophy</span>
                <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
              </div>
              <p className="text-base leading-relaxed text-white/75 md:text-lg">
                Think <span className="font-semibold text-cyan">hardware-first</span>, validate in the <span className="font-semibold text-white">real world</span>, engineer systems that stay reliable under pressure, and mentor the next generation while continuously shipping impactful innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
        <AuroraOrb message="Aurora is watching the portfolio. Signal ready." />
      </div>
    </section>
  );
}
