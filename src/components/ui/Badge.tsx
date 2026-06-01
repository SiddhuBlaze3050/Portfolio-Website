import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

const variants = {
  default: "border-border bg-muted text-foreground",
  primary: "border-primary/20 bg-primary/10 text-primary",
  accent: "border-accent/20 bg-accent/10 text-accent",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
