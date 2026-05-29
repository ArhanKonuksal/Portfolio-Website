import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const localeLoaders = {
  en: () => import("./translations/en.json"),
  nl: () => import("./translations/nl.json"),
  tr: () => import("./translations/tr.json"),
};

export const supportedLanguages = Object.keys(localeLoaders);

export async function loadLanguage(lng) {
  const language = lng?.split("-")[0] || "en";

  if (!localeLoaders[language]) {
    return loadLanguage("en");
  }

  if (!i18n.hasResourceBundle(language, "translation")) {
    const module = await localeLoaders[language]();
    i18n.addResourceBundle(language, "translation", module.default, true, true);
  }

  return language;
}

export async function initI18n() {
  const detector = new LanguageDetector(null, {
    order: ["localStorage", "navigator"],
    lookupLocalStorage: "i18nextLng",
    caches: ["localStorage"],
  });

  const detected = detector.detect();
  const preferred = (Array.isArray(detected) ? detected[0] : detected) || "en";

  await i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: supportedLanguages,
    resources: {},
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  const language = await loadLanguage(preferred);

  if (language !== i18n.language) {
    await i18n.changeLanguage(language);
  }
}

export default i18n;
