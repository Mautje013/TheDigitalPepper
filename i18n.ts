export const i18n = {
  defaultLocale: "nl",
  locales: ["nl", "eng"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

