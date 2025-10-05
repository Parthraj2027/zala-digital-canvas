import { motion } from 'framer-motion';
import { Trophy, Award, Medal, Zap } from 'lucide-react';

const achievements = [
  {
    category: 'Sports',
    icon: Trophy,
    items: [
      '2× District Champion in Volleyball',
      '1× State Champion in Volleyball',
      'District Champion in Skating',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    category: 'Hackathons',
    icon: Zap,
    items: [
      'Top 10 – Walmart Sparkathon 2025 (Fintech Hackathon)',
      'Top 50 – Odoo Hackathon 2025',
      'Participant – Smart India Hackathon 2024',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Academic',
    icon: Medal,
    items: [
      '9.20 CGPA (First Year, PDEU)',
      'Headed and managed creative & technical university-level events',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
];

export const Achievements = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
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
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl hover:bg-card/60 transition-all"
            >
              <div className={`p-4 gradient-primary rounded-xl w-fit mb-6`}>
                <achievement.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-6 font-display">{achievement.category}</h3>

              <ul className="space-y-3">
                {achievement.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80">
                    <span className="text-accent mt-1">🏆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Research Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 glass p-8 md:p-12 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold font-display">Research & Academic Interests</h3>
          </div>
          <div className="glass p-6 rounded-xl bg-card/20">
            <h4 className="text-xl font-semibold mb-3 text-primary">🔬 Predictive Urban Planning using AI</h4>
            <p className="text-foreground/80 leading-relaxed">
              Exploring AI-based predictive modeling for population and infrastructure forecasting to support sustainable city planning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
