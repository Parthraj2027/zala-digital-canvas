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
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Civic & Social Service Intern',
    company: 'Ashirvad Viklang Trust',
    period: 'June 2024 – Surendranagar, India',
    icon: Heart,
    description: [
      'Mentored students with diverse special needs by designing accessible learning materials.',
      'Adapted communication and visual content to support inclusive education.',
    ],
    color: 'from-blue-500 to-cyan-500',
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
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Experience & <span className="text-gradient">Leadership</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 font-display">💼 Professional Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 md:p-8 rounded-2xl hover:bg-card/60 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                  <div className={`p-3 gradient-primary rounded-xl w-fit`}>
                    <exp.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold font-display mb-1">{exp.title}</h4>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-muted-foreground">
                      <span className="font-medium text-primary">{exp.company}</span>
                      <span className="hidden md:block">•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-0 md:ml-16">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-foreground/80">
                      <span className="text-accent mt-1">▸</span>
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
          <h3 className="text-2xl font-bold mb-8 font-display">🎓 Positions of Responsibility</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:bg-card/60 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <position.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold font-display">{position.title}</h4>
                    <p className="text-sm text-primary">{position.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{position.period}</p>
                  </div>
                </div>
                <p className="text-foreground/80 text-sm">{position.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
