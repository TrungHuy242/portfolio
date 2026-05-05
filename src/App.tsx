import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// UI
import CustomCursor from '@/components/ui/CustomCursor';
import Preloader from '@/components/ui/Preloader';
import BackgroundAtmosphere from '@/components/ui/BackgroundAtmosphere';

// Layout
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Sections — reordered: Projects before Experience/Skills
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import FloatingSkills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null);

  // Scroll-triggered animations — runs after preloader completes
  useGSAP(() => {
    if (loading) return;

    // Hero entry animations
    gsap.to('.hero-desc', { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" });
    gsap.to('.hero-card-1', { y: 0, opacity: 1, rotate: 0, duration: 1.2, delay: 0.4, ease: "power4.out" });
    gsap.to('.hero-card-2', { x: 0, opacity: 1, rotate: 0, duration: 1.2, delay: 0.6, ease: "power4.out" });

    // About section scroll animations
    gsap.from('.about-title', {
      scrollTrigger: { trigger: '#about', start: "top 70%" },
      y: 50, opacity: 0, duration: 1, ease: "power3.out",
    });
    gsap.from('.about-text', {
      scrollTrigger: { trigger: '#about', start: "top 60%" },
      y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out",
    });

    // Project cards stagger
    gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 80, opacity: 0, duration: 1, ease: "power3.out",
      });
    });

    // Experience cards
    gsap.utils.toArray<HTMLElement>('.exp-card').forEach((card) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 85%" },
        y: 60, opacity: 0, duration: 0.8, ease: "power3.out",
      });
    });

  }, { scope: container, dependencies: [loading] });

  return (
    <main ref={container} id="main-content" className="relative min-h-screen bg-bg">
      <CustomCursor />
      <BackgroundAtmosphere />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <FloatingSkills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
