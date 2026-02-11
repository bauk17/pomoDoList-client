import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

import * as styled from "./styles";
import PomodoroOverlay from "../../components/pomodoro/PomodoroOverlay";
import { TodoNavBar } from "../../components/todoNavbar/TodoNavBar";
import { PomodoListInfo } from "../../components/info/PomoDoListInfo";
import { FirstPomoDoList } from "../../components/onboarding/OnboardingModal";
import { useTodoModals } from "../../hooks/useTodoModals";
import { TodoCreateTask } from "../../components/todoCreateTask/TodoCreateTask";
import { TodoItem } from "../../components/todoItem/TodoItem";

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
            onCreate={(title) => {
              createTask({
                id: crypto.randomUUID(),
                title,
                completed: false,
                createdAt: Date.now(),
              });
            }}
          />

          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onEdit={(id, title) => {
                updateTask(id, { title });
              }}
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
