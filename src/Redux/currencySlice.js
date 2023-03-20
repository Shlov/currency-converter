import { createSlice } from "@reduxjs/toolkit";
import { fatchBaseCurrency } from "./operations";

const currencyInitialState = { 

  currency: '',

};


const baseCurrencySlice = createSlice({
  name: 'baseCurrency',
  initialState: currencyInitialState,

  extraReducers:{
    // [fatchBaseCurrency.pending]: handlePending,
    [fatchBaseCurrency.fulfilled](state, action) {
      state.currency = action.payload;
    },
    // [fatchBaseCurrency.rejected]: handleRejected,
    
  },
});

export const baseCurrencyReducer = baseCurrencySlice.reducer;