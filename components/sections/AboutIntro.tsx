"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutIntro() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          <div className="order-2 lg:order-1 relative aspect-square max-w-md mx-auto lg:mx-0 w-full overflow-hidden rounded-full">
            <motion.div
              initial={{ scale: 1.2, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Infrastructure" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 mb-16 lg:mb-0">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-6 block">About StayO WorkStay</span>
            <Reveal>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface leading-tight mb-8">
                Making workforce accommodation simpler for companies.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg">
                As a specialized operating unit of Acrely Real Estates, STAYO WorkStay merges institutional real estate discipline with deep operational hospitality expertise.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
