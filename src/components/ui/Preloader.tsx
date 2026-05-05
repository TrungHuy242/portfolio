import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    tl.to('.preloader-char', {
      y: 0,
      opacity: 1,
      stagger: 0.04,
      duration: 0.8,
      ease: "power4.out",
      delay: 0.1,
    })
    .to('.preloader-bar', {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.inOut",
    }, "-=0.3")
    .to('.preloader-char', {
      y: -50,
      opacity: 0,
      stagger: 0.02,
      duration: 0.4,
      ease: "power2.in",
    })
    .to('.preloader-bar', {
      scaleY: 0,
      opacity: 0,
      duration: 0.3,
    }, "-=0.3")
    .to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: "expo.inOut",
    });
  });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-bg flex flex-col items-center justify-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="overflow-hidden flex gap-1 mb-8">
        {"TRUNGHUY".split("").map((c, i) => (
          <span
            key={i}
            className="preloader-char text-5xl md:text-8xl font-black font-display translate-y-full opacity-0"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="w-64 h-[2px] bg-white/10 overflow-hidden">
        <div className="preloader-bar w-full h-full bg-accent origin-left scale-x-0" />
      </div>
    </div>
  );
};

export default Preloader;
