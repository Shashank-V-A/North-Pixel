export type PricingTier = {
  name: string;
  price: string;
  description: string;
  idealFor: string;
  timeline: string;
  features: string[];
  popular?: boolean;
  cta: string;
};

export const websitePackages: PricingTier[] = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "A clean, professional online presence for businesses just getting started.",
    idealFor: "Cafés, freelancers, tutors, and small shops that need a simple, credible website.",
    timeline: "7 business days after content is received",
    features: [
      "Up to 3 pages (e.g. Home, Services, Contact)",
      "Mobile-friendly design for phones & tablets",
      "Contact form with email notifications",
      "WhatsApp click-to-chat button",
      "Google Maps location embed",
      "Basic on-page SEO (titles, descriptions, speed)",
      "1 round of design revisions",
      "14 days post-launch bug-fix support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "₹17,999",
    description: "A custom-built website designed to help local businesses win more enquiries.",
    idealFor: "Salons, clinics, retail stores, gyms, and growing businesses that need more pages and polish.",
    timeline: "14 business days after content is received",
    features: [
      "Up to 6 pages (Home, About, Services, Gallery, Contact, etc.)",
      "Custom design tailored to your brand colours & style",
      "WhatsApp, call, and email enquiry integration",
      "Google Maps, business hours & service listings",
      "Image gallery or testimonials section",
      "SEO-ready structure for local search visibility",
      "2 rounds of design revisions",
      "30 days post-launch bug-fix support",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "From ₹35,000",
    description: "Fully bespoke websites for businesses that need advanced features and flexibility.",
    idealFor: "Established brands, portfolios, multi-service businesses, or anyone needing a unique build.",
    timeline: "3–4 weeks — custom quote after discovery call",
    features: [
      "Unlimited pages based on your requirements",
      "Bespoke design system built around your brand",
      "Blog, portfolio, or booking-style sections",
      "Advanced SEO setup & performance optimisation",
      "Custom animations and interactive sections",
      "Priority support throughout the project",
      "3 rounds of revisions + milestone check-ins",
      "60 days post-launch support & handover walkthrough",
    ],
    cta: "Book a Call",
  },
];

export type MaintenanceTier = {
  name: string;
  price: string;
  description: string;
  idealFor: string;
  responseTime: string;
  features: string[];
};

export const maintenancePlans: MaintenanceTier[] = [
  {
    name: "Basic",
    price: "₹999/month",
    description: "Keep your site secure and online with essential upkeep.",
    idealFor: "Simple brochure sites that rarely need content changes.",
    responseTime: "Within 48 hours (business days)",
    features: [
      "Monthly security & dependency updates",
      "Up to 2 small content edits per month (text/image swaps)",
      "Uptime monitoring & downtime alerts",
      "Email support",
      "Does not include new pages or design changes",
    ],
  },
  {
    name: "Professional",
    price: "₹1,999/month",
    description: "Regular care for businesses that update their site every few weeks.",
    idealFor: "Active businesses updating offers, photos, or service details regularly.",
    responseTime: "Within 24 hours (business days)",
    features: [
      "Weekly automated backups",
      "Up to 5 content edits per month",
      "Quarterly performance & speed checks",
      "Priority email & WhatsApp support",
      "Minor layout tweaks (buttons, banners, spacing)",
      "Does not include full redesigns or new page builds",
    ],
  },
  {
    name: "Premium",
    price: "₹4,999/month",
    description: "Hands-off website management for businesses that want ongoing partnership.",
    idealFor: "Businesses that want a developer on call without hiring in-house.",
    responseTime: "Same-day for urgent issues",
    features: [
      "Daily backups with restore on request",
      "Unlimited small content changes",
      "Monthly performance & SEO health report",
      "WhatsApp priority support",
      "Add new sections or landing pages (1 per quarter)",
      "Seasonal banner or offer updates included",
    ],
  },
];

export const pricingClarity = {
  includedInAll: [
    "Mobile-responsive design tested on real devices",
    "Fast-loading, modern code (Next.js based builds)",
    "Contact/enquiry form setup",
    "Basic SEO foundations (meta tags, headings, sitemap)",
    "Deployment to your hosting — I handle the technical setup",
    "A walkthrough call so you know how to request future changes",
  ],
  notIncluded: [
    "Domain name registration (typically ₹500–₹1,200/year — I can guide you)",
    "Web hosting fees (typically ₹1,500–₹5,000/year depending on provider)",
    "Professional copywriting or photography (you provide content, or we quote add-ons)",
    "Logo design (unless agreed separately)",
    "Paid plugins, stock images, or third-party tool subscriptions",
  ],
  addOns: [
    { name: "Extra page", price: "From ₹2,500/page" },
    { name: "Logo design", price: "From ₹3,500" },
    { name: "Copywriting (per page)", price: "From ₹1,500" },
    { name: "Google Business Profile setup", price: "₹2,500 one-time" },
    { name: "Rush delivery (under 5 days)", price: "+20% on package price" },
  ],
  payment: {
    summary:
      "50% advance to start work · 50% before the site goes live. Premium projects can be split across milestones.",
    methods: "UPI or bank transfer — payment details shared after we agree on the project.",
  },
  location:
    "Based in Bangalore. I work with businesses across India via WhatsApp, video call, and email. In-person meetings in Bangalore can be arranged by appointment.",
};
