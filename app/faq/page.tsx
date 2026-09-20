import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Can STAYO develop accommodation around our existing facility?",
      a: "Yes. We specialize in identifying and developing land parcels proximate to your industrial or corporate sites, minimizing transit times for your workforce."
    },
    {
      q: "What determines the commercial structure?",
      a: "Commercial structures are tailored based on the scale of the deployment, the duration of the commitment, and the level of capital expenditure required for greenfield or brownfield development."
    },
    {
      q: "Can STAYO support temporary project workforces?",
      a: "Absolutely. We design flexible accommodation strategies capable of scaling up during peak project phases and scaling down as requirements normalize."
    },
    {
      q: "Do you integrate with our existing health & safety protocols?",
      a: "We map our operational procedures to your corporate HSE standards, ensuring compliance and seamless integration with your overarching safety frameworks."
    },
    {
      q: "Is catering included in the scope?",
      a: "Catering and nutrition services can be integrated into the scope of operations based on client preference and specific contractual agreements."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">FAQ</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1] max-w-4xl">
            Frequently asked questions.
          </h1>
        </div>
      </section>

      {/* FAQ List */}
      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-12">
                <h3 className="text-2xl font-light text-black mb-6">{faq.q}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50 px-6 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-black">Have additional questions?</h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
          >
            Reach out <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
