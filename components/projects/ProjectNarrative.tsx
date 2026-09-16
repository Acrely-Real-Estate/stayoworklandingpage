"use client";

import { Reveal } from "@/components/ui/Reveal";
import { projectsContent } from "@/content/projects";

export default function ProjectNarrative() {
  const lines = projectsContent.framework.headline.split('\n');
  
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">
          <div className="mb-12 lg:mb-0">
            {lines.map((line, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <h2 className={`font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${i === 1 ? 'text-primary' : 'text-on-surface'}`}>
                  {line}
                </h2>
              </Reveal>
            ))}
          </div>
          
          <div className="lg:pt-4">
            <Reveal delay={0.3}>
              <div className="w-12 h-1 bg-primary mb-8" />
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed">
                {projectsContent.framework.description}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
