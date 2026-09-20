import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "How It Works | STAYO WorkStay",
  description: "The STAYO WorkStay 4-stage process: Requirement, Planning, Development, and Operations.",
};

const stages = [
  {
    num: "01",
    title: "Requirement",
    desc: "We begin by understanding the specific workforce accommodation needs of the corporate client. This involves analyzing workforce size, project duration, location constraints, and specific compliance or operational requirements.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Planning",
    desc: "Our team conducts rigorous site selection, feasibility studies, and financial modeling. We develop a comprehensive strategy that balances capital expenditure, operational viability, and tenant well-being.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Development",
    desc: "Executing the vision through specialized development. We manage the construction or retrofit of the facility, ensuring it meets strict industrial-grade standards, safety regulations, and corporate compliance mandates.",
    img: "https://images.unsplash.com/photo-1541888086225-ee5a00445d3e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "04",
    title: "Operations",
    desc: "Ongoing facility management and operations. We provide end-to-end management including security, maintenance, catering, and administration, ensuring a seamless living experience for the workforce.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest text-on-surface">
      <div className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 mb-8 text-on-surface-variant font-medium tracking-wide text-sm uppercase">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span>How It Works</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 max-w-4xl">
          A Structured Approach to Workforce Infrastructure.
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl leading-relaxed mb-16">
          From initial requirement mapping to ongoing facility operations, our four-stage process ensures scalable, compliant, and dignified accommodation.
        </p>
      </div>

      <div className="w-full border-t border-outline-variant/30">
        {stages.map((stage, idx) => (
          <div key={stage.num} className="grid grid-cols-1 lg:grid-cols-2 border-b border-outline-variant/30 group">
            <div className={cn(
              "p-8 md:p-16 lg:p-24 flex flex-col justify-center",
              idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"
            )}>
              <span className="text-primary font-headline text-2xl mb-4 block">{stage.num}</span>
              <h2 className="font-headline text-4xl md:text-5xl mb-6">{stage.title}</h2>
              <p className="text-lg text-on-surface-variant font-body leading-relaxed max-w-xl">
                {stage.desc}
              </p>
            </div>
            <div className={cn(
              "relative min-h-[400px] lg:min-h-full w-full overflow-hidden",
              idx % 2 !== 0 ? "lg:order-1 border-r border-outline-variant/30" : "lg:order-2 border-l border-outline-variant/30"
            )}>
              <Image 
                src={stage.img}
                alt={stage.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl mb-6">Ready to discuss your workforce requirements?</h2>
        <p className="text-lg text-on-surface-variant font-body mb-10 max-w-2xl mx-auto">
          Engage with our team to explore feasibility and structuring for your next major project.
        </p>
        <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
          Initiate a Conversation
          <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
