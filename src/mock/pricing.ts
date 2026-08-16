export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  featured?: boolean;
  buttonLabel: string;
  buttonVariant: "primary" | "secondary";
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For small teams getting their first dashboards up.",
    monthlyPrice: 29,
    yearlyPrice: 23,
    buttonLabel: "Start free trial",
    buttonVariant: "secondary",
    features: [
      "Up to 100k events per month",
      "Unlimited dashboards and seats",
      "3 saved cohorts",
      "Email support",
    ],
  },
  {
    name: "Growth",
    description: "For product teams running weekly experiments.",
    monthlyPrice: 89,
    yearlyPrice: 71,
    featured: true,
    buttonLabel: "Start free trial",
    buttonVariant: "primary",
    features: [
      "Up to 1M events per month",
      "Everything in Starter",
      "Unlimited cohorts and funnels",
      "Slack and email alerts",
      "Priority support",
    ],
  },
  {
    name: "Scale",
    description: "For organisations that need control and compliance.",
    monthlyPrice: 249,
    yearlyPrice: 199,
    buttonLabel: "Talk to sales",
    buttonVariant: "secondary",
    features: [
      "Unlimited events",
      "Everything in Growth",
      "SSO and audit logs",
      "Regional data residency",
      "Dedicated success manager",
    ],
  },
];
