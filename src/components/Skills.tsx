import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Flask', 'Django', 'React', 'Node.js', 'Selenium', 'TensorFlow', 'Tkinter', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'PyCharm', 'Google Colab', 'Kaggle', 'Anaconda'],
  },
  {
    title: 'Design Tools',
    skills: ['Figma', 'Canva', 'Photoshop'],
  },
  {
    title: 'Soft Skills',
    skills: ['Leadership', 'Management', 'Communication', 'Creativity', 'Problem Analytics', 'Teamwork'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border bg-card p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
