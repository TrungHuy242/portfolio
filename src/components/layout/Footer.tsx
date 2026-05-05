import { PERSONAL_INFO } from '@/data/portfolio';

const Footer = () => (
  <footer className="py-8 px-6 md:px-12 border-t border-white/5 relative z-10 bg-black flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono tracking-widest text-white/30 uppercase">
    <div>© {new Date().getFullYear()} {PERSONAL_INFO.name}</div>
    <div className="flex gap-8 text-accent/50">
      <span>Status: Open to Work</span>
      <span>Location: {PERSONAL_INFO.location}</span>
    </div>
  </footer>
);

export default Footer;
