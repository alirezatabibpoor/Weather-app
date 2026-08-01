import { configureStore } from "@reduxjs/toolkit";
import weatherslice from './weatherslice'
import userslice from "./userslice"
export const store = configureStore({
  reducer: {weather:weatherslice,user:userslice},
});