import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import experienceImage from '@/assets/experience-office.jpg';

const ExperienceSection = () => {
  const experiences = [
    {
      position: 'Senior Full-Stack Developer & AI Engineer',
      company: 'Neuronix Labs',
      location: 'Remote, Berlin',
      period: '2022 - Present',
      type: 'Remote',
      description: 'Leading the development of AI-driven platforms with LLM integration, cloud orchestration, and real-time user dashboards. Architecting scalable solutions that bridge AI capabilities with user-friendly interfaces.',
      achievements: [
        'Designed and implemented full-stack AI platforms using LangChain and LangGraph',
        'Integrated multiple LLMs (OpenAI, Claude, LLaMA) for diverse AI workflows',
        'Built real-time dashboards with interactive AI chat interfaces',
        'Orchestrated cloud infrastructure with AWS and Docker/Kubernetes',
        'Optimized UX for AI workflows increasing user engagement by 40%'
      ],
      technologies: ['OpenAI', 'Claude', 'LangChain', 'Python', 'FastAPI', 'React', 'TypeScript', 'AWS', 'Docker']
    },
    {
      position: 'Machine Learning Backend Engineer',
      company: 'Inoxoft',
      location: 'Lviv, Ukraine',
      period: '2020 - 2022',
      type: 'On-site',
      description: 'Developed Python-based microservices for AI model serving, data pipelines, and blockchain-based automation. Focused on scalable backend architecture for machine learning applications.',
      achievements: [
        'Built microservices architecture for ML model deployment',
        'Implemented data pipelines processing 1M+ records daily',
        'Developed blockchain integration for automated workflows',
        'Created APIs for ML model serving with 99.9% uptime',
        'Optimized database performance for large-scale data processing'
      ],
      technologies: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Blockchain']
    },
    {
      position: 'Junior Web Developer',
      company: 'TechMagic',
      location: 'Lviv, Ukraine',
      period: '2019 - 2020',
      type: 'On-site',
      description: 'Focused on building modern admin panels, API integrations, and interactive user interfaces. Gained solid foundation in web development and modern JavaScript frameworks.',
      achievements: [
        'Developed responsive admin panels with React and Vue.js',
        'Integrated RESTful APIs and GraphQL endpoints',
        'Implemented modern UI/UX designs with Tailwind CSS',
        'Built interactive dashboards with real-time data visualization',
        'Collaborated with design team to create pixel-perfect interfaces'
      ],
      technologies: ['JavaScript', 'React', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="portfolio-section">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold portfolio-gradient-text">
            My Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey in software development and AI engineering
          </p>
        </div>

        {/* Experience Background Image */}
        <div className="relative mb-12">
          <div className="portfolio-card">
            <img
              src={experienceImage}
              alt="Professional development environment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-lg font-medium text-primary mb-2 flex items-center gap-2">
                        {exp.company}
                        <ArrowUpRight size={16} />
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;