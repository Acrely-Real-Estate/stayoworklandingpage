"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "REQUIREMENT_RECEIVED",
  "PROPOSAL",
  "NEGOTIATION",
  "WON",
  "LOST"
];

export default function LeadStatusSelect({ 
  enquiryId, 
  currentStatus 
}: { 
  enquiryId: string; 
  currentStatus: string;
}) {
  const [status, setStatus] = useState(currentStatus);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const router = useRouter();

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/admin/leads/${enquiryId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus })
      });

      if (!res.ok) throw new Error("Failed to update status");

      setMessage({ type: 'success', text: "Status updated." });
      router.refresh(); // Refresh server components
    } catch (err) {
      setMessage({ type: 'error', text: "Error updating status." });
      setStatus(currentStatus); // revert
    } finally {
      setLoading(false);
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="relative">
          <select 
            value={status}
            onChange={handleStatusChange}
            disabled={loading}
            className="appearance-none bg-surface-container border border-outline-variant/50 rounded-sm py-2 pl-4 pr-10 text-sm font-bold text-on-surface focus:outline-none focus:border-primary disabled:opacity-50"
          >
            {STATUSES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {loading ? <Loader2 className="w-4 h-4 animate-spin text-on-surface-variant" /> : (
              <svg className="w-4 h-4 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        </div>
        
        {message && (
          <div className={cn(
            "text-xs font-medium flex items-center gap-1",
            message.type === 'success' ? "text-green-600" : "text-red-600"
          )}>
            {message.type === 'success' && <Check className="w-3 h-3" />}
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
}
