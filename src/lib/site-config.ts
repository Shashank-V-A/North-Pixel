function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (productionHost) {
    return productionHost.startsWith("http")
      ? productionHost.replace(/\/$/, "")
      : `https://${productionHost.replace(/\/$/, "")}`;
  }

  const deploymentHost = process.env.VERCEL_URL?.trim();
  if (deploymentHost) {
    return `https://${deploymentHost.replace(/\/$/, "")}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return "https://northpixel.ink";
}

export const siteConfig = {
  name: "North Pixel",
  tagline: "Websites that drive growth",
  description:
    "I design and build fast, modern websites that help local businesses build trust, attract customers, and convert visitors into leads.",
  url: getSiteUrl(),
  locale: "en_IN",
  links: {
    email: "mailto:northpixelcreations@gmail.com",
    x: "https://x.com/NorthPixel1806",
    instagram: "https://instagram.com/northpixel1806",
  },
  contact: {
    email: "northpixelcreations@gmail.com",
    x: "@NorthPixel1806",
    instagram: "@northpixel1806",
    whatsapp: [
      {
        display: "+91 70227 42719",
        href: "https://wa.me/917022742719",
      },
      {
        display: "+91 91085 61980",
        href: "https://wa.me/919108561980",
      },
    ],
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
