import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceNavigator } from "@/components/ServiceNavigator";
import { siteAssets } from "@/config/assets";
import { ArrowRight } from "lucide-react";

export default function EGovernancePage() {
  return (
    <div>
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-egovernance-hero">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E9YzuzkLNJk?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=E9YzuzkLNJk&fs=0&iv_load_policy=3"
            title="E-Governance Solutions"
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
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg" data-testid="text-egovernance-heading">
              E-Governance Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 drop-shadow-md opacity-95" data-testid="text-egovernance-description">
              We update, improve and manage your basic registrations with cutting-edge digital solutions
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg" data-testid="button-egovernance-contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* E-Governance Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Digital Spatial Planning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 mx-auto flex items-center justify-center">
                <img
                  src={siteAssets.services.eGovernance}
                  alt="Digital Spatial Planning"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-digital-spatial-planning">
                Digital Spatial Planning
              </h2>
              <p className="text-muted-foreground text-lg">
                New developments in urban areas create significant impact over time. Infrastructure including housing, transport networks, and business locations affect not only the landscape of towns but also their environment, demographics, and economy.
              </p>
              <p className="text-muted-foreground">
                Digireg strengthens the importance and position of digital spatial planning in your organization through highly detailed, large-scale (10-20cm) digital spatial plans that show development opportunities quickly and easily, audit existing infrastructures, and identify capacity in utility services.
              </p>
            </motion.div>

            {/* Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.eGovernanceDetails.assetManagement}
                  alt="Asset Management Systems"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg text-left">
                Geospatial information is becoming an essential asset management companion. Our object registration system provides a digital twin of all objects/features on the ground at 10-20cm scale, enabling multiple teams to track maintenance tasks and manage work orders effectively.
              </p>
              <p className="text-muted-foreground text-left">
                Particularly valuable for infrastructure and utilities industry, especially for roads maintenance, our system allows web-based access for all stakeholders with smart GIS analysis based on your specific questions.
              </p>
            </motion.div>

            {/* LIMS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.eGovernanceDetails.lims}
                  alt="Land Information Management Systems"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg text-left">
                Our GIS-based comprehensive land administration system enables governments to improve land information management (cadastral), property valuation and analysis, and communication with the public.
              </p>
              <p className="text-muted-foreground text-left">
                A single platform provides accurate property representation and understanding, secure and authoritative land records, and parcel data for widespread government and public use. We ensure accuracy and precision with multiple quality checks during data processing.
              </p>
            </motion.div>

            {/* Agricultural Management */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.eGovernanceDetails.agricultural}
                  alt="Agricultural Management Systems"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg text-left">
                Technology plays a crucial role in rapid economic growth. Our GIS solutions help farmers and stakeholders achieve increased production and reduced costs through better land resource management.
              </p>
              <p className="text-muted-foreground text-left">
                We accurately map geographic and geologic features of farmlands and project current and future fluctuations in precipitation, temperature, and crop output for more effective farming techniques.
              </p>
            </motion.div>

            {/* ICT Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-center"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.eGovernanceDetails.ictAudit}
                  alt="Geo-ICT Audits & Optimization"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg text-left">
                We provide comprehensive audits of your Geo-ICT environment using our knowledge of software, hardware, and industry best practices.
              </p>
              <div className="bg-muted/30 p-6 rounded-lg space-y-3 mt-6 text-left">
                <p className="font-semibold text-foreground">Our audit includes:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Procedures for basic and core processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Data collection, archiving and usage methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Registration and compliance with geo-ICT processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Digitalization level and GIS viewer usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Response to change and innovation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Geo-information policy plans</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Navigator */}
      <ServiceNavigator />

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6" data-testid="text-egovernance-cta">
            Ready to Transform Your Governance?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how our e-governance solutions can improve your services and operations.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-egovernance-contact-cta">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
