"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { SplitText } from "@/components/ui/SplitText";

export default function AboutHero() {
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
          src="https://images.unsplash.com/photo-1541888086925-eb4d9c7929bd?q=80&w=2080&auto=format&fit=crop" 
          alt="Modern architecture" 
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
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{aboutContent.hero.label}</span>
          </motion.div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface font-bold tracking-tight leading-[1.05]">
            <SplitText text="Accommodation" />
            <br />
            <span className="text-primary"><SplitText text="infrastructure" /></span>
            <br />
            <SplitText text="for the modern workforce." />
          </h1>

          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-medium mt-8"
          >
            {aboutContent.hero.support}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
