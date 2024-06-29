import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/Cart-Slice";
import { defaultSerializeQueryArgs } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
