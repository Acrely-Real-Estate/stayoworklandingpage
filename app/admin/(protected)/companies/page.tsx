import { prisma } from "@/lib/db";
import Link from "next/link";
import { format } from "date-fns";
import { getStatusColor } from "../dashboard/page";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Companies | STAYO Admin"
};

export default async function CompaniesPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Group by company name (simple grouping for Phase 6)
  const companiesMap = new Map<string, {
    name: string;
    locations: Set<string>;
    count: number;
    latestCreatedAt: Date;
    latestStatus: string;
    latestId: string;
  }>();

  for (const enq of enquiries) {
    const name = enq.companyName.trim();
    if (!companiesMap.has(name)) {
      companiesMap.set(name, {
        name,
        locations: new Set([enq.workLocation]),
        count: 1,
        latestCreatedAt: enq.createdAt,
        latestStatus: enq.status,
        latestId: enq.id
      });
    } else {
      const existing = companiesMap.get(name)!;
      existing.locations.add(enq.workLocation);
      existing.count += 1;
      // Since enquiries are ordered by desc, the first one encountered is the latest
    }
  }

  const companies = Array.from(companiesMap.values());

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <div>
        <h1 className="font-headline text-3xl font-bold text-on-surface">Companies</h1>
        <p className="text-on-surface-variant font-medium">Aggregated view of all corporate clients.</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto min-h-[400px]">
          {companies.length === 0 ? (
            <div className="flex items-center justify-center h-full p-12 text-on-surface-variant font-medium">
              No companies found.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs tracking-wider uppercase text-on-surface-variant">
                  <th className="p-4 font-bold">Company Name</th>
                  <th className="p-4 font-bold">Locations</th>
                  <th className="p-4 font-bold">Total Enquiries</th>
                  <th className="p-4 font-bold">Latest Status</th>
                  <th className="p-4 font-bold">Latest Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {companies.map((company, i) => (
                  <tr key={i} className="hover:bg-surface-container transition-colors group cursor-pointer relative">
                    <td className="p-4">
                      {/* Link to the latest lead for now, or to a dedicated company view if implemented. For Phase 6, we link to the latest lead since they requested opening individual enquiries. */}
                      <Link href={`/admin/leads/${company.latestId}`} className="absolute inset-0 z-10">
                        <span className="sr-only">View {company.name} latest enquiry</span>
                      </Link>
                      <span className="font-medium text-on-surface">{company.name}</span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant max-w-xs truncate" title={Array.from(company.locations).join(", ")}>
                      {Array.from(company.locations).join(", ")}
                    </td>
                    <td className="p-4 text-sm font-medium">
                      {company.count}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getStatusColor(company.latestStatus)}`}>
                        {company.latestStatus}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">
                      {format(company.latestCreatedAt, "MMM d, yyyy")}
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
