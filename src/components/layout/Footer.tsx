import { PERSONAL_INFO } from '@/data/portfolio';

const Footer = () => (
  <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-12 border-t border-white/5 relative z-10 bg-black flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-white/30 uppercase text-center sm:text-left">
    <div>© {new Date().getFullYear()} {PERSONAL_INFO.name}</div>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 text-accent/50">
      <span>Status: Open to Work</span>
      <span>Location: {PERSONAL_INFO.location}</span>
    </div>
  </footer>
);

export default Footer;
