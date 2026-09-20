import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export const metadata = {
  title: "Terms of Service | STAYO WorkStay",
  description: "Terms of service for STAYO WorkStay.",
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-container-lowest text-on-surface">
      <div className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <h1 className="font-headline text-5xl md:text-6xl tracking-tight mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant font-body space-y-6">
          <p>Last updated: September 20, 2026</p>
          
          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on STAYO WorkStay's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">3. Disclaimer</h2>
          <p>
            The materials on STAYO WorkStay's website are provided on an 'as is' basis. STAYO WorkStay makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">4. Limitations</h2>
          <p>
            In no event shall STAYO WorkStay or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on STAYO WorkStay's website, even if STAYO WorkStay or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
          
          <div className="pt-12">
            <Link href="/" className={cn(buttonVariants("crystal", "lg"), "group")}>
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
