"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";

export default function ParentCompany() {
  return (
    <section className="w-full bg-surface-container-lowest py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex justify-center">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center flex flex-col items-center"
        >
          <div className="w-16 h-[1px] bg-outline-variant mb-12" />
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-6 tracking-tight">
            {aboutContent.parentCompany.title}
          </h3>
          <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
            {aboutContent.parentCompany.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
