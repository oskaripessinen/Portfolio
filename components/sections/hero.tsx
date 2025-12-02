"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, FileText, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="scroll-mt-24 relative flex min-h-screen items-center justify-center overflow-hidden pt-16 pb-20 md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-900 opacity-10 dark:opacity-5" />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-4xl lg:text-6xl">
              <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Oskari Pessinen
              </span>
              <br />
              <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg" className="text-lg h-14 w-50 rounded-full">
              <Link href="/#projects">
                View Projects <ChevronRight strokeWidth={2.5} className="size-5 mt-0.5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg h-14 w-50 md:w-40 rounded-full">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex gap-4"
          >
            <Button asChild variant="ghost" size="icon" className="h-14 w-14 rounded-full">
              <Link href="https://github.com/oskaripessinen" target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-14 w-14 rounded-full">
              <Link href="https://www.linkedin.com/in/oskari-pessinen-6114582a6/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-14 w-14 rounded-full">
              <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="size-5" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
