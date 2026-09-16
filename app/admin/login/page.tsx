"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Login failed");
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Invalid email or password.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-surface-container-lowest">
      <div className="w-full max-w-md p-8 md:p-12">
        <div className="mb-12">
          <span className="font-headline text-2xl font-bold tracking-tight text-primary block mb-2">STAYO <span className="text-on-surface">WorkStay</span></span>
          <h1 className="text-sm font-bold text-on-surface-variant tracking-widest uppercase">
            Admin
          </h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-on-surface">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/50 p-3 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" 
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-on-surface">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant/50 p-3 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" 
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-900 text-sm font-medium rounded-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-between px-6 py-4 bg-primary text-on-primary text-sm font-bold rounded shadow-md hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group mt-4"
          >
            {loading ? "Signing In..." : "Sign In"}
            {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </div>
  );
}
