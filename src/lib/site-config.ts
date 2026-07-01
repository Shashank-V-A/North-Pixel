export const siteConfig = {
  name: "North Pixel",
  tagline: "Websites that drive growth",
  description:
    "I design and build fast, modern websites that help local businesses build trust, attract customers, and convert visitors into leads.",
  url: "https://northpixel.studio",
  locale: "en_IN",
  links: {
    whatsapp: "https://wa.me/919000000000",
    email: "mailto:hello@northpixel.studio",
    linkedin: "https://linkedin.com/in/northpixel",
    instagram: "https://instagram.com/northpixel",
  },
  contact: {
    email: "hello@northpixel.studio",
    phone: "+91 90000 00000",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;
