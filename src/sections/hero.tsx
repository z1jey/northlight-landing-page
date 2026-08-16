import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="
        bg-[radial-gradient(78%_55%_at_50%_0%,#EDF1FF_0%,rgba(246,247,251,0)_72%)]
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1200px]
          flex-col
          items-center
          px-5
          py-14
          min-[641px]:py-[72px]
          min-[901px]:px-6
          min-[901px]:py-24
        "
      >
        {/* Announcement */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#E4E8EF]
            bg-white
            px-3
            py-1.5
            font-[Inter]
            text-[13px]
            font-medium
            leading-[1.65]
            text-[#525F72]
            shadow-[0_1px_2px_rgba(10,16,36,0.06)]
          "
        >
          <span
            aria-hidden="true"
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#2B59FF]
            "
          />

          <span className="font-inter-regular">New — Funnel insights v2</span>
        </div>

        {/* Hero copy */}
        <div
          className="
            mt-8
            max-w-[760px]
            text-center
          "
        >
          <h1
            id="hero-heading"
            className="
              font-instrument-bold
              text-[clamp(36px,22.4px+3.6vw,60px)]
              font-semibold
              leading-[1.08]
              tracking-[-0.03em]
              text-[#0A1024]
            "
          >
            See what your
            <br />
            product is really doing.
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-[680px]
              font-inter-regular
              text-[16px]
              font-normal
              leading-[1.65]
              text-[#525F72]
              min-[641px]:text-[18px]
            "
          >
            Northlight turns raw product events into answers your whole team can
            act on — no SQL, no data ticket queue, no waiting until Thursday.
          </p>
        </div>

        {/* Hero actions */}
        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-3
            min-[641px]:w-auto
            min-[641px]:flex-row
          "
        >
          <a
            href="#start-free-trial"
            className={cn(
              buttonVariants({
                variant: "primary",
                size: "lg",
              }),
              "w-full min-[641px]:w-auto",
            )}
          >
            Start free trial
          </a>

          <a
            href="#book-demo"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "lg",
              }),
              "w-full min-[641px]:w-auto font-inter-semibold",
            )}
          >
            Book a demo
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* Trial reassurance */}
        <p
          className="
            mt-3
            font-inter-regular
            text-[14px]
            font-normal
            leading-[1.65]
            text-[#6A707F]
          "
        >
          Free 14-day trial · No credit card required
        </p>

        {/* Product image */}
        <div
          className="
            mt-12
            w-full
            min-[641px]:mt-16
            min-[901px]:mt-20
          "
        >
          <img
            src="/images/hero-dashboard.svg"
            fetchPriority="high"
            alt="Northlight product analytics dashboard showing user activity, conversion, and session metrics"
            className="
              mx-auto
              block
              w-full
              max-w-[960px]
              rounded-[16px]
              object-contain
              [filter:drop-shadow(0_24px_48px_rgba(10,16,36,0.12))]
            "
          />
        </div>
      </div>
    </section>
  );
}
