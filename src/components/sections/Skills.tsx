import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SKILLS } from '@/data/portfolio';

const FloatingSkills = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Floating animation for each skill
      gsap.utils.toArray<HTMLElement>('.skill-float').forEach((el) => {
        gsap.to(el, {
          y: Math.random() > 0.5 ? `+=${Math.random() * 20 + 10}` : `-=${Math.random() * 20 + 10}`,
          x: Math.random() > 0.5 ? `+=${Math.random() * 15 + 5}` : `-=${Math.random() * 15 + 5}`,
          rotation: Math.random() * 8 - 4,
          duration: Math.random() * 2 + 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: Math.random() * -2,
        });
      });

      // Parallax mouse movement
      const wrappers = gsap.utils.toArray<HTMLElement>('.skill-wrapper');
      const xTo = wrappers.map(w => gsap.quickTo(w, "x", { duration: 1, ease: "power3" }));
      const yTo = wrappers.map(w => gsap.quickTo(w, "y", { duration: 1, ease: "power3" }));
      const depths = wrappers.map(() => Math.random() * 0.15 + 0.05);

      const handleMouseMove = (e: MouseEvent) => {
        if (!container.current) return;
        const rect = container.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left - centerX;
        const mouseY = e.clientY - rect.top - centerY;

        wrappers.forEach((_w, i) => {
          xTo[i](-mouseX * depths[i]);
          yTo[i](-mouseY * depths[i]);
        });
      };

      const el = container.current;
      el?.addEventListener('mousemove', handleMouseMove);
      return () => { el?.removeEventListener('mousemove', handleMouseMove); };
    }, container);

    return () => ctx.revert();
  }, { scope: container });

  // Category color mapping
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'language': return 'text-accent';
      case 'frontend': return 'text-accent-2';
      case 'backend': return 'text-green-400';
      case 'tool': return 'text-orange-400';
      default: return 'text-white';
    }
  };

  return (
    <section
      id="skills"
      className="py-32 md:py-48 px-6 md:px-12 border-y border-white/5 bg-black/40 relative z-10 overflow-hidden text-center"
      ref={container}
      aria-label="Skills"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <h2 className="text-xs text-accent font-bold tracking-[0.3em] uppercase mb-4 relative z-10">Tech Stack</h2>
      <p className="text-sm text-white/40 mb-16 relative z-10">Hover to explore</p>

      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-20 relative z-10">
        {SKILLS.map((skill, index) => {
          const isLarge = index % 4 === 0;
          const isMedium = index % 4 === 1 || index % 4 === 2;
          const sizeClass = isLarge ? 'text-5xl md:text-8xl' : (isMedium ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl');
          const isFilled = index % 5 === 0;

          return (
            <div key={skill.name} className="skill-wrapper inline-block relative group">
              <div className="skill-float inline-block relative">
                <div
                  className="hover-target inline-block cursor-default relative z-10"
                  onMouseEnter={(e) => {
                    gsap.to(e.currentTarget, { scale: 1.2, duration: 0.4, ease: 'back.out(1.7)' });
                    const tooltip = e.currentTarget.parentElement?.querySelector('.skill-tooltip') as HTMLElement | null;
                    if (tooltip) {
                      gsap.to(tooltip, {
                        opacity: 1, y: -15, scale: 1, visibility: 'visible',
                        duration: 0.3, ease: 'back.out(1.5)', delay: 0.05,
                      });
                    }
                    if (!isFilled) {
                      gsap.to(e.currentTarget.querySelector('span'), {
                        opacity: 1, color: '#fff',
                        webkitTextStroke: '1px rgba(255, 255, 255, 1)',
                        duration: 0.3,
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    gsap.to(e.currentTarget, { scale: 1, duration: 0.4, ease: 'power3.out' });
                    const tooltip = e.currentTarget.parentElement?.querySelector('.skill-tooltip') as HTMLElement | null;
                    if (tooltip) {
                      gsap.to(tooltip, {
                        opacity: 0, y: 0, scale: 0.9, duration: 0.2, ease: 'power2.in',
                        onComplete: () => { gsap.set(tooltip, { visibility: 'hidden' }); },
                      });
                    }
                    if (!isFilled) {
                      gsap.to(e.currentTarget.querySelector('span'), {
                        opacity: 0.7, color: 'transparent',
                        webkitTextStroke: '1px rgba(255, 255, 255, 0.4)',
                        duration: 0.3,
                      });
                    }
                  }}
                >
                  <span className={`font-display font-black tracking-tighter ${sizeClass} ${isFilled ? 'text-white' : 'text-stroke opacity-70'} pointer-events-none`}>
                    {skill.name}
                  </span>
                </div>

                {/* Tooltip */}
                <div
                  className="skill-tooltip absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-44 p-3 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible flex flex-col items-center pointer-events-none z-50 text-center"
                  style={{ transformOrigin: 'bottom center', transform: 'scale(0.9) translateY(0)' }}
                  role="tooltip"
                >
                  <div className="text-sm font-bold text-white mb-1 font-sans">{skill.fullName}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider ${getCategoryColor(skill.category)}`}>
                    {skill.category}
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-zinc-900" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Category legend */}
      <div className="mt-16 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider relative z-10">
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent rounded-full" /> Language</div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-accent-2 rounded-full" /> Frontend</div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" /> Backend</div>
        <div className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full" /> Tool</div>
      </div>
    </section>
  );
};

export default FloatingSkills;
