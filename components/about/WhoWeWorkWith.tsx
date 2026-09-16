"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/about";

export default function WhoWeWorkWith() {
  return (
    <section className="w-full bg-surface-container-low py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight mb-8">
                {aboutContent.whoWeWorkWith.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
                {aboutContent.whoWeWorkWith.description}
              </p>
            </Reveal>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video w-full rounded overflow-hidden bg-surface-container shadow-md"
            >
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Industrial scale operations" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
