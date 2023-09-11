import { RootState } from "app/store";

export const getTodoTasks = (state: RootState) => state.todoSlice.todoTasks;
