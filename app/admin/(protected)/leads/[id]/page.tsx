import { prisma } from "@/lib/db";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Building2, User, MapPin, Clock, FileText } from "lucide-react";
import { format } from "date-fns";
import LeadStatusSelect from "@/components/admin/LeadStatusSelect";
import { getStatusColor } from "../../dashboard/page";
import { getSession } from "@/lib/auth";

export default async function LeadDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  const resolvedParams = await params;
  const enquiry = await prisma.enquiry.findUnique({
    where: { id: resolvedParams.id }
  });

  if (!enquiry) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto w-full pb-12">
      
      {/* Header */}
      <div className="flex flex-col gap-4">
        <Link href="/admin/leads" className="inline-flex items-center text-sm font-medium text-on-surface-variant hover:text-primary transition-colors w-fit">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Leads
        </Link>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <h1 className="font-headline text-3xl font-bold text-on-surface">{enquiry.companyName}</h1>
            <p className="text-on-surface-variant font-medium flex items-center gap-2 mt-1">
              <span className="text-xs uppercase tracking-widest font-bold text-primary">Lead ID:</span>
              <span className="font-mono text-sm">{enquiry.id}</span>
            </p>
          </div>
          
          <div className="flex flex-col gap-2 bg-surface-container-low p-4 rounded border border-outline-variant/30 min-w-[240px]">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Pipeline Status</span>
            <LeadStatusSelect enquiryId={enquiry.id} currentStatus={enquiry.status} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Company & Contact */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded p-6 shadow-sm">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2 pb-2 border-b border-outline-variant/30">
              <Building2 className="w-4 h-4" /> Company Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <DetailItem label="Company Name" value={enquiry.companyName} />
              <DetailItem label="Contact Name" value={enquiry.contactName} />
              <DetailItem label="Designation" value={enquiry.designation || "—"} />
              <DetailItem label="Email" value={<a href={`mailto:${enquiry.email}`} className="text-primary hover:underline">{enquiry.email}</a>} />
              <DetailItem label="Phone" value={enquiry.phone} />
            </div>
          </section>

          {/* Requirement */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded p-6 shadow-sm">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2 pb-2 border-b border-outline-variant/30">
              <MapPin className="w-4 h-4" /> Requirement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              <DetailItem label="Work Location" value={enquiry.workLocation} />
              <DetailItem label="Workforce Type" value={enquiry.workforceType} />
              <DetailItem label="Scale (Requirement)" value={enquiry.accommodationRequirement} />
              <DetailItem label="Timeline" value={enquiry.timeline} />
              <div className="col-span-1 md:col-span-2">
                <DetailItem label="Services Required" value={enquiry.servicesRequired || "—"} />
              </div>
            </div>
          </section>

          {/* Message */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded p-6 shadow-sm">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2 pb-2 border-b border-outline-variant/30">
              <FileText className="w-4 h-4" /> Message
            </h2>
            <div className="whitespace-pre-wrap text-on-surface text-sm leading-relaxed">
              {enquiry.message || <span className="text-on-surface-variant italic">No message provided.</span>}
            </div>
          </section>

        </div>

        {/* Right Column: Metadata & Notes (Phase 6 minimal notes) */}
        <div className="flex flex-col gap-6">
          <section className="bg-surface-container-low border border-outline-variant/30 rounded p-6 shadow-sm">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2 pb-2 border-b border-outline-variant/30">
              <Clock className="w-4 h-4" /> Metadata
            </h2>
            <div className="flex flex-col gap-4">
              <DetailItem label="Created At" value={format(enquiry.createdAt, "PPP 'at' p")} />
              <DetailItem label="Last Updated" value={format(enquiry.updatedAt, "PPP 'at' p")} />
            </div>
          </section>

          {/* Internal Notes Placeholder for Phase 6 */}
          <section className="bg-surface-container-lowest border border-outline-variant/30 rounded p-6 shadow-sm flex-1">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 flex items-center gap-2 pb-2 border-b border-outline-variant/30">
              <User className="w-4 h-4" /> Internal Notes
            </h2>
            <div className="text-sm text-on-surface-variant italic mb-4">
              No internal notes yet.
            </div>
            <button className="w-full py-2 border border-outline-variant/50 border-dashed rounded text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-not-allowed opacity-50">
              + Add Note (Coming soon)
            </button>
          </section>
        </div>

      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string, value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{label}</span>
      <div className="text-sm font-medium text-on-surface">{value}</div>
    </div>
  );
}
