import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next";

export const supportedLanguages = ["fr", "en"];

export const i18n = new RemixI18Next({
  detection: {
    supportedLanguages,
    fallbackLanguage: "fr",
  },
  i18next: {
    backend: { loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json") },
  },
  backend: Backend,
});

export default i18n;
