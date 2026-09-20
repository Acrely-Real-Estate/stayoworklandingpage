import { solutionsContent } from "@/content/solutions";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export async function generateStaticParams() {
  return solutionsContent.solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsContent.solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution Not Found" };
  
  return {
    title: `${solution.title} | Solutions | STAYO WorkStay`,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsContent.solutions.find((s) => s.slug === slug);

  if (!solution) {
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
            <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-on-surface">{solution.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative w-full py-24 md:py-32 bg-surface-container-lowest border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-primary mb-6 block">
              Solution
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-medium text-on-surface mb-8 tracking-tight">
              {solution.title}
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium leading-relaxed mb-10">
              {solution.description}
            </p>
            <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
              Discuss This Solution
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-sm">
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Overview & Context */}
      <section className="w-full bg-surface-container py-24 border-b border-outline-variant/30">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                Overview
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {solution.overview}
              </p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-surface mb-6">
                Context
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {solution.context}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="w-full bg-surface-container-lowest py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-16 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {solution.approach?.map((item, idx) => (
              <div key={idx} className="flex flex-col border-t border-outline-variant/50 pt-8">
                <span className="text-sm font-bold text-primary tracking-widest uppercase mb-4 block">
                  0{idx + 1}
                </span>
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container py-24 text-center">
        <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin">
          <h2 className="font-headline text-4xl font-bold text-on-surface mb-6">
            Ready to explore {solution.title.toLowerCase()}?
          </h2>
          <p className="text-xl text-on-surface-variant mb-10">
            Let's discuss how STAYO WorkStay can tailor this solution to your specific requirements.
          </p>
          <Link href="/contact" className={cn(buttonVariants("crystal", "lg"), "group")}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
