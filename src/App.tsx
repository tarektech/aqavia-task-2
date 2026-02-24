import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Header,
  HeroSection,
  AboutSection,
  MyRecentWorkSection,
  ProjectFormSection,
  FooterSection,
} from "./components";
import { useRtl } from "./hooks/use-rtl";
import "./index.css";

function App() {
  const { i18n } = useTranslation();
  const isRtl = useRtl();

  useEffect(() => {
    function syncDocumentlanguage(language: string) {
      document.documentElement.lang = language;
      document.documentElement.dir = i18n.dir(language);
    }

    syncDocumentlanguage(i18n.resolvedLanguage ?? i18n.language);

    i18n.on("languageChanged", syncDocumentlanguage);
    return () => {
      i18n.off("languageChanged", syncDocumentlanguage);
    };
  }, [i18n]);

  return (
    <div className="bg-(--color-1) container relative">
      <Header />

      <div
        className={`absolute top-0 h-full w-px bg-(--color-4) opacity-10 hidden md:block ${isRtl ? "right-[42%]" : "left-[42%]"}`}
      />
      <HeroSection />

      <AboutSection />

      <MyRecentWorkSection />

      <ProjectFormSection />

      <FooterSection />
    </div>
  );
}

export default App;
