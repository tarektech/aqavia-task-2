import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { ar } from "./resources/ar";
import { de } from "./resources/de";
import { en } from "./resources/en";
import { es } from "./resources/es";
import { it } from "./resources/it";
import { tr } from "./resources/tr";

export const SUPPORTED_LANGUAGES = ["en", "ar", "tr", "de", "es", "it",] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = {
    en: "EN",
    ar: "AR",
    tr: "TR",
    de: "DE",
    es: "ES",
    it: "IT",
};

const resources = {
    en: { translation: en },
    ar: { translation: ar },
    tr: { translation: tr },
    de: { translation: de },
    es: { translation: es },
    it: { translation: it },
} as const;

if (!i18n.isInitialized) {
    i18n.use(LanguageDetector).use(initReactI18next).init({
        resources,
        fallbackLng: "en",
        supportedLngs: [...SUPPORTED_LANGUAGES],
        nonExplicitSupportedLngs: true,
        load: "languageOnly",
        debug: import.meta.env.DEV,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ["querystring", "localStorage", "navigator", "htmlTag"],
            caches: ["localStorage"],
        },
    });
}

export default i18n;