import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Rocket, ShieldCheck, TerminalSquare, X } from "lucide-react";
import { navItems } from "./data";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import SystemsPage from "./pages/Systems";
import FlagshipsPage from "./pages/Flagships";
import StartupPage from "./pages/Startup";
import SkillsPage from "./pages/Skills";
import ContactPage from "./pages/Contact";

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    if (reduceMotion) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, reduceMotion]);

  return (
    <div className="min-h-screen overflow-hidden bg-void text-ink">
      <div className="fixed inset-0 -z-10">
        <div className="cosmic-grid" />
        <div className="aurora-field" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/78 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="Go to home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan shadow-glow">
              <Rocket size={18} />
            </span>
            <span className="text-left">
              <span className="block font-display text-sm font-semibold tracking-wide">Swadeep Bansode</span>
              <span className="block text-[0.62rem] uppercase tracking-[0.22em] text-mute">SYGNIX OS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-pill ${isActive ? "bg-white/10 text-white" : ""}`}>
                {item.label}
              </NavLink>
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
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => `block w-full rounded-xl px-4 py-3 text-left text-sm text-ink hover:bg-white/8 ${isActive ? "bg-white/10" : ""}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/systems" element={<SystemsPage />} />
          <Route path="/flagships" element={<FlagshipsPage />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink">SYGNIX</h2>
            <p className="mt-3 text-sm leading-6 text-mute">Engineering the future through hardware, AI & intelligent systems.</p>
            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-cyan">Built by Swadeep Bansode</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className="footer-link">
                {item.label}
              </NavLink>
            ))}
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

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
