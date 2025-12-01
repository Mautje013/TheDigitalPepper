import ServicesDutch from "./ServicesDutch";
import ServicesEnglish from "./ServicesEnglish";

export default async function Services({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <ServicesEnglish />;
  }
  return <ServicesDutch />;
}

