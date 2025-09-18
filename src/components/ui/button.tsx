import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        
        // Glass Morphism Variants
        glass: "glass hover:bg-primary/20 hover:border-primary/50 text-glass-foreground hover:scale-105 glow-hover",
        "glass-primary": "glass bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary hover:scale-105 glow-hover",
        
        // Hero Button
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-110 px-8 py-4 text-lg font-semibold rounded-full",
        
        // Interactive Variants
        glow: "bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:scale-105",
        floating: "glass hover:bg-primary/20 hover:border-primary/50 text-glass-foreground hover:scale-110 hover:-translate-y-1",
        
        // Original Variants Enhanced
        destructive: "bg-error text-white hover:bg-error/90 hover:scale-105",
        outline: "border border-glass-border bg-background/50 hover:bg-glass hover:text-glass-foreground hover:scale-105",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-glow hover:scale-105",
        ghost: "hover:bg-glass hover:text-glass-foreground hover:scale-105",
        link: "text-primary hover:text-primary-glow underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-6 text-base",
        xl: "h-14 rounded-xl px-8 text-lg",
        icon: "h-10 w-10",
        "icon-lg": "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
