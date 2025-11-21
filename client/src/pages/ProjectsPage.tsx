import { motion } from "framer-motion";
import { UseCases } from "@/components/UseCases";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
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
              Use Cases & Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of successful spatial planning, data engineering, and e-governance implementations
            </p>
          </motion.div>
        </div>
      </section>

      <UseCases />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Your Project Could Be Next
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need county spatial planning, land information systems, or high-resolution digital twin mapping, we have the expertise to deliver exceptional results.
            </p>
            <Button
              onClick={() => (window.location.href = "/contact")}
              variant="default"
              size="lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
