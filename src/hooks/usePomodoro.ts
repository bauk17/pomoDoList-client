import { useEffect, useState } from "react";
import type { PomodoroState } from "../types/Pomodoro";

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;
const LONG_BREAK_TIME = 15 * 60;
const POMODOROS_BEFORE_LONG_BREAK = 4;

export function usePomodoro(taskTitle: string) {
  const [pomodoro, setPomodoro] = useState<PomodoroState | null>(null);
  const [, setCompletedPomodoros] = useState(0);

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

          if (isFocus) {
            setCompletedPomodoros((count) => {
              const nextCount = count + 1;

              const isLongBreak = nextCount % POMODOROS_BEFORE_LONG_BREAK === 0;

              setPomodoro(
                (current) =>
                  current && {
                    ...current,
                    mode: isLongBreak ? "longbreak" : "break",
                    remainingSeconds: isLongBreak
                      ? LONG_BREAK_TIME
                      : BREAK_TIME,
                    status: "running",
                  },
              );

              return nextCount;
            });

            return prev;
          }

          return {
            ...prev,
            mode: "focus",
            remainingSeconds: FOCUS_TIME,
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
      seconds,
    ).padStart(2, "0")}`;

    document.title =
      pomodoro.mode === "focus"
        ? `PomoDoList - ${formatted} – Focus ⏱️`
        : pomodoro.mode === "longbreak"
          ? `PomoDoList - ${formatted} – Long Break 🛌`
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
