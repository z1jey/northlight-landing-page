import { Button } from "@/components/ui/button";

export function FaqCta() {
  return (
    <section
      aria-labelledby="faq-cta-heading"
      className="
        w-full
        overflow-hidden
        rounded-[16px]
        bg-[radial-gradient(70%_120%_at_50%_0%,#172D7B_0%,#0A1024_65%)]
      "
    >
      <div
        className="
          flex
          flex-col
          items-center
          px-6
          py-12
          text-center
          min-[641px]:px-10
          min-[641px]:py-14
          min-[901px]:px-16
          min-[901px]:py-16
        "
      >
        <h2
          id="faq-cta-heading"
          className="
            font-instrument-semibold
            text-[clamp(28px,20px+2.1vw,40px)]
            leading-[1.2]
            tracking-[-0.02em]
            text-white
          "
        >
          Start seeing clearly
        </h2>

        <p
          className="
            mt-3
            max-w-[520px]
            font-inter-regular
            text-[16px]
            leading-[1.65]
            text-[#C7D0E3]
          "
        >
          Fourteen days, every feature, no credit card. Bring your events and
          we'll bring the answers.
        </p>

        {/* CTA buttons */}
        <div
          className="
            mt-6
            flex
            w-full
            flex-col
            items-stretch
            gap-3
            min-[481px]:w-auto
            min-[481px]:flex-row
            min-[481px]:items-center
          "
        >
          <Button
            variant="cta"
            size="default"
            className="w-full min-[481px]:w-auto"
          >
            Start free trial
          </Button>

          <Button
            variant="cta-secondary"
            size="default"
            className="w-full min-[481px]:w-auto"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
