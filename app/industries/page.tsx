import Link from "next/link";
import { industriesContent } from "@/content/industries";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Industries | STAYO WorkStay",
  description: "Accommodation expertise across key sectors."
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 bg-surface-container-lowest flex items-center justify-center border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin text-center">
          <span className="text-sm font-bold tracking-widest uppercase text-primary mb-6 block">
            {industriesContent.hero.label}
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-medium text-on-surface mb-8 whitespace-pre-line tracking-tight">
            {industriesContent.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-3xl mx-auto leading-relaxed">
            {industriesContent.hero.support}
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="w-full bg-surface-container-lowest py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="flex flex-col gap-32">
            {industriesContent.industries.map((industry, index) => (
              <div 
                key={industry.id}
                className={`flex flex-col gap-12 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
              >
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-6">
                    {industry.title}
                  </h3>
                  <p className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-lg mb-10">
                    {industry.description}
                  </p>
                  
                  <div>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className={cn(buttonVariants("crystal", "lg"), "group")}
                    >
                      Explore Sector
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-sm relative group">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="w-full bg-surface-container py-24 text-center">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">
            {industriesContent.finalCTA.headline}
          </h2>
          <p className="text-xl text-on-surface-variant mb-10">
            {industriesContent.finalCTA.support}
          </p>
          <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
