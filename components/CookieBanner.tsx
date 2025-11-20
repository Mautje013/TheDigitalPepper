"use client";

import { useState } from "react";
import { useConsent } from "./ConsentProvider";

export default function CookieBanner() {
  const { setPreferences, setShowBanner } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [localPreferences, setLocalPreferences] = useState({
    analytics: false,
    marketing: false,
  });

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
                Cookievoorkeuren
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                Wij gebruiken cookies om je ervaring te verbeteren, onze website te analyseren en gepersonaliseerde content te tonen. 
                Je kunt je voorkeuren beheren via de instellingen hieronder.
              </p>

              {showDetails && (
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Noodzakelijke cookies
                    </h4>
                    <p className="text-gray-400">
                      Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld.
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
                          Analytische cookies
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Helpen ons begrijpen hoe bezoekers de website gebruiken.
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
                          Marketing cookies
                        </h4>
                        <p className="text-gray-400 text-xs">
                          Gebruikt voor gepersonaliseerde advertenties en tracking.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-sm text-red-400 hover:text-red-300 transition mt-2"
              >
                {showDetails ? "Verberg details" : "Voorkeuren beheren"}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {showDetails ? (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    Weigeren
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    Voorkeuren opslaan
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    Weigeren
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition text-sm whitespace-nowrap"
                  >
                    Alles accepteren
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

