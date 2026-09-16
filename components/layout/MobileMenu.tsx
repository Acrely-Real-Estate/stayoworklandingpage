"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const navLinks = [
  { name: "WorkStay", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when open and handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      {/* Hamburger Button (in Navbar) */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 p-2 text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Full-screen Portal Overlay */}
      {mounted && createPortal(
        <div 
          className={cn(
            "fixed inset-0 z-[100] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-[max(24px,env(safe-area-inset-top))] pb-[max(24px,env(safe-area-inset-bottom))] px-6",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{
            backgroundColor: "rgba(245, 248, 246, 0.82)",
            backdropFilter: "blur(32px) saturate(130%)",
            WebkitBackdropFilter: "blur(32px) saturate(130%)"
          }}
        >
          {/* Overlay Header */}
          <div className="flex items-center justify-between mb-16 shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col group text-left">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-headline text-lg md:text-xl font-bold tracking-tight text-primary">STAYO</span>
                <span className="font-headline text-lg md:text-xl font-semibold tracking-wide text-on-surface">WORKSTAY</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-white/40 hover:bg-white/60 border border-outline-variant/20 shadow-sm"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 w-full max-w-sm mx-auto flex-1 overflow-y-auto hide-scrollbar">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.path;
              return (
                <div key={link.name} className="overflow-hidden">
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "inline-flex flex-col text-[clamp(32px,9vw,52px)] font-headline font-semibold transition-all duration-300 transform leading-tight",
                      isActive ? "text-primary translate-x-2" : "text-on-surface-variant hover:text-on-surface hover:translate-x-2",
                      isOpen ? "translate-y-0 opacity-100 delay-[50ms]" : "translate-y-8 opacity-0"
                    )}
                    style={{ transitionDelay: isOpen ? `${50 + index * 40}ms` : "0ms" }}
                  >
                    {link.name}
                    {/* Restrained active indicator */}
                    <div className={cn(
                      "h-[3px] bg-primary transition-all duration-300 mt-1",
                      isActive ? "w-12" : "w-0"
                    )} />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Bottom CTA */}
          <div className={cn(
            "w-full max-w-sm mx-auto mt-8 shrink-0 transition-all duration-500 delay-[300ms] transform",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={cn(buttonVariants("crystal", "lg"), "w-full group text-base md:text-lg shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-white/60")}
            >
              Discuss Your Requirement
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
