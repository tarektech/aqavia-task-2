import { Home, User, Phone } from "lucide-react";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About me", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Phone },
];

const socialLinks = [
  { name: "Facebook", href: "#", icon: SiFacebook },
  { name: "Instagram", href: "#", icon: SiInstagram },
  { name: "Twitter", href: "#", icon: SiX },
  { name: "YouTube", href: "#", icon: SiYoutube },
];

export function FooterSection() {
  return (
    <footer className="bg-(--color-1) relative">
      {/* Vertical center line */}
      <div className="absolute left-[42%] top-0  h-full w-px bg-(--color-4) opacity-10 hidden md:block" />
      <div className="container mx-auto py-8 md:py-16 px-4 md:px-24">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 mb-8 md:mb-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 text-(--color-4) hover:text-(--color-3) transition-colors"
            >
              <link.icon size={20} strokeWidth={1.5} />
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-(--color-2) flex items-center justify-center text-(--color-4) hover:bg-(--color-3) transition-colors"
              aria-label={social.name}
            >
              <social.icon size={18} className="md:w-5 md:h-5" />
            </a>
          ))}
        </div>

        {/* Terms and Privacy */}
        <div className="flex justify-center md:justify-end">
          <p className="text-(--color-4) opacity-70 text-xs md:text-sm">
            Terms of Service - Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
