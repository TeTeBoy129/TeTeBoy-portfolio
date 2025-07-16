import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Send, MessageSquare } from 'lucide-react';
import contactImage from '@/assets/contact-tech.jpg';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'TeTeBoy007@gmail.com',
      href: 'mailto:TeTeBoy007@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '066 497 0310',
      href: 'tel:+380664970310'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '273-A, Kharkiv, Ukraine',
      href: null
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/TeTeBoy129',
      href: 'https://github.com/TeTeBoy129'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim());

    window.location.href = `mailto:TeTeBoy007@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold portfolio-gradient-text">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or potential collaboration opportunities
          </p>
        </div>

        {/* Contact Background Image */}
        <div className="relative mb-12">
          <div className="portfolio-card">
            <img
              src={contactImage}
              alt="Digital communication and networking"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                Feel free to reach out through any of these channels. I'm always open to
                discussing new opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg transition-all hover:bg-secondary/50">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block hover:scale-105 transition-transform"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Available for:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Development',
                  'AI/ML Integration',
                  'Technical Consulting',
                  'Code Review',
                  'System Architecture',
                  'Remote Collaboration'
                ].map((service, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={24} className="text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Send a Message
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-foreground"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-foreground resize-none"
                  placeholder="Tell me about your project or what you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                className="w-full portfolio-button flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;