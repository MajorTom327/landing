import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { getInitialNamespaces } from "remix-i18next";
import { Duration } from "luxon";
import { supportedLanguages } from "./services/i18n.server";

const backends = [HttpBackend, LocalStorageBackend];

const cacheDuration = Duration.fromObject({ minutes: 1 });

function hydrate() {
  // @ts-ignore
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(ChainedBackend)
    .init({
      supportedLngs: supportedLanguages,
      fallbackLng: "fr",
      defaultNS: "translation",
      react: { useSuspense: true },
      ns: getInitialNamespaces(),
      backend: {
        backends,
        backendOptions: [
          { expirationTime: cacheDuration.toMillis() },
          { loadPath: "/locales/{{lng}}/{{ns}}.json" },
        ],
      },
      detection: {
        order: ["navigator", "htmlTag"],
        caches: ["localStorage", "cookie"],
        convertDetectedLanguage: (lng) => lng.split("-")[0],
      },
    })
    .then(() => {
      startTransition(() => {
        hydrateRoot(
          document,
          <StrictMode>
            <I18nextProvider i18n={i18next}>
              <RemixBrowser />
            </I18nextProvider>
          </StrictMode>
        );
      });
    });
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
