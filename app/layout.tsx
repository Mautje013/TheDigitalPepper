import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StarryBackground from "../components/StarryBackground";
import ConsentProvider from "../components/ConsentProvider";
import LocaleLangSetter from "../components/LocaleLangSetter";
import { defaultMetadata } from "../lib/metadata";
import { getOrganizationSchema, getWebSiteSchema } from "../lib/structured-data";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  ...defaultMetadata,
  title: {
    default: defaultMetadata.title,
    template: `%s | ${defaultMetadata.siteName}`,
  },
};

export default function RootLayout({ 
  children
}: { 
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="nl-NL" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G6KDDYJX49"
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G6KDDYJX49');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.className} text-white antialiased relative`}>
        <LocaleLangSetter />
        <StarryBackground />
        <ConsentProvider>
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-[70vh]">{children}</main>
            <Footer />
          </div>
        </ConsentProvider>
      </body>
    </html>
  );
}

