import { ArrowDown } from 'lucide-react';
import heroProfile from '@/assets/hero-profile.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="portfolio-section justify-center items-center min-h-screen">
      <div className="text-center space-y-8">
        {/* Profile Image */}
        <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
          <img
            src={heroProfile}
            alt="Pavlo Chernenko - Developer Workspace"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Title */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold portfolio-gradient-text">
            Pavlo Chernenko
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground">
            Welcome to my Portfolio!
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm a Senior Full-Stack Developer & AI/ML Engineer!
          </p>
          <p className="text-base md:text-lg text-muted-foreground">
            Specializing in AI-driven platforms and modern web development.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="portfolio-button flex items-center gap-2"
          >
            Learn More
            <ArrowDown size={20} />
          </button>
          <a
            href="#contact"
            className="portfolio-button-outline"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;