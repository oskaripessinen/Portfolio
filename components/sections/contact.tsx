"use client";

import { ContainerUI } from "@/components/layout/container";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-900 opacity-10 dark:opacity-5" />
      </div>
      <ContainerUI>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Feel free to contact me via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link href="mailto:oskari.pessinen@gmail.com" className="group block">
              <Card className="bg-card hover:bg-accent/30 px-2 transition-colors border-2 border-border rounded-4xl">
                <CardContent className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="text-left min-w-0">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm sm:text-lg text-muted-foreground transition-colors truncate">
                        oskari.pessinen@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.linkedin.com/in/oskari-pessinen-6114582a6/"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="bg-card hover:bg-accent/30 transition-colors px-2 border-border rounded-4xl">
                <CardContent className="flex items-center justify-between px-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">LinkedIn</h3> 
                      <p className="text-sm text-muted-foreground transition-colors">
                        Oskari Pessinen
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </motion.div>
      </ContainerUI>
    </section>
  );
}
