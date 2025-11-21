import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema, type ContactFormData, type ContactResponse } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      serviceInterest: undefined,
      message: "",
      consent: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest<ContactResponse>("POST", "/api/contact", data);
    },
    onSuccess: () => {
      form.reset();
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your full name"
                    data-testid="input-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="your.email@example.com"
                    data-testid="input-email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization *</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your organization name"
                    data-testid="input-organization"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service of Interest *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="e-governance" data-testid="option-e-governance">
                      E-Governance
                    </SelectItem>
                    <SelectItem value="spatial-planning" data-testid="option-spatial-planning">
                      Spatial Planning
                    </SelectItem>
                    <SelectItem value="data-engineering" data-testid="option-data-engineering">
                      Data Engineering
                    </SelectItem>
                    <SelectItem value="training" data-testid="option-training">
                      Training & Automation
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    data-testid="checkbox-consent"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    I agree to be contacted by Digireg Kenya regarding my inquiry
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
            data-testid="button-submit"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>

          <AnimatePresence mode="wait">
            {mutation.isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 text-sm text-accent p-4 bg-accent/10 rounded-md"
                data-testid="success-message"
              >
                <CheckCircle className="h-5 w-5" />
                <span>
                  Thank you! We'll be in touch soon.
                </span>
              </motion.div>
            )}

            {mutation.isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-destructive p-4 bg-destructive/10 rounded-md"
                data-testid="error-message"
              >
                Something went wrong. Please try again or contact us directly.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </Form>
    </div>
  );
}
