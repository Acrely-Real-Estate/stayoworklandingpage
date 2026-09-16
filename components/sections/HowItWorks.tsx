"use client";

import { motion } from "framer-motion";

const stages = [
  { step: "01", title: "REQUIREMENT", desc: "Understand the workforce requirement." },
  { step: "02", title: "PLANNING", desc: "Determine the appropriate accommodation approach." },
  { step: "03", title: "DEVELOPMENT", desc: "Develop the accommodation solution." },
  { step: "04", title: "OPERATIONS", desc: "Manage the accommodation and agreed services." }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-surface-container-low py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start mb-16 lg:mb-0">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Methodology</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
              How we work.
            </h2>
          </div>
          
          <div className="lg:col-span-8 flex flex-col gap-32">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-outline-variant/30 pt-12"
              >
                <div className="flex-shrink-0 font-headline text-5xl md:text-7xl font-bold text-primary/20">
                  {stage.step}
                </div>
                <div className="flex flex-col gap-4 mt-2">
                  <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface tracking-wider">
                    {stage.title}
                  </h3>
                  <p className="text-lg md:text-xl text-on-surface-variant font-medium">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
