"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import nl from "../locales/nl.json";
import en from "../locales/en.json";

type Locale = "nl" | "en";

type TFn = (key: string, fallback?: string) => string;

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TFn;
}>({
  locale: "nl",
  setLocale: () => {},
  t: () => "",
});

const dictionaries: Record<Locale, Record<string, any>> = {
  nl,
  en,
};

function getByKey(obj: Record<string, any>, key: string) {
  return key.split(".").reduce((o: any, k: string) => (o ? o[k] : undefined), obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("nl");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("site-locale");
      if (stored === "en" || stored === "nl") setLocaleState(stored);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("site-locale", locale);
    } catch (e) {}
    // update document lang attribute for accessibility/SEO
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "nl" ? "nl-NL" : "en-US";
    }
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t: TFn = (key, fallback = "") => {
    const dict = dictionaries[locale] || {};
    const val = getByKey(dict, key);
    if (typeof val === "string") return val;
    return fallback || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext).locale;
export const useSetLocale = () => useContext(LocaleContext).setLocale;
export const useT = () => useContext(LocaleContext).t;

export default LanguageProvider;
