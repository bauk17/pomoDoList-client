import { useEffect, useState } from "react";
import { LocalTodoRepository } from "../repositories/LocalTodoRepository";
import type { TodoRepository } from "../repositories/TodoRepository";
import type { Todo } from "../types/todo";

export function useTodos() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const repository: TodoRepository = new LocalTodoRepository();

  useEffect(() => {
    const storedTasks = repository.getAll();
    setTasks(storedTasks);
  }, []);

  function createTask(todo: Todo) {
    const updated = [...tasks, todo];
    setTasks(updated);
    repository.save(updated);
  }

  function incrementCompletedTasks() {
    const key = "completedTasksCount";
    const current = Number(localStorage.getItem(key) ?? 0);
    localStorage.setItem(key, String(current + 1));
  }

  function deleteTask(todoId: string) {
    const updated = tasks.filter((item) => item.id !== todoId);
    setTasks(updated);
    repository.save(updated);
  }

  function updateTask(id: string, data: Partial<Todo>) {
    setTasks((prev) => {
      const updated = prev.map((t) => (t.id === id ? { ...t, ...data } : t));

      repository.save(updated);
      return updated;
    });
  }

  function finishTask(todoId: string) {
    const taskToFinish = tasks.find((task) => task.id === todoId);

    if (!taskToFinish) return;

    incrementCompletedTasks();

    const updated = tasks.filter((task) => task.id !== todoId);

    setTasks(updated);
    repository.save(updated);
  }
  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
    finishTask,
  };
}
