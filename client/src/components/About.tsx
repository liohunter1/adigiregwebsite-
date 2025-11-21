import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Globe, Target, Award, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Globe, label: "Global Reach", value: "Multiple Countries" },
    { icon: Target, label: "Precision", value: "90-99% Accuracy" },
    { icon: Award, label: "Expertise", value: "Deep GIS & Data" },
    { icon: Users, label: "Team", value: "Expert Consultants" },
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
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-about-heading"
          >
            About Digireg Kenya
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            data-testid="text-about-description"
          >
            Helping governments and organizations become truly data-driven
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="font-heading text-2xl font-semibold text-foreground mb-4"
              data-testid="text-about-story-heading"
            >
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-about-story-1">
                Digireg Kenya Ltd has its roots in the Netherlands, bringing
                international expertise in geo-information systems to East
                Africa. Since establishing our Kenya office in 2021, we've been
                at the forefront of digital transformation in spatial planning
                and e-governance.
              </p>
              <p data-testid="text-about-story-2">
                Our mission is clear: to help governments and organizations
                harness the power of spatial data to make better decisions. We
                combine deep data insights with cutting-edge GIS technology to
                deliver solutions that transform how our clients plan, manage,
                and govern.
              </p>
              <p data-testid="text-about-story-3">
                With integrated data at our core and spatial planning in our
                DNA, we bring precision, quality, and innovation to every
                project we undertake.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className="font-heading text-2xl font-semibold text-foreground mb-4"
              data-testid="text-about-values-heading"
            >
              Why Choose Us
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Integrated Data & Spatial Roots
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    We bring together data engineering and spatial planning
                    expertise for comprehensive solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Deep Data Insights
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Our AI-powered GIS solutions deliver unmatched accuracy and
                    actionable intelligence.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Quality & Precision
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    From 5-20cm resolution object registration to complete LIMS
                    implementation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center hover-elevate"
              data-testid={`stat-card-${index}`}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
