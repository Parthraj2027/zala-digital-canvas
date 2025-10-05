import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'parthrajsinhz88@gmail.com',
    href: 'mailto:parthrajsinhz88@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 99748 72006',
    href: 'tel:+919974872006',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Surendranagar, Gujarat, India',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/parthrajsinh-zala',
    href: 'https://linkedin.com/in/parthrajsinh-zala',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Parthraj2027',
    href: 'https://github.com/Parthraj2027',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover:bg-card/60 transition-all group flex items-start gap-4"
              >
                <div className="p-3 gradient-primary rounded-xl group-hover:scale-110 transition-transform">
                  <contact.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                  <div className="text-foreground/90 font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-2xl text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-display">
              🧭 Goals & Vision
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed max-w-2xl mx-auto">
              My goal is to pursue a Master's in Computer Science focusing on AI and Data Science, 
              while continuing to explore Design as a tool for storytelling and innovation.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              I want to build products that are <span className="text-primary font-semibold">intelligent</span>, 
              <span className="text-accent font-semibold"> inclusive</span>, and 
              <span className="text-primary font-semibold"> visually engaging</span> — where every algorithm has meaning 
              and every design has purpose.
            </p>

            <Button 
              size="lg" 
              className="gradient-primary hover:opacity-90 transition-opacity text-white font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
