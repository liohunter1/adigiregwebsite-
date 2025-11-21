import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VisionPromiseStandards } from "@/components/VisionPromiseStandards";
import { QuestionsAnswered } from "@/components/QuestionsAnswered";
import { Services } from "@/components/Services";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <VisionPromiseStandards />
      <QuestionsAnswered />
      <Services />
      <UseCases />
      <Testimonials />
    </div>
  );
}
