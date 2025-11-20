export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thedigitalpepper.com";

export const defaultMetadata = {
  siteName: "TheDigitalPepper",
  title: "TheDigitalPepper | Data-gedreven marketing en IT-oplossingen",
  description: "Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™. Data-gedreven marketing en IT-oplossingen voor mkb en startups.",
  keywords: [
    "digitale transformatie",
    "marketing automatisering",
    "IT oplossingen",
    "data-gedreven marketing",
    "cloud migratie",
    "digitale strategie",
    "AI workflows",
    "marketing analytics",
    "website ontwikkeling",
    "SEO",
    "digitale groei",
    "mbk",
    "startups",
    "Nederland"
  ],
  authors: [{ name: "TheDigitalPepper" }],
  creator: "TheDigitalPepper",
  publisher: "TheDigitalPepper",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: baseUrl,
    siteName: "TheDigitalPepper",
    title: "TheDigitalPepper | Data-gedreven marketing en IT-oplossingen",
    description: "Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™.",
    images: [
      {
        url: `${baseUrl}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "TheDigitalPepper",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheDigitalPepper | Data-gedreven marketing en IT-oplossingen",
    description: "Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™.",
    images: [`${baseUrl}/og-default.jpg`],
    creator: "@thedigitalpepper",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  verification: {
    // Voeg hier je verification codes toe
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

