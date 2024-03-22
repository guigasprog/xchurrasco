import { Task } from "./task.model";

export class TasksContainer {
  id: string | null = null;
  container: string | null = null;
  warning?: string;
  tasks: Array<Task> | null = null;
}
