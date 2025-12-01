import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../../components/SEO";
import HomeDutch from "./HomeDutch";
import HomeEnglish from "./HomeEnglish";

export const metadata: Metadata = seoMetadata({
  title: "Home",
  description: "Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™. Data-gedreven marketing en IT-oplossingen voor mkb en startups.",
  url: "https://thedigitalpepper.com",
});

// Revalidate homepage every hour
export const revalidate = 3600;

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <HomeEnglish />;
  }
  return <HomeDutch />;
}
