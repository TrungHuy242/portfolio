import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '@/data/portfolio';

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 relative z-10 bg-[#020202]"
      aria-label="Projects"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-24">
          <h2 className="text-xs text-accent-2 font-bold tracking-[0.3em] uppercase mb-4">
            Dự Án Nổi Bật
          </h2>
          <h3 className="text-5xl md:text-8xl font-display font-black uppercase text-stroke">
            My Projects
          </h3>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-y-24">
          {PROJECTS.map((proj) => (
            <article key={proj.id} className={`project-card group ${proj.gridClass}`}>
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111] mb-6">
                <img
                  src={proj.image}
                  alt={`${proj.title} preview`}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 hover:scale-110"
                    aria-label={`GitHub repository for ${proj.title}`}
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:scale-110"
                    aria-label={`View ${proj.title}`}
                  >
                    <ArrowUpRight strokeWidth={3} size={22} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs text-accent font-bold tracking-[0.2em] uppercase">{proj.role}</span>
                    <span className="text-xs text-white/30">•</span>
                    <span className="text-xs text-white/40 font-mono">{proj.period}</span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-display font-bold mb-3">{proj.title}</h4>
                  <p className="text-white/60 font-light mb-4">{proj.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-mono border border-white/10 rounded-full text-white/60 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-4xl font-display font-black text-white/10 hidden md:block">
                  {proj.id}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
