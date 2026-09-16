"use client";

import { Reveal } from "@/components/ui/Reveal";
import { projectsContent } from "@/content/projects";

export default function ProjectApproach() {
  const lines = projectsContent.approach.headline.split('\n');

  return (
    <section className="w-full bg-surface-container py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal className="mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold text-on-surface leading-tight mb-8">
              {lines[0]}
              <br />
              <span className="text-primary">{lines[1]}</span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.2} className="mx-auto">
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed mt-8">
              {projectsContent.approach.description}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
