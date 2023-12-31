import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITodoTask {
    id: number;
    title: string;
    checked: boolean;
}

export interface TodoSliceState {
    inputValue: string;
    todoTasks: ITodoTask[];
}
const initialState: TodoSliceState = {
    inputValue: "",
    todoTasks: [],
};

export const TodoSlice = createSlice({
    name: "todoSlice",
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<ITodoTask>) {
            state.todoTasks = [
                ...state.todoTasks,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    checked: action.payload.checked,
                },
            ];
            state.inputValue = "";
        },
        removeTask(state, action: PayloadAction<number>) {
            state.todoTasks = state.todoTasks.filter(
                (item) => item.id !== action.payload
            );
        },
        checkedTask(state, action: PayloadAction<number>) {
            state.todoTasks = state.todoTasks.map((item) => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        checked: !item.checked,
                    };
                }
                return item;
            });
        },
        changeInputValue(state, action: PayloadAction<string>) {
            state.inputValue = action.payload;
        },
    },
});

export const { actions: TodoSliceActions } = TodoSlice;
export const { reducer: TodoSliceReducer } = TodoSlice;
