import enLocale from "../locales/en.json";
import ruLocale from "../locales/ru.json";

const LOCALES = {
  en: enLocale,
  ru: ruLocale,
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

  return { i18n };
};
