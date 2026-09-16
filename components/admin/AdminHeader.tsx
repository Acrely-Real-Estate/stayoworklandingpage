"use client";

import { useState } from "react";
import { Menu, X, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Leads", href: "/admin/leads" },
  { name: "Companies", href: "/admin/companies" },
  { name: "Settings", href: "/admin/settings" },
];

export default function AdminHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-surface-container-lowest border-b border-outline-variant/30 relative z-20">
      <div className="flex items-center lg:hidden">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-on-surface-variant hover:text-on-surface transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <span className="font-headline text-lg font-bold tracking-tight text-primary ml-4">
          STAYO
        </span>
      </div>

      <div className="hidden lg:flex flex-1" />

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface-container rounded-full border border-outline-variant/30">
          <User className="w-4 h-4 text-on-surface-variant" />
          <span className="text-xs font-medium text-on-surface-variant">Admin</span>
        </div>
        <button 
          onClick={handleLogout}
          className="text-sm font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Sign Out</span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface-container-lowest border-b border-outline-variant/30 shadow-lg lg:hidden flex flex-col p-4 space-y-2">
          {navItems.map(item => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "px-4 py-3 rounded text-sm font-medium transition-colors",
                  isActive ? "bg-primary/10 text-primary" : "text-on-surface-variant hover:bg-surface-container"
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  );
}
