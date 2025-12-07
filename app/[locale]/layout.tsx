import { ReactNode } from "react";
import "../globals.css";

export async function generateStaticParams() {
  return [{ locale: "nl" }, { locale: "eng" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params; // ← THIS FIXES THE BUILD ERROR

  const lang = locale === "eng" ? "en-GB" : "nl-NL";

  return (
    <html lang={lang}>
      <head>
      </head>
      <body data-locale={lang}>
        {children}
      </body>
    </html>
  );
}
