"use client";

import { Container } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Globe, GitBranch, Cpu, Terminal } from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Code2 },
  { name: "Python", icon: Terminal },
  { name: "Java", icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS", icon: Server },
  { name: "Docker", icon: Cpu },
];

export function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-900 opacity-10 dark:opacity-5" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-12 md:flex-row md:items-start md:justify-between"
        >
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground">
            I’m a full-stack developer with experience in both front-end and back-end development. I’m currently pursuing a bachelor’s degree in Information and Communication Technology at the University of Turku (2023–2026), and I apply what I learn to building practical web and mobile applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="mb-8 text-2xl font-semibold text-center md:text-left">
            Skills & Technologies
          </h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 justify-items-center">
            {skills.map((skill) => (
              <Card key={skill.name} className="bg-background/50 transition-colors hover:bg-accent/50 w-full max-w-[180px] border-2 border-border">
                <CardContent className="flex text-foreground flex-col items-center justify-center p-6 text-center h-full gap-3">
                  <skill.icon color="currentColor" className="h-10 w-10" />
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
