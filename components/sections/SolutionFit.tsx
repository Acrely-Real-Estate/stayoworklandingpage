"use client";

import { motion } from "framer-motion";
import { solutionsContent } from "@/content/solutions";
import { ArrowRight } from "lucide-react";

export default function SolutionFit() {
  return (
    <section className="w-full bg-surface-container-low py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-on-surface mb-16 text-center">
          {solutionsContent.fit.headline}
        </h2>
        
        <div className="flex flex-col gap-4">
          {solutionsContent.fit.scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-container-lowest border border-outline-variant/30 rounded-lg group hover:border-primary/50 transition-colors"
            >
              <div className="flex-1 mb-4 md:mb-0">
                <p className="text-lg text-on-surface-variant font-medium">
                  {scenario.trigger}
                </p>
              </div>
              <div className="hidden md:flex flex-shrink-0 mx-6 text-outline">
                <ArrowRight className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 md:text-right">
                <span className="inline-flex items-center text-primary font-bold text-lg">
                  <span className="md:hidden mr-2">→</span>
                  {scenario.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
