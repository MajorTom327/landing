import { renderToBuffer } from "@react-pdf/renderer";
import type { LoaderFunction } from "@remix-run/node";
import CvDocument from "./CvDocument";
import { pdf } from "remix-utils";

import zod from "zod";
import { i18n, supportedLanguages } from "~/services/i18n.server";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";

import Backend from "i18next-fs-backend";

import { isDevelopment } from "~/lib/isEnv";
import CvPart from "~/refs/CvPart";

import frTranslationCv from "~/../public/locales/fr/cv.json";
import enTranslationCv from "~/../public/locales/en/cv.json";

export const loader: LoaderFunction = async ({ request }) => {
  const locale = await i18n.getLocale(request);

  const url = new URL(request.url);

  const hidePart = url.searchParams.get("hide");
  const hidePartArray = zod
    .array(zod.nativeEnum(CvPart))
    .optional()
    .parse(hidePart ? hidePart.split(",") : []);


    const hideFooter = zod.coerce
      .boolean()
      .parse(url.searchParams.get("hideFooter"));

    await i18next
      .use(initReactI18next)
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
        resources: {
          fr: { cv: frTranslationCv },
          en: { cv: enTranslationCv },
        },
      });

    return renderToBuffer(
      <I18nextProvider i18n={i18next} defaultNS={"cv"}>
        <CvDocument hidePart={hidePartArray} hideFooter={hideFooter} />
      </I18nextProvider>
    ).then((buffer) => {
      return pdf(buffer);
    });
};
