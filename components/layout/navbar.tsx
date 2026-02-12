"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const mobileMenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    if (href === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "/");
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const handleMobileLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    handleScroll(e, href);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 w-full px-4 md:px-6">
      <div
        ref={mobileMenuRef}
        className="glass-panel relative mx-auto flex h-16 max-w-6xl items-center justify-between rounded-lg px-4 md:px-6"
      >
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={(e) => handleScroll(e, "/")}
          >
            <span className="text-lg font-heading font-bold tracking-tight sm:text-xl">
              Oskari Pessinen
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <nav className="hidden md:flex h-full items-center">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="inline-flex h-10 items-center text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground leading-none translate-y-px transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button asChild variant="default" className="ml-6 h-10 rounded-sm px-6 text-sm leading-none">
            <Link href="#contact" onClick={(e) => handleScroll(e, "#contact")}>Contact</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-sm"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {mobileOpen && (
            <div
              id="mobile-menu"
              className="glass-panel absolute left-0 right-0 top-[calc(100%+0.5rem)] rounded-lg border border-border/90 bg-card/95 p-3 md:hidden"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    className="flex w-full items-center justify-center rounded-sm px-3 py-2 text-center text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={(e) => handleMobileLinkClick(e, "#contact")}
                  className="flex w-full items-center justify-center rounded-sm px-3 py-2 text-center text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
