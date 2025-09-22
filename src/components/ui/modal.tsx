import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    // valinnainen scroll lock
    const prev = document.body.style.overflow;
    if (lockScroll) document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      if (lockScroll) document.body.style.overflow = prev;
    };
  }, [open, onClose, lockScroll]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/80"
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
          "bg-background pt-3 pb-6 px-6 rounded-lg shadow-lg border border-white/10",
          contentClassName
        )}
      >
        {title ? <h3 className="text-lg font-semibold mb-2">{title}</h3> : null}
        {children}
      </div>
    </div>,
    document.body
  );
};