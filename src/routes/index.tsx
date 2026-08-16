import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/hero";
import { TrustBar } from "@/sections/trusted-bar";
import { Features } from "@/sections/features";
import { HowItWorks } from "@/sections/how-it-works";
import { Pricing } from "@/sections/pricing";
import { Testimonial } from "@/sections/testimonial";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonial />
      </main>
    </>
  );
}
