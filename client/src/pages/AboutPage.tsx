import { motion } from "framer-motion";
import { About } from "@/components/About";
import { Card } from "@/components/ui/card";
import { Users, Target, Globe2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Helping governments and organizations become truly data-driven through innovative spatial solutions.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Led by Emmanuel Marete and a team of seasoned GIS professionals and data engineers.",
    },
    {
      icon: Globe2,
      title: "Global Experience",
      description: "International expertise from the Netherlands, adapted for East African contexts.",
    },
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "Leveraging AI-GIS, automation, and cutting-edge technology for superior results.",
    },
  ];

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
              About Digireg Kenya
            </h1>
            <p className="text-lg text-muted-foreground">
              International expertise in geo-information systems, driving digital transformation across East Africa since 2021
            </p>
          </motion.div>
        </div>
      </section>

      <About />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover-elevate">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
