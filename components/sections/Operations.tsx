"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/content/site";

export default function Operations() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="mb-24">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-on-surface font-bold leading-tight">
            {siteContent.operations.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {siteContent.operations.services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="flex items-center gap-6 group cursor-default"
            >
              <span className="text-sm font-semibold text-primary/50 tracking-widest w-8">0{index + 1}</span>
              <h3 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
