"use client";

import { useState } from "react";
import { contactContent } from "@/content/contact";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

export default function RequirementForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      companyName: formData.get("companyName"),
      contactName: formData.get("contactName"),
      designation: formData.get("designation"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      workLocation: formData.get("workLocation"),
      workforceType: formData.get("workforceType"),
      accommodationRequirement: formData.get("accommodationRequirement"),
      timeline: formData.get("timeline"),
      servicesRequired: formData.getAll("servicesRequired"),
      message: formData.get("message"),
      website: formData.get("website") // honeypot
    };

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(contactContent.form.error.message);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface-container-low p-12 border border-outline-variant/30 rounded flex flex-col items-center text-center">
        <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
        <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">
          {contactContent.form.success.headline}
        </h3>
        <p className="text-lg text-on-surface-variant font-medium mb-10 max-w-md">
          {contactContent.form.success.support}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center px-8 py-3 bg-transparent text-primary text-sm font-bold uppercase tracking-widest border border-primary hover:bg-primary hover:text-on-primary transition-colors"
        >
          Submit Another Requirement
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-12 bg-surface-container-lowest">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Group 01: Company */}
      <div>
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 pb-2 border-b border-outline-variant/30">
          {contactContent.form.groups.company}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="companyName" className="text-sm font-bold text-on-surface">Company Name *</label>
            <input required type="text" name="companyName" id="companyName" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contactName" className="text-sm font-bold text-on-surface">Contact Name *</label>
            <input required type="text" name="contactName" id="contactName" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="designation" className="text-sm font-bold text-on-surface">Designation</label>
            <input type="text" name="designation" id="designation" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-on-surface">Business Email *</label>
            <input required type="email" name="email" id="email" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-bold text-on-surface">Phone Number *</label>
            <input required type="tel" name="phone" id="phone" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
        </div>
      </div>

      {/* Group 02: Requirement */}
      <div>
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 pb-2 border-b border-outline-variant/30">
          {contactContent.form.groups.requirement}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="workLocation" className="text-sm font-bold text-on-surface">Work Location *</label>
            <input required type="text" name="workLocation" id="workLocation" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="workforceType" className="text-sm font-bold text-on-surface">Workforce Type *</label>
            <select required name="workforceType" id="workforceType" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface appearance-none">
              <option value="">Select workforce type</option>
              {contactContent.form.options.workforceType.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="accommodationRequirement" className="text-sm font-bold text-on-surface">Estimated Accommodation Requirement *</label>
            <select required name="accommodationRequirement" id="accommodationRequirement" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface appearance-none">
              <option value="">Select scale</option>
              {contactContent.form.options.accommodationRequirement.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="timeline" className="text-sm font-bold text-on-surface">Timeline *</label>
            <select required name="timeline" id="timeline" className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface appearance-none">
              <option value="">Select timeline</option>
              {contactContent.form.options.timeline.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Group 03: Services */}
      <div>
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 pb-2 border-b border-outline-variant/30">
          {contactContent.form.groups.services}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactContent.form.options.services.map((service) => (
            <label key={service} className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5">
                <input type="checkbox" name="servicesRequired" value={service} className="peer appearance-none w-5 h-5 border-2 border-outline-variant/50 rounded-sm checked:border-primary checked:bg-primary transition-colors" />
                <svg className="absolute w-3 h-3 text-on-primary pointer-events-none opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm text-on-surface-variant font-medium group-hover:text-on-surface transition-colors">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Group 04: Message */}
      <div>
        <h3 className="text-xs font-bold text-primary tracking-widest uppercase mb-6 pb-2 border-b border-outline-variant/30">
          {contactContent.form.groups.message}
        </h3>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-bold text-on-surface">Additional Requirements</label>
          <textarea 
            name="message" 
            id="message" 
            rows={5}
            placeholder="Tell us about your workforce, location, timeline or any specific accommodation requirements."
            className="w-full bg-surface-container-low border border-outline-variant/50 p-4 focus:outline-none focus:border-primary transition-colors rounded-sm text-on-surface resize-none placeholder:text-outline-variant" 
          />
        </div>
      </div>

      {errorStatus(status, errorMessage)}

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(buttonVariants("crystal", "lg"), "w-full md:w-auto self-start group")}
      >
        {status === "submitting" ? "Submitting..." : "Discuss Your Requirement"}
        {status !== "submitting" && <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5" />}
      </button>
    </form>
  );
}

function errorStatus(status: string, errorMessage: string) {
  if (status === "error") {
    return (
      <div className="p-4 bg-red-50 text-red-900 rounded-sm font-medium border border-red-200">
        {errorMessage}
      </div>
    );
  }
  return null;
}
