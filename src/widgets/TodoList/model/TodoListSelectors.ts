import { RootState } from "app/store";

export const getTodoTasks = (state: RootState) => state.inputPanel.todoTasks;
