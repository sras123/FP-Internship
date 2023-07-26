import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialData: {
    username: "",
    email: "",
    message: "",
    usertype: "",
    gender: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.initialData = action.payload;
    },
  },
});

export const { saveData } = formSlice.actions;
export default formSlice.reducer;
