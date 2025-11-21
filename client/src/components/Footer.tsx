import { Link } from "wouter";
import { MapPin, Mail, Phone, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="font-heading text-xl font-bold">DIGIREG</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Turning data into decisions for a smarter Kenya
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
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

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>E-Governance</li>
              <li>Spatial Planning</li>
              <li>Data Engineering</li>
              <li>Training & Automation</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">
                  Northern Wing, Kenrail Towers,
                  <br />
                  5th Floor, Nairobi, Kenya
                </span>
              </li>
              <li>
                <a
                  href="tel:+254743571597"
                  className="flex items-center gap-2 hover-elevate active-elevate-2 inline-flex py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +254 743 571597
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@digireg.co.ke"
                  className="flex items-center gap-2 hover-elevate active-elevate-2 inline-flex py-1 px-2 rounded-md -ml-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  info@digireg.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Digireg Kenya Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover-elevate active-elevate-2 p-2 rounded-md text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
              aria-label="LinkedIn"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
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
      </div>
    </footer>
  );
}
