"use client";

import { Reveal } from "@/components/ui/Reveal";
import { solutionsContent } from "@/content/solutions";

export default function SolutionNarrative() {
  const lines = solutionsContent.intro.statement.split('\n');
  
  return (
    <section className="w-full bg-surface-container-lowest py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-4xl flex flex-col items-start">
          {lines.map((line, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl text-on-surface font-bold leading-tight mb-2">
                {line}
              </h2>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
