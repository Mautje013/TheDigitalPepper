import DigitalCompassDutch from "./DigitalCompassDutch";
import DigitalCompassEnglish from "./DigitalCompassEnglish";

export default async function DigitalCompass({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <DigitalCompassEnglish />;
  }
  return <DigitalCompassDutch />;
}

