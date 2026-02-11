import type { PomodoroMode, PomodoroTheme } from "../types/PomodoroTheme";

export const defaultPomodoroThemes: Record<PomodoroMode, PomodoroTheme> = {
  focus: {
    background: "#205e8d",
    text: "#f8fafc",
    musicBar: "#ffffff",
    musicBarProgress: "#05458a",
    musicBarProgressButton: "#05458a",
  },
  break: {
    background: "#5c377e",
    text: "#ecfeff",
    musicBar: "#ffffff",
    musicBarProgress: "#c52267",
    musicBarProgressButton: "#c52267",
  },
  longbreak: {
    background: "#d5db63",
    text: "",
    musicBar: "#c52267",
    musicBarProgress: "#c52267",
    musicBarProgressButton: "#22c55e",
  },
};
