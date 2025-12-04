import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../components/SEO";
import Hero from "../components/Hero";
import DigitalCompassExplainer from "../components/DigitalCompassExplainer";
import Features from "../components/Features";
import Concept from "../components/Concept";
import BrandWall from "../components/BrandWall";
import CustomApproach from "../components/CustomApproach";
import CompassCta from "../components/CompassCta";

export const metadata: Metadata = seoMetadata({
  title: "Home",
  description: "Wij begeleiden groeiende bedrijven naar helderheid, structuur en meetbare resultaten met The Digital Compass™. Data-gedreven marketing en IT-oplossingen voor mkb en startups.",
  url: "https://thedigitalpepper.com",
});

// Revalidate homepage every hour
export const revalidate = 3600;

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DigitalCompassExplainer />
      <Features />
      <Concept />
      <BrandWall />
      <CustomApproach />
      <CompassCta />
    </div>
  );
}
