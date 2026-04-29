import * as React from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "gold", type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] transition-all outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50",
          variant === "gold" &&
            "bg-gradient-to-b from-[#e8cf7a] via-[#d4af37] to-[#b8891a] text-[#0f0f0f] shadow-[0_0_40px_-8px_rgba(212,175,55,0.55)] hover:brightness-105 active:scale-[0.99]",
          variant === "outline" &&
            "border border-[#d4af37]/55 bg-transparent text-[#f5e6b8] hover:bg-[#d4af37]/10",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
