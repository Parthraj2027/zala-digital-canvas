import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Stock Market Suggestion System',
    description: 'Developed a system that provides real-time stock recommendations using live market APIs, dynamic analysis, and SMS notifications through Twilio.',
    tech: ['Python', 'REST API', 'Twilio'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Surplus Saver – Food Recovery Platform',
    description: 'Built a web platform that reduces food waste by connecting retail stores with users through discounted "Surprise Bags." Includes gamified UI and an admin dashboard.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Automating Job Applications on LinkedIn',
    description: 'Developed an automation tool to streamline job applications on LinkedIn by auto-filling required details, saving significant manual effort.',
    tech: ['Python', 'Selenium', 'Flask'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Real Estate Data Management System',
    description: 'Built a normalized real estate database with 6200+ entries, optimized indexing, and automated reporting procedures for efficient data analysis.',
    tech: ['MySQL', 'Database Design'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Ashray – Dog Adoption Platform',
    description: 'Created a user-friendly website connecting adopters with rescue organizations, integrating location and adoption filtering features.',
    tech: ['HTML', 'CSS', 'Flask'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Digital Lending Platform',
    description: 'Built an automated lending platform for compliance validation, document verification, and rule-based loan management with AI integration.',
    tech: ['Laravel', 'MySQL', 'AI/ML'],
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my work spanning data science, web development, and automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-6 h-full hover:bg-card/60 transition-all group border-white/10">
                <div className={`h-2 w-full rounded-full mb-6 bg-gradient-to-r ${project.gradient}`} />
                
                <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
