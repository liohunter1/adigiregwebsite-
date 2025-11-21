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
      title: "Mbale Town - Large Scale Topography Map",
      description: "Large-Scale Topography Registration mapping for Vihiga County urban planning",
      detailedDescription:
        "In collaboration with Digireg Netherlands, we conducted a workshop to develop a Large-Scale Topography Registration Map (LTR) for Mbale Town. Using cutting-edge technology including satellite imagery, GIS, and CAD, we created a comprehensive digital representation of the urban area.",
      outcome:
        "Delivered a detailed topographic registration map equipped with data for land use management, zoning analysis, and infrastructure development planning.",
      benefit:
        "Improved urban planning capabilities, enhanced resource management, strengthened disaster readiness and risk reduction. Planning, Public Works, and Environment Departments now make better-informed decisions with real-time, accurate spatial data.",
      imageUrl: siteAssets.useCases.countyPlanning,
    },
    {
      icon: Building,
      title: "Vihiga County - Data Landscape Assessment",
      description: "Comprehensive GIS Lab transformation into a Geodetic Service Hub",
      detailedDescription:
        "Conducted a thorough data landscape assessment in Vihiga County, identifying technological gaps, workforce retention challenges, and data continuity issues. Our assessment revealed needs for Service Level Agreements, frequent data updates, and organizational restructuring to create a strong data ecosystem.",
      outcome:
        "Developed recommendations for GIS Lab transformation into a 'Geodetic Service Hub' providing updated geospatial and analytical tools. Implemented specialized training programs and improved interdepartmental coordination.",
      benefit:
        "Established foundation for Vihiga County's transition to a data-driven government structure. Health, Agriculture, and Public Service departments now leverage geospatial insights to maximize program efficiency and resource allocation.",
      imageUrl: siteAssets.useCases.landInformation,
    },
    {
      icon: Layers,
      title: "Detailed Zoning Planning",
      description: "Comprehensive zoning framework for sustainable urban development",
      detailedDescription:
        "Developed detailed zoning plans integrating land use classification, development regulations, and spatial analysis. Created interactive GIS-based zoning maps showing residential, commercial, industrial, public, and green space zones with specific ordinances for each area.",
      outcome:
        "Delivered comprehensive zoning framework with detailed regulatory guidance, density calculations, and development potential analysis for multiple districts.",
      benefit:
        "Provides clear development framework for municipalities, improves investment coordination, enables fair property tax assessment, and supports sustainable urban growth planning with environmental and economic considerations.",
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
