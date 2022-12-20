import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import { RemixI18Next } from "remix-i18next";

export const supportedLanguages = ["fr"];

export let i18n = new RemixI18Next({
  detection: {
    supportedLanguages,
    fallbackLanguage: "fr",
  },
  i18next: {
    // @ts-ignore
    backend: { loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json") },
  },
  // @ts-ignore
  backend: Backend,
});

export default i18n;
