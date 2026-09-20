import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "About | STAYO WorkStay",
  description: "Learn how STAYO WorkStay approaches workforce accommodation as a demand-led infrastructure and operational requirement."
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest text-on-surface">
      {/* Hero */}
      <div className="w-full relative min-h-[70vh] flex items-center pt-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop"
            alt="Industrial scale"
            fill
            className="object-cover opacity-15 dark:opacity-10"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 py-24">
          <div className="max-w-5xl border-l-[3px] border-primary pl-6 md:pl-12">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              Infrastructure for the Industrial Workforce.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-3xl leading-relaxed">
              We develop and operate dedicated workforce accommodation infrastructure, enabling corporations to house their people safely, efficiently, and at scale.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do & Approach */}
      <div className="container mx-auto px-4 md:px-8 py-24 border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl mb-8">What We Do</h2>
            <div className="font-body text-lg text-on-surface-variant space-y-6">
              <p>
                STAYO WorkStay answers the structural deficit in specialized workforce housing. Traditional residential real estate is fundamentally unsuited to the demands of large-scale industrial and manufacturing projects.
              </p>
              <p>
                We bridge this gap by conceptualizing, developing, and operating purpose-built accommodation facilities. Our model focuses on compliance, operational efficiency, and scalable infrastructure designed specifically for corporate workforce deployments.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl md:text-5xl mb-8">Our Approach</h2>
            <div className="font-body text-lg text-on-surface-variant space-y-6">
              <p>
                Our strategy is fundamentally B2B. We do not operate transient hospitality. We operate essential corporate infrastructure.
              </p>
              <p>
                Every facility we develop is driven by validated corporate demand, backed by structured agreements, and engineered to solve specific logistical challenges for our clients. From site selection to daily facility management, we take end-to-end responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We Work With */}
      <div className="bg-surface-container-low border-y border-outline-variant/30 py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Who We Work With</h2>
            <p className="text-lg text-on-surface-variant font-body">
              We partner with organizations deploying substantial labor forces across multiple sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest">
              <h3 className="font-headline text-2xl mb-4">Manufacturing</h3>
              <p className="text-on-surface-variant">Large-scale production facilities requiring stable, long-term accommodation for core operational staff.</p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest">
              <h3 className="font-headline text-2xl mb-4">Infrastructure</h3>
              <p className="text-on-surface-variant">Major civil and infrastructural projects deploying temporary but extended-duration workforces.</p>
            </div>
            <div className="p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest">
              <h3 className="font-headline text-2xl mb-4">Energy & Mining</h3>
              <p className="text-on-surface-variant">Remote or specialized industrial operations necessitating comprehensive camp or campus solutions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Company */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center border border-outline-variant/30 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-primary font-medium tracking-widest text-sm uppercase mb-4 block">Corporate Structure</span>
            <h2 className="font-headline text-4xl md:text-5xl mb-6">Backed by Acrely Real Estates</h2>
            <p className="text-lg text-on-surface-variant font-body mb-10 max-w-2xl mx-auto">
              STAYO WorkStay operates as a specialized division under its parent company, Acrely Real Estates. This structure provides robust real estate foundations and strategic capital capabilities.
            </p>
            <Link href="/acrely-real-estates" className={cn(buttonVariants("crystal", "lg"), "group inline-flex")}>
              Learn about Acrely Real Estates
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
