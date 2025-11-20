import { baseUrl } from "./metadata";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TheDigitalPepper",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Data-gedreven marketing en IT-oplossingen voor mkb en startups",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@thedigitalpepper.nl",
    },
    sameAs: [
      // Voeg hier je social media links toe
      // "https://www.linkedin.com/company/thedigitalpepper",
      // "https://twitter.com/thedigitalpepper",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TheDigitalPepper",
    url: baseUrl,
    description: "Data-gedreven marketing en IT-oplossingen voor mkb en startups",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

