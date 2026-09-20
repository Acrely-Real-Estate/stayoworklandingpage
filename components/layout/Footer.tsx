import Link from "next/link";
import { isLocalAdminBypass } from "@/lib/auth";

export default async function Footer() {
  const isLocal = await isLocalAdminBypass();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Workforce Housing", href: "/solutions/workforce-housing" },
        { name: "Employee Relocation", href: "/solutions/employee-relocation" },
        { name: "Trainees & Interns", href: "/solutions/trainees-interns" },
        { name: "Project Workforce", href: "/solutions/project-workforce" },
        { name: "Contract Workforce", href: "/solutions/contract-workforce" },
        { name: "Built-to-Suit", href: "/solutions/built-to-suit" },
      ]
    },
    {
      title: "Capabilities",
      links: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Our Projects", href: "/projects" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About STAYO", href: "/about" },
        { name: "Contact Us", href: "/contact" },
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Manufacturing", href: "/industries" },
        { name: "Construction & Infrastructure", href: "/industries" },
        { name: "Energy & Resources", href: "/industries" },
        { name: "Logistics", href: "/industries" },
      ]
    }
  ];

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        
        {/* Desktop 5-Column Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-gutter mb-space-xl">
          <div className="col-span-1 flex flex-col justify-between pr-space-md">
            <div className="space-y-space-sm">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-headline text-lg font-bold tracking-tight text-primary">STAYO</span>
                <span className="font-headline text-lg font-semibold tracking-wider text-on-surface">WORKSTAY</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                Acrely Real Estates Infrastructure Division
              </p>
              <p className="text-sm text-on-surface-variant max-w-sm mt-space-sm">
                Institutional corporate workforce accommodation and living infrastructure engineering.
              </p>
            </div>
            <div className="mt-space-md pt-space-md border-t border-outline-variant">
              <span className="text-xs font-semibold text-secondary uppercase block mb-1">Corporate Enquiries Desk</span>
              <a href="mailto:contact@stayowork.com" className="text-sm text-primary font-medium hover:underline block mb-0.5">
                contact@stayowork.com
              </a>
              <a href="tel:+914447985015" className="text-sm text-primary font-medium hover:underline block">
                +91 44-47985015
              </a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-space-sm">
              <h4 className="text-xs text-on-surface uppercase tracking-wider font-semibold">{section.title}</h4>
              <ul className="flex flex-col space-y-2">
                {section.links.map((link) => (
                  <li key={link.name} className="leading-none">
                    <Link href={link.href} className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Accordion Layout */}
        <div className="lg:hidden flex flex-col mb-space-xl">
          <div className="flex flex-col mb-8">
            <div className="space-y-space-sm">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-headline text-lg font-bold tracking-tight text-primary">STAYO</span>
                <span className="font-headline text-lg font-semibold tracking-wider text-on-surface">WORKSTAY</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                Acrely Real Estates Infrastructure Division
              </p>
              <p className="text-sm text-on-surface-variant max-w-sm mt-space-sm">
                Institutional corporate workforce accommodation and living infrastructure engineering.
              </p>
            </div>
            <div className="mt-space-md pt-space-md border-t border-outline-variant">
              <span className="text-xs font-semibold text-secondary uppercase block mb-1">Corporate Enquiries Desk</span>
              <a href="mailto:contact@stayowork.com" className="text-sm text-primary font-medium hover:underline block mb-0.5">
                contact@stayowork.com
              </a>
              <a href="tel:+914447985015" className="text-sm text-primary font-medium hover:underline block">
                +91 44-47985015
              </a>
            </div>
          </div>
          
          <div className="flex flex-col border-t border-outline-variant">
            {footerSections.map((section) => (
              <details key={section.title} className="group border-b border-outline-variant [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between py-4 text-xs text-on-surface uppercase tracking-wider font-semibold cursor-pointer list-none">
                  {section.title}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="16" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="pb-4">
                  <ul className="flex flex-col space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name} className="leading-none">
                        <Link href={link.href} className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
        
        {/* Legal Row */}
        <div className="pt-space-md border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant text-xs">
          <p>© {new Date().getFullYear()} STAYO WorkStay. An operating unit of Acrely Real Estates Ltd. All rights reserved.</p>
          <div className="flex items-center flex-wrap justify-center gap-space-md">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-outline-variant hidden md:inline">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span className="text-outline-variant hidden md:inline">|</span>
            <Link href="/about" className="hover:text-primary transition-colors">Institutional Compliance</Link>
            {isLocal && (
              <>
                <span className="text-outline-variant hidden md:inline">|</span>
                <Link href="/admin/login" className="hover:text-primary transition-colors font-bold text-primary">Admin Access</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
