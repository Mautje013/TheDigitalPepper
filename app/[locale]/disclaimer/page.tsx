import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../../../components/SEO";
import DisclaimerDutch from "./DisclaimerDutch";
import DisclaimerEnglish from "./DisclaimerEnglish";

export const metadata: Metadata = seoMetadata({
  title: "Disclaimer",
  description: "Lees de juridische disclaimer van TheDigitalPepper over verantwoordelijkheden en beperkingen.",
  url: "https://thedigitalpepper.com/disclaimer",
  canonical: "https://thedigitalpepper.com/disclaimer",
});

// Revalidate static pages every 24 hours
export const revalidate = 86400;

export default async function Disclaimer({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <DisclaimerEnglish />;
  }
  return <DisclaimerDutch />;
}
