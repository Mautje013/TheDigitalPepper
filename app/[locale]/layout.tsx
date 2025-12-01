import { ReactNode } from "react";
import { i18n, Locale } from "@/i18n";

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  
  // Set lang attribute synchronously before React hydration
  const langAttribute = locale === "eng" ? "en-GB" : "nl-NL";
  
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang = "${langAttribute}";`,
        }}
      />
      {children}
    </>
  );
}
