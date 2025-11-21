import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export function QuestionsAnswered() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const questions = [
    "How many buildings are there within our county or municipality?",
    "How can we make smart savings on public space management or increase fair revenue?",
    "In which districts should we invest for maximum economic value?",
    "Which location is most suitable for each type of development?",
    "How do we address climate adaptation over the next 10 years?",
    "How do we fully map out all our utilities and infrastructure?",
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-questions-heading">
            We Leave No Question Unanswered
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-questions-description">
            Your data holds answers to your toughest questions. We help unlock them through intelligent data analysis and GIS solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full p-6 hover-elevate transition-all duration-300" data-testid={`question-card-${index}`}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <HelpCircle className="h-6 w-6 text-primary mt-1" />
                  </div>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {question}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            With data engineering and GIS expertise, our specialists create the insights that help you move forward. 
            <span className="block mt-3 font-semibold text-foreground">
              What question is on your mind?
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
