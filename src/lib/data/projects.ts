export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  url?: string;
  image?: string;
  accent: string;
  accentLight: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "urbanteak-furnishings",
    title: "UrbanTeak Furnishings",
    category: "Furniture Store",
    description:
      "A furniture showroom site with room-based collections, product highlights, and clear pricing for Bangalore homeowners.",
    url: "https://sample-1-furniture.vercel.app",
    image: "/projects/urbanteak-furnishings.png",
    accent: "#5C4A32",
    accentLight: "#FAF7F2",
    featured: true,
  },
  {
    slug: "forgefit-bengaluru",
    title: "ForgeFit Bengaluru",
    category: "Fitness Centre",
    description:
      "A high-energy gym site with membership plans, class schedules, and free trial booking for Koramangala's fitness community.",
    url: "https://sample-2-gym.vercel.app",
    image: "/projects/forgefit-bengaluru.png",
    accent: "#E85D5D",
    accentLight: "#141414",
    featured: true,
  },
  {
    slug: "bright-smile-dental",
    title: "Bright Smile Dental",
    category: "Dental Clinic",
    description:
      "A Koramangala dental clinic site with treatment pricing, online booking, and trust signals for patients across Bengaluru.",
    url: "https://sample-3-dental.vercel.app",
    image: "/projects/bright-smile-dental.png",
    accent: "#0F4C5C",
    accentLight: "#E8F4F8",
    featured: true,
  },
  {
    slug: "blush-and-bloom-salon",
    title: "Blush & Bloom Salon",
    category: "Salon",
    description:
      "A boutique women's salon site with service menus, treatment packages, and online booking for Indiranagar clients.",
    url: "https://sample-4-salon.vercel.app",
    image: "/projects/blush-and-bloom-salon.png",
    accent: "#8B3A4A",
    accentLight: "#FFF5F3",
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
