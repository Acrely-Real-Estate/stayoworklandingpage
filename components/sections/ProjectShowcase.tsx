"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectShowcase() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight">
              Purpose-built accommodation<br />for the places where people work.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-primary text-sm font-bold uppercase tracking-widest border border-primary hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap"
          >
            Discuss a Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-[4/3] bg-surface-container rounded overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888086925-eb4d9c7929bd?q=80&w=2080&auto=format&fit=crop" 
              alt="Industrial accommodation campus" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[4/3] bg-surface-container rounded overflow-hidden md:mt-24"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
              alt="Workforce housing development" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
