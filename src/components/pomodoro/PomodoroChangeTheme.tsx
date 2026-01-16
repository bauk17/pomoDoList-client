import { useState } from "react";
import { pomodoroPresets } from "../../themes/pomodoroThemes";
import { usePomodoroTheme } from "../../hooks/usePomodoroTheme";
import * as styled from "./stylesChangeTheme";

type Props = {
  mode: "focus" | "break";
};

export default function ThemePicker({ mode }: Props) {
  const { theme, updateTheme, setMode } = usePomodoroTheme();
  const [open, setOpen] = useState(false);

  return (
    <styled.Wrapper>
      <styled.CurrentColor
        background={theme.background}
        onClick={() => {
          setMode(mode);
          setOpen((v) => !v);
        }}
      />

      {open && (
        <styled.Palette>
          {pomodoroPresets[mode].map((preset, index) => (
            <styled.ColorOption
              key={index}
              background={preset.background}
              onClick={() => {
                updateTheme(mode, preset);
                setOpen(false);
              }}
            />
          ))}
        </styled.Palette>
      )}
    </styled.Wrapper>
  );
}
