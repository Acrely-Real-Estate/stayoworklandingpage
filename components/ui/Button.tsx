import * as React from "react"
import { cn } from "@/lib/utils"

export const buttonVariants = (variant: "default" | "crystal" | "outline" = "default", size: "default" | "sm" | "lg" | "icon" = "default", className?: string) => {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-[12px] font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
      // Default flat styling
      "bg-primary text-on-primary hover:bg-primary/90 shadow-sm": variant === "default",
      
      // Premium Crystal Glass Architecture
      "relative overflow-hidden bg-primary/75 backdrop-blur-[16px] backdrop-saturate-150 text-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-white/40 active:scale-[0.98] transition-all duration-300 before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out after:absolute after:inset-0 after:rounded-[12px] after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]": variant === "crystal",
      
      // Outline styling
      "border border-outline-variant bg-transparent hover:bg-surface-container-lowest text-on-surface": variant === "outline",
      
      // Sizing
      "h-10 px-4 py-2 text-sm": size === "default",
      "h-11 px-6 text-sm md:text-base": size === "sm",
      "h-12 md:h-[54px] px-8 md:px-10 text-base md:text-lg": size === "lg",
      "h-10 w-10": size === "icon",
    },
    className
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "crystal" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={buttonVariants(variant, size, className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
