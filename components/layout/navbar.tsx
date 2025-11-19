"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full px-4 md:px-10 border-b bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="#" className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tight">
                Oskari Pessinen
              </span>
            </Link>
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
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
              <DropdownMenuContent align="end">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href} className="w-full cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link href="#contact" className="w-full cursor-pointer font-semibold">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
    </header>
  );
}
