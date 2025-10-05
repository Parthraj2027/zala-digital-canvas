import { motion } from 'framer-motion';
import { Brain, Palette, Code2, Trophy } from 'lucide-react';

const stats = [
  { value: '9.20', label: 'CGPA', icon: Trophy },
  { value: '10+', label: 'Projects', icon: Code2 },
  { value: '2+', label: 'Internships', icon: Brain },
  { value: '4+', label: 'Leadership Roles', icon: Palette },
];

const interests = [
  'Artificial Intelligence & Data Science',
  'Automation & Web Scraping',
  'UI/UX & Product Design',
  'Machine Learning & Predictive Modeling',
  'Web Development',
];

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
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
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl text-center hover:bg-card/60 transition-all group"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              I'm <span className="text-primary font-semibold">Parthraj Sinh Zala</span>, a driven Computer Science and Engineering student at PDEU (2023–2027). 
              I find purpose in bridging analytical problem-solving with aesthetic creativity — whether it's designing interfaces, automating systems, or training intelligent models.
            </p>

            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              💡 I believe great technology isn't just powerful — <span className="italic text-accent">it's also beautifully crafted and meaningful to use.</span>
            </p>

            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 font-display">🎯 Objective</h3>
              <p className="text-foreground/80 leading-relaxed">
                As an aspiring Data Scientist and Designer, I aim to excel in two diverse yet complementary fields — 
                harnessing data to extract meaningful insights, and using design to communicate ideas creatively and effectively.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Core Interests</h3>
            <div className="space-y-3">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 glass p-4 rounded-xl hover:bg-card/60 transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground/90">{interest}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-6 gradient-secondary rounded-2xl"
            >
              <p className="text-lg font-medium">
                🎨 <span className="text-accent">Fun Fact:</span>
              </p>
              <p className="text-foreground/80 mt-2">
                Beyond data and design, I'm a two-time district and one-time state volleyball champion 
                who thrives on teamwork and resilience — both on the court and in code.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
