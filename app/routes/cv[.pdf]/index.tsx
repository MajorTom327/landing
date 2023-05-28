import { renderToBuffer } from "@react-pdf/renderer";
import type { LoaderFunction } from "@remix-run/node";
import CvDocument from "./CvDocument";
import { pdf } from "remix-utils";
import path from "node:path";



import { i18n, supportedLanguages } from "~/services/i18n.server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "../../../public/locales/en/cv.json";
import translationFr from "../../../public/locales/fr/cv.json";

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request);

  const loadPath = path.resolve(
    __dirname,
    "../public",
    "locales/{{lng}}/{{ns}}.json"
  );

  console.log("Resolved path is", loadPath);

  return i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      supportedLngs: supportedLanguages,
      lng: locale,
      fallbackLng: "fr",
      defaultNS: "translation",
      react: { useSuspense: true },
      resources: {
        en: { cv: translationEn },
        fr: { cv: translationFr },
      },
      detection: {
        order: ["htmlTag"],
        caches: [],
      },
    })
    .then(() => {
      return renderToBuffer(
        <I18nextProvider i18n={i18next}>
          <CvDocument />
        </I18nextProvider>
      );
    })

    .then((buffer) => {
      return pdf(buffer);
    });
};
