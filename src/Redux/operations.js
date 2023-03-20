import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserInfo } from "service/service";


export const fatchBaseCurrency = createAsyncThunk('baseCurrency/fetch', 
  async (loc, thunkAPI) =>{
    try {
      const response = await getUserInfo(loc);
      console.log(response)
      console.log(response.results)
      return response.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
