import AboutDutch from "./AboutDutch";
import AboutEnglish from "./AboutEnglish";

export default async function About({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <AboutEnglish />;
  }
  return <AboutDutch />;
}

