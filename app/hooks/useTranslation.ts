import { complement, isEmpty, pathOr, prop, propOr, split } from "rambda";
import { useMemo } from "react";
import enTranslation from "../../public/locales/en/common.json";
import frTranslation from "../../public/locales/fr/common.json";
import type { loader } from "~/root";
import type { Locale } from "~/types/refs";

import useMatchesData from "./useMatchesData";

type TranslationScope = unknown;
type TranslationConfig = Record<Locale, Record<string, TranslationScope>>;

// * Load here translations
const translations: TranslationConfig = {
  fr: frTranslation,
  en: enTranslation,
};

const isNotEmpty = complement(isEmpty);

export const useTranslation = (scope: string = "common") => {
  const data = useMatchesData<typeof loader>("root");
  const locale: Locale = propOr("en", "locale", data);

  const t = useMemo(() => {
    const currentTranslationScope = prop(locale, translations);

    return (key: string, options: Record<string, string> = {}): string => {
      const keyPath = split(".", key);
      const translation = pathOr(
        `Key '${key}' for locale '${locale}' is not defined !`,
        keyPath,
        currentTranslationScope
      );

      if (isNotEmpty(options)) {
        return Object.keys(options).reduce((acc, optionKey) => {
          const optionValue = prop(optionKey, options);
          const regex = new RegExp(`{{${optionKey}}}`, "g");

          return acc.replace(regex, optionValue);
        }, translation);
      }

      return translation;
    };
  }, [locale]);

  return { t };
};
