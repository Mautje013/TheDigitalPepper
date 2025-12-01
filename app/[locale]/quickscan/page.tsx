import QuickscanDutch from "./QuickscanDutch";
import QuickscanEnglish from "./QuickscanEnglish";

export default async function Quickscan({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (locale === "eng") {
    return <QuickscanEnglish />;
  }
  return <QuickscanDutch />;
}

