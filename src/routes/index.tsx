import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/hero";
import { TrustBar } from "@/sections/trusted-bar";
import { Features } from "@/sections/features";

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
      </main>
    </>
  );
}
