import type { Metadata } from "next";
import { generateMetadata as seoMetadata } from "../../components/SEO";
import ContactClient from "./ContactClient";

export const metadata: Metadata = seoMetadata({
  title: "Contact",
  description: "Plan een vrijblijvend gesprek met TheDigitalPepper. We bespreken waar je nu staat, wat je doelen zijn en welke digitale oplossingen passen bij jouw business.",
  url: "https://thedigitalpepper.com/contact",
});

export default function Contact() {
  return <ContactClient />;
}
