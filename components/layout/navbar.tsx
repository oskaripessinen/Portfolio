"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/layout/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const pathname = usePathname();


  return (
    <motion.header 
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 md:px-10 border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60"
    >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-xl font-heading font-bold tracking-tight">
                Oskari Pessinen
              </span>
            </Link>
              <ThemeToggle />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="rounded-full h-9 w-24" size="lg">
              <Link href="#contact">Contact</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[150px] bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
                {navLinks.map((link) => (
                  <React.Fragment key={link.href}>
                    <DropdownMenuItem asChild className="py-3 text-center">
                      <Link href={link.href} className="w-full cursor-pointer text-base">
                      <span className="text-center w-full">{link.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  </React.Fragment>
                ))}
                <DropdownMenuItem asChild className="py-3">
                  <Link href="#contact" className="w-full cursor-pointer text-base text-center">
                    <span className="text-center w-full">Contact</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
    </motion.header>
  );
}
