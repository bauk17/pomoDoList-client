import { useEffect, useState } from "react";
import * as styled from "./styles";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import { lofiTracks } from "../../data/lofiTracks";

type Props = {
  taskTitle: string;
};

type PomodoroState = {
  taskTitle: string;
  mode: "focus" | "break";
  status: "running" | "paused" | "finished";
  remainingSeconds: number;
};

export default function PomodoroOverlay({ taskTitle }: Props) {
  const [pomodoro, setPomodoro] = useState<PomodoroState | null>(null);

  function startPomodoro() {
    setPomodoro({
      taskTitle: taskTitle,
      mode: "focus",
      status: "running",
      remainingSeconds: 25 * 60,
    });
  }

  function pausePomodoro() {
    setPomodoro((p) => p && { ...p, status: "paused" });
  }

  function resumePomodoro() {
    setPomodoro((p) => p && { ...p, status: "running" });
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  useEffect(() => {
    if (!pomodoro || pomodoro.status !== "running") return;

    const interval = setInterval(() => {
      setPomodoro((prev) => {
        if (!prev) return null;

        if (pomodoro.mode == "break") alert("break");

        if (prev.remainingSeconds <= 1) {
          const isFocus = prev.mode === "focus";

          return {
            ...prev,
            mode: isFocus ? "break" : "focus",
            remainingSeconds: isFocus ? 5 * 60 : 25 * 60,
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
  }, [pomodoro?.status]);

  return (
    <>
      <styled.PomodoroWrapper>
        <styled.PomodoroContainer>
          <styled.PomodoroTask>
            <span style={{ marginBottom: 40, fontSize: 25 }}>
              {pomodoro?.mode === "focus" ? "Focus time" : "Break time"}
            </span>
            <span style={{ fontSize: 60 }}>Task</span>
            <span style={{ fontSize: 40, marginTop: 20 }}>{taskTitle}</span>
          </styled.PomodoroTask>
          <styled.PomodoroTimer>
            {pomodoro ? formatTime(pomodoro.remainingSeconds) : "25:00"}
          </styled.PomodoroTimer>
          <styled.PomodoroButton
            onClick={() => {
              if (!pomodoro) startPomodoro();
              else if (pomodoro.status === "running") pausePomodoro();
              else resumePomodoro();
            }}
          >
            {!pomodoro
              ? "Start"
              : pomodoro.status === "running"
              ? "Pause"
              : "Resume"}
          </styled.PomodoroButton>
        </styled.PomodoroContainer>
        <MusicPlayer />
      </styled.PomodoroWrapper>
    </>
  );
}
