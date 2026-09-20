export const solutionsContent = {
  hero: {
    label: "STAYO WORKSTAY / SOLUTIONS",
    headline: "Accommodation designed\naround your workforce.",
    support: "From workforce housing to project accommodation, STAYO WorkStay develops and operates accommodation solutions around the needs of your organisation."
  },
  intro: {
    statement: "Different workforce.\nDifferent requirement.\nOne accommodation partner."
  },
  solutions: [
    {
      id: "workforce-housing",
      slug: "workforce-housing",
      title: "Workforce Housing",
      description: "Accommodation designed for organisations that need reliable, professionally managed housing for their workforce.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      overview: "STAYO WorkStay provides dedicated workforce housing solutions for enterprises seeking to ensure their employees have secure, comfortable, and well-managed living environments. We handle the complexities of sourcing, setting up, and managing accommodation.",
      approach: [
        { title: "Standardized Quality", text: "We ensure a consistent living standard across all properties, prioritizing safety and comfort." },
        { title: "Centralized Management", text: "A single point of contact for your HR and operations teams to manage workforce housing." },
        { title: "Scalable Capacity", text: "Whether you need to accommodate 50 or 500 employees, our model scales with your business needs." }
      ],
      context: "Ideal for companies with a permanent or long-term workforce requiring stable accommodation near their operational base."
    },
    {
      id: "employee-relocation",
      slug: "employee-relocation",
      title: "Employee Relocation",
      description: "Accommodation support for employees moving to a new city or employment location.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      overview: "Relocating employees involves significant logistical challenges. STAYO eases this transition by providing high-quality, fully-furnished, ready-to-live-in apartments for relocating professionals and their families.",
      approach: [
        { title: "Turnkey Setup", text: "Fully furnished apartments with utilities and internet pre-connected." },
        { title: "Flexible Durations", text: "Bridge the gap between temporary and permanent housing with flexible lease terms." },
        { title: "Employee Support", text: "On-the-ground support to help relocating employees settle into their new environment." }
      ],
      context: "Designed for HR departments managing corporate relocations, ensuring a smooth transition that minimizes employee downtime."
    },
    {
      id: "trainees-interns",
      slug: "trainees-interns",
      title: "Trainees & Interns",
      description: "Accommodation for organisations managing recurring trainee, graduate or internship populations.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      overview: "Managing accommodation for seasonal or cyclical intakes of trainees and interns requires a specialized approach. We provide safe, cost-effective, and community-oriented housing for early-career professionals.",
      approach: [
        { title: "Cohabitation Models", text: "Shared living arrangements designed to foster community while maintaining privacy." },
        { title: "Cyclical Leases", text: "Lease structures that align precisely with your intake schedules." },
        { title: "Duty of Care", text: "Enhanced security and support systems tailored for younger demographics." }
      ],
      context: "Perfect for corporate graduate programs, seasonal internships, and large-scale trainee deployments."
    },
    {
      id: "project-workforce",
      slug: "project-workforce",
      title: "Project Workforce",
      description: "Accommodation for project teams and workforce deployments where housing requirements are linked to a specific project or location.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      overview: "Project-based deployments demand agile and geographically targeted accommodation. STAYO sources and operates housing solutions that place your team exactly where they need to be, for as long as the project dictates.",
      approach: [
        { title: "Location Proximity", text: "Strategic sourcing to minimize commute times to project sites." },
        { title: "Operational Flexibility", text: "Accommodation that ramps up or down in line with project phases." },
        { title: "Comprehensive Servicing", text: "Cleaning, maintenance, and facility management included to keep your workforce focused." }
      ],
      context: "Crucial for infrastructure, construction, energy, or IT implementations requiring mobilized teams."
    },
    {
      id: "contract-workforce",
      slug: "contract-workforce",
      title: "Contract Workforce",
      description: "Accommodation for organisations managing contract or outsourced workforce populations.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      overview: "Contract workforces present unique housing needs, often requiring rapid deployment and cost-effective structuring. STAYO provides robust accommodation solutions tailored to outsourced and contract personnel.",
      approach: [
        { title: "Cost-Efficiency", text: "Optimized living arrangements that align with contract budgets without compromising quality." },
        { title: "Rapid Deployment", text: "Fast turnaround times to accommodate sudden influxes of contract staff." },
        { title: "Compliance & Safety", text: "Strict adherence to corporate housing standards and safety regulations." }
      ],
      context: "Ideal for logistics, manufacturing, and support services relying heavily on contract staffing."
    },
    {
      id: "built-to-suit",
      slug: "built-to-suit",
      title: "Built-to-Suit",
      support: "When the requirement doesn't fit an existing property.",
      description: "STAYO can develop accommodation around corporate requirements, subject to feasibility and commercial agreement.",
      image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=2187&auto=format&fit=crop",
      overview: "For requirements of unprecedented scale or specific operational needs, existing market stock may be insufficient. STAYO partners with enterprises to conceptualize, develop, and operate bespoke accommodation facilities.",
      approach: [
        { title: "Custom Development", text: "From site selection to architectural design tailored to your workforce." },
        { title: "Long-Term Partnership", text: "Structured commercial agreements ensuring long-term viability and ROI." },
        { title: "Turnkey Operations", text: "Post-development facility management and resident operations handled entirely by STAYO." }
      ],
      context: "Reserved for large-scale industrial deployments, mega-projects, or specialized operational hubs requiring dedicated facilities."
    }
  ],
  fit: {
    headline: "Which model fits your requirement?",
    scenarios: [
      { trigger: "Need ongoing workforce accommodation", result: "Workforce Housing", link: "/solutions/workforce-housing" },
      { trigger: "Employees moving to a new location", result: "Employee Relocation", link: "/solutions/employee-relocation" },
      { trigger: "Recurring trainee population", result: "Trainees & Interns", link: "/solutions/trainees-interns" },
      { trigger: "Temporary/project deployment", result: "Project Workforce", link: "/solutions/project-workforce" },
      { trigger: "Contract workforce", result: "Contract Workforce", link: "/solutions/contract-workforce" },
      { trigger: "No suitable existing accommodation", result: "Built-to-Suit", link: "/solutions/built-to-suit" }
    ]
  },
  finalCTA: {
    headline: "Tell us what your workforce needs.",
    support: "We'll explore the accommodation approach that fits your requirement."
  }
};
