export type Project = {
  year: string;
  status?: string;
  name: string;
  description: string;
  tags: string[];
};

export type Flagship = {
  name: string;
  status: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  impact: string;
  progress: number;
};

export const navItems = [
  { label: "Profile", to: "/profile" },
  { label: "Systems", to: "/systems" },
  { label: "Flagships", to: "/flagships" },
  { label: "Startup", to: "/startup" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

export const hardwareProjects: Project[] = [
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

export const softwareProjects: Project[] = [
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

export const flagships: Flagship[] = [
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

export const skillGroups = [
  ["Technical", "Embedded C", "Embedded C++", "Embedded Systems", "PCB Design", "System Architecture", "FreeRTOS", "ESP8266", "ESP32", "Raspberry Pi", "Arduino", "Sensors", "Robotics", "IoT", "Software Development", "Web Development", "Programming", "Firebase", "Cloud Firestore", "AutoCAD"],
  ["Soft Skills", "Leadership", "Team Management", "Communication", "Public Speaking", "Teaching", "Project Management", "Innovation Mindset", "Decision-Making", "Analytical Thinking", "Logical Reasoning", "Critical Thinking", "Teamwork", "Creativity", "Observation", "Presentation", "Time Management", "Adaptability", "Problem Solving", "Event Coordination"],
  ["Business & Analysis", "Financial Analysis", "Equity Research", "Stock Market", "Operations"],
  ["Languages", "Marathi", "English", "Hindi"],
];

export const startupCards = [
  ["SYGNIX LABS", "Future public R&D ecosystem focused on robotics, AI systems, IoT infrastructure and innovation acceleration.", "Building a collaborative engineering ecosystem for next-generation creators."],
  ["AURORA ECOSYSTEM", "Expanding Aurora from a smart orb into a complete ambient AI interaction platform.", "Human-centered holographic AI experiences integrated into everyday environments."],
  ["PHANTOM NETWORKS", "Research initiative exploring decentralized communication and distributed intelligence systems.", "Future resilient communication ecosystems."],
  ["ARANYASYNC INITIATIVE", "Environmental intelligence ecosystem for forests, wildlife and smart ecological monitoring.", "Technology assisting environmental sustainability and ecosystem protection."],
  ["MEDIROUTE PLATFORM", "Healthcare intelligence platform designed to improve emergency routing and medical accessibility.", "Accessible intelligent healthcare systems powered by realtime technology."],
];

export function slug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function grouped(projects: Project[]) {
  return projects.reduce<Record<string, Project[]>>((acc, project) => {
    acc[project.year] = [...(acc[project.year] ?? []), project];
    return acc;
  }, {});
}
