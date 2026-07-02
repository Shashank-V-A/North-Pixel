export const siteConfig = {
  name: "North Pixel",
  tagline: "Websites that drive growth",
  description:
    "I design and build fast, modern websites that help local businesses build trust, attract customers, and convert visitors into leads.",
  url: "https://northpixel.studio",
  locale: "en_IN",
  links: {
    email: "mailto:northpixelcreations@gmail.com",
    x: "https://x.com/northpixel",
    instagram: "https://instagram.com/northpixel",
  },
  contact: {
    email: "northpixelcreations@gmail.com",
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
