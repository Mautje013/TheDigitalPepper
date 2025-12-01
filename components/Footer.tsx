"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useConsent } from "./ConsentProvider";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "nl";
  const { setShowBanner } = useConsent();

  const handleCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBanner(true);
  };

  const text = {
    nl: {
      disclaimer: "Disclaimer",
      privacy: "Privacy",
      cookiePolicy: "Cookiebeleid",
      changePreferences: "Cookievoorkeuren wijzigen",
    },
    eng: {
      disclaimer: "Disclaimer",
      privacy: "Privacy",
      cookiePolicy: "Cookie Policy",
      changePreferences: "Change cookie preferences",
    },
  };

  const t = text[locale as keyof typeof text] || text.nl;

  return (
    <footer className="w-full py-10 text-center text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border-t border-white/5 mt-20">
      <span>© 2025 The Digital Pepper</span>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          href={`/${locale}/disclaimer`}
          className="hover:text-red-400 transition"
        >
          {t.disclaimer}
        </Link>

        <Link
          href={`/${locale}/privacy-policy`}
          className="hover:text-red-400 transition"
        >
          {t.privacy}
        </Link>

        <Link
          href={`/${locale}/cookiebeleid`}
          className="hover:text-red-400 transition"
        >
          {t.cookiePolicy}
        </Link>

        <button
          onClick={handleCookiePreferences}
          className="hover:text-red-400 transition"
        >
          {t.changePreferences}
        </button>
      </nav>
    </footer>
  );
}


