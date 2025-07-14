import { MapPin, Phone, Calendar, Mail, Github, Briefcase } from 'lucide-react';
import aboutWorkspace from '@/assets/about-workspace.jpg';

const AboutSection = () => {
  const personalInfo = [
    { icon: Briefcase, label: 'Job', value: 'Senior Full-Stack Developer & AI Engineer' },
    { icon: Calendar, label: 'Birthday', value: 'January 29, 1996' },
    { icon: MapPin, label: 'Address', value: '273-A, Kharkiv, Ukraine' },
    { icon: Phone, label: 'Phone', value: '093 944 0500' },
    { icon: Mail, label: 'Email', value: 'TeTeBoy007@gmail.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/TeTeBoy129' }
  ];

  return (
    <section id="about" className="portfolio-section">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Personal Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold portfolio-gradient-text">
              About Me
            </h2>
            <h3 className="text-2xl font-semibold text-foreground">
              Pavlo Chernenko
            </h3>
          </div>

          <div className="grid gap-4">
            {personalInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon size={16} className="text-primary" />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">{label}:</span>
                  <p className="text-foreground font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate Senior Full-Stack Developer and AI/ML Engineer with expertise in 
              building cutting-edge AI-driven platforms. Born in Ukraine and currently based in 
              Kharkiv, I specialize in creating scalable web applications with modern frameworks 
              and integrating advanced AI technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in technology spans from traditional web development to the exciting 
              world of artificial intelligence and machine learning. I love creating solutions 
              that bridge the gap between complex AI capabilities and user-friendly interfaces.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/TeTeBoy129"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-button"
            >
              View GitHub
            </a>
            <a
              href="#contact"
              className="portfolio-button-outline"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="portfolio-card">
            <img
              src={aboutWorkspace}
              alt="Developer workspace"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;