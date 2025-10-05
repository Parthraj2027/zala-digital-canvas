import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/10 to-accent/10" />
      
      {/* 3D Scene */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-50">
        <Scene3D />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-lg md:text-xl text-muted-foreground mb-4 font-display"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm Parthraj Sinh Zala 👋
            </motion.h2>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="text-gradient">Data Scientist</span> |{' '}
              <span className="text-white">Designer</span> |{' '}
              <span className="text-gradient">Developer</span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              "Where data meets design, and logic meets creativity."
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-foreground/80 mb-8 max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I'm a Computer Science and Engineering student at PDEU with a <span className="text-primary font-semibold">9.20 CGPA</span>, 
              passionate about two different yet connected worlds — Data Science and Design. 
              I love exploring data to extract insights and building designs that make technology visually engaging and intuitive.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button 
                size="lg" 
                className="gradient-primary hover:opacity-90 transition-opacity text-white font-semibold"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 backdrop-blur-sm"
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
              transition={{ delay: 1.2 }}
            >
              <a 
                href="mailto:parthrajsinhz88@gmail.com"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/parthrajsinh-zala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/Parthraj2027"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </motion.div>
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
