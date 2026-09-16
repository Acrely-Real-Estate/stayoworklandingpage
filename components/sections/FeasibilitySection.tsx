"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorksContent } from "@/content/how-it-works";

export default function FeasibilitySection() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row gap-gutter">
          <div className="md:w-5/12 mb-16 md:mb-0">
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface font-bold leading-tight mb-8">
                {howItWorksContent.feasibility.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-sm">
                {howItWorksContent.feasibility.description}
              </p>
            </Reveal>
          </div>
          
          <div className="md:w-7/12 flex items-center justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {howItWorksContent.feasibility.factors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-surface-container-low border border-outline-variant/30 p-6 rounded flex items-center justify-center text-center aspect-square"
                >
                  <span className="font-headline text-lg font-bold text-on-surface-variant">
                    {factor}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
