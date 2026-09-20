import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Acrely Real Estates | Parent Company",
  description: "Acrely Real Estates is the parent company of STAYO WorkStay.",
};

export default function AcrelyRealEstatesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-container-lowest text-on-surface">
      <div className="w-full relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate architecture"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-8 py-24">
          <div className="max-w-4xl border-l-[3px] border-primary pl-6 md:pl-12">
            <div className="flex items-center gap-2 mb-6 text-on-surface-variant font-medium tracking-wide text-sm uppercase">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span>Parent Company</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8">
              Acrely Real Estates
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
              The foundational strength and strategic parent company behind STAYO WorkStay.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-24 border-t border-outline-variant/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div className="font-body text-lg text-on-surface-variant space-y-8">
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-6">Strategic Foundation</h2>
            <p>
              Acrely Real Estates operates as the parent entity to STAYO WorkStay, providing the foundational real estate expertise, strategic oversight, and capital framework required to execute large-scale workforce accommodation infrastructure.
            </p>
            <p>
              While STAYO WorkStay focuses exclusively on the operational and development specificities of B2B workforce housing, Acrely Real Estates ensures the underlying asset strategies align with long-term commercial real estate principles.
            </p>
          </div>
          
          <div className="bg-surface-container-low p-8 md:p-12 border border-outline-variant/30 rounded-2xl flex flex-col justify-center">
            <h3 className="font-headline text-2xl mb-4">Dedicated Focus</h3>
            <p className="text-on-surface-variant font-body mb-8">
              STAYO WorkStay is a specialized division created to solve a distinct market challenge: the structural deficit of compliant, scalable workforce accommodation. Acrely provides the platform from which STAYO operates.
            </p>
            <div>
              <Link href="/about" className={cn(buttonVariants("crystal", "lg"), "group")}>
                About STAYO WorkStay
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
