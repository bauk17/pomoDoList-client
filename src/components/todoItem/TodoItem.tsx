import { useState } from "react";
import type { Todo } from "../../types/todo";
import * as styled from "./styles";
import { MdOutlineDone } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";

type Props = {
  task: Todo;
  onEdit: (id: string, title: string) => void;
  onFinish: (id: string) => void;
  onDelete: (id: string) => void;
  onPomodoro: (title: string) => void;
};

export function TodoItem({
  task,
  onEdit,
  onFinish,
  onDelete,
  onPomodoro,
}: Props) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  return (
    <styled.TodoTask>
      <styled.TodoItem onClick={() => setEditing(true)}>
        {editing ? (
          <styled.TodoEditInput
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => {
              onEdit(task.id, title);
              setEditing(false);
            }}
          />
        ) : (
          task.title
        )}
      </styled.TodoItem>

      <styled.TodoTaskOptions>
        <styled.TodoTaskOptionButton>
          <img
            src="/tomate.svg"
            onClick={() => onPomodoro(task.title)}
            width={25}
            height={25}
          />
        </styled.TodoTaskOptionButton>

        <styled.TodoTaskOptionButton>
          <MdOutlineDone onClick={() => onFinish(task.id)} size={18} />
        </styled.TodoTaskOptionButton>
        <styled.TodoTaskOptionButton>
          <FaRegTrashCan onClick={() => onDelete(task.id)} size={18} />
        </styled.TodoTaskOptionButton>
      </styled.TodoTaskOptions>
    </styled.TodoTask>
  );
}
