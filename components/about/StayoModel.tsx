"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";
import { ArrowRight } from "lucide-react";

export default function StayoModel() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="mb-24">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">The STAYO Model</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            How we structure accommodation.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
          {aboutContent.model.stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center"
            >
              <div className="px-6 py-4 bg-surface-container-lowest border border-outline-variant/30 text-center font-headline font-bold text-on-surface shadow-sm whitespace-nowrap">
                {stage}
              </div>
              {index < aboutContent.model.stages.length - 1 && (
                <div className="hidden md:flex ml-6 text-primary">
                  <ArrowRight className="w-6 h-6 opacity-50" />
                </div>
              )}
              {index < aboutContent.model.stages.length - 1 && (
                <div className="md:hidden mt-4 mb-4 text-primary w-full flex justify-center">
                  <ArrowRight className="w-6 h-6 opacity-50 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
