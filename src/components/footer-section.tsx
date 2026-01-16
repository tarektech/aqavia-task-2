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
      <div className="absolute left-1/2 top-0 h-full w-px bg-(--color-4) opacity-10" />

      <div className="container mx-auto py-16 px-24">
        {/* Navigation Links */}
        <nav className="flex justify-center gap-16 mb-12">
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
        <div className="flex justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 rounded-full bg-(--color-2) flex items-center justify-center text-(--color-4) hover:bg-(--color-3) transition-colors"
              aria-label={social.name}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>

        {/* Terms and Privacy */}
        <div className="flex justify-end">
          <p className="text-(--color-4) opacity-70 text-sm">
            Terms of Service - Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
