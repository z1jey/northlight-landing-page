import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/sections/hero";
export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  );
}
