import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    title: 'Stock Market Suggestion System',
    description: 'Real-time stock recommendations using live market APIs, dynamic analysis, and SMS notifications through Twilio.',
    tech: ['Python', 'REST API', 'Twilio'],
    repo: 'https://github.com/Parthraj2027/Stock-Market-Suggestion',
    fullDescription: 'Stock Market Suggestion 📈💡 A real-time stock recommendation system using APIs to fetch live market data. It provides dynamic stock suggestions and instant alerts via Twilio, ensuring users stay updated on market trends. Built with Python, REST API, and Twilio for accuracy and timely insights. 🚀',
  },
  {
    title: 'Surplus Saver – Food Recovery Platform',
    description: 'AI-powered surplus food marketplace designed to reduce retail food waste at scale while delivering savings and sustainability.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'AI/ML'],
    repo: 'https://github.com/Parthraj2027/Surplus-Saver',
    fullDescription: 'An AI-powered surplus food marketplace designed to reduce retail food waste at scale while delivering savings and sustainability. 🌿 Built for the Walmart Sparkathon 2025 by Team ECO.dev\n\nSurplus Saver is an integrated platform to help Walmart (or any large retailer) manage surplus inventory approaching expiry dates. By applying AI-powered shelf-life predictions and dynamic discounts, it turns food waste into opportunity—for customers, the business, and the planet.\n\n✅ Reduces food waste at scale\n✅ Delivers savings to budget-conscious shoppers\n✅ Supports corporate ESG goals\n✅ Increases operational efficiency',
  },
  {
    title: 'LinkedIn Job Application Automation',
    description: 'Automation tool to streamline job applications on LinkedIn by auto-filling required details, saving significant manual effort.',
    tech: ['Python', 'Selenium', 'Flask'],
    repo: 'https://github.com/Parthraj2027/Automating-Job-Applications-on-LinkedIn',
    fullDescription: 'Automating Job Applications on LinkedIn 🤖💼 A Python automation script that streamlines LinkedIn job applications by parsing job listings and auto-filling user details. Built with Selenium WebDriver and Flask, it optimizes workflow, reducing manual effort and submission time for a seamless application process. 🚀',
  },
  {
    title: 'Breast Cancer Analysis',
    description: 'Data-driven machine learning project aimed at predicting whether a breast tumor is benign or malignant.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    repo: 'https://github.com/Parthraj2027/Breast_Cancer_Analysis',
    fullDescription: 'Breast Cancer Analysis is a data-driven machine learning project aimed at predicting whether a breast tumor is benign or malignant based on various diagnostic features. The primary motive of this project is to assist in the early detection of breast cancer using data analytics and predictive modeling, thereby supporting healthcare professionals in making informed decisions. The project works by first importing and cleaning the breast cancer dataset (commonly from the UCI Machine Learning Repository), performing exploratory data analysis (EDA) to understand patterns and correlations among features, and then applying classification algorithms such as Logistic Regression, Decision Tree, Random Forest, or Support Vector Machine to build predictive models.',
  },
  {
    title: 'Text Summarization Project',
    description: 'Python-based text summarization that processes documents and generates concise summaries using NLP techniques.',
    tech: ['Python', 'NLP', 'NLTK'],
    repo: 'https://github.com/Parthraj2027/Text-Summarization-project',
    fullDescription: 'A Python-based text summarization project that processes input documents and generates concise summaries using natural language processing techniques. Suitable for automating content reduction and improving information accessibility.',
  },
  {
    title: 'Ashray – Dog Adoption Platform',
    description: 'User-friendly website connecting adopters with rescue organizations, integrating location and adoption filtering features.',
    tech: ['HTML', 'CSS', 'Flask'],
    repo: '#',
    fullDescription: 'Created a user-friendly website connecting adopters with rescue organizations, integrating location and adoption filtering features to help find the perfect match for dog adoption.',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                className="group"
              >
                <Card className="border-border bg-card p-6 h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
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
                  
                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      className="flex-1"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    {project.repo !== '#' && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                      >
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-base mt-4 whitespace-pre-line">
              {selectedProject?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject?.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            {selectedProject?.repo !== '#' && (
              <Button asChild>
                <a 
                  href={selectedProject?.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
