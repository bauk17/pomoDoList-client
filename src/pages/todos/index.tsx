import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { GiTomato } from "react-icons/gi";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import * as styled from "./styles";
import PomodoroOverlay from "../../components/pomodoro/PomodoroOverlay";

export function Todo() {
  const { tasks, createTask, deleteTask, updateTask } = useTodos();
  const [pomodoroMode, setPomodoroMode] = useState(false);
  const [creatingTask, setCreatingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");
  function finishCreateTask() {
    const title = newTaskTitle.trim();

    if (!title) {
      setCreatingTask(false);
      setNewTaskTitle("");
      return;
    }

    createTask({
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    });

    setNewTaskTitle("");
    setCreatingTask(false);
  }

  function finishEdit(taskId: string) {
    const title = editingTitle.trim();

    if (!title) {
      cancelEdit();
      return;
    }

    updateTask(taskId, { title });

    cancelEdit();
  }

  function cancelEdit() {
    setEditingTaskId(null);
    setEditingTitle("");
  }

  return (
    <>
      {pomodoroMode && <PomodoroOverlay taskTitle={taskTitle} />}
      <styled.TodoWrapper>
        <styled.TodoContainer>
          <styled.TodoNewTask onClick={() => setCreatingTask(true)}>
            {!creatingTask ? (
              <div>
                <span style={{ marginLeft: 20 }}>+</span>
                <span style={{ marginLeft: 12 }}>Create new task</span>
              </div>
            ) : (
              <styled.TodoNewTaskInput
                autoFocus
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && newTaskTitle.trim()) {
                    finishCreateTask();
                  }
                  if (e.key === "Escape") {
                    setCreatingTask(false);
                    setNewTaskTitle("");
                  }
                }}
                onBlur={finishCreateTask}
              />
            )}
          </styled.TodoNewTask>
          {tasks.map((item, index) => (
            <styled.TodoTask key={index}>
              <styled.TodoItem
                onClick={() => {
                  setEditingTaskId(item.id);
                  setEditingTitle(item.title);
                }}
              >
                {editingTaskId === item.id ? (
                  <styled.TodoEditInput
                    autoFocus
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    onBlur={() => finishEdit(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") finishEdit(item.id);
                      if (e.key === "Escape") cancelEdit();
                    }}
                  />
                ) : (
                  item.title
                )}
              </styled.TodoItem>
              <styled.TodoTaskOptions>
                <styled.TodoTaskOptionButton>
                  <GiTomato
                    size={18}
                    color="red"
                    onClick={() => {
                      setPomodoroMode(true);
                      setTaskTitle(item.title);
                    }}
                  />
                </styled.TodoTaskOptionButton>
                <styled.TodoTaskOptionButton>
                  <MdOutlineDone size={18} />
                </styled.TodoTaskOptionButton>
                <styled.TodoTaskOptionButton>
                  <FaRegTrashCan
                    size={18}
                    onClick={() => deleteTask(item.id)}
                  />
                </styled.TodoTaskOptionButton>
              </styled.TodoTaskOptions>
            </styled.TodoTask>
          ))}
        </styled.TodoContainer>
      </styled.TodoWrapper>
    </>
  );
}
