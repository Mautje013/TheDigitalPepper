"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import CookieBanner from "./CookieBanner";
import { initConsentMode, updateConsent, loadGA4, loadMetaPixel } from "../lib/loadScripts";

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface ConsentContextType {
  preferences: ConsentPreferences;
  setPreferences: (prefs: ConsentPreferences) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}

export default function ConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<ConsentPreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });
  const [showBanner, setShowBanner] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("cookieConsent");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setPreferencesState({
          necessary: true,
          analytics: parsed.analytics || false,
          marketing: parsed.marketing || false,
        });
        setShowBanner(false);
      } catch (e) {
        // Invalid data, show banner
        setShowBanner(true);
      }
    } else {
      // No saved preferences, show banner
      setShowBanner(true);
    }

    // Initialize consent mode
    initConsentMode();
    setIsInitialized(true);
  }, []);

  // Update scripts when preferences change
  useEffect(() => {
    if (!isInitialized) return;

    // Update consent mode
    updateConsent(preferences);

    // Load scripts based on consent
    if (preferences.analytics) {
      loadGA4();
    }

    if (preferences.marketing) {
      loadMetaPixel();
    }

    // Save to localStorage
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        analytics: preferences.analytics,
        marketing: preferences.marketing,
      })
    );
  }, [preferences, isInitialized]);

  const setPreferences = (prefs: ConsentPreferences) => {
    setPreferencesState(prefs);
    setShowBanner(false);
  };

  return (
    <ConsentContext.Provider
      value={{
        preferences,
        setPreferences,
        showBanner,
        setShowBanner,
      }}
    >
      {children}
      {showBanner && <CookieBanner />}
    </ConsentContext.Provider>
  );
}

