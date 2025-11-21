import { motion } from "framer-motion";
import { Services } from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <div>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive geospatial solutions for e-governance, spatial planning, and data engineering
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              variant="default"
              size="lg"
            >
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Services />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our expertise in spatial planning and data engineering can help your organization make better decisions.
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              variant="default"
              size="lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
