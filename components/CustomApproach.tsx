"use client";

import ApproachComparison from "./ApproachComparison";

export default function CustomApproach({ locale = "nl" }: { locale?: string }) {
  return <ApproachComparison locale={locale} />;
}
