import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'navhalhemang1234@gmail.com',
    href: 'mailto:navhalhemang1234@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 6377593774',
    href: 'tel:+916377593774',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bikaner, Rajasthan, India',
    href: '#',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hemang-navhal-4983502a9',
    href: 'https://www.linkedin.com/in/hemang-navhal-4983502a9/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/hemangnavhal',
    href: 'https://github.com/hemangnavhal',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                className="border border-border bg-card p-6 rounded-lg hover:border-primary/50 transition-all group flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <contact.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {contact.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="border border-border bg-card p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6">
                Goals & Vision
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                My goal is to pursue a Master's in Computer Science focusing on AI and Data Science, 
                while continuing to explore Design as a tool for storytelling and innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I want to build products that are <span className="text-foreground font-semibold">intelligent</span>, 
                <span className="text-foreground font-semibold"> inclusive</span>, and 
                <span className="text-foreground font-semibold"> visually engaging</span> — where every algorithm has meaning 
                and every design has purpose.
              </p>

              <Button size="lg" asChild>
                <a href="/Hemang_Navhal_Resume.pdf" download="Hemang_Navhal_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
