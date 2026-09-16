"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteContent } from "@/content/site";

export default function WorkStayModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const processStages = [
    {
      title: siteContent.model.stages[0] || "COMPANY REQUIREMENT",
      description: "Understand the workforce, location and operational requirements.",
      meta: ["WORKFORCE", "LOCATION", "CAPACITY"]
    },
    {
      title: siteContent.model.stages[1] || "STAYO PLANNING",
      description: "Develop accommodation around the requirements of your workforce.",
      meta: ["TIMELINE", "BUDGET"]
    },
    {
      title: siteContent.model.stages[2] || "ACCOMMODATION DEVELOPMENT",
      description: "Manage the accommodation and agreed supporting services.",
      meta: ["CONSTRUCTION", "PROCUREMENT"]
    },
    {
      title: siteContent.model.stages[3] || "STAYO OPERATIONS",
      description: "Allow the accommodation approach to evolve with changing requirements.",
      meta: ["HOUSEKEEPING", "MAINTENANCE"]
    },
    {
      title: siteContent.model.stages[4] || "WORKFORCE ACCOMMODATION",
      description: "Deliver the accommodation environment around the confirmed requirement.",
      meta: ["READY", "SCALABLE"]
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-surface-container-lowest py-24 md:py-40 relative border-t border-outline-variant/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
        
        {/* Editorial Intro & Visual Anchor */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-32 md:mb-48">
          <div className="lg:w-5/12 flex flex-col pt-8">
            <span className="text-xs font-bold text-primary tracking-[0.2em] uppercase mb-8 block">Process</span>
            <h2 className="font-headline text-[clamp(48px,6vw,88px)] text-on-surface font-bold leading-[1.05] tracking-tight mb-8">
              From requirement<br/>to residence.
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed max-w-md">
              {siteContent.model.headline.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
          </div>
          <div className="lg:w-7/12 w-full relative h-[450px] md:h-[650px] bg-surface-container">
            <img 
              src="https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=2187&auto=format&fit=crop" 
              alt="STAYO Architectural Planning" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto relative flex flex-col gap-0">
          
          {/* Vertical animated line */}
          <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/30 md:-translate-x-1/2 z-0" />
          <motion.div 
            style={{ height: lineHeight }} 
            className="absolute left-[34px] md:left-1/2 top-0 w-[1px] bg-primary md:-translate-x-1/2 origin-top z-0" 
          />

          {processStages.map((stage, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="grid grid-cols-[68px_1fr] md:grid-cols-[1fr_120px_1fr] items-center relative z-10 py-12 md:py-24 group">
                
                {/* CENTER NODE */}
                <div className="col-start-1 md:col-start-2 flex justify-center items-center relative z-20">
                  <div className="w-3 h-3 rounded-full bg-surface-container-lowest border-[2px] border-primary transition-transform duration-500 group-hover:scale-150 ring-8 ring-surface-container-lowest" />
                </div>

                {/* CARD */}
                <div className={`col-start-2 ${isEven ? 'md:col-start-1 md:justify-end md:pr-16' : 'md:col-start-3 md:justify-start md:pl-16'} flex w-full relative`}>
                  
                  {/* Large Background Number */}
                  <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-4 md:right-8' : 'left-4 md:left-8'} text-[140px] md:text-[220px] font-headline font-bold text-on-surface/[0.02] z-0 pointer-events-none transition-colors duration-500 group-hover:text-primary/[0.04]`}>
                    0{index + 1}
                  </div>

                  <motion.div 
                    initial={{ opacity: 1, y: 0 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-transparent p-6 md:p-12 border-l-2 md:border-l-0 md:border-t-2 border-primary/20 w-full md:w-[460px] lg:w-[540px] transition-all relative z-10 hover:border-primary/60 backdrop-blur-sm"
                  >
                    <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-6 block">
                      Phase 0{index + 1}
                    </span>
                    <h3 className="font-headline text-2xl md:text-4xl text-on-surface font-bold tracking-tight leading-[1.15] mb-6" style={{ wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}>
                      {stage.title}
                    </h3>
                    <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed mb-10">
                      {stage.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {stage.meta.map((m, i) => (
                        <span key={i} className="text-[10px] font-bold text-on-surface-variant/70 tracking-[0.15em] uppercase border border-outline-variant/40 px-3 py-1.5">
                          {m}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
