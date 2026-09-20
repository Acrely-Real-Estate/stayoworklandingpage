import Link from "next/link";
import { ArrowRight, Shield, Bed, Utensils, Zap, Wifi } from "lucide-react";

export default function OperationsPage() {
  const operations = [
    { title: "Accommodation & Bed Management", desc: "Dynamic inventory management, shift-based allocation, and occupancy tracking." },
    { title: "Housekeeping & Sanitization", desc: "Industrial-grade cleaning protocols maintaining hygienic and dignified living conditions." },
    { title: "Facility Maintenance", desc: "Proactive and reactive technical maintenance of MEP systems and structural assets." },
    { title: "Security & Access Control", desc: "Perimeter security, monitored access, and robust safety protocols to protect the workforce." },
    { title: "Catering & Nutrition", desc: "Partnerships for high-volume, nutritionally balanced food services (where included in scope)." },
    { title: "Connectivity", desc: "Enterprise-grade IT infrastructure ensuring residents remain connected with families." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">Operations</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1] max-w-4xl">
            The operational layer.
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl">
            Our operational framework ensures that facilities run seamlessly, allowing your teams to focus entirely on project execution. We handle the complexities of daily management.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32 px-6 border-t border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {operations.map((op, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="text-3xl font-light text-gray-300 w-12 pt-1">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-2xl font-light text-black mb-4">{op.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-lg">{op.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gray-50 px-6 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-black">Understand our business model.</h2>
          <Link 
            href="/model" 
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
          >
            View B2B Model <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
