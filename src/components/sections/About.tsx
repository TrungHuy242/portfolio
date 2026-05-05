import { PERSONAL_INFO, EDUCATION } from '@/data/portfolio';

const About = () => {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 relative z-10 border-t border-white/5 bg-[#030303]"
      aria-label="About me"
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-12 gap-12 items-center">
        {/* Portrait */}
        <div className="col-span-12 md:col-span-5 relative flex justify-center md:justify-start">
          <div className="about-img-wrapper relative w-[250px] md:w-[350px] aspect-[3/4] border border-white/10 p-2 transform -rotate-3 overflow-hidden group">
            <div className="w-full h-full relative overflow-hidden bg-[#111]">
              {/* Portrait photo — place your photo at public/images/portrait.jpg */}
              <img
                src="/images/portrait.jpg"
                alt={`Ảnh chân dung ${PERSONAL_INFO.name}`}
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  // Fallback to initials if image not found
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('flex', 'items-center', 'justify-center');
                    parent.innerHTML = '<span class="text-6xl font-display font-black text-white/20">TH</span>';
                  }
                }}
              />
            </div>

            {/* Spinning badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 w-32 h-32 bg-black border border-white/10 rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest text-accent font-bold z-20 animate-[spin_10s_linear_infinite]">
              OPEN TO WORK
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center pt-12 md:pt-0">
          <h2 className="text-xs text-accent font-bold tracking-[0.3em] uppercase mb-6">Who am I</h2>
          <h3 className="about-title text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight leading-[1.1] mb-8">
            BUILDING THE BRIDGE<br />
            BETWEEN <span className="text-stroke">IDEAS</span> &<br />
            REALITY.
          </h3>
          <p className="about-text text-lg text-white/60 font-light leading-relaxed max-w-2xl mb-8">
            {PERSONAL_INFO.bio}
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 max-w-md">
            <div>
              <div className="text-3xl font-display font-black text-accent">3+</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-display font-black text-accent">4th</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Year Student</div>
            </div>
            <div>
              <div className="text-3xl font-display font-black text-accent">Lead</div>
              <div className="text-xs text-white/40 uppercase tracking-wider mt-1">Team Role</div>
            </div>
          </div>

          {/* Education badge */}
          <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-lg">
            <div className="w-2 h-2 bg-accent-2 rounded-full" />
            <div>
              <div className="text-sm font-bold">{EDUCATION.school}</div>
              <div className="text-xs text-white/50">{EDUCATION.major} • {EDUCATION.period}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
