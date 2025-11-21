import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { UseCases } from "@/components/UseCases";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <UseCases />
      <Testimonials />
    </div>
  );
}
