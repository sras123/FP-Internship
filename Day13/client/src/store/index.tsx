import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../slice/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  devTools: true,
});

export default store;
