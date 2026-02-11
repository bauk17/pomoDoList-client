import type { PomodoroTheme } from "../types/PomodoroTheme";

export const pomodoroPresets: Record<
  "focus" | "break" | "longbreak",
  PomodoroTheme[]
> = {
  focus: [
    {
      background: "#205e8d",
      text: "#e5e7eb",
      musicBar: "#ffffff",
      musicBarProgress: "#05458a",
      musicBarProgressButton: "#05458a",
    },
    {
      background: "#5c377e",
      text: "#f8fafc",
      musicBar: "#ffffff",
      musicBarProgress: "#c52267",
      musicBarProgressButton: "#c52267",
    },
    {
      background: "#4aa792",
      text: "#fafafa",
      musicBar: "#ffffff",
      musicBarProgress: "#3e6c60",
      musicBarProgressButton: "#3e6c60",
    },
    {
      background: "#c986ad",
      text: "#fafafa",
      musicBar: "#ffffff",
      musicBarProgress: "#966d90",
      musicBarProgressButton: "#966d90",
    },
  ],
  break: [
    {
      background: "#5c377e",
      text: "#ecfeff",
      musicBar: "#ffffff",
      musicBarProgress: "#c52267",
      musicBarProgressButton: "#c52267",
    },
    {
      background: "#428750",
      text: "#ecfeff",
      musicBar: "#ffffff",
      musicBarProgress: "#76be86",
      musicBarProgressButton: "#76be86",
    },
    {
      background: "#5e3d4a",
      text: "#f1f5f9",
      musicBar: "#ffffff",
      musicBarProgress: "#ab6983",
      musicBarProgressButton: "#ab6983",
    },
  ],
  longbreak: [
    {
      background: "#853e48",
      text: "#ecfeff",
      musicBar: "#ffffff",
      musicBarProgress: "#5a1922",
      musicBarProgressButton: "#5a1922",
    },
    {
      background: "#04677b",
      text: "#f1f5f9",
      musicBar: "#ffffff",
      musicBarProgress: "#023742",
      musicBarProgressButton: "#023742",
    },
    {
      background: "#4b578d",
      text: "#f1f5f9",
      musicBar: "#ffffff",
      musicBarProgress: "#232a47",
      musicBarProgressButton: "#232a47",
    },
    {
      background: "#2a1f3a",
      text: "#f1f5f9",
      musicBar: "#ffffff",
      musicBarProgress: "#190d2a",
      musicBarProgressButton: "#190d2a",
    },
  ],
};
