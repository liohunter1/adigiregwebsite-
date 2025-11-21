import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye, Handshake, TrendingDown } from "lucide-react";

export function VisionPromiseStandards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: Eye,
      title: "Our Vision: Integrality",
      description: "Spatial planning and area development require a broad view of data. We combine diverse information sources—land use, zoning, land registry, spatial planning, agricultural, addressing, and healthcare data—into integrated solutions that provide comprehensive insights.",
      highlight: "Integrated data approach since 2013 across Europe and Africa"
    },
    {
      icon: Handshake,
      title: "Our Promise: Quality",
      description: "We achieve more through our integrated approach, enabling your organization to become truly data-driven. Better service provision for citizens, entrepreneurs, and communities. Up-to-date, correct, and complete data ensures cost savings across your organization.",
      highlight: "Transforming how services are delivered at every level"
    },
    {
      icon: TrendingDown,
      title: "Our Standard: Depth",
      description: "Where others stop, we dig deeper. We ensure compliance with legal obligations while bringing deep GIS and data engineering knowledge. Our expertise goes beyond surface-level answers to create solid foundations for strategic decision-making.",
      highlight: "90-99% accuracy with advanced processing and analysis"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-pillars-heading">
            Creating Meaningful Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-pillars-description">
            Our world is the world of data. We transform raw data into valuable insights that drive better decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover-elevate transition-all duration-300" data-testid={`pillar-card-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading">{pillar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      {pillar.highlight}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
