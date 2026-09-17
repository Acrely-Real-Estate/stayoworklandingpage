"use client";

import { useState } from "react";
import { addLeadNote } from "@/app/admin/actions";
import { Loader2, Plus, User } from "lucide-react";
import { format } from "date-fns";

export default function LeadNotesEditor({ 
  enquiryId, 
  notes 
}: { 
  enquiryId: string; 
  notes: any[];
}) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      await addLeadNote(enquiryId, content);
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to add note.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto max-h-[400px] mb-6 pr-2 space-y-4">
        {notes.length === 0 ? (
          <div className="text-sm text-on-surface-variant italic py-4">
            No activity recorded yet.
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-surface-container-low rounded border border-outline-variant/30 p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-3 h-3" />
                  </div>
                  <span className="text-xs font-bold text-on-surface">{note.author.name}</span>
                </div>
                <span className="text-xs font-medium text-on-surface-variant">
                  {format(new Date(note.createdAt), "MMM d, yyyy 'at' h:mm a")}
                </span>
              </div>
              <p className="text-sm text-on-surface whitespace-pre-wrap">{note.content}</p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-auto">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a sales note or activity update..."
          disabled={loading}
          rows={3}
          className="w-full bg-surface-container border border-outline-variant/50 rounded-sm p-3 text-sm text-on-surface focus:outline-none focus:border-primary disabled:opacity-50 resize-none"
        />
        <button
          type="submit"
          disabled={loading || !content.trim()}
          className="self-end inline-flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-sm text-sm font-bold tracking-wider uppercase hover:bg-primary/90 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
          Add Note
        </button>
      </form>
    </div>
  );
}
