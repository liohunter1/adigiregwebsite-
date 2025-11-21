import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Map, Building2 } from "lucide-react";
import { siteAssets } from "@/config/assets";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10"
          style={{
            backgroundImage: `url('${siteAssets.heroBackground}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="img"
          aria-label="Satellite view of geospatial data"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
              data-testid="text-hero-headline"
            >
              Turning Data into Decisions
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            data-testid="text-hero-subheadline"
          >
            Geo-Information, E-Governance & Spatial Planning for a Smart,
            Data-Driven Kenya
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              data-testid="button-hero-services"
              size="lg"
              variant="default"
              onClick={() => scrollToSection("services")}
              className="text-base"
            >
              Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              data-testid="button-hero-contact"
              size="lg"
              variant="outline"
              onClick={() => (window.location.href = "/contact")}
              className="text-base backdrop-blur-sm bg-background/50"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            data-testid="trust-strip"
          >
            <div className="flex items-center gap-2" data-testid="trust-item-spatial">
              <Map className="h-5 w-5 text-primary" />
              <span className="font-medium">Spatial Planning</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2" data-testid="trust-item-data">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-medium">Data Engineering</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground/30" />
            <div className="flex items-center gap-2" data-testid="trust-item-egovernance">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-medium">E-Governance</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
