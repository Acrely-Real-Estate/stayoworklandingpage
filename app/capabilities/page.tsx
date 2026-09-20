import Link from "next/link";
import { ArrowRight, Map, Wrench, Home, Briefcase, Settings, Target } from "lucide-react";

export default function CapabilitiesPage() {
  const capabilities = [
    {
      title: "Workforce Accommodation Planning",
      description: "Strategic analysis of your workforce scale, deployment timelines, and geographic footprint to architect an optimized accommodation master plan.",
      icon: Map
    },
    {
      title: "Built-to-Suit Development",
      description: "Design and construction of purpose-built accommodation facilities tailored to exact corporate specifications and local regulatory requirements.",
      icon: Wrench
    },
    {
      title: "Location & Site Assessment",
      description: "Rigorous evaluation of potential sites prioritizing proximity to project locations, infrastructure connectivity, and environmental feasibility.",
      icon: Target
    },
    {
      title: "Accommodation Operations",
      description: "End-to-end operational management ensuring seamless day-to-day functionality, elevated resident experience, and strict quality control.",
      icon: Home
    },
    {
      title: "Property & Facility Management",
      description: "Comprehensive lifecycle maintenance, asset protection, and technical facility management to preserve the integrity and safety of the built environment.",
      icon: Settings
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 uppercase tracking-widest">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-black font-medium">Capabilities</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-black mb-8 leading-[1.1] max-w-4xl">
            Comprehensive solutions for complex accommodation requirements.
          </h1>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {capabilities.map((cap, i) => (
              <div key={i} className="group cursor-default">
                <div className="mb-8 border-b border-gray-200 pb-8">
                  <cap.icon className="w-10 h-10 text-gray-400 group-hover:text-black transition-colors" strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-light text-black mb-4">{cap.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <div className="w-full h-96 bg-gray-100 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" 
          alt="Architectural detailing" 
          className="w-full h-full object-cover filter grayscale opacity-80"
        />
      </div>

      {/* CTA Section */}
      <section className="py-32 bg-white px-6 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 text-black">Explore our operational framework.</h2>
          <Link 
            href="/operations" 
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition-colors"
          >
            View Operations <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
