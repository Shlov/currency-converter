import { configureStore } from "@reduxjs/toolkit";
import { baseCurrencyReducer } from "./currencySlice";


export const store = configureStore({
  reducer: {
    baseCurrency: baseCurrencyReducer,
  },
});