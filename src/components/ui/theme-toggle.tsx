"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="theme-toggle-button text-xs border border-current/50 rounded-sm"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
    >
      <span>{resolvedTheme === "dark" ? "☼" : "☾"}</span>
    </button>
  );
}

export default ThemeToggle;
