import Link from "next/link";
import { ArrowRight, Building2, Users, Target, ShieldCheck } from "lucide-react";

export default function ForCompaniesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">For Companies</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1]">
                Empowering your workforce ecosystem.
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-xl">
                The traditional approach to workforce accommodation is fragmented and inefficient. STAYO provides a unified, enterprise-grade model tailored to the operational realities of modern industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Building2, title: "Centralized Management", desc: "Eliminate the administrative burden of managing multiple uncoordinated lodging providers." },
              { icon: Users, title: "Workforce Wellbeing", desc: "Purpose-built environments designed to support the rest, recovery, and productivity of your teams." },
              { icon: Target, title: "Strategic Alignment", desc: "Accommodation strategies synchronized with your project timelines and operational geographic requirements." },
              { icon: ShieldCheck, title: "Compliance & Safety", desc: "Rigorous adherence to health, safety, and security protocols across all accommodation assets." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <item.icon className="w-8 h-8 text-black mb-6" strokeWidth={1} />
                <h3 className="text-xl font-medium text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative aspect-square w-full bg-gray-100 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                alt="Corporate Architecture" 
                className="w-full h-full object-cover filter grayscale opacity-90"
              />
            </div>
            <div>
              <h2 className="text-4xl font-light tracking-tight text-black mb-8">
                The fragmentation problem.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  Industrial and corporate projects frequently suffer from logistical friction when securing workforce accommodation. Companies are often forced to deal with disparate local landlords, variable quality standards, and unpredictable availability.
                </p>
                <p>
                  STAYO solves this by acting as a single, institutional counterpart. We assess your requirements, develop built-to-suit solutions or aggregate existing prime assets, and operate them under a unified service standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light mb-8">Ready to rethink your accommodation strategy?</h2>
          <p className="text-xl text-gray-400 font-light mb-12">Engage with our corporate team to discuss a tailored solution for your workforce.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors"
          >
            Contact our team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
