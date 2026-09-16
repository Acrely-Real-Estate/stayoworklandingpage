"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { name: "WorkStay", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 md:top-6 left-4 right-4 md:left-8 md:right-8 z-50 transition-all duration-500 flex justify-center pointer-events-none">
      <div 
        className={cn(
          "w-full max-w-[1440px] pointer-events-auto transition-all duration-500 rounded-2xl flex items-center justify-between px-5 md:px-8",
          scrolled 
            ? "h-[76px] md:h-[84px] bg-white/85 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            : "h-[80px] md:h-[88px] bg-white/65 backdrop-blur-md border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
        )}
      >
        
        {/* LOGO */}
        <Link href="/" className="flex flex-col group text-left shrink-0">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className="font-headline text-lg md:text-xl font-bold tracking-tight text-primary">STAYO</span>
            <span className="font-headline text-lg md:text-xl font-semibold tracking-wide text-on-surface">WORKSTAY</span>
          </div>
          <span className="text-[9px] md:text-[10px] font-bold text-on-surface-variant/80 tracking-[0.2em] uppercase mt-1">
            An Acrely Real Estates Company
          </span>
        </Link>

        {/* CENTER NAV (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 h-full">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "relative text-sm font-semibold transition-colors py-2 group",
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant/80 hover:text-on-surface"
                )}
              >
                {link.name}
                <div className={cn(
                  "absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-1/2"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-5 shrink-0">
          <Link
            href="/contact"
            className={cn(buttonVariants("crystal", "sm"), "hidden md:inline-flex group")}
          >
            Discuss Your Requirement
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          {/* Architectural Detail (Hidden on small screens) */}
          <div className="hidden xl:flex items-center gap-4 pl-4 border-l border-outline-variant/30">
            <div className="flex flex-col text-[8px] font-bold tracking-[0.25em] text-on-surface-variant/60 uppercase leading-snug">
              <span>People</span>
              <span>Places</span>
              <span>Possibilities</span>
            </div>
          </div>

          <MobileMenu />
        </div>

      </div>
    </header>
  );
}
