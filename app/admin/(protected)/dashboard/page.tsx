import { prisma } from "@/lib/db";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard | STAYO Admin"
};

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const [totalLeads, newLeads, contactedLeads, qualifiedLeads] = await Promise.all([
    prisma.enquiry.count(),
    prisma.enquiry.count({ where: { status: "NEW" } }),
    prisma.enquiry.count({ where: { status: "CONTACTED" } }),
    prisma.enquiry.count({ where: { status: "QUALIFIED" } }),
  ]);

  const recentEnquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
    take: 5
  });

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-3xl font-bold text-on-surface">Dashboard</h1>
        <p className="text-on-surface-variant font-medium">Overview of the STAYO WorkStay enquiry pipeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Leads" value={totalLeads} />
        <StatCard title="New" value={newLeads} highlight />
        <StatCard title="Contacted" value={contactedLeads} />
        <StatCard title="Qualified" value={qualifiedLeads} />
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <div className="flex items-center justify-between">
          <h2 className="font-headline text-xl font-bold text-on-surface">Recent Enquiries</h2>
          <Link href="/admin/leads" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant/30 rounded shadow-sm overflow-hidden overflow-x-auto">
          {recentEnquiries.length === 0 ? (
            <div className="p-12 text-center text-on-surface-variant font-medium">
              No enquiries yet.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs tracking-wider uppercase text-on-surface-variant">
                  <th className="p-4 font-bold">Company</th>
                  <th className="p-4 font-bold">Contact</th>
                  <th className="p-4 font-bold">Location</th>
                  <th className="p-4 font-bold">Scale</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {recentEnquiries.map((enq) => (
                  <tr key={enq.id} className="hover:bg-surface-container transition-colors group cursor-pointer relative">
                    <td className="p-4">
                      <Link href={`/admin/leads/${enq.id}`} className="absolute inset-0 z-10">
                        <span className="sr-only">View {enq.companyName}</span>
                      </Link>
                      <span className="font-medium text-on-surface">{enq.companyName}</span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.contactName}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.workLocation}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.accommodationRequirement}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getStatusColor(enq.status)}`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">
                      {formatDistanceToNow(enq.createdAt, { addSuffix: true })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, highlight = false }: { title: string, value: number, highlight?: boolean }) {
  return (
    <div className={`p-6 rounded border ${highlight ? 'bg-primary/5 border-primary/20' : 'bg-surface-container-lowest border-outline-variant/30'}`}>
      <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-2">{title}</h3>
      <span className={`text-4xl font-headline font-bold ${highlight ? 'text-primary' : 'text-on-surface'}`}>{value}</span>
    </div>
  );
}

export function getStatusColor(status: string) {
  switch (status) {
    case "NEW": return "bg-blue-100 text-blue-800";
    case "CONTACTED": return "bg-purple-100 text-purple-800";
    case "QUALIFIED": return "bg-emerald-100 text-emerald-800";
    case "REQUIREMENT_RECEIVED": return "bg-indigo-100 text-indigo-800";
    case "PROPOSAL": return "bg-amber-100 text-amber-800";
    case "NEGOTIATION": return "bg-orange-100 text-orange-800";
    case "WON": return "bg-green-100 text-green-800";
    case "LOST": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
