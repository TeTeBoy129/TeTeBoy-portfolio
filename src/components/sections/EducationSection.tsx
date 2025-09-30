import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import educationImage from '@/assets/education-cs.jpg';

const EducationSection = () => {
  const education = [
    {
      degree: 'Master of Science in Artificial Intelligence & Data Systems',
      institution: 'Swinburne University of Technology',
      location: 'Melbourne, Australia',
      period: '2018 - 2021',
      description: 'Specialized in artificial intelligence, machine learning algorithms, and data processing systems. Focused on neural networks, deep learning, and advanced AI applications.',
      achievements: [
        'Thesis on Neural Network Optimization',
        'Advanced Machine Learning Coursework',
        'Research in AI Applications'
      ]
    }
  ];

  return (
    <section id="education" className="portfolio-section">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold portfolio-gradient-text">
            My Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and artificial intelligence
          </p>
        </div>

        {/* Education Background Image */}
        <div className="relative mb-12">
          <div className="portfolio-card">
            <img
              src={educationImage}
              alt="Computer Science Education"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-medium text-primary mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
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

export default EducationSection;