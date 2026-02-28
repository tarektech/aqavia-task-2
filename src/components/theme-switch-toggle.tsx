import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const KEY = "theme";

export function ThemeSwitchToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem(KEY) === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("darkmode", dark);
    localStorage.setItem(KEY, dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark((toggle) => !toggle)}
      className="text-(--color-4) border border-(--color-4) rounded-full p-2 cursor-pointer"
      aria-label={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
