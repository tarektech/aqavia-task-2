const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center">
        <div className="Oswald-Font text-2xl font-bold py-6 px-4 md:py-12 md:px-24">
          <h1 className="text-(--color-4)">SaulDesign</h1>
        </div>
        <ul className="py-6 px-4 md:py-12 md:px-24 flex items-center gap-4 md:gap-12">
          {navlinks.map((link) => (
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
      </nav>

      <span className="block opacity-10 w-full h-px bg-(--color-4)" />
    </header>
  );
}
