"use client";

import { motion } from "framer-motion";
import { aboutContent } from "@/content/about";

export default function WhatWeDo() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 lg:gap-x-24">
          {aboutContent.whatWeDo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group"
            >
              <span className="font-headline text-5xl md:text-7xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors duration-500">
                {item.step}
              </span>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                {item.title}
              </h3>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
