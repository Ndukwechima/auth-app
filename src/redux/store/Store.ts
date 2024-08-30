// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../feaures/theme/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
