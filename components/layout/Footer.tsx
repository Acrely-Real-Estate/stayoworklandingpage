import Link from "next/link";
import { isLocalAdminBypass } from "@/lib/auth";

export default async function Footer() {
  const isLocal = await isLocalAdminBypass();

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-gutter mb-space-xl">
          <div className="lg:col-span-2 flex flex-col justify-between pr-space-md">
            <div className="space-y-space-sm">
              <div className="flex items-baseline gap-1.5 leading-none">
                <span className="font-headline text-lg font-bold tracking-tight text-primary">STAYO</span>
                <span className="font-headline text-lg font-semibold tracking-wider text-on-surface">WORKSTAY</span>
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                Acrely Real Estates Infrastructure Division
              </p>
              <p className="text-sm text-on-surface-variant max-w-sm mt-space-sm">
                Institutional corporate workforce accommodation and living infrastructure engineering. Turnkey procurement, master facilities development, and enterprise asset stewardship.
              </p>
            </div>
            <div className="mt-space-md pt-space-md border-t border-outline-variant">
              <span className="text-xs font-semibold text-secondary uppercase block mb-1">Corporate Enquiries Desk</span>
              <a href="mailto:contact@stayowork.com" className="text-sm text-primary font-medium hover:underline block mb-0.5">
                contact@stayowork.com
              </a>
              <a href="tel:004428518800" className="text-sm text-primary font-medium hover:underline block">
                0-044-2851 8800
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-space-sm">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-semibold">Solutions</h4>
            <ul className="flex flex-col space-y-2">
              {['Turnkey Campuses', 'Executive Mobility', 'Industrial Housing', 'Multi-Year Leases'].map((item) => (
                <li key={item} className="leading-none">
                  <Link href="/solutions" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-col gap-space-sm">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-semibold">Capabilities</h4>
            <ul className="flex flex-col space-y-2">
              {['Site Acquisition', 'Bespoke Build-to-Suit', 'Asset Stewardship'].map((item) => (
                <li key={item} className="leading-none">
                  <Link href="/how-it-works" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
              <li className="leading-none">
                <Link href="/projects" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                  Asset Portfolio
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-space-sm">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-semibold">Company</h4>
            <ul className="flex flex-col space-y-2">
              {['About STAYO', 'Acrely Real Estates'].map((item) => (
                <li key={item} className="leading-none">
                  <Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
              <li className="leading-none">
                <Link href="/projects" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                  Case Studies
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/contact" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                  Executive Contacts
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-space-sm">
            <h4 className="text-xs text-on-surface uppercase tracking-wider font-semibold">Governance</h4>
            <ul className="flex flex-col space-y-2">
              <li className="leading-none">
                <Link href="/privacy" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                  Enterprise Privacy
                </Link>
              </li>
              <li className="leading-none">
                <Link href="/terms" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                  Terms of Procurement
                </Link>
              </li>
              {['ESG & Safety Standards', 'Regulatory Filings'].map((item) => (
                <li key={item} className="leading-none">
                  <Link href="/about" className="text-sm text-on-surface-variant hover:text-primary transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-space-md border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-space-sm text-on-surface-variant text-xs">
          <p>© {new Date().getFullYear()} STAYO WorkStay. An operating unit of Acrely Real Estates Ltd. All rights reserved.</p>
          <div className="flex items-center gap-space-md">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="text-outline-variant">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span className="text-outline-variant">|</span>
            <Link href="/about" className="hover:text-primary transition-colors">Institutional Compliance</Link>
            {isLocal && (
              <>
                <span className="text-outline-variant">|</span>
                <Link href="/admin/login" className="hover:text-primary transition-colors font-bold text-primary">Admin Access</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
