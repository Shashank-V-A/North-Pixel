export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const websitePackages: PricingTier[] = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for new businesses getting online for the first time.",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "1 round of revisions",
      "7-day delivery",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "₹17,999",
    description: "Our most popular package for growing local businesses.",
    features: [
      "Up to 6 pages",
      "Custom design & branding",
      "WhatsApp & email integration",
      "Google Maps embed",
      "SEO-ready structure",
      "2 rounds of revisions",
      "14-day delivery",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "From ₹35,000",
    description: "Fully custom websites for businesses that need more.",
    features: [
      "Unlimited pages",
      "Bespoke design system",
      "Blog or portfolio section",
      "Advanced SEO optimisation",
      "Performance optimisation",
      "Priority support",
      "Custom timeline",
    ],
    cta: "Book a Call",
  },
];

export type MaintenanceTier = {
  name: string;
  price: string;
  features: string[];
};

export const maintenancePlans: MaintenanceTier[] = [
  {
    name: "Basic",
    price: "₹999/month",
    features: [
      "Monthly security updates",
      "Up to 2 content changes",
      "Uptime monitoring",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹1,999/month",
    features: [
      "Weekly backups",
      "Up to 5 content changes",
      "Performance checks",
      "Priority email support",
      "Minor design tweaks",
    ],
  },
  {
    name: "Premium",
    price: "₹4,999/month",
    features: [
      "Daily backups",
      "Unlimited content changes",
      "Monthly performance report",
      "WhatsApp support",
      "New section additions",
      "SEO monitoring",
    ],
  },
];
