import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./course/courseSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    course: courseReducer, 
    cart: cartReducer, 
  },
});
