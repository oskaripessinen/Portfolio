import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="section-surface px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="text-base font-heading font-semibold tracking-tight">Oskari Pessinen</span>
          <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-2">
          <Link
            href="https://github.com/oskaripessinen"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/oskari-pessinen-6114582a6/"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:oskari.pessinen@gmail.com"
            className="rounded-sm p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
