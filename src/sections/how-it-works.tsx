import { Separator } from "@/components/ui/separator";
import { howItWorksSteps } from "@/mock/how-it-works";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-[#F6F7FB]"
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          py-14
          min-[641px]:py-[72px]
          min-[901px]:px-6
          min-[901px]:py-24
        "
      >
        {/* Section heading */}
        <header className="mx-auto max-w-[720px] text-center">
          <p
            className="
              font-inter-semibold
              text-[13px]
              uppercase
              leading-[1.65]
              tracking-[0.08em]
              text-[#2B59FF]
            "
          >
            How it works
          </p>

          <h2
            id="how-it-works-heading"
            className="
              mt-3
              font-instrument-semibold
              text-[clamp(28px,20px+2.1vw,40px)]
              leading-[1.2]
              tracking-[-0.02em]
              text-[#0A1024]
            "
          >
            Live in an afternoon, not a quarter
          </h2>

          <p
            className="
              mt-4
              font-inter-regular
              text-[18px]
              leading-[1.65]
              text-[#525F72]
            "
          >
            Three steps, and none of them involve a migration plan.
          </p>
        </header>

        {/* Steps */}
        <ol
          className="
            mx-auto
            mt-10
            grid
            max-w-[1080px]
            grid-cols-1
            gap-10
            min-[901px]:mt-16
            min-[901px]:grid-cols-3
            min-[901px]:gap-x-0
            min-[901px]:gap-y-12
        "
        >
          {howItWorksSteps.map((step, index) => (
            <li
              key={step.number}
              className="
                relative
                min-w-0
                min-[901px]:px-6
                min-[901px]:[&:nth-child(3n+1)]:pl-0
                min-[901px]:[&:nth-child(3n)]:pr-0
            "
            >
              {/* Step number */}
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#E4E8EF]
                  bg-white
                  font-instrument-semibold
                  text-[14px]
                  leading-none
                  text-[#2B59FF]
                  shadow-[0_1px_2px_rgba(10,16,36,0.06)]
                "
              >
                {step.number}
              </div>

              {/* Step content */}
              <div className="mt-4">
                <h3
                  className="
                    font-instrument-semibold
                    text-[20px]
                    leading-[1.2]
                    tracking-[-0.02em]
                    text-[#0A1024]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    font-inter-regular
                    text-[16px]
                    leading-[1.65]
                    text-[#525F72]
                    min-[901px]:max-w-[320px]
                "
                >
                  {step.description}
                </p>
              </div>

              {/* Desktop connector */}
              {index < howItWorksSteps.length - 1 && index % 3 !== 2 && (
                <Separator
                  orientation="horizontal"
                  aria-hidden="true"
                  className="
                    absolute
                    left-14
                    right-6
                    top-4
                    hidden
                    border-0
                    border-t
                    border-dashed
                    border-[#E4E8EF]
                    bg-transparent
                    min-[901px]:block
                "
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
