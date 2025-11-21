import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Building2, Map, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceNavigator() {
  const [location] = useLocation();

  const services = [
    {
      href: "/services/e-governance",
      label: "E-Governance",
      icon: Building2,
      active: location === "/services/e-governance",
    },
    {
      href: "/services/spatial-planning",
      label: "Spatial Planning",
      icon: Map,
      active: location === "/services/spatial-planning",
    },
    {
      href: "/services/data-engineering",
      label: "Data Engineering",
      icon: Database,
      active: location === "/services/data-engineering",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-muted/20 border-b"
      data-testid="service-navigator"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground mb-4 text-center">Other Services</p>
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.href} href={service.href}>
                <Button
                  variant={service.active ? "default" : "outline"}
                  size="sm"
                  className="gap-2"
                  data-testid={`button-service-nav-${service.label.toLowerCase().replace(" ", "-")}`}
                >
                  <Icon className="h-4 w-4" />
                  {service.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
