"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const pathname = usePathname();


  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 md:px-6 border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60"
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
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-[50vh] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md">
                <SheetHeader>
                  <SheetTitle className="hidden">Mobile Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center gap-6">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="text-xl font-medium transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="text-xl font-medium transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
    </motion.header>
  );
}
