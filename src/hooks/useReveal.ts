import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!items.length) return;

    items.forEach(el => {
      if (!el.dataset.revealInit) {
        el.classList.add("reveal-init");
        el.dataset.revealInit = "1";
      }
    });

    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          if (el.dataset.revealed) return;
          el.classList.remove("reveal-init");
          el.classList.add("animate-fade-in");
          el.dataset.revealed = "1";
          obs.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    items.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}