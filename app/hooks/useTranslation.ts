import { pathOr, prop, propOr, split } from "ramda";
import { useMemo } from "react";
import enTranslation from "~/i18n/en/translation.json";
import frTranslation from "~/i18n/fr/translation.json";
import type { loader } from "~/root";
import type { Locale } from "~/types/refs";

import useMatchesData from "./useMatchesData";

type TranslationScope = Object;
type TranslationConfig = Record<Locale, Record<string, TranslationScope>>;

// * Load here translations
const translations: TranslationConfig = {
  fr: frTranslation,
  en: enTranslation,
};

export const useTranslation = (scope: string = "translation") => {
  const data = useMatchesData<typeof loader>("root");
  const locale: Locale = propOr("en", "locale", data);

  const t = useMemo(() => {
    const currentTranslationScope = prop(locale, translations);

    return (key: string): string => {
      const keyPath = split(".", key);
      const translation = pathOr(
        `Key '${key}' for locale '${locale}' is not defined !`,
        keyPath,
        currentTranslationScope
      );

      return translation;
    };
  }, [locale]);

  return { t };
};
