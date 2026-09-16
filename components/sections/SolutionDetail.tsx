"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutionsContent } from "@/content/solutions";

export default function SolutionDetail() {
  return (
    <section className="w-full bg-surface-container py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col gap-32">
          {solutionsContent.solutions.map((solution, index) => (
            <motion.div 
              key={solution.id}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="lg:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
                  {solution.title}
                </h3>
                {solution.support && (
                  <p className="text-xl text-primary font-bold mb-4">
                    {solution.support}
                  </p>
                )}
                <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg mb-10">
                  {solution.description}
                </p>
                
                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors group"
                  >
                    Discuss Your Requirement
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-sm">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
