export type PomodoroState = {
  taskTitle: string;
  mode: "focus" | "break" | "longbreak";
  status: "running" | "paused" | "finished";
  remainingSeconds: number;
};
