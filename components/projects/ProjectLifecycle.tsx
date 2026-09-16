"use client";

import { motion } from "framer-motion";
import { projectsContent } from "@/content/projects";

export default function ProjectLifecycle() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="mb-24">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Lifecycle</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface">
            The project lifecycle.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {projectsContent.lifecycle.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <div className="text-sm font-bold text-primary tracking-widest mb-6 block border-b-2 border-primary/20 pb-4 group-hover:border-primary transition-colors">
                {stage.step} — {stage.title.toUpperCase()}
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                {stage.title}
              </h3>
              <p className="text-on-surface-variant font-medium leading-relaxed">
                {stage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
