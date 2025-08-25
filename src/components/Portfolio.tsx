import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Disable scrolling during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <div className="smooth-scroll">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-border-glass">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-muted-foreground font-light">
              © 2025 Yashaswi Priya. Crafted with passion and precision.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;