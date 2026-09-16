"use client";

import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/about";

export default function AboutApproach() {
  return (
    <section className="w-full bg-surface-container py-32 md:py-48 text-center border-t border-outline-variant/30">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin">
        <Reveal>
          <span className="text-sm font-bold text-primary tracking-widest uppercase mb-6 block">Our Approach</span>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-on-surface leading-tight mb-8">
            {aboutContent.approach.headline}
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed mt-8">
            {aboutContent.approach.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
