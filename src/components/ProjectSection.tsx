import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Code, ArrowRight } from "phosphor-react";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "LegalLens AI",
      description: "An AI-powered contract analysis tool that extracts risky clauses, summarizes insights, and suggests safer alternatives. Includes PDF upload, dashboard, and downloadable reports.",
      image: project1,
      tech: ["Node.js", "Express", "MongoDB", "Gemini API", "Next.js", "TypeScript"],
      liveUrl: "https://legal-lens-ai-tan.vercel.app/",
      codeUrl: "https://github.com/Yashaswipriya/LegalLens-AI"
    },
    {
      id: 2,
      title: "Job Finder",
      description: "A job platform with two UIs, employers can post and manage jobs, while candidates search and filter roles by skills, location, and company. Features skill-matching and a clean UI.",
      image: project2,
      tech: ["Next.js", "Context API", "MongoDB", "Tailwind CSS", "Auth0", "TypeScript"],
      liveUrl: "https://job-finder-psi-plum.vercel.app/",
      codeUrl: "https://github.com/Yashaswipriya/JobFinder"
    },
    {
      id: 3,
      title: "FinSight",
      description: "A personal finance tracker with budgeting, expense visualization, and category insights. Users can set budgets, track transactions, and analyze spending with interactive charts.",
      image: project3,
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "Shadcn UI", "Recharts", "TypeScript"],
      liveUrl: "https://fin-sight-flame.vercel.app/",
      codeUrl: "https://github.com/Yashaswipriya/FinSight"
    },
    {
      id: 4,
      title: "Artistly",
      description: "A platform that connects event planners with artists. Planners can search by category, location, and price range, while artists onboard themselves and showcase their profiles.",
      image: project4,
      tech: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://eventful-india.vercel.app/",
      codeUrl: "https://github.com/Yashaswipriya/eventful-india"
    },
    {
      id: 5,
      title: "GetMyTherapy",
      description: "A mental health platform connecting users with professional therapists. Features appointment booking, secure chat, and a calming, accessible design.",
      image: project5,
      tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://get-my-therapy.vercel.app/",
      codeUrl: "https://github.com/Yashaswipriya/GetMyTherapy"
    },
    {
      id: 6,
      title: "Bolt",
      description: "A sleek, modern landing page for a shoe brand. Built with smooth animations, clean layout, and responsive design to showcase products.",
      image: project6,
      tech: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://boltshopping.netlify.app/",
      codeUrl: "https://github.com/Yashaswipriya/Bolt"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const container = containerRef.current;

    if (!section || !title || !container) return;

    // Initial setup
    gsap.set(title, { opacity: 0, y: 50, filter: "blur(10px)" });
    gsap.set(container.children, { opacity: 0, y: 80, scale: 0.9 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(title, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    })
    .to(container.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)"
    }, "-=0.5");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-light text-center mb-16"
        >
          Featured <span className="gradient-text font-medium">Projects</span>
        </h2>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group p-6"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-medium gradient-text">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-surface-glass rounded-full border border-border-glass text-primary-glow"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-3 py-1 text-xs bg-surface-glass rounded-full border border-border-glass text-muted-foreground">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-2 text-sm flex-1 justify-center"
                  >
                    <Eye size={16} weight="light" />
                    View Project
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-2 text-sm flex-1 justify-center"
                  >
                    <Code size={16} weight="light" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Yashaswipriya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-glow hover:text-primary transition-colors font-light"
          >
            View All Projects
            <ArrowRight size={16} weight="light" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;