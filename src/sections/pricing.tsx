import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/mock/pricing";

import { useState } from "react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
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
            Pricing
          </p>

          <h2
            id="pricing-heading"
            className="
              mt-3
              font-instrument-semibold
              text-[clamp(28px,20px+2.1vw,40px)]
              leading-[1.2]
              tracking-[-0.02em]
              text-[#0A1024]
            "
          >
            Simple pricing that scales with you
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
            Every plan includes unlimited dashboards, unlimited seats and 12
            months of data history.
          </p>
        </header>

        {/* Billing switch */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
            min-[901px]:mt-12
          "
        >
          <span
            className={`
              font-inter-semibold
              text-[14px]
              leading-[1.65]
              ${!isYearly ? "text-[#0A1024]" : "text-[#6A707F]"}
            `}
          >
            Monthly
          </span>

          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle yearly billing"
            className="
              h-[30px]
              w-[52px]
            "
          />

          <span
            className={`
              font-inter-semibold
              text-[14px]
              leading-[1.65]
              ${isYearly ? "text-[#0A1024]" : "text-[#6A707F]"}
            `}
          >
            Yearly
          </span>

          <span
            className="
              rounded-full
              bg-[#FFE6DE]
              px-3
              py-1
              font-inter-semibold
              text-[12px]
              leading-[1.4]
              text-[#B93A17]
            "
          >
            Save 20%
          </span>
        </div>

        {/* Pricing cards */}
        <ul
          className="
            mx-auto
            mt-10
            grid
            max-w-[520px]
            grid-cols-1
            gap-6
            items-start
            min-[1025px]:max-w-none
            min-[1025px]:grid-cols-3
        "
        >
          {pricingPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <li key={plan.name} className="relative self-start">
                {plan.featured && (
                  <span
                    className="
                      absolute
                      left-8
                      top-0
                      z-10
                      -translate-y-1/2
                      rounded-full
                      bg-[#2B59FF]
                      px-3
                      py-1
                      font-inter-semibold
                      text-[12px]
                      leading-[1.4]
                      text-white
                    "
                  >
                    Most popular
                  </span>
                )}

                <Card
                  className={`${
                    plan.featured
                      ? `
                           border
                          border-[#2B59FF]
                          shadow-[0_12px_32px_rgba(10,16,36,0.08)]
                        `
                      : `
                          border-[#E4E8EF]
                          shadow-[0_1px_2px_rgba(10,16,36,0.06)]
                        `
                  }
                  `}
                >
                  <CardContent>
                    {/* Plan name */}
                    <h3
                      className="
                        font-instrument-bold
                        text-[20px]
                        leading-[1.2]
                        tracking-[-0.02em]
                        text-[#0A1024]
                      "
                    >
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-2
                        min-h-[52px]
                        font-inter-regular
                        text-[14px]
                        leading-[1.65]
                        text-[#525F72]
                      "
                    >
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mt-6">
                      <div className="flex items-baseline">
                        <span
                          className="
                            font-instrument-semibold
                            text-[20px]
                            leading-none
                            text-[#0A1024]
                          "
                        >
                          $
                        </span>

                        <span
                          key={`${plan.name}-${isYearly ? "yearly" : "monthly"}`}
                          className="
                            price-change
                            font-instrument-semibold
                            text-[48px]
                            leading-none
                            tracking-[-0.03em]
                            text-[#0A1024]
                          "
                        >
                          {price}
                        </span>

                        <span
                          className="
                            ml-1
                            font-inter-regular
                            text-[14px]
                            leading-[1.65]
                            text-[#525F72]
                          "
                        >
                          /month
                        </span>
                      </div>

                      <p
                        key={`${plan.name}-billing-${isYearly ? "yearly" : "monthly"}`}
                        className="
                        price-change
                          mt-2
                          font-inter-regular
                          text-[14px]
                          leading-[1.65]
                          text-[#6A707F]
                        "
                      >
                        {isYearly
                          ? "Billed yearly, per month"
                          : "Billed monthly"}
                      </p>
                    </div>

                    {/* CTA */}
                    <Button
                      variant={plan.buttonVariant}
                      className="mt-4 w-full"
                    >
                      {plan.buttonLabel}
                    </Button>

                    {/* Features */}
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="
                            flex
                            items-start
                            gap-2
                            font-inter-regular
                            text-[14px]
                            leading-[1.65]
                            text-[#525F72]
                          "
                        >
                          <Check
                            aria-hidden="true"
                            className="
                              mt-1
                              h-4
                              w-4
                              shrink-0
                              text-[#2B59FF]
                            "
                            strokeWidth={2}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
