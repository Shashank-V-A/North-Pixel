export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  accent: string;
  accentLight: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "maison-table",
    title: "Maison Table",
    category: "Restaurant",
    description:
      "An elegant dining experience with online reservations and a menu that tells the story behind every dish.",
    accent: "#1C1917",
    accentLight: "#F5F0EB",
    featured: true,
  },
  {
    slug: "lumiere-salon",
    title: "Lumière Salon",
    category: "Salon",
    description:
      "A refined beauty studio site with service booking, stylist profiles, and a gallery of transformations.",
    accent: "#4A3728",
    accentLight: "#FAF5F0",
    featured: true,
  },
  {
    slug: "bright-smile-dental",
    title: "Bright Smile Dental",
    category: "Dental Clinic",
    description:
      "A trustworthy clinic website with appointment scheduling, treatment information, and patient testimonials.",
    accent: "#0F4C5C",
    accentLight: "#E8F4F8",
    featured: true,
  },
  {
    slug: "forge-fitness",
    title: "Forge Fitness",
    category: "Fitness Studio",
    description:
      "A bold fitness brand with class schedules, trainer bios, and membership plans that drive sign-ups.",
    accent: "#DC2626",
    accentLight: "#FEF2F2",
  },
  {
    slug: "atelier-interiors",
    title: "Atelier Interiors",
    category: "Interior Designer",
    description:
      "A portfolio-driven site showcasing curated projects with editorial photography and inquiry flows.",
    accent: "#57534E",
    accentLight: "#F5F5F4",
  },
  {
    slug: "harbor-realty",
    title: "Harbor Realty",
    category: "Real Estate Consultant",
    description:
      "A professional property consultancy with listings, neighbourhood guides, and lead capture forms.",
    accent: "#1E3A5F",
    accentLight: "#EFF6FF",
  },
];
