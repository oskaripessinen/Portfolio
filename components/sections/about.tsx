"use client";

import { ContainerUI } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 md:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-900 opacity-10 dark:opacity-5" />
      </div>

      <ContainerUI>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl text-center">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground text-left">
              I’m a full-stack developer with experience in both front-end and back-end development. I’m currently pursuing a bachelor’s degree in Information and Communication Technology at the University of Turku (2023–2026).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-background/50 border-2 border-border">
              <CardContent className="p-6 py-0 space-y-4">
                <h3 className="text-xl font-semibold text-center md:text-left">Education & Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 justify-start">
                    <div>
                      <h4 className="font-medium text-foreground">Bachelor's in ICT</h4>
                      <p className="text-sm text-muted-foreground">University of Turku 2023 – 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 justify-start">
                    <div>
                      <h4 className="font-medium text-foreground">Full Stack Open - Web Dev Course</h4>
                      <p className="text-sm text-muted-foreground">University of Helsinki 2024</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-2 border-border">
              <CardContent className="p-6 py-0 space-y-4">
                <h3 className="text-xl font-semibold text-center md:text-left">
                  Skills & Technologies
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed text-left">
                  Mostly working with <span className="font-medium text-foreground">TypeScript</span>, <span className="font-medium text-foreground">Node.js</span>, and <span className="font-medium text-foreground">React</span>, with <span className="font-medium text-foreground">AWS</span>, <span className="font-medium text-foreground">PostgreSQL</span>, and <span className="font-medium text-foreground">Docker</span> for infrastructure and data. Also familiar with <span className="font-medium text-foreground">Java</span> and <span className="font-medium text-foreground">Python</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </ContainerUI>
    </section>
  );
}
