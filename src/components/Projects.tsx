import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const projects = [
  {
    title: 'Stock Market Suggestion System',
    description: 'Real-time stock recommendations using live market APIs, dynamic analysis, and SMS notifications through Twilio.',
    tech: ['Python', 'REST API', 'Twilio'],
  },
  {
    title: 'Surplus Saver – Food Recovery Platform',
    description: 'Web platform reducing food waste by connecting retail stores with users through discounted "Surprise Bags" with gamified UI.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'LinkedIn Job Application Automation',
    description: 'Automation tool to streamline job applications on LinkedIn by auto-filling required details, saving significant manual effort.',
    tech: ['Python', 'Selenium', 'Flask'],
  },
  {
    title: 'Real Estate Data Management System',
    description: 'Normalized database with 6200+ entries, optimized indexing, and automated reporting procedures for efficient data analysis.',
    tech: ['MySQL', 'Database Design'],
  },
  {
    title: 'Ashray – Dog Adoption Platform',
    description: 'User-friendly website connecting adopters with rescue organizations, integrating location and adoption filtering features.',
    tech: ['HTML', 'CSS', 'Flask'],
  },
  {
    title: 'Digital Lending Platform',
    description: 'Automated lending platform for compliance validation, document verification, and rule-based loan management with AI integration.',
    tech: ['Laravel', 'MySQL', 'AI/ML'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-border bg-card p-6 h-full hover:border-primary/50 transition-all group">
                  <div className="h-1 w-12 bg-primary mb-4" />
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
