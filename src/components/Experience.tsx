import { motion } from 'framer-motion';
import { Briefcase, Heart, Users } from 'lucide-react';

const experiences = [
  {
    title: 'Data Science & Analyst Intern',
    company: 'Oppotive',
    period: 'July 2025 – August 2025',
    icon: Briefcase,
    description: [
      'Engineered multiple machine learning solutions including SVM sentiment classifiers, extractive summarizers, and a BERT-based question-answering model.',
      'Improved text-based analytics workflows and optimized model accuracy using Scikit-learn and TensorFlow.',
    ],
  },
  {
    title: 'Civic & Social Service Intern',
    company: 'Ashirvad Viklang Trust',
    period: 'June 2024',
    location: 'Surendranagar, India',
    icon: Heart,
    description: [
      'Mentored students with diverse special needs by designing accessible learning materials.',
      'Adapted communication and visual content to support inclusive education.',
    ],
  },
];

const positions = [
  {
    title: 'General Secretary',
    organization: 'ACM PDEU Student Chapter',
    period: 'July 2025 – June 2026',
    icon: Users,
    description: 'Overseeing the execution of technical and creative events, managing committees, and driving innovative club initiatives.',
  },
  {
    title: 'Hospitality Head',
    organization: 'Science and Technical Committee (PDEU)',
    period: 'July 2025 – June 2026',
    icon: Users,
    description: 'Led hospitality management for university-wide technical and cultural events.',
  },
  {
    title: 'Graphic Design Leader',
    organization: 'ACM PDEU Student Chapter',
    period: 'July 2024 – June 2025',
    icon: Users,
    description: 'Directed the visual identity and design efforts for hackathons, seminars, and ACM initiatives.',
  },
  {
    title: 'Fine Arts Head of Department',
    organization: 'The Inspired Room',
    period: 'July 2024 – June 2025',
    icon: Users,
    description: 'Led creative initiatives within the architecture and design club, mentoring students and organizing exhibitions.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience & Leadership
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          {/* Internships */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border bg-card p-6 rounded-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                      <exp.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="text-primary font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-0 md:ml-16">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Leadership Positions */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Positions of Responsibility</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border border-border bg-card p-6 rounded-lg"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <position.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold">{position.title}</h4>
                      <p className="text-sm text-primary">{position.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">{position.period}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{position.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
