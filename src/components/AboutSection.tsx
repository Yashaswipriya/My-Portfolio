import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FileHtml, 
  FileCss, 
  Gear, 
  Atom, 
  TreeStructure,
  Database,
  PaintBrush,
  CodeSimple,
  ShieldCheck,
  GithubLogo,
  Wrench
} from "phosphor-react";
import profile from "@/assets/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: "HTML", Icon: FileHtml },
    { name: "CSS", Icon: FileCss },
    { name: "JavaScript", Icon: CodeSimple },
    { name: "React.js", Icon: Atom },
    { name: "Node.js", Icon: TreeStructure },
    { name: "Next.js", Icon: Atom },
    { name: "Express.js", Icon: Gear },
    { name: "MongoDB", Icon: Database },
    { name: "Tailwind CSS", Icon: PaintBrush },
    { name: "Shadcn UI", Icon: PaintBrush },
    { name: "TypeScript", Icon: CodeSimple },
    { name: "Auth0", Icon: ShieldCheck },
    { name: "GitHub", Icon: GithubLogo },
    { name: "Postman", Icon: Wrench }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const skillsGrid = skillsRef.current;

    if (!section || !image || !content || !skillsGrid) return;

    // Initial setup
    gsap.set(image, { opacity: 0, x: -100, filter: "blur(10px)" });
    gsap.set(content, { opacity: 0, y: 50, filter: "blur(10px)" });
    gsap.set(skillsGrid.children, { opacity: 0, y: 30, scale: 0.8 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(image, {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(content, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(skillsGrid.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.4");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative group">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={profile}
                alt="Yashaswi Priya"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 glow-primary"></div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                About <span className="gradient-text font-medium">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                I'm currently pursuing Computer Science at IIIT Ranchi, where I've developed an interest in frontend and full-stack web development. I enjoy bringing ideas to life through projects that balance functionality, performance, and user experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light mt-4">
                I'm also quick to adapt to tools that make me work smarter, from modern frameworks that speed up development to AI-assisted tools like GitHub Copilot that help me write cleaner code faster.
              </p>
            </div>

            {/* Skills Grid */}
            <div>
              <h3 className="text-xl font-medium mb-6 gradient-text">Tech Stack</h3>
              <div ref={skillsRef} className="grid grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <skill.Icon 
                      size={32} 
                      weight="light"
                      className="mx-auto mb-2 text-primary group-hover:text-primary-glow transition-colors"
                    />
                    <span className="text-xs font-light text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;