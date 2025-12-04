import type { Metadata } from "next";
import { defaultMetadata, baseUrl } from "../../lib/metadata";
import ContactClient from "./ContactClient";

export const metadata: Metadata = (() => {
  const nlMetadata = defaultMetadata;
  return {
    title: `Contact | ${nlMetadata.siteName}`,
    description: "Plan een vrijblijvend gesprek met TheDigitalPepper. We bespreken waar je nu staat, wat je doelen zijn en welke digitale oplossingen passen bij jouw business.",
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
  };
})();

export default function Contact() {
  return <ContactClient />;
}
