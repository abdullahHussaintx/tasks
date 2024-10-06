import { configureStore } from "@reduxjs/toolkit";
import task1Slice from "./task1Slice";
import task2Slice from "./task2Slice";

export const store = configureStore({
  reducer: {
    task1Slice,
    task2Slice,
  },
});
