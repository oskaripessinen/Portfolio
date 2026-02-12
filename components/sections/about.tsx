"use client";

import { ContainerUI } from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-surface relative min-h-screen flex items-center py-20 md:py-32">
      <ContainerUI>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-5xl space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-center text-3xl font-bold font-heading tracking-tight sm:text-4xl">
              About
            </h2>
            <p className="text-left text-lg leading-relaxed text-muted-foreground">
              I am a software developer focused on full-stack engineering, reliability, and cloud-native delivery.
              I currently work at Attractor Oy and contribute to technical planning in the Since AI hackathon team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="glass-panel border-border/80 bg-card/60">
              <CardContent className="space-y-4 p-6 py-0">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p className="font-medium text-foreground">B.Sc. (Tech.) in Information and Communication Technology</p>
                  <p>University of Turku - 2023 to 2026</p>
                  <p>
                    Bachelor&apos;s thesis on serverless cold start behavior and performance impacts in cloud-native
                    systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel border-border/80 bg-card/60">
              <CardContent className="space-y-4 p-6 py-0">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Programming:</span> TypeScript, Python, Java,
                    SQL, C++
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Frameworks:</span> Next.js, Node.js, React.js
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Infrastructure:</span> Docker, AWS, PostgreSQL,
                    MongoDB, Redis, GitHub Actions
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Testing &amp; Systems:</span> Linux, CI/CD,
                    automated testing, IP networking basics
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-heading font-semibold tracking-tight">Experience</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <Card className="glass-panel border-border/80 bg-card/60">
                <CardContent className="space-y-3 p-6 py-0">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Software Developer</h4>
                    <p className="text-sm text-muted-foreground">Attractor Oy - 10/2025 to Present</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Full-stack development focused on technical execution, system reliability, and production-ready
                    delivery using modern web and cloud technologies.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Implemented testing and validation practices in CI/CD workflows to maintain production quality.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-panel border-border/80 bg-card/60">
                <CardContent className="space-y-3 p-6 py-0">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Organizing Team Member</h4>
                    <p className="text-sm text-muted-foreground">Since AI ry - 01/2026 to Present</p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Organizing an AI-focused hackathon in collaboration with industry partners and supporting event
                    development, coordination, and technical planning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </ContainerUI>
    </section>
  );
}
