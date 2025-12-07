import { ReactNode } from "react";
import Script from "next/script";
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6GKDDYJX49"
          strategy="afterInteractive"
        />
        <Script
          id="consent-debug"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('consent', 'update', {
                ad_storage: 'granted',
                analytics_storage: 'granted'
              });
            `,
          }}
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6GKDDYJX49');
            `,
          }}
        />
      </head>
      <body data-locale={lang}>
        {children}
      </body>
    </html>
  );
}
