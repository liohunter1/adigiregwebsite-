import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "Digireg helped us create a land information system that transformed how we plan and manage our county's development. Their expertise in spatial data is unmatched.",
      author: "County Planning Director",
      role: "Kenya County Government",
    },
    {
      quote:
        "Thanks to Digireg's data engineering capabilities, our asset management is now far more precise. The high-resolution mapping has been a game-changer.",
      author: "Infrastructure Manager",
      role: "Municipal Authority",
    },
    {
      quote:
        "The spatial planning framework developed by Digireg has enabled us to make data-driven decisions with confidence. Their integrated approach is exactly what we needed.",
      author: "Urban Development Lead",
      role: "Regional Planning Agency",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-testimonials-heading"
          >
            Trusted by Government & Institutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-testimonials-description">
            What our clients say about working with Digireg Kenya
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="h-full hover-elevate"
                data-testid={`testimonial-card-${index}`}
              >
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic" data-testid={`text-testimonial-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-role-${index}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4" data-testid="text-partners-intro">
            Partnering with leading institutions across Kenya
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-8 opacity-60"
            data-testid="partners-strip"
          >
            <div className="text-xs font-semibold tracking-wider text-muted-foreground">
              COUNTY GOVERNMENTS
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="text-xs font-semibold tracking-wider text-muted-foreground">
              NATIONAL AGENCIES
            </div>
            <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="text-xs font-semibold tracking-wider text-muted-foreground">
              REGIONAL BODIES
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
