import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip next.js internals & public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Check if pathname already starts with a valid locale
  const hasLocale = i18n.locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  );

  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/nl${pathname}`, request.url));
  }
}
