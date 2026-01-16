import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { defaultPomodoroThemes } from "../themes/defaultPomodoroThemes";
import type { PomodoroTheme } from "../types/PomodoroTheme";

type Mode = "focus" | "break";

type PomodoroThemeContextType = {
  theme: PomodoroTheme;
  mode: Mode;
  setMode: (mode: Mode) => void;
  updateTheme: (mode: Mode, values: Partial<PomodoroTheme>) => void;
};

export const PomodoroThemeContext =
  createContext<PomodoroThemeContextType | null>(null);

export function PomodoroThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<Mode>("focus");

  const [userThemes, setUserThemes] = useState<
    Record<Mode, Partial<PomodoroTheme>>
  >(() => {
    const saved = localStorage.getItem("pomodoroThemes");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("pomodoroThemes", JSON.stringify(userThemes));
  }, [userThemes]);

  const theme: PomodoroTheme = {
    ...defaultPomodoroThemes[mode],
    ...(userThemes[mode] || {}),
  };

  function updateTheme(mode: Mode, values: Partial<PomodoroTheme>) {
    setUserThemes((prev) => ({
      ...prev,
      [mode]: {
        ...prev[mode],
        ...values,
      },
    }));
  }

  return (
    <PomodoroThemeContext.Provider
      value={{ theme, mode, setMode, updateTheme }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </PomodoroThemeContext.Provider>
  );
}
