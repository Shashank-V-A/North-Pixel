import type { Metadata } from "next";
import { siteConfig } from "./site-config";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const pageDescription = description ?? siteConfig.description;
  const shareTitle = title
    ? pageTitle
    : `${siteConfig.name} — ${siteConfig.tagline}`;
  const shareDescription =
    description ??
    "Premium websites for businesses across India. Design, development & maintenance — packages from ₹9,999.";
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.whatsapp.map((item) => item.display),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Web Design",
      "Web Development",
      "Website Maintenance",
      "SEO",
    ],
    priceRange: "₹₹",
  };
}
