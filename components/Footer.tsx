"use client";

import Link from "next/link";
import { useConsent } from "./ConsentProvider";

export default function Footer() {
  const { setShowBanner } = useConsent();

  const handleCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBanner(true);
  };

  return (
    <footer className="w-full py-10 text-center text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border-t border-white/5 mt-20">
      <span>© 2025 The Digital Pepper</span>

      <nav className="flex items-center gap-4 sm:gap-6">
        <Link
          href="/disclaimer"
          className="hover:text-red-400 transition"
        >
          Disclaimer
        </Link>

        <Link
          href="/privacy-policy"
          className="hover:text-red-400 transition"
        >
          Privacy
        </Link>

        <Link
          href="/cookiebeleid"
          className="hover:text-red-400 transition"
        >
          Cookiebeleid
        </Link>

        <button
          onClick={handleCookiePreferences}
          className="hover:text-red-400 transition"
        >
          Cookievoorkeuren wijzigen
        </button>
      </nav>
    </footer>
  );
}


