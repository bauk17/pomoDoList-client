import { useEffect, useState } from "react";
import type { PomodoroState } from "../types/Pomodoro";

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export function usePomodoro(taskTitle: string) {
  const [pomodoro, setPomodoro] = useState<PomodoroState | null>(null);

  function start() {
    setPomodoro({
      taskTitle,
      mode: "focus",
      status: "running",
      remainingSeconds: FOCUS_TIME,
    });
  }

  function pause() {
    setPomodoro((p) => p && { ...p, status: "paused" });
  }

  function resume() {
    setPomodoro((p) => p && { ...p, status: "running" });
  }

  function reset() {
    setPomodoro(null);
  }

  useEffect(() => {
    if (!pomodoro || pomodoro.status !== "running") return;

    const interval = setInterval(() => {
      setPomodoro((prev) => {
        if (!prev) return null;

        if (prev.remainingSeconds <= 1) {
          const isFocus = prev.mode === "focus";

          return {
            ...prev,
            mode: isFocus ? "break" : "focus",
            remainingSeconds: isFocus ? BREAK_TIME : FOCUS_TIME,
            status: "running",
          };
        }

        return {
          ...prev,
          remainingSeconds: prev.remainingSeconds - 1,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [pomodoro]);

  useEffect(() => {
    if (!pomodoro) {
      return;
    }

    const minutes = Math.floor(pomodoro.remainingSeconds / 60);
    const seconds = pomodoro.remainingSeconds % 60;

    const formatted = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;

    document.title =
      pomodoro.mode === "focus"
        ? `PomoDoList - ${formatted} – Focus ⏱️`
        : `PomoDoList - ${formatted} – Break ☕`;

    return () => {
      document.title = "PomoDoList";
    };
  }, [pomodoro, pomodoro?.remainingSeconds]);

  return {
    pomodoro,
    mode: pomodoro?.mode ?? "focus",
    remainingSeconds: pomodoro?.remainingSeconds ?? FOCUS_TIME,
    isRunning: pomodoro?.status === "running",
    start,
    pause,
    resume,
    reset,
  };
}
