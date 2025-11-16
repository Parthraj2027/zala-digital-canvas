import { motion } from 'framer-motion';
import { Code, Palette, Database, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm <span className="text-foreground font-semibold">Hemang Navhal</span>, a Computer Science and Engineering student at Pandit Deendayal Energy University (2023–2027).
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I bridge analytical problem-solving with aesthetic creativity — whether designing interfaces, automating systems, or training intelligent models.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I believe great technology isn't just powerful — it's beautifully crafted and meaningful to use.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold mb-1">8.32</h3>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Database className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Palette className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold mb-1">5+</h3>
                  <p className="text-sm text-muted-foreground">Roles</p>
                </CardContent>
              </Card>
              
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Trophy className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-3xl font-bold mb-1">3x</h3>
                  <p className="text-sm text-muted-foreground">Champion</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🎯 Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                As an aspiring data scientist and designer, I aim to excel in two diverse yet complementary fields — harnessing data to extract meaningful insights, and using design to communicate ideas creatively and effectively.
              </p>
            </div>

            <div className="border border-border bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Interests</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>AI & Data Science</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>UI/UX & Product Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Machine Learning & Predictive Modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Web Development & Automation</span>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 p-6 border border-primary/20 bg-primary/5 rounded-lg"
          >
            <p className="text-lg">
              <span className="font-semibold">Fun Fact:</span> Beyond data and design, I'm a two-time district and one-time state volleyball champion who thrives on teamwork and resilience — both on the court and in code.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
