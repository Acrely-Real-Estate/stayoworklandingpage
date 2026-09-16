"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary text-on-primary py-32 md:py-48 relative overflow-hidden">
      {/* Decorative large logo mark */}
      <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none translate-x-1/4 translate-y-1/4">
        <span className="font-headline text-[40vw] font-bold leading-none select-none">S</span>
      </div>

      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin text-center relative z-10 flex flex-col items-center">
        <Reveal>
          <h2 className="font-headline text-5xl md:text-7xl font-bold leading-tight mb-8">
            Have a workforce accommodation requirement?
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-on-primary/80 font-medium mb-12 max-w-2xl">
            Tell us what your workforce needs. Let's explore the right accommodation solution.
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
            className={cn(buttonVariants("crystal", "lg"), "group")}
          >
            Discuss Your Requirement
            <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
