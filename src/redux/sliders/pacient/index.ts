/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { getPacient } from "./getPacient";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const pacientSlice = createSlice({
  name: "get/pacientSlider",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getPacient.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(getPacient.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = action.payload.error;
    });
    builder.addCase(getPacient.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload.error;
    });
  },
});

export const pacientReducer = pacientSlice.reducer;
