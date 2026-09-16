import { prisma } from "@/lib/db";
import Link from "next/link";
import { format } from "date-fns";
import { getStatusColor } from "../dashboard/page";
import { Search } from "lucide-react";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Leads | STAYO Admin"
};

export default async function LeadsPage({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");
  const resolvedParams = await searchParams;
  const page = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
  const limit = 20;
  const skip = (page - 1) * limit;

  // Since we are mocking the DB, complex search might be limited, but let's implement standard Prisma findMany
  // Wait, our mock doesn't support full where queries yet. Let's stick to basic pagination.
  
  const leads = await prisma.enquiry.findMany({
    orderBy: { createdAt: 'desc' },
    skip,
    take: limit
  });
  
  const total = await prisma.enquiry.count();
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-headline text-3xl font-bold text-on-surface">Leads</h1>
          <p className="text-on-surface-variant font-medium">Manage and process corporate requirements.</p>
        </div>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded shadow-sm overflow-hidden flex flex-col">
        {/* Basic Search Header */}
        <div className="p-4 border-b border-outline-variant/30 bg-surface-container-low flex items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search companies or contacts (Phase 6 placeholder)" 
              disabled
              className="w-full pl-10 pr-4 py-2 text-sm bg-surface-container border border-outline-variant/50 rounded-sm focus:outline-none disabled:opacity-50"
            />
          </div>
        </div>

        <div className="overflow-x-auto min-h-[400px]">
          {leads.length === 0 ? (
            <div className="flex items-center justify-center h-full p-12 text-on-surface-variant font-medium">
              No leads match your filters.
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30 text-xs tracking-wider uppercase text-on-surface-variant">
                  <th className="p-4 font-bold">Company</th>
                  <th className="p-4 font-bold">Contact</th>
                  <th className="p-4 font-bold">Location</th>
                  <th className="p-4 font-bold">Workforce</th>
                  <th className="p-4 font-bold">Scale</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                {leads.map((enq) => (
                  <tr key={enq.id} className="hover:bg-surface-container transition-colors group cursor-pointer relative">
                    <td className="p-4">
                      <Link href={`/admin/leads/${enq.id}`} className="absolute inset-0 z-10">
                        <span className="sr-only">View {enq.companyName}</span>
                      </Link>
                      <span className="font-medium text-on-surface">{enq.companyName}</span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.contactName}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.workLocation}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.workforceType}</td>
                    <td className="p-4 text-sm text-on-surface-variant">{enq.accommodationRequirement}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${getStatusColor(enq.status)}`}>
                        {enq.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-on-surface-variant">
                      {format(enq.createdAt, "MMM d, yyyy")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low flex items-center justify-between">
            <span className="text-sm text-on-surface-variant font-medium">
              Page {page} of {totalPages}
            </span>
            <div className="flex gap-2">
              {page > 1 && (
                <Link href={`/admin/leads?page=${page - 1}`} className="px-3 py-1.5 border border-outline-variant/50 rounded-sm text-sm font-medium hover:bg-surface-container transition-colors">
                  Previous
                </Link>
              )}
              {page < totalPages && (
                <Link href={`/admin/leads?page=${page + 1}`} className="px-3 py-1.5 border border-outline-variant/50 rounded-sm text-sm font-medium hover:bg-surface-container transition-colors">
                  Next
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
