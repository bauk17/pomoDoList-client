import { useContext } from "react";
import { PomodoroThemeContext } from "../context/PomodoroThemeContext";

export function usePomodoroTheme() {
  const ctx = useContext(PomodoroThemeContext);
  if (!ctx) throw new Error("usePomodoroTheme must be used inside provider");
  return ctx;
}
