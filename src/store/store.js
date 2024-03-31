"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import editorSlice from "./slice/editorSlice";

const reducers = combineReducers({
  editor: editorSlice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
