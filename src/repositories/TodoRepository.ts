import type { Todo } from "../types/todo";

export interface TodoRepository {
  getAll(): Todo[];
  save(todos: Todo[]): void;
}
