"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    title: "UNDERSTAND",
    description: "We understand your workforce, location and operational requirements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    title: "DEVELOP",
    description: "We develop accommodation around the requirements of your workforce.",
    image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=2187&auto=format&fit=crop"
  },
  {
    title: "OPERATE",
    description: "We manage the accommodation and agreed supporting services.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2080&auto=format&fit=crop"
  }
];

export default function StickyStory() {
  return (
    <section className="relative w-full bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin w-full">
        
        {/* Mobile: Standard stacked layout */}
        <div className="lg:hidden py-16 flex flex-col gap-12">
          <div className="mb-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Process</span>
            <h2 className="font-headline text-4xl text-on-surface font-bold leading-tight">
              From requirement<br/>to residence.
            </h2>
          </div>
          
          <div className="flex flex-col gap-16">
            {stages.map((stage, index) => (
              <div key={`mobile-${index}`} className="flex flex-col gap-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-headline text-3xl text-primary font-bold">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-primary/20" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface font-bold tracking-tight">{stage.title}</h3>
                <p className="text-base text-on-surface-variant font-medium leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid with Sticky Left Side */}
        <div className="hidden lg:grid grid-cols-12 gap-12 relative items-start pb-32 pt-24">
          
          <div className="col-span-5 sticky top-32 h-[calc(100vh-16rem)] flex flex-col justify-center">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">Process</span>
            <h2 className="font-headline text-5xl xl:text-6xl text-on-surface font-bold leading-tight mb-8">
              From requirement<br/>to residence.
            </h2>
            <div className="w-24 h-1 bg-primary/20 rounded-full" />
          </div>
          
          <div className="col-span-7 flex flex-col gap-[30vh] pt-[10vh] pb-[20vh]">
            {stages.map((stage, index) => (
              <div key={`desktop-${index}`} className="bg-surface-container-lowest p-10 border border-outline-variant/30 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-headline text-4xl text-primary font-bold">0{index + 1}</span>
                  <div className="h-[1px] flex-grow bg-primary/20" />
                </div>
                <h3 className="font-headline text-4xl text-on-surface font-bold mb-4 tracking-tight">{stage.title}</h3>
                <p className="text-xl text-on-surface-variant font-medium leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
