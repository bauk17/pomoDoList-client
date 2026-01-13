import type { Todo } from "../types/todo";
import { getStorage, setStorage } from "../utils/storage";
import type { TodoRepository } from "./TodoRepository";

const STORAGE_KEY = "@todos";

export class LocalTodoRepository implements TodoRepository {
  getAll(): Todo[] {
    return getStorage<Todo[]>(STORAGE_KEY) ?? [];
  }

  save(todos: Todo[]) {
    setStorage(STORAGE_KEY, todos);
  }
}
