"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { howItWorksContent } from "@/content/how-it-works";
import { SplitText } from "@/components/ui/SplitText";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function HowItWorksHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-surface-container-lowest">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-surface-container-lowest/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
          alt="Architectural development planning" 
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin w-full">
        <div className="max-w-4xl flex flex-col space-y-space-lg pt-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{howItWorksContent.hero.label}</span>
          </motion.div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface font-bold tracking-tight leading-[1.05]">
            <SplitText text="From requirement" />
            <br />
            <span className="text-primary"><SplitText text="to residence." /></span>
          </h1>

          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-medium"
          >
            {howItWorksContent.hero.support}
          </motion.p>

          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-space-md pt-4"
          >
            <Link
              href="/contact"
              className={cn(buttonVariants("crystal", "lg"), "group")}
            >
              Discuss Your Requirement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
