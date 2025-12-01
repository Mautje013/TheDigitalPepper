import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../../../components/SEO";
import CookiebeleidDutch from "./CookiebeleidDutch";
import CookiebeleidEnglish from "./CookiebeleidEnglish";

export const metadata: Metadata = seoMetadata({
  title: "Cookiebeleid",
  description: "Bekijk welke cookies TheDigitalPepper gebruikt en hoe jij jouw voorkeuren beheert.",
  url: "https://thedigitalpepper.com/cookiebeleid",
  canonical: "https://thedigitalpepper.com/cookiebeleid",
});

// Revalidate static pages every 24 hours
export const revalidate = 86400;

export default async function Cookiebeleid({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <CookiebeleidEnglish />;
  }
  return <CookiebeleidDutch />;
}
