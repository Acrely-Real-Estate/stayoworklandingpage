export interface Enquiry {
  id?: string;
  companyName: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  workLocation: string;
  workforceType: string;
  accommodationRequirement: string;
  timeline: string;
  servicesRequired?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
