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
  const { locale } = await params;

  const lang = locale === "eng" ? "en-GB" : "nl-NL";

  return (
    <>
      {children}
    </>
  );
}
