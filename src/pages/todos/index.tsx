import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/useTodos";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineDone } from "react-icons/md";
import * as styled from "./styles";
import PomodoroOverlay from "../../components/pomodoro/PomodoroOverlay";
import { TodoNavBar } from "../../components/todoNavbar/TodoNavBar";
import { PomodoListInfo } from "../../components/info/PomoDoListInfo";
import { FirstPomoDoList } from "../../components/onboarding/OnboardingModal";
import { useTodoModals } from "../../hooks/useTodoModals";
import { TodoCreateTask } from "../../components/todoCreateTask/TodoCreateTask";
import { TodoItem } from "../../components/todoItem/TodoItem";

/* export function Todo() {
  const { tasks, createTask, deleteTask, updateTask, finishTask } = useTodos();
  const [infoOpen, setInfoOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [pomodoroMode, setPomodoroMode] = useState(false);
  const [creatingTask, setCreatingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState("");

  useEffect(() => {
    const hasSeenInfo = localStorage.getItem("hasSeenInfo");
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");

    if (!hasSeenInfo) {
      setInfoOpen(true);
      return;
    }

    if (hasSeenInfo && !hasSeenTutorial && !infoOpen) {
      setOnboardingOpen(true);
    }
  }, [infoOpen]);
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

  function closePomodoro() {
    setPomodoroMode(false);
    setTaskTitle("");
  }

  return (
    <>
      {pomodoroMode && (
        <PomodoroOverlay taskTitle={taskTitle} onClose={closePomodoro} />
      )}

      {infoOpen && <PomodoListInfo onClose={() => setInfoOpen(false)} />}
      {onboardingOpen && (
        <FirstPomoDoList onClose={() => setOnboardingOpen(false)} />
      )}
      <TodoNavBar
        onInfoClick={() => setInfoOpen(true)}
        howToUse={() => setOnboardingOpen(true)}
      />

      <styled.TodoWrapper>
        <styled.TodoContainer>
          <styled.TodoNewTask onClick={() => setCreatingTask(true)}>
            {!creatingTask ? (
              <div>
                <span style={{ marginLeft: 20 }}>+</span>
                <span style={{ marginLeft: 12 }}>New task</span>
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
            <styled.TodoTask key={item.id}>
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
                  <img
                    src="/tomate.svg"
                    alt=""
                    width={20}
                    height={20}
                    onClick={() => {
                      setPomodoroMode(true);
                      setTaskTitle(item.title);
                    }}
                  />
                </styled.TodoTaskOptionButton>
                <styled.TodoTaskOptionButton>
                  <MdOutlineDone
                    size={18}
                    onClick={() => finishTask(item.id)}
                  />
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
} */

export function Todo() {
  const { tasks, createTask, deleteTask, updateTask, finishTask } = useTodos();
  const modals = useTodoModals();

  const [pomodoroTask, setPomodoroTask] = useState<string | null>(null);

  return (
    <>
      {pomodoroTask && (
        <PomodoroOverlay
          taskTitle={pomodoroTask}
          onClose={() => setPomodoroTask(null)}
        />
      )}

      {modals.infoOpen && <PomodoListInfo onClose={modals.closeInfo} />}
      {modals.onboardingOpen && (
        <FirstPomoDoList onClose={modals.closeOnboarding} />
      )}

      <TodoNavBar
        onInfoClick={modals.openInfo}
        howToUse={modals.openOnboarding}
      />

      <styled.TodoWrapper>
        <styled.TodoContainer>
          <TodoCreateTask
            onCreate={(title) =>
              createTask({
                id: crypto.randomUUID(),
                title,
                completed: false,
                createdAt: Date.now(),
              })
            }
          />

          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onEdit={(id, title) => updateTask(id, { title })}
              onFinish={finishTask}
              onDelete={deleteTask}
              onPomodoro={(title) => setPomodoroTask(title)}
            />
          ))}
        </styled.TodoContainer>
      </styled.TodoWrapper>
    </>
  );
}
