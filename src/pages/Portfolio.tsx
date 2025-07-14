import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'contact'];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if section is in viewport (with some offset for better UX)
          if (scrollY >= elementTop - windowHeight / 2 && scrollY < elementBottom - windowHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-foreground font-medium">Pavlo Chernenko</p>
              <p className="text-sm text-muted-foreground">
                Senior Full-Stack Developer & AI Engineer
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:TeTeBoy007@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                TeTeBoy007@gmail.com
              </a>
              <span className="text-border">|</span>
              <a
                href="https://github.com/TeTeBoy129"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Pavlo Chernenko. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;