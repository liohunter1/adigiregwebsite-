import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Map, Database, GraduationCap, ArrowRight } from "lucide-react";

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Building2,
      title: "E-Governance",
      description:
        "Digital spatial planning solutions for modern government operations",
      features: [
        "Land Information Management Systems (LIMS)",
        "Digital spatial plans and zoning",
        "Asset management systems",
        "Object registration mapping",
      ],
      href: "/services/e-governance",
    },
    {
      icon: Map,
      title: "Spatial Planning",
      description:
        "GIS-based spatial planning for sustainable development",
      features: [
        "National and county spatial plans",
        "Zonal and local area planning",
        "Change detection analysis",
        "Planning framework development",
      ],
      href: "/services/spatial-planning",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "AI-powered GIS and high-resolution data solutions",
      features: [
        "AI-GIS data processing",
        "Data cleaning and validation",
        "5-20cm resolution object maps",
        "Automation scripting (Python, FME)",
      ],
      href: "/services/data-engineering",
    },
    {
      icon: GraduationCap,
      title: "Training & Automation",
      description:
        "Capacity building and geo-automation expertise",
      features: [
        "GIS scripting workshops",
        "Geo-ICT training programs",
        "Remote sensing courses",
        "Automated geo-workflows",
      ],
      href: "/services/data-engineering",
    },
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-heading"
          >
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Comprehensive solutions for spatial planning, data engineering, and
            e-governance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <Card
                  className="h-full hover-elevate transition-all duration-300 cursor-pointer"
                  data-testid={`service-card-${index}`}
                >
                  <CardHeader className="space-y-3">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading text-xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="mt-2 -ml-2 text-primary hover:text-primary" data-testid={`button-service-learn-more-${index}`}>
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
