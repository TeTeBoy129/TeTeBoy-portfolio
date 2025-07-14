import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Briefcase, Code, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-secondary/80 backdrop-blur-lg border border-border/50 rounded-full px-4 py-2 shadow-elegant">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`portfolio-nav-item group relative ${
              activeSection === id ? 'active' : ''
            }`}
            aria-label={label}
          >
            <Icon size={20} />
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;