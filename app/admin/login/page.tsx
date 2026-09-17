import { isLocalAdminBypass, enterLocalAdmin } from "@/lib/auth";
import LoginForm from "./LoginForm";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default async function LoginPage() {
  const isLocal = await isLocalAdminBypass();
  
  if (isLocal) {
    async function handleLocalLogin() {
      "use server";
      await enterLocalAdmin();
      redirect("/admin/dashboard");
    }

    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-surface-container-lowest">
        <div className="w-full max-w-md p-8 md:p-12 text-center border border-outline-variant/30 rounded shadow-sm bg-surface-container-low">
          <div className="mb-8">
            <span className="font-headline text-3xl font-bold tracking-tight text-primary block mb-2">STAYO <span className="text-on-surface">WorkStay</span></span>
            <h1 className="text-sm font-bold text-on-surface-variant tracking-widest uppercase">
              ADMIN
            </h1>
          </div>
          
          <div className="p-4 bg-primary/10 rounded mb-8 border border-primary/20">
            <p className="font-medium text-primary text-sm">Local development access enabled</p>
          </div>

          <form action={handleLocalLogin}>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-on-primary text-sm font-bold rounded shadow-md hover:bg-primary/90 transition-all group"
            >
              Enter Admin
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <LoginForm />;
}
