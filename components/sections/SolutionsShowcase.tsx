"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionsContent } from "@/content/solutions";

export default function SolutionsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const solutionsData = solutionsContent.solutions;

  return (
    <section className="w-full bg-surface-container-low py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="mb-20">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Our Solutions</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-on-surface font-bold leading-tight">
            Accommodation for the<br />workforce you have.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Mobile view: vertical stacked */}
          <div className="lg:hidden flex flex-col gap-12">
            {solutionsData.map((solution) => (
              <div key={`mobile-${solution.id}`} className="flex flex-col gap-4">
                <div className="aspect-video w-full rounded-lg overflow-hidden bg-surface-container-lowest">
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-on-surface">{solution.title}</h3>
                <p className="text-on-surface-variant font-medium">{solution.description}</p>
              </div>
            ))}
          </div>

          {/* Desktop view: interactive split */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center">
            {solutionsData.map((solution, index) => (
              <div 
                key={`desktop-${solution.id}`}
                className="py-6 border-b border-outline-variant/50 cursor-pointer group relative"
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-primary transition-all duration-300 group-hover:h-full" 
                     style={{ height: activeIndex === index ? '100%' : '0%' }}
                />
                <h3 className={`font-headline text-4xl font-bold transition-colors pl-8 duration-300 ${activeIndex === index ? 'text-primary' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                  {solution.title}
                </h3>
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-8 pt-4 text-lg text-on-surface-variant max-w-md font-medium"
                    >
                      {solution.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-6 relative h-[700px] rounded-lg overflow-hidden bg-surface-container-lowest">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={solutionsData[activeIndex].image}
                alt={solutionsData[activeIndex].title}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
