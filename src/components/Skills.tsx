import { motion } from 'framer-motion';
import { Code2, Wrench, Palette, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Wrench,
    skills: [
      { name: 'React & Node.js', level: 90 },
      { name: 'TensorFlow & Scikit-learn', level: 85 },
      { name: 'Flask & Django', level: 80 },
      { name: 'Pandas & NumPy', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Design Tools',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Photoshop', level: 75 },
      { name: 'Canva', level: 85 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Lightbulb,
    skills: [
      { name: 'Leadership & Management', level: 90 },
      { name: 'Communication', level: 85 },
      { name: 'Problem Analytics', level: 95 },
      { name: 'Creativity', level: 90 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover:bg-card/60 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 gradient-primary rounded-xl">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-display">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground/90 font-medium">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full gradient-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass p-6 rounded-2xl inline-block">
            <p className="text-lg text-foreground/80">
              <span className="text-accent font-semibold">Developer Tools:</span> Git · GitHub · Docker · VS Code · PyCharm · Google Colab · Kaggle · Anaconda
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
