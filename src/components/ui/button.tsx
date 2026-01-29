import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white rounded-full px-6 py-2 hover:opacity-90",
        outline:
          "border border-slate-200 bg-white shadow-sm hover:bg-slate-50 hover:text-slate-900 rounded-xl",
        ghost: "hover:bg-slate-100 hover:text-slate-900 rounded-xl",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-6 py-3 rounded-xl",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
