export type PomodoroMode = "focus" | "break";

export type PomodoroTheme = {
  background: string;
  text: string;
  bar: string;
};

export type UserPomodoroTheme = Partial<PomodoroTheme>;

export type UserPomodoroThemes = {
  focus?: UserPomodoroTheme;
  break?: UserPomodoroTheme;
};
