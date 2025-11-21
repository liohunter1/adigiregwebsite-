import { z } from "zod";

// Contact form schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().min(2, "Organization name is required"),
  serviceInterest: z.enum(["e-governance", "spatial-planning", "data-engineering", "training"], {
    required_error: "Please select a service of interest",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to be contacted",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Contact API response
export interface ContactResponse {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}
