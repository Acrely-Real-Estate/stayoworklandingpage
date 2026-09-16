"use client";

import { motion } from "framer-motion";
import { howItWorksContent } from "@/content/how-it-works";
import { Reveal } from "@/components/ui/Reveal";

export default function CorporateRelationship() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          <div className="sticky top-32 mb-16 lg:mb-0">
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight">
                {howItWorksContent.relationship.headline.split('\n')[0]}
                <br />
                <span className="text-primary">{howItWorksContent.relationship.headline.split('\n')[1]}</span>
              </h2>
            </Reveal>
          </div>
          
          <div className="flex flex-col gap-12">
            {howItWorksContent.relationship.points.map((point, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-6 border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors"
              >
                <div className="font-headline text-2xl text-primary font-bold w-8 flex-shrink-0 pt-1">
                  0{index + 1}
                </div>
                <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
