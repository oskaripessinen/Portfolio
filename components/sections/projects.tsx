"use client";

import * as React from "react";
import { ContainerUI } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
    <section id="projects" className="relative min-h-screen flex flex-col justify-center py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 via-zinc-700 to-zinc-900 opacity-10 dark:opacity-5" />
      </div>

      <ContainerUI>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects I&apos;ve worked on.
          </p>
        </motion.div>
      </ContainerUI>

      <div className="w-full max-w-7xl mx-auto md:px-8">
        <div className="w-full max-w-full md:px-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full md:!loop-true"
          >
            <CarouselContent className="ml-0 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={project.id || index} className="basis-full md:basis-1/2 lg:basis-1/3 pl-0 md:pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.4 }}
                    className="p-4 md:p-1 h-full"
                  >
                    <Card className="h-full flex flex-col overflow-hidden border bg-card">
                      <CardHeader className="">
                        <CardTitle>
                          {project.title}
                          {project.achievement && (
                            <span className="block text-xs font-medium text-primary/70 mt-2">
                              {project.achievement}
                            </span>
                          )}
                        </CardTitle>
                        <CardDescription className="min-h-20">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grow justfy-between">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant='secondary' className="border-border text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-4 pt-4">
                        {project.githubLink && (
                          <Button variant="outline" size="sm" className="flex-1" asChild>
                            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="size-4" />
                              Code
                            </Link>
                          </Button>
                        )}
                        {project.demoLink && project.demoLink !== "#" && (
                          <Button size="sm" className="flex-1" asChild>
                            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="size-4" />
                              Demo
                            </Link>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer hidden md:flex" />
            <CarouselNext className="cursor-pointer hidden md:flex" />
          </Carousel>
          
          {/* Mobile Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  current === index + 1 ? "bg-primary w-4" : "bg-muted-foreground/30"
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
