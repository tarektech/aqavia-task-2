import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  LANGUAGE_LABELS,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "../i18n/config";
import { useRtl } from "../hooks/use-rtl";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const isRtl = useRtl();
  const activeLanguage =
    ((i18n.resolvedLanguage ?? i18n.language)?.split(
      "-",
    )[0] as SupportedLanguage) || "en";

  const changeLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
    setOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-(--color-2) bg-(--color-2)/60 px-3 py-1.5 text-xs font-semibold text-(--color-4) transition-colors hover:bg-(--color-2)"
        aria-label={t("common.language")}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {LANGUAGE_LABELS[activeLanguage]}
        <ChevronDown
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className={`absolute top-full z-50 mt-1 min-w-4 rounded-lg border border-(--color-2) bg-(--color-1) py-1 shadow-lg ${isRtl ? "right-0" : "left-0"}`}
          >
            {SUPPORTED_LANGUAGES.map((language) => {
              const isActive = activeLanguage === language;
              return (
                <li key={language} role="option" aria-selected={isActive}>
                  <button
                    type="button"
                    onClick={() => changeLanguage(language)}
                    className={`w-full px-3 py-1.5 text-left text-xs font-medium transition-colors ${
                      isActive
                        ? "bg-(--color-3) text-(--color-1)"
                        : "text-(--color-4) hover:bg-(--color-2)"
                    }`}
                  >
                    {LANGUAGE_LABELS[language]}
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
