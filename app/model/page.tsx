import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ModelPage() {
  const pipeline = [
    { phase: "Requirement Definition", detail: "We consult with your project leadership to define scale, location parameters, and timeline." },
    { phase: "Site Assessment", detail: "Evaluation of greenfield or existing brownfield assets within the required radius." },
    { phase: "Feasibility & Design", detail: "Architectural planning and financial modeling to ensure commercial viability." },
    { phase: "Commercial Structure", detail: "Establishing lease agreements, SLAs, and capital structuring aligned with corporate goals." },
    { phase: "Development & Setup", detail: "Construction, retrofitting, or mobilization of the accommodation asset." },
    { phase: "Live Operations", detail: "Handover to the STAYO facility management team for continuous operational support." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">B2B Model</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1] max-w-4xl">
            A structured partnership pipeline.
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
            We engage with corporate clients through a methodical, transparent process designed to mitigate risk and deliver precise accommodation infrastructure.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {pipeline.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3 border-t border-black pt-4">
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-2">Phase {i + 1}</span>
                  <h3 className="text-xl font-medium text-black">{step.phase}</h3>
                </div>
                <div className="md:w-2/3 md:border-t border-gray-200 md:pt-4">
                  <p className="text-gray-600 font-light leading-relaxed text-lg">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">Initiate a consultation.</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Contact Sales <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
