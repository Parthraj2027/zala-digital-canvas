import { motion } from 'framer-motion';
import { Trophy, Zap, Medal, Award } from 'lucide-react';

const achievements = [
  {
    category: 'Sports',
    icon: Trophy,
    items: [
      '2× District Champion in Volleyball',
      '1× State Champion in Volleyball',
      'District Champion in Skating',
    ],
  },
  {
    category: 'Hackathons',
    icon: Zap,
    items: [
      'Top 10 – Walmart Sparkathon 2025',
      'Top 50 – Odoo Hackathon 2025',
      'Participant – Smart India Hackathon 2024',
    ],
  },
  {
    category: 'Academic',
    icon: Medal,
    items: [
      '9.20 CGPA (First Year, PDEU)',
      'Led creative & technical university events',
    ],
  },
];

export const Achievements = () => {
  return (
    <section className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border bg-card p-6 rounded-lg"
              >
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg w-fit mb-4">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-4">{achievement.category}</h3>

                <ul className="space-y-2">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-0.5">•</span>
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
            className="border border-border bg-card p-8 rounded-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Research & Academic Interests</h3>
            </div>
            <div className="border border-primary/20 bg-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-2 text-primary">Predictive Urban Planning using AI</h4>
              <p className="text-muted-foreground leading-relaxed">
                Exploring AI-based predictive modeling for population and infrastructure forecasting to support sustainable city planning.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
