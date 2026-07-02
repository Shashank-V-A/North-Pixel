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
      "A residential interiors studio site with project galleries, service packages, and consultation booking for Bengaluru homeowners.",
    url: "https://sample-5-interior.vercel.app",
    image: "/projects/atelier-interiors.png",
    accent: "#3D3835",
    accentLight: "#F5F2EE",
  },
  {
    slug: "horizon-realty",
    title: "Horizon Realty",
    category: "Real Estate Consultant",
    description:
      "A Bengaluru property site with verified listings, neighbourhood guides, and free consultation booking for buyers and renters.",
    url: "https://sample-7-real-estate.vercel.app",
    image: "/projects/horizon-realty.png",
    accent: "#1E3A5F",
    accentLight: "#1A1A1A",
  },
];
