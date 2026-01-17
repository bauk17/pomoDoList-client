export type PomodoroState = {
  taskTitle: string;
  mode: "focus" | "break";
  status: "running" | "paused" | "finished";
  remainingSeconds: number;
};
