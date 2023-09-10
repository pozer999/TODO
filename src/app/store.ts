import { configureStore } from '@reduxjs/toolkit'
import { InputPanelReducer } from 'features/InputPanel/InputPanelSlice';

export const store = configureStore({
  reducer: {
    inputPanel: InputPanelReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;