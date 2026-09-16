"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howItWorksContent } from "@/content/how-it-works";

export default function ProcessStory() {
  const stages = howItWorksContent.stages;

  return (
    <section className="relative w-full bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin w-full">
        
        {/* Mobile: Standard stacked layout */}
        <div className="lg:hidden py-16 flex flex-col gap-12">
          <div className="mb-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Methodology</span>
            <h2 className="font-headline text-4xl text-on-surface font-bold leading-tight">
              How we work.
            </h2>
          </div>
          
          <div className="flex flex-col gap-16">
            {stages.map((stage) => (
              <div key={`mobile-${stage.id}`} className="bg-surface-container-lowest p-6 border border-outline-variant/30 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline text-3xl text-primary font-bold">{stage.step}</span>
                  <div className="h-[1px] flex-grow bg-primary/20" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface font-bold mb-4 tracking-tight">{stage.title}</h3>
                <p className="text-base text-on-surface-variant font-medium leading-relaxed mb-6">{stage.description}</p>
                <ul className="flex flex-col gap-3">
                  {stage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-on-surface-variant font-medium leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid with Sticky Left Side */}
        <div className="hidden lg:grid grid-cols-12 gap-12 relative items-start pb-32 pt-24">
          
          {/* Pinned Title side */}
          <div className="col-span-4 sticky top-32 h-[calc(100vh-16rem)] flex flex-col justify-center">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Methodology</span>
            <h2 className="font-headline text-6xl text-on-surface font-bold leading-tight mb-8">
              How we work.
            </h2>
            <div className="w-24 h-1 bg-primary/20 rounded-full" />
          </div>
          
          {/* Scrolling Content side */}
          <div className="col-span-8 flex flex-col gap-[30vh] pt-[10vh] pb-[20vh]">
            {stages.map((stage) => (
              <div key={`desktop-${stage.id}`} className="bg-surface-container-lowest p-12 border border-outline-variant/30 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-headline text-4xl text-primary font-bold">{stage.step}</span>
                  <div className="h-[1px] flex-grow bg-primary/20" />
                </div>
                <h3 className="font-headline text-4xl text-on-surface font-bold mb-6 tracking-tight">{stage.title}</h3>
                <p className="text-xl text-on-surface-variant font-medium leading-relaxed mb-8">{stage.description}</p>
                
                <ul className="grid grid-cols-2 gap-y-4 gap-x-8">
                  {stage.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      <span className="text-base text-on-surface-variant font-medium leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
