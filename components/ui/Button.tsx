import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * STAYO WorkStay — Frosted Crystal Button System
 * 
 * Variants:
 * - crystal:  Primary CTA — frosted dark green glass
 * - frost:    Secondary CTA — frosted white/clear glass 
 * - outline:  Tertiary — clean outlined button
 * - ghost:    Minimal — text-only with hover reveal
 * 
 * Sizes:
 * - sm:    h-11  (navbar, compact)
 * - md:    h-12  (default)
 * - lg:    h-14  (hero, CTA sections)
 */

export type ButtonVariant = "crystal" | "frost" | "outline" | "ghost"
export type ButtonSize = "sm" | "md" | "lg"

const baseClasses = [
  "relative inline-flex items-center justify-center whitespace-nowrap",
  "font-bold tracking-wide",
  "rounded-[12px] overflow-hidden",
  "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
  "active:scale-[0.98] active:shadow-sm",
  "motion-reduce:transition-none motion-reduce:active:scale-100",
].join(" ")

const variantClasses: Record<ButtonVariant, string> = {
  crystal: [
    // Material: frosted deep green glass
    "bg-[rgba(0,54,34,0.82)]",
    "backdrop-blur-[18px] backdrop-saturate-150",
    "text-white",
    // Border: subtle white edge catch
    "border border-white/20",
    // Shadow: depth + bottom glow  
    "shadow-[0_2px_16px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]",
    // Hover
    "hover:bg-[rgba(0,54,34,0.88)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.2)]",
    "hover:-translate-y-[1px]",
    // Cursor
    "cursor-pointer",
  ].join(" "),
  
  frost: [
    // Material: frosted clear glass
    "bg-white/60",
    "backdrop-blur-[18px] backdrop-saturate-150",
    "text-[#1a2b23]",
    // Border
    "border border-[rgba(0,54,34,0.15)]",
    // Shadow
    "shadow-[0_2px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.6)]",
    // Hover
    "hover:bg-white/75 hover:border-[rgba(0,54,34,0.25)]",
    "hover:shadow-[0_4px_20px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.7)]",
    "hover:-translate-y-[1px]",
    // Cursor
    "cursor-pointer",
  ].join(" "),
  
  outline: [
    "bg-transparent",
    "text-on-surface",
    "border border-outline-variant/50",
    "hover:bg-surface-container-lowest hover:border-outline-variant",
    "cursor-pointer",
  ].join(" "),
  
  ghost: [
    "bg-transparent",
    "text-primary font-bold",
    "hover:text-primary/80",
    "cursor-pointer",
    "px-0",
  ].join(" "),
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-11 px-6 text-sm gap-2",
  md: "h-12 px-8 text-sm md:text-base gap-2",
  lg: "h-[54px] md:h-14 px-8 md:px-10 text-base md:text-lg gap-3",
}

// Crystal-only CSS: light sweep pseudo-element via a dedicated wrapper class
// The ::before pseudo is handled via globals.css for the sweep animation
const crystalSweepClass = "stayo-crystal-sweep"
const frostSweepClass = "stayo-frost-sweep"

export const buttonVariants = (
  variant: ButtonVariant = "crystal", 
  size: ButtonSize = "md", 
  className?: string
) => {
  const sweepClass = variant === "crystal" ? crystalSweepClass : variant === "frost" ? frostSweepClass : ""
  return cn(baseClasses, variantClasses[variant], variant !== "ghost" ? sizeClasses[size] : "text-base gap-2", sweepClass, className)
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "crystal", size = "md", ...props }, ref) => {
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
