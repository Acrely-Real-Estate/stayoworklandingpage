import { industriesContent } from "@/content/industries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight, Check } from "lucide-react";

export async function generateStaticParams() {
  return industriesContent.industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesContent.industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found" };
  
  return {
    title: `${industry.title} | Industries | STAYO WorkStay`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesContent.industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-surface-container-lowest">
      {/* Breadcrumbs */}
      <div className="w-full bg-surface-container-lowest border-b border-outline-variant/30 py-4">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <nav className="flex text-sm text-on-surface-variant font-medium items-center gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/industries" className="hover:text-primary transition-colors">Industries</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-on-surface">{industry.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 bg-surface-container-lowest border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-primary mb-6 block">
              Sector Expertise
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-medium text-on-surface mb-8 tracking-tight">
              {industry.title}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed mb-10">
              {industry.description}
            </p>
            <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
              Discuss Sector Needs
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-sm">
            <img 
              src={industry.image} 
              alt={industry.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview & Approach */}
      <section className="w-full bg-surface-container py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                Sector Overview
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {industry.overview}
              </p>
            </div>
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {industry.ourApproach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="w-full bg-surface-container-lowest py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-12 text-center">
              Key Sector Challenges
            </h2>
            <div className="space-y-6">
              {industry.challenges?.map((challenge, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-surface-container rounded-lg border border-outline-variant/30">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-lg text-on-surface-variant leading-relaxed">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container py-24 text-center">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">
            Ready to empower your {industry.title.toLowerCase()} workforce?
          </h2>
          <p className="text-xl text-on-surface-variant mb-10">
            Let's discuss how STAYO WorkStay can tailor a solution to your specific requirements.
          </p>
          <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
