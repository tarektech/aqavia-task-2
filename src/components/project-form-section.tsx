import { Keyboard, Mail, Send } from "lucide-react";
import climbingStairs from "../assets/images/Group 2372.png";
import curlyArrow from "../assets/images/Vector 186.png";
import { useTranslation } from "react-i18next";
import { useRtl } from "../hooks/use-rtl";

export function ProjectFormSection() {
  const { t } = useTranslation();
  const isRtl = useRtl();

  return (
    <section className="bg-(--color-1) py-12 md:py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div
        className={`absolute top-0 h-full w-px bg-(--color-4) opacity-10 hidden md:block -z-10 lg:z-10 ${isRtl ? "right-[42%]" : "left-[42%]"}`}
      />
      <div
        className={`absolute top-8 z-10 rotate-[-20deg] hidden md:block ${isRtl ? "left-[45%]" : "right-[45%]"}`}
      >
        <Keyboard size={80} color="#00ADB5" strokeWidth={1.5} />
      </div>

      <div
        className={`absolute bottom-16 z-10 rotate-15 hidden md:block ${isRtl ? "left-16" : "right-16"}`}
      >
        <Mail size={60} color="#00ADB5" strokeWidth={1.5} />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        <div className="flex-1 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--color-4) Oswald-Font leading-tight">
            {t("contact.titleLine1")}
            <br />
            <span className="text-(--color-3)">{t("contact.titleLine2")}</span>
          </h2>

          <img
            src={curlyArrow}
            alt=""
            className={`hidden md:block absolute top-40 w-18 -rotate-32 ${isRtl ? "right-0" : "left-0"}`}
          />

          <div
            className={`-mt-10 flex justify-center ms-30 ${isRtl ? "lg:justify-end" : "lg:justify-start"}`}
          >
            <img
              src={climbingStairs}
              alt={t("contact.climbingIllustrationAlt")}
              className="w-64 h-auto"
            />
          </div>
        </div>

        {/* Right side - Contact form */}
        <div className="flex-1 w-full max-w-xl">
          <form className="space-y-6">
            {/* Name and Email row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-(--color-4) font-semibold mb-2 text-sm"
                >
                  {t("contact.nameLabel")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-(--color-4) font-semibold mb-2 text-sm"
                >
                  {t("contact.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-(--color-4) font-semibold mb-2 text-sm"
              >
                {t("contact.messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={t("contact.messagePlaceholder")}
                rows={8}
                className="w-full bg-(--color-2) text-(--color-4) placeholder:text-gray-500 rounded-lg px-4 py-3 border border-transparent focus:border-(--color-3) focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="bg-(--color-3) text-(--color-1) font-semibold px-8 py-3 rounded-full flex items-center gap-3 hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("contact.sendMessage")}
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
