import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Project Contexts | STAYO WorkStay",
  description: "Explore the project-led approach STAYO WorkStay takes to workforce accommodation."
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest text-on-surface">
      <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 max-w-4xl">
          Project Contexts & Deployment Models.
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl leading-relaxed mb-8">
          We operate across diverse industrial landscapes. Our facilities are designed to map precisely to the operational realities of our clients.
        </p>
        <div className="inline-block border border-primary/30 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium tracking-wide">
          Note: The models outlined below represent illustrative deployment contexts.
        </div>
      </div>

      <div className="w-full border-t border-outline-variant/30 mt-8">
        {/* Context 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-outline-variant/30 group">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center lg:order-1">
            <span className="text-primary font-headline text-xl mb-4 block tracking-widest uppercase">Context 01</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Manufacturing Workforce Campus</h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-xl">
              Dedicated accommodation solutions located in close proximity to large-scale manufacturing and production facilities. Designed for permanent or long-term operational staff, prioritizing stability, community integration, and daily commuting efficiency.
            </p>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden lg:order-2 border-l border-outline-variant/30">
            <Image 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              alt="Manufacturing"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Context 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-outline-variant/30 group">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center lg:order-2">
            <span className="text-primary font-headline text-xl mb-4 block tracking-widest uppercase">Context 02</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Project Workforce Hub</h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-xl">
              Scalable infrastructure designed for temporary but extended civil, infrastructure, or construction projects. These hubs are engineered for rapid deployment, high-density occupation, and eventual decommissioning or repurposing once the project concludes.
            </p>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden lg:order-1 border-r border-outline-variant/30">
            <Image 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
              alt="Project construction"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Context 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-outline-variant/30 group">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center lg:order-1">
            <span className="text-primary font-headline text-xl mb-4 block tracking-widest uppercase">Context 03</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Specialized Industrial Zones</h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-xl">
              Facilities integrated within specific industrial parks or economic zones, serving a multi-tenant corporate client base. This model consolidates workforce accommodation into a centralized, highly managed operational node.
            </p>
          </div>
          <div className="relative min-h-[400px] lg:min-h-full w-full overflow-hidden lg:order-2 border-l border-outline-variant/30">
            <Image 
              src="https://images.unsplash.com/photo-1541888086225-ee5a00445d3e?q=80&w=2070&auto=format&fit=crop"
              alt="Industrial zones"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl mb-6">Define Your Context</h2>
        <p className="text-lg text-on-surface-variant font-body mb-10 max-w-2xl mx-auto">
          We build specifically for your operational reality. Engage with our team to map out a tailored infrastructure solution.
        </p>
        <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
          Discuss Requirements
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
