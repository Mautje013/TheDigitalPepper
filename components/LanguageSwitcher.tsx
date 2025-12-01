"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const locale = params.locale as string;

  const otherLocale = locale === "nl" ? "eng" : "nl";

  const newPath = `/${otherLocale}${pathname.replace(`/${locale}`, "")}`;

  return (
    <Link className="ml-4 font-semibold" href={newPath}>
      {otherLocale.toUpperCase()}
    </Link>
  );
}

