import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    initialCount: 0,
    whoIsAdding: "",
    totalIncrements: 0,
  },
  reducers: {
    increment: (state) => {
      state.initialCount += 1;
      state.totalIncrements += 1;
    },
    incrementBy: (state, action) => {
      state.initialCount = state.initialCount + action.payload;
      state.totalIncrements += 1;
    },
  },
});

export const { increment, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
