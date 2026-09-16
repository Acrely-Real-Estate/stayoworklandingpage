"use client";

import { motion } from "framer-motion";
import { projectsContent } from "@/content/projects";

export default function WorkforceContexts() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="mb-24 md:text-center">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface">
            Built for different workforces.
          </h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projectsContent.contexts.map((context, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                    {context.title}
                  </h3>
                  <div className="w-8 h-1 bg-primary mb-6" />
                  <p className="text-xl text-on-surface-variant font-medium leading-relaxed">
                    {context.description}
                  </p>
                </div>
                
                <div className="w-full lg:w-7/12">
                  <div className={`aspect-[4/3] rounded-lg overflow-hidden bg-surface-container shadow-sm transform transition-transform duration-700 hover:scale-[1.02] ${isEven ? 'lg:origin-left' : 'lg:origin-right'}`}>
                    <img 
                      src={context.image} 
                      alt={context.title} 
                      className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
