import { useState } from 'react';
import { PERSONAL_INFO, EDUCATION, PROJECTS } from '@/data/portfolio';

const About = () => {
  const [portraitError, setPortraitError] = useState(false);

  return (
    <section
      id="about"
      className="py-20 sm:py-32 px-4 sm:px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#030303]"
      aria-label="About me"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Portrait */}
        <div className="col-span-12 md:col-span-5 relative flex justify-center md:justify-start">
          <div className="about-img-wrapper relative w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-[3/4] border border-white/10 p-2 transform -rotate-3 overflow-hidden group">
            <div className="w-full h-full relative overflow-hidden bg-[#111]">
              {/* Portrait photo — place your photo at public/images/portrait.jpg */}
              {portraitError ? (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-6xl font-display font-black text-white/20">TH</span>
                </div>
              ) : (
                <img
                  src="/images/portrait.jpg"
                  alt={`Ảnh chân dung ${PERSONAL_INFO.name}`}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  onError={() => setPortraitError(true)}
                />
              )}
            </div>

            {/* Spinning badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-right-10 lg:-right-12 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-black border border-white/10 rounded-full flex items-center justify-center text-[8px] sm:text-[10px] uppercase tracking-widest text-accent font-bold z-20 animate-[spin_10s_linear_infinite]">
              OPEN TO WORK
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center pt-8 sm:pt-12 md:pt-0">
          <h2 className="text-xs text-accent font-bold tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Who am I
          </h2>
          <h3 className="about-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1] mb-6 sm:mb-8">
            BUILDING THE BRIDGE
            <br />
            BETWEEN <span className="text-stroke">IDEAS</span> &<br />
            REALITY.
          </h3>
          <p className="about-text text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mb-6 sm:mb-8">
            {PERSONAL_INFO.bioVi}
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-accent">
                {PROJECTS.length}
              </div>
              <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">
                Projects
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-accent">4th</div>
              <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">
                Year Student
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-display font-black text-accent">Lead</div>
              <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-wider mt-1">
                Team Role
              </div>
            </div>
          </div>

          {/* Education badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border border-white/10 rounded-lg">
            <div className="w-2 h-2 bg-accent-2 rounded-full flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold truncate">{EDUCATION.school}</div>
              <div className="text-[10px] sm:text-xs text-white/50">
                {EDUCATION.major} • {EDUCATION.period}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
