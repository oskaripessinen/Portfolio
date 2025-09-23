import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { X } from "lucide-react"; // <-- lisäys

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  contentClassName?: string;
  lockScroll?: boolean;
};

export const Modal = ({
  open,
  onClose,
  title,
  children,
  contentClassName,
  lockScroll = false,
}: ModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = "hidden";

    // käynnistä fade-in seuraavassa frame:ssa
    const raf = requestAnimationFrame(() => setMounted(true));

    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(raf);
      setMounted(false);
      if (lockScroll) document.body.style.overflow = prev;
    };
  }, [open, onClose, lockScroll]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        className={cn(
          "fixed inset-0 bg-black/80 transition-opacity duration-200",
          mounted ? "opacity-100" : "opacity-0"
        )}
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[min(900px,calc(100dvw-2rem))] max-h-[90dvh] overflow-y-auto",
          "bg-background p-6 pt-2 rounded-lg shadow-lg border border-white/10",
          "transition-opacity duration-200 ease-out",
          "relative",
          mounted ? "opacity-100" : "opacity-0",
          contentClassName
        )}
      >
        <div className="flex items-center">
          <button
            type="button"
            aria-label="Close modal"
            onClick={onClose}
            className="ml-auto -mr-4 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {children}
      </div>
    </div>,
    document.body
  );
};