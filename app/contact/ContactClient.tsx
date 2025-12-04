"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useT } from "../../components/LanguageProvider";

export default function ContactClient() {
  const t = useT();

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
      />
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold">{t("contactPage.heading")}</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          {t("contactPage.sub")}
        </p>

        <div
          className="calendly-inline-widget mt-10 rounded-2xl border border-white/10 bg-white/[0.06]"
          data-url="https://calendly.com/mauricio-boekhoudoe/30min?text_color=ffffff&primary_color=f70808"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </>
  );
}

