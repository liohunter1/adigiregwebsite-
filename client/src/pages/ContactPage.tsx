import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your spatial data into actionable insights? Let's talk about your project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6" data-testid="text-contact-info-heading">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                      Office Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Northern Wing, Kenrail Towers
                      <br />
                      5th Floor
                      <br />
                      Nairobi, Kenya
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Phone className="h-5 w-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="tel:+254743571597"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +254 743 571597
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Mail className="h-5 w-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:info@digireg.co.ke"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      info@digireg.co.ke
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Clock className="h-5 w-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 5:00 PM EAT
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-3"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
