"use client";

import { useState, useEffect } from "react";
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

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Full-screen Glass Panel */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between pt-32 pb-12 px-6",
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-8"
        )}
      >
        <nav className="flex flex-col gap-6 w-full max-w-sm mx-auto">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <div key={link.name} className="border-b border-outline-variant/20 overflow-hidden">
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between pb-4 text-2xl font-headline font-semibold transition-all duration-300 transform",
                    isActive ? "text-primary translate-x-2" : "text-on-surface-variant hover:text-on-surface hover:translate-x-2",
                    isOpen ? "translate-y-0 opacity-100 delay-[100ms]" : "translate-y-8 opacity-0"
                  )}
                  style={{ transitionDelay: isOpen ? `${100 + index * 50}ms` : "0ms" }}
                >
                  {link.name}
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              </div>
            );
          })}
        </nav>

        <div className={cn(
          "w-full max-w-sm mx-auto mt-12 transition-all duration-700 delay-500 transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        )}>
          <div className="flex flex-col text-[10px] font-bold tracking-[0.2em] text-on-surface-variant/60 uppercase mb-8 text-center space-y-1">
            <span>People</span>
            <span>Places</span>
            <span>Possibilities</span>
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={cn(buttonVariants("crystal", "lg"), "w-full group")}
          >
            Discuss Your Requirement
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
