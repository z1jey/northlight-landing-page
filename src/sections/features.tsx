import { features } from "@/mock/features";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="bg-white"
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
            Features
          </p>

          <h2
            id="features-heading"
            className="
              mt-3
              font-instrument-semibold
              text-[clamp(28px,20px+2.1vw,40px)]
              leading-[1.2]
              tracking-[-0.02em]
              text-[#0A1024]
            "
          >
            Everything you need to understand your users
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              font-inter-regular
              text-[18px]
              leading-[1.65]
              text-[#525F72]
            "
          >
            One place for the questions product teams ask every week — and the
            ones they only think to ask once something breaks.
          </p>
        </header>

        {/* Feature cards */}
        <ul
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            min-[641px]:mt-16
            min-[641px]:grid-cols-2
            min-[1025px]:grid-cols-3
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <li key={feature.title}>
                <article
                  className="
                    h-full
                    rounded-[16px]
                    border
                    border-[#E4E8EF]
                    bg-white
                    p-6
                    transition-all
                    duration-200
                    ease-[cubic-bezier(0.4,0,0.2,1)]
                    hover:-translate-y-0.5
                    hover:border-[#E4EAFF]
                    hover:shadow-[0_4px_16px_rgba(10,16,36,0.06)]
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[12px]
                      bg-[#E4EAFF]
                      text-[#2B59FF]
                    "
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-[22px] w-[22px]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <h3
                      className="
                        font-instrument-semibold
                        text-[20px]
                        leading-[1.2]
                        tracking-[-0.02em]
                        text-[#0A1024]
                      "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        font-inter-regular
                        text-[16px]
                        leading-[1.65]
                        text-[#525F72]
                      "
                    >
                      {feature.description}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
