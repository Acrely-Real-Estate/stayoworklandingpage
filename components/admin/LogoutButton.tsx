"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-surface-container border border-outline-variant/50 hover:bg-surface-container-high text-on-surface font-bold text-sm rounded transition-colors disabled:opacity-50 w-fit"
    >
      <LogOut className="w-4 h-4" />
      {loading ? "Signing out..." : "Sign Out"}
    </button>
  );
}
