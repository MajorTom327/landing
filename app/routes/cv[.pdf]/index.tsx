import { renderToBuffer } from "@react-pdf/renderer";
import type { LoaderFunction } from "@remix-run/node";
import CvDocument from "./CvDocument";
import { pdf } from "remix-utils";
import path from "node:path";

import zod from "zod";
import { i18n, supportedLanguages } from "~/services/i18n.server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-fs-backend";

import { isDevelopment } from "~/lib/isEnv";
import CvPart from "~/refs/CvPart";

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request);

  const url = new URL(request.url);

  const hidePart = url.searchParams.get("hide");
  const hidePartArray = zod
    .array(zod.nativeEnum(CvPart))
    .optional()
    .parse(hidePart ? hidePart.split(",") : []);

  const loadPath = path.resolve(
    __dirname,
    "../public",
    "locales/{{lng}}/{{ns}}.json"
  );

  // @ts-ignore
  return i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
      debug: isDevelopment(),
      saveMissing: isDevelopment(),
      supportedLngs: supportedLanguages,
      lng: locale,
      fallbackLng: "en",
      defaultNS: "cv",
      keySeparator: false,
      react: { useSuspense: false },
      detection: {
        order: ["htmlTag"],
        caches: [],
      },

      backend: {
        loadPath: loadPath,
        addPath: loadPath.replace(".json", ".missing.json"),
      },
    })
    .then(() => {
      return renderToBuffer(
        <I18nextProvider i18n={i18next}>
          <CvDocument hidePart={hidePartArray} />
        </I18nextProvider>
      );
    })

    .then((buffer) => {
      return pdf(buffer);
    });
};
