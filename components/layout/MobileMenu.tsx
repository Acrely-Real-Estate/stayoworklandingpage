"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

const coreLinks = [
  { name: "WorkStay", path: "/" },
  { name: "Solutions", path: "/solutions", hasSub: true },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Industries", path: "/industries" },
  { name: "Projects", path: "/projects" },
  { name: "For Companies", path: "/companies" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const subSolutions = [
  { name: "Workforce Housing", path: "/solutions/workforce-housing" },
  { name: "Employee Relocation", path: "/solutions/employee-relocation" },
  { name: "Trainees & Interns", path: "/solutions/trainees-interns" },
  { name: "Project Workforce", path: "/solutions/project-workforce" },
  { name: "Contract Workforce", path: "/solutions/contract-workforce" },
  { name: "Built-to-Suit", path: "/solutions/built-to-suit" }
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [solutionsExpanded, setSolutionsExpanded] = useState(false);

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
      setSolutionsExpanded(false); // reset accordion when closed
    }
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-50 p-2 text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-5 h-5" />
      </button>

      {mounted && createPortal(
        <div 
          className={cn(
            "fixed inset-0 z-[9999] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-[max(24px,env(safe-area-inset-top))] pb-[max(24px,env(safe-area-inset-bottom))] px-6",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          style={{
            backgroundColor: "rgba(245, 248, 246, 0.95)",
            backdropFilter: "blur(32px) saturate(130%)",
            WebkitBackdropFilter: "blur(32px) saturate(130%)"
          }}
        >
          <div className="flex items-center justify-between mb-8 shrink-0">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col group text-left">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-headline text-lg md:text-xl font-bold tracking-tight text-primary">STAYO</span>
                <span className="font-headline text-lg md:text-xl font-semibold tracking-wide text-on-surface">WORKSTAY</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-on-surface hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full bg-white/60 hover:bg-white/80 border border-outline-variant/20 shadow-sm"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 w-full max-w-sm mx-auto flex-1 overflow-y-auto hide-scrollbar pb-8">
            {coreLinks.map((link, index) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <div key={link.name} className="overflow-hidden flex flex-col">
                  {link.hasSub ? (
                    <div className={cn(
                      "transition-all duration-300 transform",
                      isOpen ? "translate-y-0 opacity-100 delay-[50ms]" : "translate-y-8 opacity-0"
                    )}
                    style={{ transitionDelay: isOpen ? `${50 + index * 40}ms` : "0ms" }}>
                      <button 
                        onClick={() => setSolutionsExpanded(!solutionsExpanded)}
                        className={cn(
                          "w-full flex items-center justify-between text-[clamp(28px,8vw,42px)] font-headline font-semibold leading-tight text-left",
                          isActive ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
                        )}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={cn("w-6 h-6 transition-transform", solutionsExpanded ? "rotate-180" : "")} />
                      </button>
                      <div className={cn(
                        "flex flex-col gap-3 overflow-hidden transition-all duration-300",
                        solutionsExpanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        {subSolutions.map(sub => (
                          <Link 
                            key={sub.name}
                            href={sub.path}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-lg font-medium pl-4 border-l-2 py-1 transition-colors",
                              pathname === sub.path ? "border-primary text-primary" : "border-outline-variant/50 text-on-surface-variant hover:text-on-surface hover:border-primary/50"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "inline-flex flex-col text-[clamp(28px,8vw,42px)] font-headline font-semibold transition-all duration-300 transform leading-tight",
                        isActive ? "text-primary translate-x-2" : "text-on-surface-variant hover:text-on-surface hover:translate-x-2",
                        isOpen ? "translate-y-0 opacity-100 delay-[50ms]" : "translate-y-8 opacity-0"
                      )}
                      style={{ transitionDelay: isOpen ? `${50 + index * 40}ms` : "0ms" }}
                    >
                      {link.name}
                      <div className={cn(
                        "h-[3px] bg-primary transition-all duration-300 mt-1",
                        isActive ? "w-12" : "w-0"
                      )} />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className={cn(
            "w-full max-w-sm mx-auto mt-4 shrink-0 transition-all duration-500 delay-[300ms] transform",
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

