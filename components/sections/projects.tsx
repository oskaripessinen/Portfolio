"use client";

import * as React from "react";
import { ContainerUI } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const highlightTechnologyTerms = (description: string, technologies: string[]) => {
  if (technologies.length === 0) {
    return description;
  }

  const sortedTechnologies = [...technologies].sort((a, b) => b.length - a.length);
  const matcher = new RegExp(`(${sortedTechnologies.map(escapeRegExp).join("|")})`, "gi");

  return description.split(matcher).map((part, index) => {
    const isTechnology = sortedTechnologies.some(
      (technology) => technology.toLowerCase() === part.toLowerCase()
    );

    if (!isTechnology) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    return (
      <span key={`${part}-${index}`} className="font-semibold text-foreground">
        {part}
      </span>
    );
  });
};

export function Projects() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="projects" className="section-surface relative min-h-screen flex flex-col justify-center py-20 md:py-32">
      <ContainerUI>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Selected Work
          </p>
          <h2 className="mb-4 text-3xl font-bold font-heading tracking-tight sm:text-4xl">Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Products, experiments, and competition projects that focus on clarity, performance, and delivery.
          </p>
        </motion.div>
      </ContainerUI>

      <div className="mx-auto w-full max-w-7xl md:px-8">
        <div className="w-full max-w-full md:px-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0 md:-ml-4">
              {projects.map((project, index) => {
                const githubLink = project.githubLink ?? "";
                const demoLink = project.demoLink ?? "";
                const hasGithub = githubLink.length > 0;
                const hasDemo = demoLink.length > 0 && demoLink !== "#";

                return (
                  <CarouselItem key={project.id || index} className="basis-full pl-0 md:basis-1/2 md:pl-4 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ amount: 0.2, once: true }}
                      transition={{ duration: 0.4 }}
                      className="h-full p-4 md:p-1"
                    >
                      <Card className="glass-panel group h-full border-border/80 bg-card/60">
                        <CardHeader className="gap-3">
                          <CardTitle className="text-xl font-heading tracking-tight">
                            {project.title}
                            {project.achievement && (
                              <span className="mt-2 block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                                {project.achievement}
                              </span>
                            )}
                          </CardTitle>
                          <CardDescription className="min-h-36 text-sm leading-relaxed text-muted-foreground">
                            {highlightTechnologyTerms(project.description, project.technologies)}
                          </CardDescription>
                        </CardHeader>
                        {(hasGithub || hasDemo) && (
                          <CardFooter className="mt-auto flex gap-3 pt-4">
                            {hasGithub && (
                              <Button variant="outline" size="sm" className="flex-1 rounded-sm" asChild>
                                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                                  <Github className="size-4" />
                                  Code
                                </Link>
                              </Button>
                            )}
                            {hasDemo && (
                              <Button size="sm" className="flex-1 rounded-sm" asChild>
                                <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="size-4" />
                                  Demo
                                </Link>
                              </Button>
                            )}
                          </CardFooter>
                        )}
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden cursor-pointer md:flex" />
            <CarouselNext className="hidden cursor-pointer md:flex" />
          </Carousel>

          <div className="mt-4 flex justify-center gap-2 md:hidden">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-sm transition-all",
                  current === index + 1 ? "w-5 bg-foreground" : "bg-muted-foreground/40"
                )}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
