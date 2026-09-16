import { z } from "zod";

export const enquirySchema = z.object({
  companyName: z.string().trim().min(1, "Company Name is required"),
  contactName: z.string().trim().min(1, "Contact Name is required"),
  designation: z.string().trim().optional(),
  email: z.string().trim().min(1, "Business Email is required").email("Please enter a valid email address"),
  phone: z.string().trim().min(1, "Phone Number is required"),
  workLocation: z.string().trim().min(1, "Work Location is required"),
  workforceType: z.string().min(1, "Workforce Type is required"),
  accommodationRequirement: z.string().min(1, "Estimated Requirement is required"),
  timeline: z.string().min(1, "Timeline is required"),
  servicesRequired: z.array(z.string()).optional(),
  message: z.string().trim().optional(),
  website: z.string().max(0, "Invalid submission").optional() // Honeypot field
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
