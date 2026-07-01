import {
  Globe,
  Layout,
  RefreshCw,
  Wrench,
  MapPin,
  Search,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Business Websites",
    description:
      "Professional multi-page websites tailored to your brand, built to establish credibility and drive enquiries.",
    icon: Globe,
  },
  {
    title: "Landing Pages",
    description:
      "Focused, high-converting single pages designed to turn ad traffic and campaigns into qualified leads.",
    icon: Layout,
  },
  {
    title: "Website Redesigns",
    description:
      "Modernise outdated sites with improved design, faster performance, and a better mobile experience.",
    icon: RefreshCw,
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing updates, security patches, and content changes so your site stays current and reliable.",
    icon: Wrench,
  },
  {
    title: "Google Business Profile Setup",
    description:
      "Get found locally with a fully optimised Google Business Profile that drives calls and foot traffic.",
    icon: MapPin,
  },
  {
    title: "SEO-Ready Development",
    description:
      "Clean code, fast load times, and proper structure so your site is built to rank from day one.",
    icon: Search,
  },
];
