"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksContent } from "@/content/how-it-works";

export default function LongTermModel() {
  return (
    <section className="w-full bg-primary text-on-primary py-32 md:py-48 overflow-hidden relative">
      {/* Decorative large logo mark */}
      <div className="absolute left-0 bottom-0 opacity-[0.03] pointer-events-none -translate-x-1/4 translate-y-1/4">
        <span className="font-headline text-[40vw] font-bold leading-none select-none">W</span>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
              {howItWorksContent.longTerm.headline}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-xl md:text-3xl text-on-primary/90 font-medium leading-relaxed max-w-3xl">
              {howItWorksContent.longTerm.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
