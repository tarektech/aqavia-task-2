import aboutIllustration from "../assets/images/Group 62.png";
import doodleItems from "../assets/images/doodle items.png";
import floorbackground from "../assets/images/floor background.png";
import { useTranslation } from "react-i18next";
import { useRtl } from "../hooks/use-rtl";

export function AboutSection() {
  const { t } = useTranslation();
  const isRtl = useRtl();

  return (
    <section className="relative py-12 md:py-20 px-4 md:px-8 lg:px-30 mb-10 md:mb-20 bg-(--color-1) min-h-auto lg:min-h-[calc(100vh-100px)]">
      <div
        className={`absolute top-0 h-full w-px bg-(--color-4) opacity-10 hidden md:block ${isRtl ? "right-[42%]" : "left-[42%]"}`}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6 max-w-full lg:max-w-[420px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-4)">
            {t("about.title")} <span className="text-(--color-3)">{t("about.highlight")}</span>
          </h2>
          <p className="text-base md:text-lg text-(--color-4) leading-relaxed">
            {t("about.description")}{" "}
            <span className="font-bold cursor-pointer">{t("about.readMore")}</span>
          </p>
        </div>

        <div className="hidden lg:flex justify-center relative w-full max-w-[500px]">
          <img
            src={doodleItems}
            alt="Doodle background"
            className={`absolute top-0 w-[665px] h-[499px] object-cover ${isRtl ? "right-0" : "left-0"}`}
          />
          <img
            src={aboutIllustration}
            alt="About illustration"
            className={`absolute top-60 w-[412px] h-[353px] z-10 ${isRtl ? "right-0" : "left-0"}`}
          />
          <img
            src={floorbackground}
            alt="About illustration"
            className={`absolute top-146 w-[348px] h-[24px] z-10 ${isRtl ? "right-8" : "left-8"}`}
          />
        </div>
      </div>
      <span className="line-2 opacity-10" />
    </section>
  );
}
