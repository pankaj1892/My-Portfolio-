import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";

    // 👇 system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 transition"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}