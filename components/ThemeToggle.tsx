"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Pixel-styled light/dark theme toggle. Renders a tiny two-frame "sprite"
 * (sun / moon) inside a pixel-cornered button, consistent with the retro
 * cozy design system. Mounts guarded to avoid hydration mismatch since
 * next-themes only knows the real theme on the client.
 */
export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="w-8 h-8 pixel-corners-sm border-2 border-pixel-border bg-pixel-panel-2 inline-block" />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-8 h-8 flex items-center justify-center pixel-corners-sm border-2 border-pixel-border bg-pixel-panel-2 pixel-shadow-sm pixel-shadow-hover text-pixel-accent"
    >
      <span className="font-mono-pixel text-base leading-none select-none">
        {isDark ? "☀" : "☾"}
      </span>
    </button>
  );
};

export default ThemeToggle;
