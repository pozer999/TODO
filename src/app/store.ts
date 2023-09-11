import { configureStore } from "@reduxjs/toolkit";
import { TodoSliceReducer } from "store/Todo/TodoSlice";

export const store = configureStore({
    reducer: {
        todoSlice: TodoSliceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
