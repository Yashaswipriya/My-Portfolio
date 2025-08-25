import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Envelope, LinkedinLogo, Phone, Sparkle } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  const contactItems = [
    {
      icon: Envelope,
      label: "Email",
      value: "yashaswipulukuri@gmail.com",
      href: "mailto:yashaswipulukuri@gmail.com"
    },
    {
      icon: LinkedinLogo,
      label: "LinkedIn",
      value: "Yashaswi Priya",
      href: "https://www.linkedin.com/in/yashaswi-priya-5a5123305/"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94942 93585",
      href: "tel:+919494293585"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const iconsContainer = iconsRef.current;

    if (!section || !card || !iconsContainer) return;

    // Initial setup
    gsap.set(card, { opacity: 0, y: 100, scale: 0.9, filter: "blur(10px)" });
    gsap.set(iconsContainer.children, { opacity: 0, x: -50, scale: 0.8 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .to(iconsContainer.children, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.7)"
    }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          ref={cardRef}
          className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Glow Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-secondary opacity-15 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h2 className="text-3xl md:text-4xl font-light">
                  Let's <span className="gradient-text font-medium">Connect</span>
                </h2>
                <Sparkle size={28} weight="light" className="text-primary-glow" />
              </div>
              <p className="text-lg text-muted-foreground font-light">
                Ready to bring your ideas to life? Let's start a conversation.
              </p>
            </div>

            {/* Contact Items */}
            <div ref={iconsRef} className="space-y-4 max-w-md mx-auto">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-surface-glass w-full"
                >
                  <div className="flex-shrink-0 p-3 rounded-full bg-surface-glass border border-border-glass group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <item.icon 
                      size={24} 
                      weight="light"
                      className="text-primary group-hover:text-primary-glow transition-colors"
                    />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="text-sm text-muted-foreground font-light">
                      {item.label}
                    </div>
                    <div className="text-foreground group-hover:text-primary-glow transition-colors font-medium truncate">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-border-glass">
              <p className="text-muted-foreground font-light">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;