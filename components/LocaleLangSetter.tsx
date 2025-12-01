"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { i18n } from "@/i18n";

export default function LocaleLangSetter() {
  const params = useParams();
  const locale = (params?.locale as string) || i18n.defaultLocale;

  useEffect(() => {
    // Validate locale against i18n config and set appropriate lang attribute
    const isValidLocale = i18n.locales.includes(locale as typeof i18n.locales[number]);
    const langAttribute = isValidLocale && locale === "eng" ? "en-GB" : "nl-NL";
    
    if (document.documentElement) {
      document.documentElement.lang = langAttribute;
    }
  }, [locale]);

  return null;
}

