"use client";

import { Reveal } from "@/components/ui/Reveal";
import { siteContent } from "@/content/site";

export default function WorkforceStory() {
  return (
    <section className="w-full bg-surface-container-lowest py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Reveal>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl text-on-surface font-bold leading-tight">
              {siteContent.problem.headline.split('.')[0]}.
            </h2>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl text-on-surface-variant font-bold leading-tight mt-2">
              {siteContent.problem.headline.split('.')[1]}.
            </h2>
          </Reveal>
          
          <Reveal delay={0.4} className="mt-12">
            <div className="w-12 h-1 bg-primary mx-auto mb-10" />
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-medium leading-relaxed">
              {siteContent.problem.support}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
