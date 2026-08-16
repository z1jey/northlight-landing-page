import type { LucideIcon } from "lucide-react";
import {
  Bell,
  ChartLine,
  Funnel,
  Network,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const features: Feature[] = [
  {
    title: "Live dashboards",
    description:
      "Metrics update as events arrive. Build a board once and watch it stay current without a scheduled refresh.",
    icon: ChartLine,
  },
  {
    title: "Funnel analysis",
    description:
      "Drop a funnel over any sequence of events and see which step is leaking users, broken down by segment.",
    icon: Funnel,
  },
  {
    title: "Cohorts that stick",
    description:
      "Save any filter as a reusable cohort, then reuse it across every report your team builds.",
    icon: UsersRound,
  },
  {
    title: "Alerts that matter",
    description:
      "Set thresholds on any metric and hear about it in Slack before a regression becomes a support queue.",
    icon: Bell,
  },
  {
    title: "Connects to your stack",
    description:
      "Native integrations for the tools you already run, plus a REST API and webhooks for everything else.",
    icon: Network,
  },
  {
    title: "Governed by default",
    description:
      "SSO, role-based access, audit logs and regional data residency come standard on every plan.",
    icon: ShieldCheck,
  },
];
