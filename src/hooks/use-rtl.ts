import { useTranslation } from "react-i18next";

export function useRtl() {
  const { i18n } = useTranslation();
  const lng = i18n.resolvedLanguage ?? i18n.language ?? "en";
  return i18n.dir(lng) === "rtl";
}
