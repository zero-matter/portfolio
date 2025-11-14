import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-mono text-xs font-medium transition-colors";

    const variants = {
      default: "bg-bg-secondary text-text-secondary border border-border",
      accent:
        "bg-accent-primary/10 text-accent-primary border border-accent-primary/30",
      outline: "border-2 border-border text-text-secondary hover:border-accent-primary hover:text-accent-primary",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-[10px]",
      md: "px-3 py-1 text-xs",
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
