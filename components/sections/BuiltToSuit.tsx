"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function BuiltToSuit() {
  return (
    <section className="w-full bg-on-surface text-surface-container-lowest py-32 md:py-48 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
          alt="Architectural Blueprint" 
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div>
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                When the requirement doesn't fit an existing property.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-outline font-medium leading-relaxed max-w-lg">
                STAYO WorkStay can develop accommodation around a company's workforce, location and operational requirements, subject to project feasibility and commercial agreement.
              </p>
            </Reveal>
          </div>
          
          <div className="hidden lg:flex justify-end">
            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/20"
            >
              <img 
                src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=2187&auto=format&fit=crop" 
                alt="Development Planning" 
                className="w-full h-full object-cover grayscale brightness-75 contrast-125"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
