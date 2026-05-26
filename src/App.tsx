import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  CircuitBoard,
  Mail,
  Menu,
  Radio,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Trophy,
  X,
  Zap,
} from "lucide-react";

type Project = {
  year: string;
  status?: string;
  name: string;
  description: string;
  tags: string[];
};

type Flagship = {
  name: string;
  status: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  impact: string;
  progress: number;
};

const navItems = [
  ["Profile", "profile"],
  ["Systems", "systems"],
  ["Flagships", "flagships"],
  ["Startup", "startup"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];

const hardwareProjects: Project[] = [
  { year: "2026", status: "ACTIVE", name: "AranyaSync", description: "Forest sensor mesh for wildlife synchronization.", tags: ["IoT", "LoRa", "Sensors"] },
  { year: "2026", status: "SHIPPED", name: "HazardEye", description: "Industrial hazard detection ecosystem.", tags: ["Safety", "Vision"] },
  { year: "2026", status: "SHIPPED", name: "Machine Monitoring System", description: "Realtime industrial telemetry platform.", tags: ["IIoT", "Telemetry"] },
  { year: "2024-2025", status: "ACTIVE", name: "Aurora 3.0", description: "Holographic interactive AI companion in development.", tags: ["Holo", "AI", "IoT"] },
  { year: "2024-2025", status: "RESEARCH", name: "Phantom Net", description: "Stealth mesh networking experiment.", tags: ["Mesh", "RF"] },
  { year: "2024-2025", status: "RESEARCH", name: "Phantom Grid", description: "Distributed power and data grid concept.", tags: ["Power", "Mesh"] },
  { year: "2024-2025", status: "ACTIVE", name: "Karma", description: "Behavioral feedback wearable system.", tags: ["Wearable", "Sensors"] },
  { year: "2024-2025", status: "ACTIVE", name: "Saaya", description: "Shadow-tracking ambient AI companion.", tags: ["AI", "IoT"] },
  { year: "2022", status: "SHIPPED", name: "Mini AgroBot", description: "Compact agriculture robot.", tags: ["Robotics", "Agro"] },
  { year: "2022", name: "Smart Traffic Light Brigade System", description: "Adaptive traffic signal mesh.", tags: ["IoT", "Smart City"] },
  { year: "2022", name: "Women Safety Alert using NEO-6M GPS", description: "GPS emergency safety beacon.", tags: ["GPS", "Safety"] },
  { year: "2022", name: "Smart RFID Attendance System", description: "Tap-to-mark attendance ecosystem.", tags: ["RFID", "School"] },
  { year: "2022", name: "RFID Based Gates", description: "RFID controlled access gate.", tags: ["RFID", "Access"] },
  { year: "2022", name: "Smart Blind People Goggles", description: "Ultrasonic + haptic accessibility goggles.", tags: ["Accessibility", "Wearable"] },
  { year: "2022", name: "Smart Blind People Stick", description: "Sensor-augmented smart stick.", tags: ["Accessibility"] },
  { year: "2022", name: "Long Distance Belt in Corona", description: "Distance-monitoring wearable safety belt.", tags: ["Safety", "Wearable"] },
  { year: "2022", name: "ESP32-CAM Object Detection System", description: "Edge AI vision on ESP32-CAM.", tags: ["CV", "Edge"] },
  { year: "2021", status: "SHIPPED", name: "Aurora", description: "First-gen AI companion orb prototype.", tags: ["AI", "Embedded", "ESP32"] },
  { year: "2021", status: "SHIPPED", name: "Aurora 2.0", description: "Voice + vision enabled AI orb.", tags: ["AI", "Voice", "Vision"] },
  { year: "2021", status: "SHIPPED", name: "Indian_Aurora (Hindi)", description: "Hindi-language Aurora variant.", tags: ["NLP", "Hindi"] },
  { year: "2021", status: "SHIPPED", name: "Team_Indian_Aurora Chatbot", description: "Team-built multilingual chatbot.", tags: ["Chatbot", "Team"] },
  { year: "2021", name: "Remote Control Car", description: "Bluetooth RC vehicle.", tags: ["Robotics", "BT"] },
  { year: "2021", name: "Obstacle Avoiding Robot", description: "Autonomous wandering bot.", tags: ["Robotics"] },
  { year: "2021", name: "Object Detection Car", description: "Vision-guided autonomous car.", tags: ["CV", "Robotics"] },
  { year: "2021", name: "Object Follower Car", description: "Object tracking robotic vehicle.", tags: ["CV", "Robotics"] },
  { year: "2021", name: "Line Follower Car", description: "IR sensor robotic follower.", tags: ["IR", "Robotics"] },
  { year: "2021", name: "LPG Leakage Alert System", description: "Gas leak alert system.", tags: ["Safety", "Sensors"] },
  { year: "2021", name: "Smart Dustbin", description: "Contactless smart dustbin.", tags: ["IoT"] },
  { year: "2021", name: "Solar Tracking System", description: "Dual-axis solar tracker.", tags: ["Solar", "Energy"] },
  { year: "2021", name: "Smart Parking Prototype", description: "Smart parking slot detection system.", tags: ["Smart City"] },
  { year: "2020", name: "Soil Moisture Alert", description: "Plant moisture monitoring node.", tags: ["Agro", "Sensors"] },
  { year: "2020", name: "Automatic Water Dispenser", description: "Touchless dispensing system.", tags: ["IoT", "IR"] },
  { year: "2020", name: "Smart Street Lights", description: "Ambient-aware lighting system.", tags: ["Smart City"] },
  { year: "2020", name: "Smart Lights", description: "App-controlled lighting node.", tags: ["IoT"] },
  { year: "2020", name: "Energy Saving Setup", description: "Home energy optimization system.", tags: ["Energy"] },
  { year: "2020", name: "Gesture Controlled Flex Sensor System", description: "Flex sensor gesture controller.", tags: ["HCI"] },
  { year: "2020", name: "HeartBeat Monitoring System", description: "Pulse monitoring + alert ecosystem.", tags: ["Health"] },
  { year: "2020", name: "HC-05 Bluetooth Automation System", description: "Bluetooth home automation.", tags: ["BT", "Home"] },
  { year: "2020", name: "Servo Automation System", description: "Multi-servo automation rig.", tags: ["Robotics"] },
  { year: "2020", name: "Temperature Monitoring System", description: "Realtime thermal monitoring dashboard.", tags: ["Sensors"] },
  { year: "2020", name: "Motion Detection Security Alarm", description: "PIR intrusion alert.", tags: ["Safety"] },
  { year: "2020", name: "Ultrasonic Distance Measurement System", description: "HC-SR04 ranging system.", tags: ["Sensors"] },
  { year: "2020", name: "Fire Alarm & Fire Detection System", description: "Flame detection alert system.", tags: ["Safety"] },
  { year: "2020", name: "Rain Detection System", description: "Rain-responsive automation system.", tags: ["IoT"] },
  { year: "2020", name: "Water Level Indicator System", description: "Multi-stage tank level system.", tags: ["IoT"] },
];

const softwareProjects: Project[] = [
  { year: "2026", name: "MediRoute", description: "Smart medical routing platform.", tags: ["Web", "Healthcare"] },
  { year: "2026", name: "Study Flow", description: "Focus & productivity platform.", tags: ["App", "Productivity"] },
  { year: "2026", name: "AranyaSync Dashboard", description: "Companion dashboard for forest mesh.", tags: ["Dashboard", "IoT"] },
  { year: "2026", name: "Comrade / COMRADE", description: "Team coordination operations console.", tags: ["Web", "Ops"] },
  { year: "2026", name: "HazardEye Dashboard", description: "Industrial safety dashboard.", tags: ["Dashboard", "Safety"] },
  { year: "2026", name: "Sensors Info Website", description: "Educational sensor reference platform.", tags: ["Web", "Edu"] },
  { year: "2026", name: "Music Player (Circular Queue)", description: "DSA-driven music player.", tags: ["DSA", "App"] },
  { year: "2026", name: "Student Task Manager (Priority Queue)", description: "Heap-based task manager.", tags: ["DSA", "App"] },
  { year: "2026", name: "SYGNIX Ecosystem Site", description: "Founder-grade web archive for engineering systems.", tags: ["Web", "Portfolio"] },
  { year: "2023", name: "Virtual C Code Trainer", description: "Interactive C programming trainer.", tags: ["Edu", "Web"] },
  { year: "2023", name: "EY / EY_GDS", description: "Enterprise tooling for EY/GDS.", tags: ["Enterprise", "App"] },
  { year: "2023", name: "Battery Health Shower", description: "Battery diagnostics application.", tags: ["App", "Diagnostics"] },
  { year: "2023", name: "NMMC_School_No_104", description: "Civic school web platform.", tags: ["Web", "Civic"] },
  { year: "2022", name: "Mini AgroBot Controller App", description: "Robot controller companion app.", tags: ["App", "Robotics"] },
  { year: "2022", name: "Attendance App", description: "RFID/QR attendance app.", tags: ["App", "School"] },
  { year: "2022", name: "Notifier App", description: "Realtime notification app.", tags: ["App"] },
  { year: "2021", name: "Aurora App", description: "Companion mobile app for Aurora.", tags: ["App", "AI"] },
  { year: "2021", name: "Aurora 2.0 App", description: "Advanced Aurora companion app.", tags: ["App", "AI"] },
  { year: "2021", name: "Aurora 2.0 Hindi App", description: "Hindi localized AI companion.", tags: ["App", "Hindi"] },
  { year: "2021", name: "Remote_Controll App", description: "Bluetooth/Wi-Fi robotics controller.", tags: ["App", "Robotics"] },
];

const flagships: Flagship[] = [
  {
    name: "AURORA 3.0",
    status: "ACTIVE DEVELOPMENT",
    category: "AI · Holographic Systems · IoT",
    description: "A futuristic holographic AI companion ecosystem combining embedded intelligence, multimodal interaction, voice systems, ambient computing and real-world AI assistance.",
    features: ["voice interaction", "contextual memory", "ambient intelligence", "holographic ecosystem vision", "smart assistant architecture", "embedded AI integration"],
    tags: ["AI", "Holo", "Voice", "Embedded", "IoT"],
    impact: "Turns assistant intelligence into an ambient hardware-first experience.",
    progress: 68,
  },
  {
    name: "HAZARDEYE",
    status: "SHIPPED / ACTIVE",
    category: "Industrial Safety · AI Vision",
    description: "Industrial hazard monitoring ecosystem for detecting dangerous conditions using intelligent sensing and realtime telemetry.",
    features: ["hazard detection", "industrial monitoring", "safety alerts", "realtime dashboard", "sensor telemetry", "AI-assisted monitoring"],
    tags: ["Safety", "Vision", "Telemetry", "IIoT"],
    impact: "Improves industrial visibility before small signals become dangerous events.",
    progress: 86,
  },
  {
    name: "ARANYASYNC",
    status: "ACTIVE",
    category: "Environmental IoT · Sensor Mesh",
    description: "Forest-scale sensor mesh ecosystem for wildlife synchronization, environmental intelligence and remote ecosystem monitoring.",
    features: ["LoRa communication", "mesh telemetry", "environmental sensing", "wildlife sync", "distributed sensor nodes"],
    tags: ["IoT", "LoRa", "Sensors", "Mesh"],
    impact: "Creates long-range environmental telemetry for forests and remote ecosystems.",
    progress: 74,
  },
  {
    name: "PHANTOM NET",
    status: "RESEARCH",
    category: "Stealth Networking · Experimental Systems",
    description: "Experimental stealth mesh communication architecture exploring resilient decentralized networking systems.",
    features: ["mesh communication", "distributed systems", "RF experimentation", "secure networking concepts"],
    tags: ["Mesh", "RF", "Networking"],
    impact: "Explores resilient communication when centralized infrastructure is unavailable.",
    progress: 42,
  },
  {
    name: "PHANTOM GRID",
    status: "RESEARCH",
    category: "Distributed Infrastructure",
    description: "Conceptual distributed power and data ecosystem for future decentralized infrastructure systems.",
    features: ["distributed architecture", "smart infrastructure", "power/data integration", "grid intelligence"],
    tags: ["Power", "Grid", "Mesh"],
    impact: "Frames power and data as a unified intelligent infrastructure layer.",
    progress: 36,
  },
  {
    name: "COMRADE",
    status: "ACTIVE",
    category: "Operations Platform · Team Coordination",
    description: "A futuristic operations console for managing collaboration, coordination and engineering workflows.",
    features: ["team operations", "coordination systems", "realtime management", "productivity ecosystem"],
    tags: ["Ops", "Collaboration", "Dashboard"],
    impact: "Gives engineering teams a focused operating surface for shipping together.",
    progress: 64,
  },
  {
    name: "MEDIROUTE",
    status: "ACTIVE DEVELOPMENT",
    category: "Healthcare · Routing Intelligence",
    description: "Intelligent healthcare routing platform designed to improve medical accessibility, navigation and emergency response systems.",
    features: ["smart medical routing", "emergency navigation", "healthcare optimization", "realtime assistance"],
    tags: ["Healthcare", "AI", "Web"],
    impact: "Connects routing intelligence with urgent medical accessibility.",
    progress: 58,
  },
  {
    name: "SYGNIX",
    status: "ACTIVE ECOSYSTEM",
    category: "Innovation Ecosystem",
    description: "A futuristic engineering ecosystem unifying AI, hardware, robotics, embedded systems and startup-grade innovation.",
    features: ["hardware R&D", "AI systems", "robotics ecosystem", "startup incubation", "innovation lab vision"],
    tags: ["AI", "Robotics", "Hardware", "Innovation"],
    impact: "Turns independent projects into a living startup-grade engineering archive.",
    progress: 78,
  },
];

const achievements = [
  ["2026", "IdeaThrown 2026 — Runner Up", "TechVision 2026 — Winner", "UnPlugged 3.0 — Top 50 Selection", "HazardEye Workshop Opportunity", "HackDuino'26 Final Demonstration"],
  ["2023", "Stem Sparks 2023 — 1st Place", "Stem Sparks 2023 — 3rd Place", "Stem Sparks 2023 — 4th Place", "Siemens Innovation Fest 2023 — 1st Place", "Siemens Innovation Fest 2023 — 2nd Place", "Inter School Competition — Winner"],
  ["2022", "Stem Sparks 2022 — YouTube Recognition", "Siemens Innovation Fest 2022 — 1st Place", "Siemens Innovation Fest 2022 — 2nd Place", "Inter School Competition — Winner"],
  ["2021", "Indian Aurora 2.0 — National Top 8 Rank"],
  ["2020", "Plezmo App Developer — 6 Certifications"],
  ["Earlier & Ongoing", "Young Upcoming Scientist Trophy by Dr. Anil Kakodkar", "District Level Competition Winner", "IIT Bombay Innovation Fest Participation"],
];

const skillGroups = [
  ["Technical", "Embedded C", "Embedded C++", "Embedded Systems", "PCB Design", "System Architecture", "FreeRTOS", "ESP8266", "ESP32", "Raspberry Pi", "Arduino", "Sensors", "Robotics", "IoT", "Software Development", "Web Development", "Programming", "Firebase", "Cloud Firestore", "AutoCAD"],
  ["Soft Skills", "Leadership", "Team Management", "Communication", "Public Speaking", "Teaching", "Project Management", "Innovation Mindset", "Decision-Making", "Analytical Thinking", "Logical Reasoning", "Critical Thinking", "Teamwork", "Creativity", "Observation", "Presentation", "Time Management", "Adaptability", "Problem Solving", "Event Coordination"],
  ["Business & Analysis", "Financial Analysis", "Equity Research", "Stock Market", "Operations"],
  ["Languages", "Marathi", "English", "Hindi"],
];

const startupCards = [
  ["SYGNIX LABS", "Future public R&D ecosystem focused on robotics, AI systems, IoT infrastructure and innovation acceleration.", "Building a collaborative engineering ecosystem for next-generation creators."],
  ["AURORA ECOSYSTEM", "Expanding Aurora from a smart orb into a complete ambient AI interaction platform.", "Human-centered holographic AI experiences integrated into everyday environments."],
  ["PHANTOM NETWORKS", "Research initiative exploring decentralized communication and distributed intelligence systems.", "Future resilient communication ecosystems."],
  ["ARANYASYNC INITIATIVE", "Environmental intelligence ecosystem for forests, wildlife and smart ecological monitoring.", "Technology assisting environmental sustainability and ecosystem protection."],
  ["MEDIROUTE PLATFORM", "Healthcare intelligence platform designed to improve emergency routing and medical accessibility.", "Accessible intelligent healthcare systems powered by realtime technology."],
];

const journeyYears = ["2020", "2021", "2022", "2023", "2024-2025", "2026"];

function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function grouped(projects: Project[]) {
  return projects.reduce<Record<string, Project[]>>((acc, project) => {
    acc[project.year] = [...(acc[project.year] ?? []), project];
    return acc;
  }, {});
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-10">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

function AuroraOrb({ message }: { message: string }) {
  return (
    <div className="aurora-assistant" aria-label="Aurora assistant status">
      <div className="aurora-core">
        <span />
        <span />
      </div>
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.28em] text-cyan">Aurora online</p>
        <p className="text-sm text-ink">{message}</p>
      </div>
    </div>
  );
}

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <article id={`project-${slug(project.name)}`} className={`project-card ${active ? "project-card-active" : ""}`}>
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

function ProjectGrid({ projects, activeProject }: { projects: Project[]; activeProject: string | null }) {
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [auroraMessage, setAuroraMessage] = useState("Ecosystem stable. 65 systems indexed.");
  const [expandedFlagship, setExpandedFlagship] = useState("AURORA 3.0");
  const reduceMotion = useReducedMotion();
  const highlightTimer = useRef<number | null>(null);

  const timelineTargets = useMemo(
    () => ({
      "2020": "Foundation & Learning Phase",
      "2021": "Robotics, Aurora & Early Innovations",
      "2022": "IoT & Real-World Systems Phase",
      "2023": "Advanced Software & Innovations",
      "2024-2025": "Transition to Flagship Engineering Phase",
      "2026": "Flagship Systems & Professional Engineering Phase",
    }),
    [],
  );

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setMenuOpen(false);
  };

  const locateProject = (projectName: string) => {
    setAuroraMessage(`Locating ${projectName}...`);
    setActiveProject(projectName);
    document.getElementById(`project-${slug(projectName)}`)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "center",
    });
    if (highlightTimer.current) window.clearTimeout(highlightTimer.current);
    highlightTimer.current = window.setTimeout(() => {
      setActiveProject(null);
      setAuroraMessage("Ecosystem stable. 65 systems indexed.");
    }, 3200);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-void text-ink">
      <div className="fixed inset-0 -z-10">
        <div className="cosmic-grid" />
        <div className="aurora-field" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/78 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
              <CircuitBoard size={18} />
            </span>
            <span className="text-left">
              <span className="block font-display text-sm font-semibold tracking-wide">Swadeep Bansode</span>
              <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-mute">SYGNIX OS</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(([label, id]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="nav-pill">
                {label}
              </button>
            ))}
          </div>

          <button className="icon-button lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-4 mb-3 rounded-2xl border border-white/10 bg-panel/95 p-2 shadow-glow lg:hidden"
            >
              {navItems.map(([label, id]) => (
                <button key={id} onClick={() => scrollToSection(id)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-ink hover:bg-white/8">
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 pt-28 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
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
                <a className="primary-button" href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection("contact"); }}>
                  <Send size={17} /> Contact
                </a>
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
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="hero-visual">
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
              <AuroraOrb message={auroraMessage} />
            </motion.div>
          </div>
        </section>

        <section id="profile" className="content-section">
          <SectionTitle eyebrow="Profile · v1.0" title="About Swadeep" subtitle="IoT hardware engineer, robotics developer, innovator. Builder of AURORA. Lead of SYGNIX." />
          <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {[
              ["Origin", "Started with Arduino, robotics, and curiosity — with strong mentorship from Bishwa Ranjan Behara and Chhaya Marbate, who helped shape the foundation of my engineering journey."],
              ["Build", "Embedded C/C++, ESP32, FreeRTOS, sensor fusion, robotics systems, IoT meshes and PCB engineering."],
              ["Lead", "Founded SYGNIX. Built Aurora ecosystems and startup-grade engineering systems."],
              ["Mentor", "Mentor at Atal Tinkering Lab and independent innovation mentor helping students build IoT projects."],
            ].map(([title, copy]) => (
              <div key={title} className="glass-panel">
                <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-mute">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6 lg:px-8">
  <div
    className="
      group relative overflow-hidden
      rounded-[32px]
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-2xl
      p-6 md:p-8
      transition-all duration-500
      hover:-translate-y-2
      hover:border-cyan/40
      hover:shadow-[0_0_60px_rgba(0,255,255,0.18)]
    "
  >
    {/* Aurora Glow */}
    <div
      className="
        absolute -left-24 -top-24
        h-56 w-56
        rounded-full
        bg-cyan/20
        blur-3xl
        transition-all duration-700
        group-hover:scale-125
      "
    />

    <div
      className="
        absolute -bottom-24 -right-24
        h-56 w-56
        rounded-full
        bg-violet-500/20
        blur-3xl
        transition-all duration-700
        group-hover:scale-125
      "
    />

    {/* Animated Grid */}
    <div
      className="
        absolute inset-0 opacity-[0.06]
        [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
        [background-size:40px_40px]
      "
    />

    {/* Top Shine */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-r
        from-transparent
        via-white/10
        to-transparent
        -translate-x-[120%]
        group-hover:translate-x-[120%]
        transition-transform duration-1500
      "
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
      
      {/* Icon */}
      <div
        className="
          flex h-20 w-20 items-center justify-center
          rounded-3xl
          border border-cyan/20
          bg-cyan/10
          shadow-[0_0_30px_rgba(0,255,255,0.25)]
        "
      >
        <BrainCircuit
          className="
            h-10 w-10 text-cyan
            transition-transform duration-500
            group-hover:scale-110 group-hover:rotate-6
          "
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="
              rounded-full
              border border-cyan/30
              bg-cyan/10
              px-4 py-1
              text-xs font-semibold
              uppercase tracking-[0.25em]
              text-cyan
            "
          >
            Engineering Philosophy
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
        </div>

        <p
          className="
            text-base leading-relaxed
            text-white/75
            md:text-lg
          "
        >
          Think{" "}
          <span className="font-semibold text-cyan">
            hardware-first
          </span>
          , validate in the{" "}
          <span className="font-semibold text-white">
            real world
          </span>
          , engineer systems that stay reliable under pressure,
          and mentor the next generation while continuously
          shipping impactful innovation.
        </p>
      </div>
    </div>
  </div>
</div>
        </section>

        <section id="timeline" className="content-section">
          <SectionTitle eyebrow="Timeline active" title="Engineering Journey" subtitle="Evolution from 6th standard hardware experiments to B.Tech in CSE with IoT, Cybersecurity & Blockchain, and flagship ecosystems." />
          <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
            {journeyYears.map((year) => (
              <button key={year} className="timeline-card" onClick={() => locateProject(timelineTargets[year as keyof typeof timelineTargets])}>
                <span>{year}</span>
                <strong>{timelineTargets[year as keyof typeof timelineTargets]}</strong>
                <small>Tap to locate card</small>
              </button>
            ))}
          </div>
        </section>

        <section id="systems" className="content-section">
          <SectionTitle eyebrow="45 systems online" title="Hardware Lab" subtitle="Embedded systems · Robotics · IoT · PCB design · Sensor fusion." />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProjectGrid projects={hardwareProjects} activeProject={activeProject} />
          </div>
        </section>

        <section id="software" className="content-section">
          <SectionTitle eyebrow="20 stacks deployed" title="Software Stack" subtitle="Web · Mobile apps · Dashboards · AI tooling." />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProjectGrid projects={softwareProjects} activeProject={activeProject} />
          </div>
        </section>

        <section id="flagships" className="content-section">
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

        <section id="startup" className="content-section">
          <SectionTitle eyebrow="Startup Ecosystem" title="Building Beyond Projects" subtitle="Transforming experimental systems into scalable innovation ecosystems." />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="startup-dashboard">
              <div>
                <p className="section-eyebrow text-left">Founder philosophy</p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Build systems that solve real-world problems while inspiring the next generation of engineers.</h3>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {["R&D", "Mentor", "Ship"].map((metric, index) => (
                  <div key={metric} className="metric-tile">
                    <strong>{index === 0 ? "05" : index === 1 ? "ATL" : "65"}</strong>
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
              {["Q1 — Aurora 3.0", "Q2 — AranyaSync Mesh", "Q3 — Phantom Grid Pilot", "Q4 — SYGNIX Lab"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section id="achievements" className="content-section">
          <SectionTitle eyebrow="Trophy Room" title="Achievements" subtitle="Wins, podiums and recognitions across the engineering circuit." />
          <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            {achievements.map(([year, ...items]) => (
              <div key={year} className="glass-panel">
                <Trophy className="mb-4 text-solar" />
                <h3 className="font-display text-xl font-semibold text-ink">{year}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-mute">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
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

        <section id="experience" className="content-section">
          <SectionTitle eyebrow="Career Timeline" title="Experience & Leadership" subtitle="Leadership, teaching, analysis and mentorship across engineering communities." />
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {[
              ["LEAD", "SYGNIX", "Leading hardware, software, AI and robotics ecosystem initiatives."],
              ["TEACHER", "Diamond Student Classes", "Teaching engineering & STEM fundamentals."],
              ["FINANCIAL ANALYST", "Gravitas Masters", "Equity research, financial analysis and market operations."],
              ["MENTOR", "Atal Tinkering Lab", "Mentoring students in robotics, IoT and innovation."],
              ["INNOVATION & IOT MENTOR", "Independent", "Cross-school mentorship for engineering projects."],
            ].map(([role, org, copy]) => (
              <div key={org} className="experience-row">
                <span>{role}</span>
                <strong>{org}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ecosystem" className="content-section">
          <SectionTitle eyebrow="Ecosystem · v1.0" title="SYGNIX" subtitle="An innovation ecosystem fusing hardware, software, AI and robotics." />
          <div className="mx-auto grid max-w-6xl gap-3 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
            {["Hardware Systems", "Software & AI", "Research & R&D", "Hackathons & Events", "Team Philosophy"].map((item) => (
              <div key={item} className="ecosystem-node">{item}</div>
            ))}
          </div>
          <p className="mx-auto mt-7 max-w-2xl px-4 text-center font-display text-2xl text-white/84">“Build relentlessly. Ship boldly. Mentor generously.”</p>
        </section>

        <section id="contact" className="content-section pb-10">
          <SectionTitle eyebrow="Contact" title="Collaborations, mentorship, weird hardware ideas" subtitle="All welcome." />
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div className="glass-panel">
              <AuroraOrb message="Ready to route new collaboration signal." />
              <div className="mt-8 space-y-3">
                <a className="contact-link" href="mailto:swadeepbansode@gmail.com"><Mail size={18} /> swadeepbansode@gmail.com</a>
                <a className="contact-link" href="https://github.com/iaminnovator-07" target="_blank" rel="noreferrer"><TerminalSquare size={18} /> GitHub</a>
                <a className="contact-link" href="https://www.linkedin.com/in/swadeep-bansode-849925210" target="_blank" rel="noreferrer"><ArrowUpRight size={18} /> LinkedIn</a>
                <a className="contact-link" href="https://www.instagram.com/inventor_sdb_07?igsh=MW1zbXduMW9peW1hZg=="><Sparkles size={18} /> Instagram</a>
              </div>
            </div>
            <form className="glass-panel" action="mailto:swadeepbansode@gmail.com" method="post" encType="text/plain">
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="name" placeholder="Name" className="field" />
                <input name="email" type="email" placeholder="Email" className="field" />
              </div>
              <input name="subject" placeholder="Signal type" className="field mt-3" />
              <textarea name="message" placeholder="Project, mentorship or collaboration details" className="field mt-3 min-h-36 resize-none" />
              <button className="primary-button mt-4 w-full justify-center" type="submit"><Send size={17} /> Transmit</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">SYGNIX</h2>
            <p className="mt-3 text-sm leading-6 text-mute">Engineering the future through hardware, AI & intelligent systems.</p>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-cyan">Built by Swadeep Bansode</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(([label, id]) => <button key={id} onClick={() => scrollToSection(id)} className="footer-link">{label}</button>)}
          </div>
          <div className="space-y-3 text-sm text-mute">
            <p><ShieldCheck className="mr-2 inline text-mint" size={16} /> Ecosystem status: operational</p>
            <p><TerminalSquare className="mr-2 inline text-cyan" size={16} /> Version: v1.0</p>
            <p><Rocket className="mr-2 inline text-solar" size={16} /> Deployment: Vercel-ready</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
