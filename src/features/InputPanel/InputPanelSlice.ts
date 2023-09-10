import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
    id: string;
    title: string;
}

export interface InputPanelState {
    inputValue: string;
    todoItems: TodoItem[];
}
const initialState: InputPanelState = {
    inputValue: "",
    todoItems: [],
};

export const InputPanelSlice = createSlice({
    name: "inputPanel",
    initialState,
    reducers: {
        changeInputValue(state, action: PayloadAction<TodoItem>) {
            state.inputValue = action.payload.title;
            state.todoItems = [
                ...state.todoItems,
                { id: action.payload.id, title: action.payload.title },
            ];
        },
        deletedItem(state, action: PayloadAction<any>) {
            state.todoItems = state.todoItems.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { actions: InputPanelActions } = InputPanelSlice;
export const { reducer: InputPanelReducer } = InputPanelSlice;
