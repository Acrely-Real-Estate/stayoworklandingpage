"use client";

import { Reveal } from "@/components/ui/Reveal";
import { aboutContent } from "@/content/about";

export default function AboutNarrative() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-on-surface font-bold leading-tight mb-12">
              {aboutContent.idea.headline}
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="w-12 h-1 bg-primary mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed text-left md:text-center">
              {aboutContent.idea.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
