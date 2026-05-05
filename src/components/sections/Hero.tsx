import { PERSONAL_INFO, PROJECTS } from '@/data/portfolio';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 sm:pt-32 px-4 sm:px-6 md:px-12 pb-12 flex flex-col justify-center relative z-10 overflow-hidden"
      aria-label="Hero"
    >
      <div className="grid grid-cols-12 gap-4 sm:gap-6 w-full max-w-[1600px] mx-auto h-full flex-grow items-center">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center z-20">
          <div className="hero-text-container relative">
            {/* Subtitle badge */}
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 border border-accent/30 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] text-accent uppercase">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse" />
              {PERSONAL_INFO.subtitle}
            </div>

            <h1 className="hero-title font-display text-[48px] sm:text-[64px] md:text-[100px] lg:text-[120px] xl:text-[150px] leading-[0.85] font-black tracking-tighter mix-blend-difference">
              TRUNG<br />
              <span className="text-stroke hover:text-stroke-cyan transition-colors duration-500">HUY</span>
            </h1>

            <div className="mt-6 sm:mt-8 md:mt-12 max-w-md hero-desc opacity-0 transform translate-y-8">
              <p className="text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed">
                {PERSONAL_INFO.role}{' '}
                <span className="italic text-accent font-medium">crafting solutions</span>{' '}
                with ReactJS, Django & modern web technologies.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#projects"
                  className="px-6 sm:px-8 py-3 bg-white text-black font-bold text-xs sm:text-sm tracking-wider hover:-translate-y-1 transition-transform inline-block"
                >
                  VIEW PROJECTS
                </a>
                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 border border-white/20 text-xs sm:text-sm tracking-wider hover:bg-white/10 transition-colors inline-block"
                >
                  CONTACT ME
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Decorative project cards */}
        <div className="col-span-12 md:col-span-5 relative mt-8 sm:mt-16 md:mt-0 h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
          {/* Featured project card */}
          <div className="hero-card-1 absolute top-0 lg:top-[10%] right-0 lg:right-[10%] w-[200px] sm:w-[260px] md:w-[280px] lg:w-[360px] aspect-[4/5] bg-[#111] border border-white/10 p-1 group z-10 opacity-0 transform translate-y-12 rotate-3">
            <div className="relative w-full h-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
              <img
                src={PROJECTS[0].image}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt={PROJECTS[0].title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                <p className="text-[8px] sm:text-[10px] text-accent font-bold tracking-widest mb-1 sm:mb-2 uppercase">Featured Work</p>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-bold">{PROJECTS[0].title}</h3>
              </div>
            </div>
          </div>

          {/* Secondary info card */}
          <div className="hero-card-2 hidden md:block absolute bottom-[5%] lg:bottom-[15%] left-[-5%] lg:left-[-20%] w-[220px] lg:w-[260px] aspect-square bg-surface/80 backdrop-blur-xl border border-white/10 p-4 lg:p-6 shadow-2xl z-20 opacity-0 transform -translate-x-12 -rotate-6">
            <div className="h-full flex flex-col justify-between">
              <div className="text-3xl lg:text-4xl text-white/5 font-bold uppercase font-display">02</div>
              <div>
                <h3 className="text-base lg:text-lg font-bold font-display mb-2">{PROJECTS[1].title}</h3>
                <p className="text-[10px] lg:text-xs text-white/50 mb-3 lg:mb-4 leading-relaxed">{PROJECTS[1].description}</p>
                <div className="w-8 h-[1px] bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-12 flex items-center gap-3 sm:gap-4 text-[10px] tracking-[0.3em] font-medium text-white/40 uppercase" aria-hidden="true">
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-white/40 to-transparent" />
        <span className="rotate-90 origin-left translate-y-4">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
