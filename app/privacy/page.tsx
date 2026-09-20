import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export const metadata = {
  title: "Privacy Policy | STAYO WorkStay",
  description: "Privacy policy for STAYO WorkStay.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-surface-container-lowest text-on-surface">
      <div className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto w-full">
        <h1 className="font-headline text-5xl md:text-6xl tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-on-surface-variant font-body space-y-6">
          <p>Last updated: September 20, 2026</p>
          
          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">1. Introduction</h2>
          <p>
            Welcome to STAYO WorkStay. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us.
          </p>
          
          <div className="pt-12">
            <Link
              href="/"
              className={cn(buttonVariants("crystal", "lg"), "group")}
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
