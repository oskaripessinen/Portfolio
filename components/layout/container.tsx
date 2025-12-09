import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ContainerUI({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto max-w-6xl px-6 md:px-8 w-full overflow-hidden md:overflow-visible", className)}
      {...props}
    >
      {children}
    </div>
  );
}

