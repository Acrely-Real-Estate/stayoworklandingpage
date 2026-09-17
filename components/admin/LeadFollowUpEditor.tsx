"use client";

import { useState } from "react";
import { setFollowUpDate } from "@/app/admin/actions";
import { Loader2, Calendar } from "lucide-react";

export default function LeadFollowUpEditor({ 
  enquiryId, 
  currentDate 
}: { 
  enquiryId: string; 
  currentDate: Date | null;
}) {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(currentDate ? currentDate.toISOString().split("T")[0] : "");

  const handleUpdate = async (newDate: string) => {
    setDate(newDate);
    setLoading(true);
    try {
      await setFollowUpDate(enquiryId, newDate || null);
    } catch (err) {
      console.error(err);
      alert("Failed to update follow-up date");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Next Follow-up</span>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <Calendar className="w-4 h-4 text-on-surface-variant" />
        </div>
        <input 
          type="date" 
          value={date}
          onChange={(e) => handleUpdate(e.target.value)}
          disabled={loading}
          className="appearance-none w-full bg-surface-container border border-outline-variant/50 rounded-sm py-2 pl-10 pr-4 text-sm font-bold text-on-surface focus:outline-none focus:border-primary disabled:opacity-50"
        />
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
          </div>
        )}
      </div>
    </div>
  );
}
