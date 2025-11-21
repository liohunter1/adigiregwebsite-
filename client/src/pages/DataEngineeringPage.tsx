import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ServiceNavigator } from "@/components/ServiceNavigator";
import { siteAssets } from "@/config/assets";
import { ArrowRight } from "lucide-react";

export default function DataEngineeringPage() {
  return (
    <div>
      {/* Video Hero Section */}
      <section className="relative h-screen min-h-screen flex items-center justify-center overflow-hidden" data-testid="section-data-engineering-hero">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WSOfEndqOMM?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=WSOfEndqOMM&fs=0&iv_load_policy=3"
            title="Data Engineering Solutions"
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
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg" data-testid="text-data-engineering-heading">
              Data Engineering Solutions
            </h1>
            <p className="text-xl sm:text-2xl mb-8 drop-shadow-md opacity-95" data-testid="text-data-engineering-description">
              Getting the right data flowing in the right direction
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg" data-testid="button-data-engineering-contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Data Engineering Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-20">
            {/* Detailed Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6">
                <img
                  src={siteAssets.services.dataEngineering}
                  alt="Detailed Object Registration Mapping"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                />
              </div>
              <h2 className="font-heading text-3xl font-bold text-foreground" data-testid="text-detailed-mapping">
                Detailed Object Registration Mapping
              </h2>
              <p className="text-muted-foreground text-lg">
                We use a combination of aerial and satellite imagery (true ortho and oblique), street view, and LiDAR to generate highly detailed data of locations and landscapes.
              </p>
              <p className="text-muted-foreground">
                Our object registration maps provide the most detailed and accurate view of landscapes with roads, fields, buildings, trees, fences, infrastructure, cadastral, and utilities integrated as a single product at 5-20cm resolution. These maps can be enriched with personal datasets like land title ownership and address systems.
              </p>
              <p className="text-muted-foreground">
                Applications include mining, oil & gas, defense, intelligence, meteorology, oceanography, agriculture, biodiversity conservation, forestry, cartography, urban planning, and more.
              </p>
            </motion.div>

            {/* AI GIS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.dataEngineeringDetails.aiGis}
                  alt="Artificial Intelligence & GIS Integration"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg">
                AI-GIS combines artificial intelligence technology with GIS functions, including spatial data processing and analysis algorithms. This combination opens promising possibilities, especially in infrastructure and utilities.
              </p>
              <p className="text-muted-foreground">
                Digireg has created AI systems for identification and mapping of buildings, as well as identifying errors with high accuracy, dramatically reducing time and resources required for these tasks.
              </p>
              <p className="text-muted-foreground font-semibold mt-4">AI-GIS improvements:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Data creation acceleration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Automated data cleaning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Asset recognition in imagery</span>
                </li>
              </ul>
            </motion.div>

            {/* GIS Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.dataEngineeringDetails.gisAnalysis}
                  alt="GIS Analysis & Data Processing"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg">
                GIS analysis creates new information and discovers differences between source files. Our smart GIS specialists analyze data based on your specific questions with 90-99% accuracy.
              </p>
              <p className="text-muted-foreground">
                We employ advanced processing techniques and programs, including extensive use of FME for data cleaning and transformation, ensuring your geospatial datasets meet the highest quality standards.
              </p>
            </motion.div>

            {/* Land Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.dataEngineeringDetails.landSurvey}
                  alt="Land Survey Services"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg">
                We offer a wide range of survey services backed by our qualified surveyors with extensive knowledge in surveying and geospatial data collection.
              </p>
              <p className="text-muted-foreground font-semibold mt-4">Services include:</p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Land surveys",
                  "Topographic surveys",
                  "Control surveys",
                  "Cadastral services",
                ].map((service) => (
                  <div key={service} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    {service}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Scripting & Training */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="rounded-lg overflow-hidden h-64 mb-6 bg-muted">
                <img
                  src={siteAssets.dataEngineeringDetails.training}
                  alt="Geo-Scripting & Training"
                  loading="lazy"
                  className="w-full h-full object-cover hover-elevate transition-transform duration-300"
                  style={{ aspectRatio: '16/9' }}
                />
              </div>
              <p className="text-muted-foreground text-lg">
                Scripts for geo-ICT can make a world of difference. We write custom scripts that automate standard activities without sacrificing quality, enabling complex tasks to be completed in shorter timeframes while increasing productivity.
              </p>
              <p className="text-muted-foreground">
                Our programming expertise spans Java, Python, .NET, PHP, and FME scripting. We customize scripts to your specific geo-ICT software and database structure, including data format translation for multi-software environments.
              </p>
              <p className="text-muted-foreground font-semibold mt-4">Training programs cover:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Geoinformation technology fundamentals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Remote sensing and imagery analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Artificial intelligence for GIS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Web mapping and GIS applications</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6" data-testid="text-data-engineering-cta">
            Transform Your Data into Insights
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Let's unlock the potential of your geospatial and organizational data.
          </p>
          <Link href="/contact">
            <Button size="lg" data-testid="button-data-engineering-contact-cta">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
