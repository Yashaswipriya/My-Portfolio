import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(progressRef.current, { width: "0%" });
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    // Animation sequence
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    })
    .to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out"
    }, "-=0.3")
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 0.3
    })
    .to(loaderRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="text-center space-y-8">
        {/* Logo/Name */}
        <div ref={textRef} className="space-y-2 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-light tracking-wider gradient-text">
            Yashaswi Priya
          </h1>
          <p className="text-lg text-muted-foreground font-light tracking-wide">
            Loading Experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-100 h-1 bg-surface rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="h-full loading-bar"
          />
        </div>
      </div>

      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl bg-primary"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-10 blur-2xl bg-secondary"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full opacity-15 blur-2xl bg-accent"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;