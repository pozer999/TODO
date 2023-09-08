import { RootState } from "app/store";

export const getTodoItems = (state: RootState) => state.inputPanel.todoItems;
