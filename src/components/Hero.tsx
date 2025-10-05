import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center border-b border-border">
      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm text-primary font-medium">Available for opportunities</span>
            </motion.div>
            
            <motion.h2 
              className="text-xl text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm Parthraj Sinh Zala
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Data Scientist,<br/>
              Designer &<br/>
              <span className="text-primary">Developer</span>
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Computer Science student at PDEU with <span className="text-foreground font-semibold">9.20 CGPA</span>. 
              Passionate about extracting insights from data and creating beautiful, intuitive designs.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
              >
                <a href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a 
                href="mailto:parthrajsinhz88@gmail.com"
                className="p-3 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/parthrajsinh-zala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Parthraj2027"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="aspect-square rounded-2xl border border-border bg-card/50 overflow-hidden">
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => scrollToSection('about')}
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.button>
    </section>
  );
};
