import { createSlice } from "@reduxjs/toolkit";

export const anotherSlice = createSlice({
  name: "counter",
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = anotherSlice.actions;

export default anotherSlice.reducer;
