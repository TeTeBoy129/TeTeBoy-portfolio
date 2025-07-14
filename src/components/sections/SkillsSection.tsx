import { useState } from 'react';
import { Code, Brain, Server, Palette, Cloud, Database } from 'lucide-react';
import skillsImage from '@/assets/skills-ai.jpg';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ai');

  const skillCategories = [
    {
      id: 'ai',
      name: 'AI & ML',
      icon: Brain,
      skills: [
        { name: 'OpenAI', level: 95 },
        { name: 'Claude', level: 90 },
        { name: 'LLaMA', level: 85 },
        { name: 'Mistral', level: 80 },
        { name: 'LangChain', level: 95 },
        { name: 'LangGraph', level: 90 },
        { name: 'LangServe', level: 85 },
        { name: 'Semantic Kernel', level: 80 }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Server,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'FastAPI', level: 90 },
        { name: 'Django', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Node.js', level: 85 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'Redis', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code,
      skills: [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'React', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Redux Toolkit', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Material UI', level: 80 }
      ]
    },
    {
      id: 'ui',
      name: 'UI/UX',
      icon: Palette,
      skills: [
        { name: 'UX Optimization', level: 85 },
        { name: 'Interactive Dashboards', level: 90 },
        { name: 'Admin Panels', level: 95 },
        { name: 'Chat Interfaces', level: 90 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Design Systems', level: 85 },
        { name: 'User Research', level: 75 },
        { name: 'Prototyping', level: 80 }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'AWS EC2', level: 85 },
        { name: 'AWS Lambda', level: 80 },
        { name: 'AWS S3', level: 90 },
        { name: 'API Gateway', level: 85 },
        { name: 'CloudWatch', level: 80 },
        { name: 'CI/CD', level: 85 }
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="portfolio-section">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold portfolio-gradient-text">
            My Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Background Image */}
        <div className="relative mb-12">
          <div className="portfolio-card">
            <img
              src={skillsImage}
              alt="AI and Machine Learning Visualization"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Tabs */}
          <div className="lg:col-span-1">
            <div className="portfolio-card space-y-2">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Skill Categories
              </h3>
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                      activeCategory === category.id
                        ? 'bg-primary text-primary-foreground shadow-glow'
                        : 'bg-secondary/50 hover:bg-secondary/70 text-secondary-foreground'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="portfolio-card">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {skillCategories.find(cat => cat.id === activeCategory)?.name} Skills
              </h3>
              <div className="space-y-4">
                {activeSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="portfolio-card text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Brain size={32} className="text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">AI Expertise</h4>
            <p className="text-sm text-muted-foreground">
              Advanced experience with LLMs, LangChain, and AI platform development
            </p>
          </div>

          <div className="portfolio-card text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Code size={32} className="text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Full-Stack</h4>
            <p className="text-sm text-muted-foreground">
              Complete web development from frontend to backend and database
            </p>
          </div>

          <div className="portfolio-card text-center space-y-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Cloud size={32} className="text-primary" />
            </div>
            <h4 className="text-xl font-semibold text-foreground">Cloud & DevOps</h4>
            <p className="text-sm text-muted-foreground">
              AWS infrastructure, containerization, and CI/CD pipeline expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;