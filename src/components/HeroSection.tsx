import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Initial setup
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100
    });

    // Animation sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");

    // Floating animations for background elements
    gsap.to(".glow-orb-1", {
      y: -20,
      x: 10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to(".glow-orb-2", {
      y: 15,
      x: -15,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 1
    });

    gsap.to(".glow-orb-3", {
      y: -25,
      x: 20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 2
    });

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Spline 3D */}
      <div
        ref={splineRef}
        className="absolute inset-0 z-0"
      >
        <iframe
          src="https://my.spline.design/orb-OTNMYWJr69T74EijkrR0Nk9t/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Background Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb-1 absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary opacity-20 blur-3xl"></div>
        <div className="glow-orb-2 absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary opacity-15 blur-2xl"></div>
        <div className="glow-orb-3 absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-accent opacity-25 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="gradient-text font-medium">Yashaswi Priya</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground">
            a CS Undergrad at IIIT Ranchi
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
        >
          I build clean, functional frontends, craft full-stack projects, and explore the exciting world of AI.
        </p>

        <button
          ref={ctaRef}
          onClick={scrollToContact}
          className="btn-hero group"
        >
          <span className="relative z-10">Hire Me</span>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-glow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-glow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;