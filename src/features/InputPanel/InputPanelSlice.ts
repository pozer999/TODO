import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TodoItem {
    id: string;
    title: string;
    checked: boolean;
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
            state.todoItems = [
                ...state.todoItems,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    checked: action.payload.checked,
                },
            ];
            state.inputValue = "";
        },
        deletedItem(state, action: PayloadAction<any>) {
            state.todoItems = state.todoItems.filter(
                (item) => item.id !== action.payload
            );
        },
        checkedItem(state, action: PayloadAction<any>) {
            state.todoItems = state.todoItems.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        checked: !item.checked,
                    };
                }
                return item;
            });
        },
    },
});

export const { actions: InputPanelActions } = InputPanelSlice;
export const { reducer: InputPanelReducer } = InputPanelSlice;
