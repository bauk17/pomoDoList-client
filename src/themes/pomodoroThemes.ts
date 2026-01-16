import type { PomodoroTheme } from "../types/PomodoroTheme";

export const pomodoroPresets: Record<"focus" | "break", PomodoroTheme[]> = {
  focus: [
    {
      background: "#205e8d",
      text: "#e5e7eb",
      bar: "#22c55e",
    },
    {
      background: "#5c377e",
      text: "#f8fafc",
      bar: "#38bdf8",
    },
    {
      background: "#4aa792",
      text: "#fafafa",
      bar: "#a78bfa",
    },
    {
      background: "#c986ad",
      text: "#fafafa",
      bar: "#a78bfa",
    },
  ],
  break: [
    {
      background: "#7ceed3",
      text: "#ecfeff",
      bar: "#34d399",
    },
    {
      background: "#8eb8fc",
      text: "#f1f5f9",
      bar: "#38bdf8",
    },
  ],
};
