"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 dark:border-white/5 dark:text-white"
        suppressHydrationWarning
      >
        <FiSun className="h-4 w-4" />
        <span>Light</span>
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/20 dark:border-white/5 dark:text-white"
    >
      {resolvedTheme === "light" ? (
        <>
          <FiMoon className="h-4 w-4 text-brand-secondary transition group-hover:rotate-6" />
          Dark
        </>
      ) : (
        <>
          <FiSun className="h-4 w-4 text-yellow-300 transition group-hover:rotate-6" />
          Light
        </>
      )}
    </button>
  );
}

