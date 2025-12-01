import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../../../components/SEO";
import PrivacyPolicyDutch from "./PrivacyPolicyDutch";
import PrivacyPolicyEnglish from "./PrivacyPolicyEnglish";

export const metadata: Metadata = seoMetadata({
  title: "Privacyverklaring",
  description: "Lees hoe TheDigitalPepper jouw persoonsgegevens verwerkt en beschermt volgens AVG-richtlijnen.",
  url: "https://thedigitalpepper.com/privacy-policy",
  canonical: "https://thedigitalpepper.com/privacy-policy",
});

// Revalidate static pages every 24 hours
export const revalidate = 86400;

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <PrivacyPolicyEnglish />;
  }
  return <PrivacyPolicyDutch />;
}
