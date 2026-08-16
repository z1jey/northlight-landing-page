export const faqItems = [
  {
    question: "How long does setup actually take?",
    answer:
      "Most teams are sending events within the hour. The snippet is a single script tag, and our SDKs cover JavaScript, iOS, Android, Python, Ruby and Go. Historical backfill runs in the background and usually finishes overnight.",
  },
  {
    question: "Do I need a data engineer to run this?",
    answer:
      "No. Northlight reads your raw event stream directly and the schema editor is built for product managers. Teams that do have a data engineer usually hand them the API and stay out of each other's way.",
  },
  {
    question: "What counts as an event?",
    answer:
      "Any tracked user action — a page view, a button click, a purchase, a server-side signal. Identify calls and property updates do not count toward your monthly limit.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Any time. Upgrades apply immediately and we prorate the difference. Downgrades take effect at your next renewal, and your data stays intact either way.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "In the region you pick at signup: United States, European Union or Australia. Data never leaves that region, and Scale plans can add a second region for redundancy.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "Nothing breaks. Your dashboards stay read-only until you pick a plan, and we never delete data during the first 90 days after a trial expires.",
  },
] as const;
