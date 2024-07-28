import { i18next } from "~/.server/i18next";

import * as en from "../../public/locales/en";
import * as fr from "../../public/locales/fr";

// @ts-expect-error Bad typing
i18next.init({
  lng: "en", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en,
    fr,
  },
});
