import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./language-switcher";
import  {ThemeSwitchToggle}  from "./theme-switch-toggle";



export function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("header.home"), href: "/" },
    { name: t("header.about"), href: "/about" },
    { name: t("header.contact"), href: "/contact" },
  ];

  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="Oswald-Font text-2xl font-bold py-6 px-4 md:py-12 md:px-24">
          <h1 className="text-(--color-4)">SaulDesign</h1>
        </div>
        <ul className="py-6 px-4 md:py-12 md:px-24 flex items-center gap-4 md:gap-12">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-(--color-4) font-normal text-sm md:text-base"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <ThemeSwitchToggle />
          <LanguageSwitcher />
        </div>
      </nav>

      <span className="block opacity-10 w-full h-px bg-(--color-4)" />
    </header>
  );
}
