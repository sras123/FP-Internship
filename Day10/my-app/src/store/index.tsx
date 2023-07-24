import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import anotherSlice from "./another-slice";

const RootReducer = {
  counter: counterSlice,
  another: anotherSlice,
};
export const store = configureStore({
  reducer: RootReducer,
  devTools: true,
});
