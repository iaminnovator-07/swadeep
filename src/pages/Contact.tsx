import { ArrowUpRight, Mail, Send, Sparkles, TerminalSquare } from "lucide-react";
import AuroraOrb from "../components/AuroraOrb";
import SectionTitle from "../components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="content-section pb-10">
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
  );
}
