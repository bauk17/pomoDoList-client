import type { PomodoroMode, PomodoroTheme } from "../types/PomodoroTheme";

export const defaultPomodoroThemes: Record<PomodoroMode, PomodoroTheme> = {
  focus: {
    background: "#205e8d",
    text: "#f8fafc",
    bar: "#22c55e",
  },
  break: {
    background: "#5c377e",
    text: "#ecfeff",
    bar: "#38bdf8",
  },
};
