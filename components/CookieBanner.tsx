"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useConsent } from "./ConsentProvider";

export default function CookieBanner({ locale }: { locale?: string }) {
  const params = useParams();
  const currentLocale = (locale || (params.locale as string)) || "nl";
  const { setPreferences, setShowBanner } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [localPreferences, setLocalPreferences] = useState({
    analytics: false,
    marketing: false,
  });

  const text = {
    nl: {
      title: "Cookievoorkeuren",
      message: "Wij gebruiken cookies om je ervaring te verbeteren, onze website te analyseren en gepersonaliseerde content te tonen. Je kunt je voorkeuren beheren via de instellingen hieronder.",
      necessaryTitle: "Noodzakelijke cookies",
      necessaryDesc: "Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld.",
      analyticsTitle: "Analytische cookies",
      analyticsDesc: "Helpen ons begrijpen hoe bezoekers de website gebruiken.",
      marketingTitle: "Marketing cookies",
      marketingDesc: "Gebruikt voor gepersonaliseerde advertenties en tracking.",
      hideDetails: "Verberg details",
      managePreferences: "Voorkeuren beheren",
      accept: "Alles accepteren",
      decline: "Weigeren",
      save: "Voorkeuren opslaan",
      readMore: "Lees meer",
    },
    eng: {
      title: "Cookie Preferences",
      message: "We use cookies to improve your experience, analyze our website, and show personalized content. You can manage your preferences via the settings below.",
      necessaryTitle: "Essential cookies",
      necessaryDesc: "These cookies are essential for the website to function and cannot be disabled.",
      analyticsTitle: "Analytical cookies",
      analyticsDesc: "Help us understand how visitors use the website.",
      marketingTitle: "Marketing cookies",
      marketingDesc: "Used for personalized advertisements and tracking.",
      hideDetails: "Hide details",
      managePreferences: "Manage preferences",
      accept: "Accept all",
      decline: "Decline",
      save: "Save preferences",
      readMore: "Read more",
    },
  };

  const t = text[currentLocale as keyof typeof text] || text.nl;

  const handleAcceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleRejectAll = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const handleSavePreferences = () => {
    setPreferences({
      necessary: true,
      analytics: localPreferences.analytics,
      marketing: localPreferences.marketing,
    });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-black/90 backdrop-blur-sm border-t border-white/10 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Content */}
            <div className="flex-1 text-gray-300">
              <h3 className="text-lg font-semibold text-white mb-2">
                {t.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                {t.message}
              </p>

              {showDetails && (
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {t.necessaryTitle}
                    </h4>
                    <p className="text-gray-400">
                      {t.necessaryDesc}
                    </p>
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localPreferences.analytics}
                        onChange={(e) =>
                          setLocalPreferences({
                            ...localPreferences,
                            analytics: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500 focus:ring-2"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          {t.analyticsTitle}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {t.analyticsDesc}
                        </p>
                      </div>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={localPreferences.marketing}
                        onChange={(e) =>
                          setLocalPreferences({
                            ...localPreferences,
                            marketing: e.target.checked,
                          })
                        }
                        className="w-4 h-4 rounded border-gray-600 bg-gray-800 text-red-500 focus:ring-red-500 focus:ring-2"
                      />
                      <div>
                        <h4 className="font-semibold text-white">
                          {t.marketingTitle}
                        </h4>
                        <p className="text-gray-400 text-xs">
                          {t.marketingDesc}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-red-400 hover:text-red-300 transition"
                >
                  {showDetails ? t.hideDetails : t.managePreferences}
                </button>
                <Link 
                  href={`/${currentLocale}/cookiebeleid`}
                  className="text-sm text-red-400 hover:text-red-300 transition"
                >
                  {t.readMore}
                </Link>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {showDetails ? (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    {t.decline}
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    {t.save}
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    {t.decline}
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    {t.accept}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
