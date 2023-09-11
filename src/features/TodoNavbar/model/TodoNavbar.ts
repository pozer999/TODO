import { RootState } from "app/store";

export const getInputValue = (state: RootState) => state.todoSlice.inputValue;
