import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SpatialPlanningPage() {
  return (
    <div>
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-spatial-planning-hero">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/b0tQrv9A-wo?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=b0tQrv9A-wo"
            title="Spatial Planning Solutions"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full object-cover"
            style={{ pointerEvents: "none" }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg" data-testid="text-spatial-planning-heading">
              Spatial Planning Services
            </h1>
            <p className="text-xl sm:text-2xl mb-8 drop-shadow-md opacity-95" data-testid="text-spatial-planning-description">
              New insights into the future with geospatial data
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg" data-testid="button-spatial-planning-contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spatial Planning Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* GIS Based Spatial Plan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-gis-spatial-plan">
                GIS-Based Spatial Plans
              </h2>
              <p className="text-muted-foreground text-lg">
                Spatial planning provides effective and productive projection of land use, identifying where each activity should be and why. GIS mapping and monitoring of urban areas have become modern innovative spatial decision support tools.
              </p>
              <p className="text-muted-foreground">
                Our GIS-based spatial planning services support framework integration at national and sub-county levels, enabling stakeholders to visualize, analyze, and interpret location-based data. Services include:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>National and county spatial plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Topographical and thematic mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Spatial-temporal change detection mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>GIS-based land information systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Web GIS solutions</span>
                </li>
              </ul>
            </motion.div>

            {/* Zonal Plans */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-zonal-plans">
                Zonal Plans & Development Regulations
              </h2>
              <p className="text-muted-foreground text-lg">
                Zonal plans control development by articulating the spatial location of various land uses through legally enforceable policies and maps. Each zone has ordinances governing development types, sizes, heights, locations, and urban densities.
              </p>
              <p className="text-muted-foreground">
                Our planning expertise creates zonal maps that divide areas into residential, commercial, industrial, public buildings, parks, and green areas. This framework is valuable for property tax coordination and investors seeking appropriate project locations.
              </p>
              <p className="text-muted-foreground font-semibold mt-4">Services offered:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Change of use",
                  "Extension of use",
                  "Subdivision",
                  "Amalgamation",
                  "Regularisation",
                  "Action Area plans",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Urban Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-urban-design">
                Urban Design & 3D Visualization
              </h2>
              <p className="text-muted-foreground text-lg">
                Using 3D software like YOLO, our team of urban design professionals creates artistic and skillful plans with vivid pictures of how future places will look. We engage public decision-makers and professionals from architecture, planning, and design.
              </p>
              <p className="text-muted-foreground">
                Our collaborative approach produces designs that reflect all applicable values for multiple clients, providing realistic visualization of proposed developments and their potential impact on communities.
              </p>
            </motion.div>

            {/* Planning Framework */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-planning-framework">
                Planning Framework Development
              </h2>
              <p className="text-muted-foreground text-lg">
                Over years of practice, our team has studied planning frameworks, identified gaps, and developed solutions. We work with governments, parastatals, NGOs, and communities to create improved, implementable frameworks.
              </p>
              <p className="text-muted-foreground">
                Using a bottom-up approach rather than top-down, we consult with various stakeholders to create frameworks that give communities more power in consultation and deliberation, ensuring better outcomes for all parties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6" data-testid="text-spatial-planning-cta">
            Plan Your Region's Future
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Let's create comprehensive spatial planning solutions that support sustainable development.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-spatial-planning-contact-cta">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
