import { ArrowUpRight, CircuitBoard, Send, TerminalSquare } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import AuroraOrb from "../components/AuroraOrb";
import { navItems } from "../data";

export default function HomePage() {
  return (
    <div className="hero-section">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/8 px-3 py-2 text-xs uppercase tracking-[0.18em] text-mint">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(120,255,191,.9)]" />
            Live ecosystem status: active
          </div>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Swadeep Bansode
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-cyan sm:text-lg">
            IoT Hardware Engineer · Robotics Developer · AI Systems Builder · Founder of SYGNIX
          </p>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-white/82 sm:text-2xl">
            Building intelligent systems for the next generation through hardware-first innovation and startup-grade execution.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="primary-button" to="/contact">
              <Send size={17} /> Contact
            </Link>
            <a className="secondary-button" href="https://github.com/iaminnovator-07" target="_blank" rel="noreferrer">
              <TerminalSquare size={17} /> GitHub
            </a>
            <a className="secondary-button" href="https://www.linkedin.com/in/swadeep-bansode-849925210" target="_blank" rel="noreferrer">
              <ArrowUpRight size={17} /> LinkedIn
            </a>
            <a className="secondary-button" href="mailto:swadeepbansode@gmail.com?subject=Resume%20Request">
              <ArrowUpRight size={17} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="system-ring system-ring-one" />
          <div className="system-ring system-ring-two" />
          <div className="system-node node-one">AI</div>
          <div className="system-node node-two">IoT</div>
          <div className="system-node node-three">R&D</div>
          <div className="core-terminal">
            <p>SYGNIX / innovation ecosystem</p>
            <strong>65</strong>
            <span>systems indexed</span>
          </div>
          <AuroraOrb message="Ecosystem stable. 65 systems indexed." />
        </div>
      </div>

      <section className="content-section">
        <SectionTitle eyebrow="Navigate the ecosystem" title="Explore the portfolio pages" subtitle="Open the pages that matter most to you: profile, systems, flagships, startup, skills and contact." />
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="glass-panel hover:border-cyan/40">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-mute">Page</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{item.label}</h3>
                </div>
                <CircuitBoard className="text-cyan" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
