import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/data/portfolio';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 sm:h-20 px-4 sm:px-6 md:px-12 flex items-center justify-between z-40 backdrop-blur-md border-b border-white/5 bg-black/20"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Brand */}
      <a
        href="#"
        className="font-display text-xl sm:text-2xl font-bold tracking-tighter hover-target"
      >
        T<span className="text-accent">.</span>HUY
      </a>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 lg:gap-12 text-xs sm:text-sm font-medium uppercase tracking-widest text-white/60">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 lg:px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-bold group flex items-center gap-2"
        >
          RESUMÉ
          <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:bg-black transition-colors" />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 hover-target min-w-[44px] min-h-[44px] flex items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-6 sm:gap-8 pb-[env(safe-area-inset-bottom)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-wider text-white/80 hover:text-accent transition-colors active:text-accent"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {/* Resume link in mobile menu */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 border border-accent/50 rounded-full text-accent text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-black transition-all"
            onClick={() => setMobileOpen(false)}
          >
            RESUMÉ ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
