import { useState } from "react";
import * as styled from "./styles";

type Props = {
  onCreate: (title: string) => void;
};

export function TodoCreateTask({ onCreate }: Props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  function submit() {
    const trimmed = title.trim();
    if (!trimmed) return setOpen(false);

    onCreate(trimmed);
    setTitle("");
    setOpen(false);
  }

  return (
    <styled.TodoNewTask onClick={() => setOpen(true)}>
      {!open ? (
        <div>
          <span style={{ marginLeft: 20 }}>+</span>
          <span style={{ marginLeft: 12 }}>New task</span>
        </div>
      ) : (
        <styled.TodoNewTaskInput
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={submit}
          onKeyDown={(e) => {
            if (e.key === "Enter") submit();
            if (e.key === "Escape") setOpen(false);
          }}
        />
      )}
    </styled.TodoNewTask>
  );
}
