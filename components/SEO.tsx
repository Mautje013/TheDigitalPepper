import type { Metadata } from "next";
import { defaultMetadata, baseUrl } from "../lib/metadata";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  noindex,
  nofollow,
  canonical,
}: SEOProps = {}): Metadata {
  const finalTitle = title
    ? `${title} | ${defaultMetadata.siteName}`
    : defaultMetadata.title;

  const finalDescription = description || defaultMetadata.description;
  const finalUrl = url || baseUrl;
  const finalImage = image || `${baseUrl}/og-default.jpg`;
  const finalCanonical = canonical || finalUrl;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords || defaultMetadata.keywords,
    alternates: {
      canonical: finalCanonical,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

