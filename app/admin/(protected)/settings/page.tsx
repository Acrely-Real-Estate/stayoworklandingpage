import { getSession } from "@/lib/auth";
import { User, LogOut } from "lucide-react";
import LogoutButton from "@/components/admin/LogoutButton";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Settings | STAYO Admin"
};

export default async function SettingsPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  return (
    <div className="flex flex-col gap-8 max-w-3xl mx-auto w-full">
      <div>
        <h1 className="font-headline text-3xl font-bold text-on-surface">Settings</h1>
        <p className="text-on-surface-variant font-medium">Manage your administrator account.</p>
      </div>

      <div className="bg-surface-container-lowest border border-outline-variant/30 rounded shadow-sm p-6 flex flex-col gap-8">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-outline-variant/30 flex items-center gap-2">
            <User className="w-4 h-4" /> Profile
          </h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-on-surface-variant">Name</span>
              <span className="text-base font-medium text-on-surface">{session?.admin?.name || "Administrator"}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-on-surface-variant">Email</span>
              <span className="text-base font-medium text-on-surface">{session?.admin?.email || "admin@stayoworkstay.com"}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase pb-2 border-b border-outline-variant/30 flex items-center gap-2">
            <LogOut className="w-4 h-4" /> Session
          </h2>
          
          <p className="text-sm text-on-surface-variant mb-2">
            Sign out of your current administrative session. You will be required to log in again.
          </p>
          
          <LogoutButton />
        </div>

      </div>
    </div>
  );
}
