"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/content/site";
import { SplitText } from "@/components/ui/SplitText";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function WorkStayHero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden bg-surface-container-lowest">
      {/* Background Image with Parallax & Scale */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10" />
        <Image 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate workforce infrastructure" 
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale mix-blend-overlay"
        />
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin w-full">
        <div className="max-w-3xl flex flex-col space-y-space-lg pt-20">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-surface-container/80 backdrop-blur-sm px-3 py-1.5 rounded w-fit"
          >
            <span className="text-xs font-bold text-primary uppercase tracking-widest">{siteContent.hero.label.split('/')[0].trim()}</span>
            <span className="text-outline-variant">/</span>
            <span className="text-xs font-semibold text-on-surface-variant">{siteContent.hero.label.split('/')[1].trim()}</span>
          </motion.div>

          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface font-bold tracking-tight leading-[1.05]">
            <SplitText text="Workforce accommodation," />
            <br />
            <span className="text-primary"><SplitText text="built around your demand." /></span>
          </h1>

          <motion.p 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-on-surface-variant max-w-2xl font-medium"
          >
            {siteContent.hero.support}
          </motion.p>

          <motion.div 
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap items-center gap-space-md pt-4"
          >
            <Link
              href="/contact"
              className={cn(buttonVariants("crystal", "lg"), "group")}
            >
              Discuss Your Requirement
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/how-it-works"
              className={cn(buttonVariants("frost", "lg"), "group")}
            >
              Explore How It Works
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-margin-mobile md:left-margin z-20 flex items-center gap-3"
      >
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-on-surface-variant">Scroll to explore</span>
        <div className="w-12 h-[1px] bg-outline-variant overflow-hidden">
          <motion.div 
            className="w-full h-full bg-primary"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
