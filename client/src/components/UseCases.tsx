import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Building, Layers } from "lucide-react";
import { siteAssets } from "@/config/assets";

interface UseCase {
  icon: typeof MapPin;
  title: string;
  description: string;
  detailedDescription: string;
  outcome: string;
  benefit: string;
  imageUrl: string;
}

export function UseCases() {
  const [selectedCase, setSelectedCase] = useState<UseCase | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useCases: UseCase[] = [
    {
      icon: MapPin,
      title: "County Spatial Planning",
      description: "Comprehensive spatial planning framework for county development",
      detailedDescription:
        "Developed a complete GIS-based spatial planning system for county government, integrating land use data, zoning regulations, and development projections.",
      outcome:
        "Successfully mapped and analyzed 5,000+ parcels with detailed zoning classifications and development potential assessments.",
      benefit:
        "Enabled data-driven decision-making for county planning, reduced approval times by 40%, and improved stakeholder engagement through interactive visualizations.",
      imageUrl: siteAssets.useCases.countyPlanning,
    },
    {
      icon: Building,
      title: "Land Information Management System",
      description: "Digital transformation of land administration and management",
      detailedDescription:
        "Implemented a comprehensive LIMS integrating cadastral data, ownership records, and spatial planning information in a unified digital platform.",
      outcome:
        "Digitized 100,000+ land parcels with complete ownership history, spatial boundaries, and planning restrictions.",
      benefit:
        "Streamlined land transactions, improved transparency, reduced disputes by 60%, and enabled real-time access to land information for citizens and officials.",
      imageUrl: siteAssets.useCases.landInformation,
    },
    {
      icon: Layers,
      title: "Digital Twin Mapping",
      description: "High-resolution object registration for urban planning",
      detailedDescription:
        "Created a digital twin of urban infrastructure using AI-powered GIS at 5-10cm resolution, mapping buildings, roads, utilities, and public assets.",
      outcome:
        "Mapped 50,000+ buildings and infrastructure objects with centimeter-level accuracy using advanced remote sensing and AI classification.",
      benefit:
        "Provided unprecedented detail for urban planning, asset management, emergency response, and infrastructure development. Enabled predictive maintenance and optimization.",
      imageUrl: siteAssets.useCases.digitalTwin,
    },
  ];

  return (
    <>
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
              data-testid="text-usecases-heading"
            >
              Use Cases & Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-usecases-description">
              Real-world applications of our expertise in spatial planning and
              data engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="h-full cursor-pointer hover-elevate transition-all duration-300 overflow-hidden"
                  onClick={() => setSelectedCase(useCase)}
                  data-testid={`usecase-card-${index}`}
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${useCase.imageUrl}')` }}
                  >
                    <div className="h-full w-full bg-gradient-to-t from-background/90 to-background/20 flex items-end p-4">
                      <div className="w-10 h-10 rounded-md bg-primary/90 flex items-center justify-center">
                        <useCase.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading text-xl">
                      {useCase.title}
                    </CardTitle>
                    <CardDescription>{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="usecase-modal">
          {selectedCase && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <selectedCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <DialogTitle className="font-heading text-2xl">
                    {selectedCase.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-base">
                  {selectedCase.description}
                </DialogDescription>
              </DialogHeader>

              <div
                className="w-full h-64 rounded-md bg-cover bg-center my-4"
                style={{ backgroundImage: `url('${selectedCase.imageUrl}')` }}
              />

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Technical Approach
                  </h4>
                  <p className="text-muted-foreground">
                    {selectedCase.detailedDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Outcome
                  </h4>
                  <p className="text-muted-foreground">{selectedCase.outcome}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Benefits & Impact
                  </h4>
                  <p className="text-muted-foreground">{selectedCase.benefit}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
