"use client";

import { Button } from "@/components/ui/button";
import { ContainerUI } from "@/components/layout/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, FileText, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="section-surface scroll-mt-24 relative flex min-h-screen items-center justify-center pt-20 pb-20 md:pb-32">
      <ContainerUI>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Oskari Pessinen
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Building production-ready web products with clean design, strong engineering, and modern cloud infrastructure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="h-12 rounded-sm px-8 text-sm uppercase tracking-[0.14em]">
              <Link href="/#projects">
                View Projects <ChevronRight strokeWidth={2.5} className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-sm px-8 text-sm uppercase tracking-[0.14em]">
              <Link href="/#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 rounded-sm">
              <Link href="https://github.com/oskaripessinen" target="_blank" rel="noopener noreferrer">
                <Github className="size-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 rounded-sm">
              <Link href="https://www.linkedin.com/in/oskari-pessinen-6114582a6/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-11 w-11 rounded-sm">
              <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="size-5" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </ContainerUI>
    </section>
  );
}
