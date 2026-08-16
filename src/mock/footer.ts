export interface FooterLinkGroup {
  title: string;
  links: string[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API reference", "Guides", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "DPA", "Security"],
  },
];
