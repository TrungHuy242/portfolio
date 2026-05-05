import { GraduationCap, Users } from 'lucide-react';
import { EDUCATION, ACTIVITIES, PROJECTS } from '@/data/portfolio';

const Experience = () => {
  // Build timeline from projects + activities
  const timelineItems = [
    ...PROJECTS.map((p) => ({
      year: p.period,
      title: p.role,
      subtitle: p.title,
      description: p.highlights.join('. ') + '.',
      type: 'project' as const,
    })),
    ...ACTIVITIES.map((a) => ({
      year: a.period,
      title: a.title,
      subtitle: a.organization,
      description: a.description,
      type: 'activity' as const,
    })),
  ];

  return (
    <section
      className="py-32 px-6 md:px-12 relative z-10"
      aria-label="Experience & Education"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-12">
        {/* Left sticky column */}
        <div className="col-span-12 lg:col-span-4 relative">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-xs text-accent font-bold tracking-[0.3em] uppercase mb-6">Journey</h2>
            <h3 className="text-5xl md:text-7xl font-display font-black uppercase leading-none overflow-hidden pb-4">
              <span className="exp-title inline-block">Experience</span>
            </h3>
            <p className="text-white/50 mt-6 max-w-sm text-sm leading-relaxed">
              Hành trình học tập và phát triển kỹ năng thông qua các dự án thực tế và hoạt động nhóm.
            </p>

            {/* Education card */}
            <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap size={20} className="text-accent" />
                <h4 className="text-sm font-bold uppercase tracking-wider">Học vấn</h4>
              </div>
              <div className="text-lg font-display font-bold">{EDUCATION.major}</div>
              <div className="text-sm text-white/50 mt-1">{EDUCATION.school}</div>
              <div className="text-xs text-accent font-mono mt-2">{EDUCATION.period}</div>
            </div>
          </div>
        </div>

        {/* Right scrolling column — Timeline */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8 md:gap-16 mt-12 lg:mt-0">
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className="exp-card group relative bg-surface/90 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl hover:border-accent/30 transition-colors duration-500"
              style={{ zIndex: 10 + i }}
            >
              {/* Type badge */}
              <div className="absolute top-6 right-6">
                {item.type === 'activity' ? (
                  <div className="flex items-center gap-2 px-3 py-1 bg-accent-2/10 border border-accent-2/30 rounded-full text-[10px] text-accent-2 font-bold uppercase tracking-wider">
                    <Users size={12} /> Leadership
                  </div>
                ) : (
                  <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[10px] text-accent font-bold uppercase tracking-wider">
                    Project
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-6">
                <div className="text-accent text-sm md:text-lg font-bold font-mono tracking-wider">{item.year}</div>
                <h4 className="text-2xl md:text-3xl font-display font-bold pr-20 md:pr-0">{item.title}</h4>
              </div>
              <p className="text-lg text-white/50 mb-6 uppercase tracking-widest">{item.subtitle}</p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
