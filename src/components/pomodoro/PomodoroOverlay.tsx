import * as styled from "./styles";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import { IoIosArrowForward } from "react-icons/io";
import { ThemeProvider } from "styled-components";

import { usePomodoro } from "../../hooks/usePomodoro";
import { usePomodoroTheme } from "../../hooks/usePomodoroTheme";
import ThemePicker from "./PomodoroChangeTheme";

type Props = {
  taskTitle: string;
  onClose: () => void;
};

export default function PomodoroOverlay({ taskTitle, onClose }: Props) {
  const pomodoro = usePomodoro(taskTitle);

  const { theme, setMode } = usePomodoroTheme();

  if (pomodoro.mode !== undefined) {
    setMode(pomodoro.mode);
  }

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemePicker mode={pomodoro.mode} />

      <styled.PomodoroWrapper>
        <styled.PomodoroCloseButton onClick={onClose}>
          Back <IoIosArrowForward size={30} style={{ marginLeft: 10 }} />
        </styled.PomodoroCloseButton>

        <styled.PomodoroContainer>
          <styled.PomodoroTask>
            <span style={{ marginBottom: 40, fontSize: 35 }}>
              {pomodoro.mode === "focus" ? "Focus time" : "Break time"}
            </span>
            <span style={{ fontSize: 45 }}>Task</span>
            <span style={{ fontSize: 40, marginTop: 20 }}>{taskTitle}</span>
          </styled.PomodoroTask>

          <styled.PomodoroTimer>
            {formatTime(pomodoro.remainingSeconds)}
          </styled.PomodoroTimer>

          <styled.PomodoroButton
            onClick={() => {
              if (!pomodoro.pomodoro) pomodoro.start();
              else if (pomodoro.isRunning) pomodoro.pause();
              else pomodoro.resume();
            }}
          >
            {!pomodoro.pomodoro
              ? "Start"
              : pomodoro.isRunning
              ? "Pause"
              : "Resume"}
          </styled.PomodoroButton>
        </styled.PomodoroContainer>

        <MusicPlayer />
      </styled.PomodoroWrapper>
    </ThemeProvider>
  );
}
