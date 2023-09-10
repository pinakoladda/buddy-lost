import enlocale from "../locales/en.json";
import rulocale from "../locales/ru.json";

const LOCALES = {
  en: enlocale,
  ru: rulocale,
};

export const useI18n = () => {
  const locale =
    localStorage.getItem("lang") || navigator.language.split("-")[0];
  const i18n = (key) => {
    if (!LOCALES[locale]) {
      return LOCALES.en[key];
    }
    return LOCALES[locale][key];
  };
  return { i18n, locale };
};
