import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = contactFormSchema.parse(req.body);

      // In a real implementation, you would:
      // - Store the contact submission in a database
      // - Send an email notification
      // - Integrate with a CRM system
      
      // For this mock, we just return success
      console.log("Contact form submission received:", validatedData);

      res.json({
        success: true,
        message: "Thank you for your message. We will be in touch shortly.",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Return validation errors
        const errors: Record<string, string[]> = {};
        error.errors.forEach((err) => {
          const path = err.path.join(".");
          if (!errors[path]) {
            errors[path] = [];
          }
          errors[path].push(err.message);
        });

        res.status(400).json({
          success: false,
          message: "Validation failed. Please check your input.",
          errors,
        });
      } else {
        // Return generic error
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request. Please try again.",
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
