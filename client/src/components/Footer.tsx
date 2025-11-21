import { Link } from "wouter";
import { MapPin, Mail, Phone, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold">DIGIREG</span>
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Turning data into decisions for a smarter Kenya
            </p>
            <p className="text-xs text-secondary-foreground/70 leading-relaxed">
              We collect raw data, transform it into useful information, and deliver valuable insights. Since 2013, we've applied our integrated geospatial approach to government data across Europe and East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-projects">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/e-governance" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-egovernance">
                  E-Governance
                </Link>
              </li>
              <li>
                <Link href="/services/spatial-planning" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-spatial-planning">
                  Spatial Planning
                </Link>
              </li>
              <li>
                <Link href="/services/data-engineering" className="hover-elevate active-elevate-2 inline-block py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-data-engineering">
                  Data Engineering
                </Link>
              </li>
              <li>
                <span className="text-secondary-foreground/60 text-xs">GIS Analysis & Processing</span>
              </li>
              <li>
                <span className="text-secondary-foreground/60 text-xs">Geo-Scripting & Training</span>
              </li>
            </ul>
          </div>

          {/* Our Standards */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Our Standards</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <div className="font-semibold text-secondary-foreground">Vision: Integrality</div>
                <p className="text-secondary-foreground/70 mt-1">A broad view of data and integrated approach to solutions</p>
              </li>
              <li>
                <div className="font-semibold text-secondary-foreground">Promise: Quality</div>
                <p className="text-secondary-foreground/70 mt-1">Data-driven decisions with lasting impact</p>
              </li>
              <li>
                <div className="font-semibold text-secondary-foreground">Standard: Depth</div>
                <p className="text-secondary-foreground/70 mt-1">Going deeper for maximum value</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <div className="text-secondary-foreground/80 text-xs leading-relaxed">
                  Northern Wing, Kenrail Towers,<br />5th Floor, Nairobi, Kenya
                </div>
              </li>
              <li>
                <a
                  href="tel:+254743571597"
                  className="flex items-center gap-2 hover-elevate active-elevate-2 inline-flex py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-xs">+254 743 571597</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@digireg.co.ke"
                  className="flex items-center gap-2 hover-elevate active-elevate-2 inline-flex py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-xs">info@digireg.co.ke</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Digireg Kenya Ltd. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/digireg-kenya/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCAJCXS5urORQx461JLsxQAg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
                data-testid="link-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/digiregkenya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Twitter"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>

            <a
              href="#"
              className="text-sm hover-elevate active-elevate-2 py-1 px-2 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
          </div>

          <p className="text-xs text-secondary-foreground/50 text-center">
            Data-driven solutions for smarter governance. Expertise since 2013.
          </p>
        </div>
      </div>
    </footer>
  );
}
