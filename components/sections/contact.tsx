"use client";

import { ContainerUI } from "@/components/layout/container";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="section-surface relative min-h-screen flex items-center py-20 md:py-32">
      <ContainerUI>
        <div className="mx-auto max-w-lg">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Let&apos;s Build
            </p>
            <h2 className="text-3xl font-bold font-heading tracking-tight sm:text-4xl">
              Contact
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Feel free to reach out via email or LinkedIn for project collaboration or opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <Link href="mailto:oskari.pessinen@gmail.com" className="group block">
              <Card className="glass-panel rounded-lg border-border/80 bg-card/60 px-2 transition-colors hover:bg-accent/40">
                <CardContent className="flex items-center justify-between px-4 gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-foreground/10 text-foreground transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm sm:text-lg text-muted-foreground transition-colors truncate">
                        oskari.pessinen@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            <Link
              href="https://www.linkedin.com/in/oskari-pessinen-6114582a6/"
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="glass-panel rounded-lg border-border/80 bg-card/60 px-2 transition-colors hover:bg-accent/40">
                <CardContent className="flex items-center justify-between px-4 gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-foreground/10 text-foreground transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h3 className="font-semibold">LinkedIn</h3> 
                      <p className="text-sm text-muted-foreground transition-colors truncate">
                        Oskari Pessinen
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </ContainerUI>
    </section>
  );
}
