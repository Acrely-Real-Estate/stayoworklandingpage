"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/about";

export default function AboutCTA() {
  return (
    <section className="w-full bg-on-surface text-surface-container-lowest py-32 md:py-48 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin text-center relative z-10 flex flex-col items-center">
        <Reveal>
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8">
            {aboutContent.finalCTA.headline}
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-outline font-medium mb-12 max-w-2xl">
            {aboutContent.finalCTA.support}
          </p>
        </Reveal>
        
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-surface-container-lowest text-on-surface text-lg font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            Discuss Your Requirement
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
