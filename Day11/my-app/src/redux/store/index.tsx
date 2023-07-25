import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../slice/countriesSlice";
const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
  devTools: true,
});

export default store;
