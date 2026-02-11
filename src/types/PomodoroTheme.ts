export type PomodoroMode = "focus" | "break" | "longbreak";

export type PomodoroTheme = {
  background: string;
  text: string;
  musicBar: string;
  musicBarProgress: string;
  musicBarProgressButton: string;
};

export type UserPomodoroTheme = Partial<PomodoroTheme>;

export type UserPomodoroThemes = {
  focus?: UserPomodoroTheme;
  break?: UserPomodoroTheme;
  longbreak?: UserPomodoroTheme;
};
